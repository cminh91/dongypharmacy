'use client';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { apiFetch } from '@/utils/api';

interface SingleImageUploadProps {
  onChange: (file: File | null) => void;
  initialImage?: string;
}

export default function SingleImageUpload({ onChange, initialImage }: SingleImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialImage || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/\/(jpg|jpeg|png|gif)$/)) {
      setError('Chỉ chấp nhận file ảnh (JPG, JPEG, PNG, GIF)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File ảnh không được vượt quá 5MB');
      return;
    }

    try {
      setUploading(true);
      setError(null);

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);

      // Call parent's onChange with the file
      onChange(file);

      // Cleanup preview URL
      URL.revokeObjectURL(previewUrl);
    } catch (err) {
      console.error('Error handling image:', err);
      setError('Có lỗi xảy ra khi xử lý ảnh');
      setPreviewUrl(null);
      onChange(null);
    } finally {
      setUploading(false);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  const handleRemove = () => {
    setPreviewUrl(null);
    onChange(null);
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-2 text-sm text-red-600">
          {error}
        </div>
      )}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} disabled={uploading} />
        {previewUrl ? (
          <div className="relative">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-48 mx-auto rounded-lg"
            />
            {!uploading && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        ) : (
          <div className="text-gray-500">
            {uploading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="mt-2">Đang xử lý...</p>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2">
                  {isDragActive
                    ? 'Thả ảnh vào đây...'
                    : 'Kéo thả ảnh vào đây, hoặc click để chọn ảnh'}
                </p>
                <p className="text-xs mt-1">JPG, PNG, GIF (tối đa 5MB)</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 