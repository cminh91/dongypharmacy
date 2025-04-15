import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface MultipleImageUploadProps {
  onChange: (files: File[]) => void;
  initialImages?: string[];
}

export default function MultipleImageUpload({ onChange, initialImages = [] }: MultipleImageUploadProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>(initialImages);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Validate file types
    const validFiles = acceptedFiles.filter(file => 
      file.type.match(/\/(jpg|jpeg|png|gif)$/)
    );

    // Validate file sizes (max 5MB)
    const sizeValidFiles = validFiles.filter(file => 
      file.size <= 5 * 1024 * 1024
    );

    // Create preview URLs
    const newPreviewUrls = sizeValidFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);

    // Call parent onChange with valid files
    onChange(sizeValidFiles);
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: true
  });

  const removeImage = (index: number) => {
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    // Note: We don't modify the files array here as it's managed by the parent
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Thả ảnh vào đây...</p>
        ) : (
          <p className="text-gray-600">
            Kéo thả ảnh vào đây, hoặc click để chọn ảnh
            <br />
            <span className="text-sm text-gray-500">
              (Hỗ trợ: JPG, JPEG, PNG, GIF - Tối đa 5MB/ảnh)
            </span>
          </p>
        )}
      </div>

      {previewUrls.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 