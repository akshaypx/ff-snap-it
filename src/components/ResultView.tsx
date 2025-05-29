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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Annotated Image */}
        <Card className="overflow-hidden shadow-md">
          <CardContent className="px-4">
            <img
              src={annotatedImage}
              alt="Annotated"
              className="w-full h-full object-contain rounded-2xl"
            />
          </CardContent>
        </Card>

        {/* Detected Items */}
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold">We found these items</h2>
          <div className="flex flex-wrap gap-2">
            {detectedItems.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xl px-3 py-1.5"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      {products && (
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Similar Products</h3>
            <ProductList products={products.similar} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Complete the Look</h3>
            <ProductList products={products.completeLook} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Often Bought Together
            </h3>
            <ProductList products={products.boughtTogether} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultView;
