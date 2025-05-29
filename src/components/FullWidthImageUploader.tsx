import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, UploadCloud, Sparkles } from "lucide-react";
import clsx from "clsx";
import { useAppContext } from "@/AppContext";

// Mocked values — replace with real API data later
const mockedProducts = [
  {
    id: "1",
    title: "Modern Sofa",
    image: "/sofa.jpg",
    price: "$899",
  },
  {
    id: "2",
    title: "Wooden Table",
    image: "/table.jpg",
    price: "$499",
  },
];

const FullWidthImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { startFetching, finishFetching } = useAppContext();

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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    startFetching();

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch("http://localhost:8000/detect", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    finishFetching(
      mockedProducts, // You can update this with actual recommended products later
      data.annotated_image, // base64 string from FastAPI
      data.detected_items // e.g., ["Sofa", "Chair"]
    );
  };

  return (
    <Card className="w-full max-w-5xl mx-auto mt-10 rounded-2xl shadow-lg border">
      <CardContent className="p-6 space-y-6">
        {!previewUrl ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={clsx(
              "w-full h-64 flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer",
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400 hover:bg-gray-800"
            )}
          >
            <UploadCloud size={40} className="text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-sm">
              Drag and drop an image, or click to select
            </p>
            <Input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="relative w-full">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full max-h-[500px] object-contain rounded-xl border"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSelection}
              className="absolute top-3 right-3 bg-gray-900 opacity-60 hover:bg-red-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {selectedFile && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
            <Button className="mt-3" onClick={handleSubmit}>
              <Sparkles />
              Find My Style
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FullWidthImageUploader;
