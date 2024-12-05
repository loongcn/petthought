import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface ImageUploaderProps {
  onAnalysisComplete: (result: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onAnalysisComplete }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (!file) {
      setUploadError('Please select a file');
      return false;
    }

    if (file.size > maxSize) {
      setUploadError('File is too large. Maximum size is 5MB');
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      setUploadError('Invalid file type. Please upload a valid image file');
      return false;
    }

    setUploadError(null);
    return true;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadAndAnalyze = async () => {
    if (!selectedFile) {
      setUploadError('Please select an image first');
      return;
    }

    setIsLoading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('/api/analyze-pet-thought', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        },
        transformRequest: [function (data) {
          return data;
        }],
        responseType: 'json'
      });

      const result = response.data;

      if (result.success) {
        onAnalysisComplete(result.interpretation);
      } else {
        onAnalysisComplete(result.message || 'An error occurred during analysis');
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        const errorMessage = 'Service is temporarily unavailable due to high demand. Please try again in a few minutes.';
        onAnalysisComplete(errorMessage);
        return;
      }

      const errorMessage = error.response?.data?.message || 'An error occurred during analysis';
      onAnalysisComplete(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-full mx-auto">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        className="hidden"
        id="pet-thought-file-input"
      />
      <label 
        htmlFor="pet-thought-file-input" 
        className="block w-full cursor-pointer bg-amber-500 text-white px-2 py-2 rounded text-center hover:bg-amber-600 transition"
      >
        Select Image
      </label>

      {uploadError && (
        <div className="mt-2 text-red-500 text-sm text-center">
          {uploadError}
        </div>
      )}

      {previewUrl && (
        <div className="mt-4 w-full">
          <div className="w-full aspect-square relative">
            <Image 
              src={previewUrl} 
              alt="Preview" 
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <button 
            onClick={handleUploadAndAnalyze}
            disabled={isLoading}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition disabled:opacity-50"
          >
            {isLoading ? 'Analyzing...' : 'Analyze Pet Thoughts'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
