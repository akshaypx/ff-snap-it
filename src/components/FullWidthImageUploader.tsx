import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, UploadCloud, Sparkles } from "lucide-react";
import clsx from "clsx";
import { useAppContext } from "@/AppContext";

// Mocked values — replace with real API data later
const mockedRecommendations = {
  similar: [
    {
      id: "1",
      title: "Drake 2 Seater Sofa",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-null?context=bWFzdGVyfGltYWdlc3wxOTEyOTJ8aW1hZ2UvanBlZ3xhRFpoTDJnNE9DOHhNREUzT0RZNU1UTXpOREUzTkM5UWNtOWtkV04wTFVSbGRHRnBiQzFUY0dGeWRHRmpkWE5mUm1GdWRHRnpkR2xqUm5WeWJtbDBkWEpsTFZkR1gyNTFiR3d8YmU2ODcwMDdmYWYyN2U1N2I0MTU1ZTAwMzI3YWIzYjEyNTZiMjI1NGVjMDVlZmZkNzk3YmIyN2Y5YzE1ZTNhOA",
      price: "$539",
    },
    {
      id: "2",
      title: "Jazz 2 Seater Sofa",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-null?context=bWFzdGVyfGltYWdlc3wyMDQwMTd8aW1hZ2UvanBlZ3xhRFkxTDJoa01DOHhNREk1TmpnMk16ZzRNekk1TkM5UWNtOWtkV04wTFVSbGRHRnBiQzFUY0dGeWRHRmpkWE5mUm1GdWRHRnpkR2xqUm5WeWJtbDBkWEpsTFZkR1gyNTFiR3d8NDIxMDBlOTViMWJhYjY5Yzk3Y2ZkOTlmM2YzZTY1MDNkNTZlZjgxMTYxZTU2Zjk2ODI1ZjI4NDFiYmU0Yzg1ZA",
      price: "$629",
    },
    {
      id: "3",
      title: "Peyton Cognac Sofa",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-null?context=bWFzdGVyfGltYWdlc3wxMjU3NTZ8aW1hZ2UvanBlZ3xhR1V6TDJoa1lpOHhNREV3TWpVeU5qWTBNREUxT0M5UWNtOWtkV04wTFVSbGRHRnBiQzFUY0dGeWRHRmpkWE5mUm1GdWRHRnpkR2xqUm5WeWJtbDBkWEpsTFZkR1gyNTFiR3d8ZmY0ODZiMGU0ZGIxZmJhZDYzN2ZmOTg4YzAyMTQ1ZDI5ZWYyMzcwOGE3MjE0ZTgyNjMwODYyNjIxMzEzNTg4Ng",
      price: "$539",
    },
  ],
  completeLook: [
    {
      id: "3",
      title: "Toronto Coffee Table",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-8969101803550.jpg?context=bWFzdGVyfGltYWdlc3w0MzMxNTF8aW1hZ2UvanBlZ3xhREZqTDJobVppODVPVGs0TnpjNE1qWTVOekkyTDFCeWIyUjFZM1F0UkdWMFlXbHNMVk53WVhKMFlXTjFjMTlHWVc1MFlYTjBhV05HZFhKdWFYUjFjbVV0VjBaZk9EazJPVEV3TVRnd016VTFNQzVxY0djfDhkMjM1NDMyZTA2MGNhNmEwNmNkNTlmZTBlOTZjMjNmNDIwYmY5ZmUxZTcyNmYwZjJiM2FjMmI0N2RhMGJkMmY",
      price: "$339",
    },
    {
      id: "4",
      title: "Niva Coffee Table",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-NIVCTBRECOOOFOIOAK-LIF-CONTAINER-original-FantasticFurniture-WF?context=bWFzdGVyfGltYWdlc3w4NjMzMHxpbWFnZS9qcGVnfGFHRXhMMmd5TkM4NU9UazVOREkxTXpBMk5qVTBMMUJ5YjJSMVkzUXRSR1YwWVdsc0xWTndZWEowWVdOMWMxOU9TVlpEVkVKU1JVTlBUMDlHVDBsUFFVdGZURWxHWDBOUFRsUkJTVTVGVWw5dmNtbG5hVzVoYkY5R1lXNTBZWE4wYVdOR2RYSnVhWFIxY21VdFYwWXwwYzIwNjY4MDQyYWZmYzg0ZTkyMDM1ZmJkNzc0Yzk4NjY4ZTk3ZDdkYTBhOTA5MjM1Y2YwZTNmZDBjNTUxOGQx",
      price: "$149",
    },
    {
      id: "5",
      title: "Dice Coffee Table Set",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-null?context=bWFzdGVyfGltYWdlc3wxNjU2NzJ8aW1hZ2UvanBlZ3xhRFkxTDJnM055OHhNRFF3TXpZME5URTVOREkzTUM5UWNtOWtkV04wTFVSbGRHRnBiQzFUY0dGeWRHRmpkWE5mUm1GdWRHRnpkR2xqUm5WeWJtbDBkWEpsTFZkR1gyNTFiR3d8ZTcwZTgzZmMyYTYzZTU4ZGI1ZjdhYzEwNWVjM2MyY2NiYWZkYTY4Y2U0OTBjZWYyYmExNDJjNjg1ODQwODIwYg",
      price: "$269",
    },
  ],
  boughtTogether: [
    {
      id: "6",
      title: "Werribee 1 Seater Armchair",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-WRQCHA1STOOOTPYDBL-LIF-CONTAINER-original-FantasticFurniture-WF?context=bWFzdGVyfGltYWdlc3wxNTMxOTV8aW1hZ2UvanBlZ3xhREl6TDJnd09TOHhNREF5T1RjNU9UTTBNakV4TUM5UWNtOWtkV04wTFVSbGRHRnBiQzFUY0dGeWRHRmpkWE5mVjFKUlEwaEJNVk5VVDA5UFZGQlpSRUpNWDB4SlJsOURUMDVVUVVsT1JWSmZiM0pwWjJsdVlXeGZSbUZ1ZEdGemRHbGpSblZ5Ym1sMGRYSmxMVmRHfDIzNzE4M2IzOTY1Mjg1NDQyMTE3YjdjMTEzMDIyMzUzZjE1MDY3Y2U2YTUyMGYyZWEyMzRlYzZjNzZjMjk0YjY",
      price: "$259",
    },
    {
      id: "7",
      title: "Uzzi Rug",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-FantasticFurniture-WF-null?context=bWFzdGVyfGltYWdlc3w1OTUwMXxpbWFnZS9qcGVnfGFESmlMMmhqTXk4eE1EVXpPVEU0TWpJNU16QXlNaTlRY205a2RXTjBMVVJsZEdGcGJDMVRjR0Z5ZEdGamRYTmZSbUZ1ZEdGemRHbGpSblZ5Ym1sMGRYSmxMVmRHWDI1MWJHd3xiZjczNzlmZjM2NTIzNjMyNmI0MmFhM2Y3NTFjODlmY2M0MDY0MDcwY2NjODFlZmIwMTgwZDI0ZmM4MTg5YjI3",
      price: "$299",
    },
    {
      id: "8",
      title: "Sunbury Floor Lamp",
      image:
        "https://api.fantasticfurniture.com.au/medias/Product-Detail-Spartacus-SBULIGLGEOOOSTEBLK-LIF-CONTAINER-original-FantasticFurniture-WF?context=bWFzdGVyfGltYWdlc3w0ODk0M3xpbWFnZS9qcGVnfGFEVmlMMmcxTlM4eE1EQXlOamc1TURJNU56TTNOQzlRY205a2RXTjBMVVJsZEdGcGJDMVRjR0Z5ZEdGamRYTmZVMEpWVEVsSFRFZEZUMDlQVTFSRlFreExYMHhKUmw5RFQwNVVRVWxPUlZKZmIzSnBaMmx1WVd4ZlJtRnVkR0Z6ZEdsalJuVnlibWwwZFhKbExWZEd8NDIxYTE2NDRlNWI5OTg2NDRlYTQ0NDViMjg5NTUxMjlmZmY2MTI4YTBhMjRkMzEwZTI2NjI2NjQ0ZmQwMjA1Nw",
      price: "$69",
    },
  ],
};

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
      mockedRecommendations, // You can update this with actual recommended products later
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
