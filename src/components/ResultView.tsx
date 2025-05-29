import { useAppContext } from "@/AppContext";
import ProductList from "./ProductList";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResultView = () => {
  const { annotatedImage, detectedItems, products } = useAppContext();

  if (!annotatedImage || !detectedItems.length) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Something went wrong. No objects were detected.
      </div>
    );
  }

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-12 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Annotated Image */}
        <Card className="overflow-hidden shadow-md">
          <CardContent className="p-0">
            <img
              src={annotatedImage}
              alt="Annotated"
              className="w-20 h-80 object-contain"
            />
          </CardContent>
        </Card>

        {/* Detected Items */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">We found these items</h2>
          <div className="flex flex-wrap gap-2">
            {detectedItems.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base px-3 py-1.5"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default ResultView;
