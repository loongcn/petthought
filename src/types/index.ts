export interface AnalysisResult {
  success: boolean;
  interpretation?: string;
  error?: string;
}

export interface UploadResponse {
  success: boolean;
  message?: string;
  url?: string;
} 