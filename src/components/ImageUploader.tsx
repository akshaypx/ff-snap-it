import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Image as LucideImage, X } from "lucide-react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-4 rounded-2xl shadow-md">
      <CardContent className="flex flex-col items-center space-y-4">
        {!previewUrl ? (
          <>
            <label
              htmlFor="file-upload"
              className="w-full flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="text-center text-gray-500">
                <LucideImage className="mx-auto mb-2" size={32} />
                <p className="text-sm">Click or drag an image to upload</p>
              </div>
            </label>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </>
        ) : (
          <div className="relative w-full">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-auto rounded-xl border"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSelection}
              className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm hover:bg-red-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {selectedFile && (
          <div className="w-full text-center">
            <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
            {/* This is where you will replace with an upload call */}
            <Button className="mt-2 w-full" disabled>
              Save (Mock Local)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
