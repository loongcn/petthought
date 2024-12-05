import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = 'edge';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function proxyFetch(url: string, options: RequestInit = {}) {
  const proxyUrl = 'https://api.petmindreader.fun/proxy/gemini';
  
  const modifiedOptions = {
    ...options,
    headers: {
      ...options.headers,
      'x-target-url': url,
      'x-api-key': process.env.GEMINI_API_KEY || '',
    },
  };

  const response = await fetch(proxyUrl, modifiedOptions);
  if (!response.ok) {
    throw new Error(`Proxy request failed: ${response.status} ${response.statusText}`);
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        success: false,
        message: 'API configuration error: GEMINI_API_KEY is missing'
      }, { status: 500 });
    }
    
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file || !(file instanceof File)) {
      return NextResponse.json({
        success: false,
        message: 'Please select an image first'
      }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid file type. Please upload an image.'
      }, { status: 400 });
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json({
        success: false,
        message: 'Image is too large. Maximum file size is 5MB'
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const prompt = "You are a pet psychologist and mind-reading expert. Analyze this pet's image from a first-person perspective. Dive deep into their emotions, potential thoughts, and inner world. Interpret their body language, environment, and subtle cues. Speak as if you are the pet, sharing their most intimate and playful inner monologue. Be creative, humorous, and insightful!";

    try {
      const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent';
      const requestBody = {
        contents: [{
          parts: [
            { text: prompt },
            {
              inline_data: {
                mime_type: file.type,
                data: Buffer.from(bytes).toString('base64')
              }
            }
          ]
        }]
      };

      const response = await proxyFetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const result = await response.json();

      if (result.error) {
        if (result.error.message?.includes('rate limit exceeded')) {
          return NextResponse.json({
            success: false,
            message: 'Service is temporarily unavailable due to high demand. Please try again in a few minutes.'
          }, { status: 429 });
        }
        throw new Error(result.error.message || 'Unknown API error');
      }

      const text = result.candidates[0]?.content?.parts[0]?.text;
      if (!text) {
        throw new Error('No text generated from the model');
      }

      return NextResponse.json({
        success: true,
        interpretation: text
      });

    } catch (error) {
      return NextResponse.json({
        success: false,
        message: 'An error occurred during image analysis'
      }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'An error occurred during request processing'
    }, { status: 500 });
  }
}
