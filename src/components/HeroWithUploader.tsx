import FullWidthImageUploader from "./FullWidthImageUploader";
import { Button } from "@/components/ui/button";

const HeroWithUploader = () => {
  return (
    <div className="w-full max-w-7xl h-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight">
          Find Furniture That Matches Your Space
        </h1>
        <p className="text-muted-foreground text-lg">
          Upload a photo of your room and get personalized furniture
          recommendations based on what's in it. Powered by smart object
          detection.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Explore Products</Button>
          <Button variant="ghost" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right Upload Section */}
      <div className="w-full">
        <FullWidthImageUploader />
      </div>
    </div>
  );
};

export default HeroWithUploader;
