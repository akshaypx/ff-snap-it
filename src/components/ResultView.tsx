import { useAppContext } from "@/AppContext";
import ProductList from "./ProductList";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

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
            {(() => {
              const aliasGroups: Record<string, string> = {
                sofa: "sofa",
                couch: "sofa",
                // Add more if needed
              };

              // Step 1: Normalize + Group items
              const groupedItems: Record<string, string[]> = {};
              for (const item of detectedItems) {
                const normalized = item.toLowerCase();
                const group = aliasGroups[normalized] || normalized;
                if (!groupedItems[group]) groupedItems[group] = [];
                groupedItems[group].push(normalized);
              }

              // Step 2: Deduplicate mixed aliases within same group
              const finalCounts: Record<string, number> = {};
              for (const [group, items] of Object.entries(groupedItems)) {
                const itemCounts: Record<string, number> = {};
                for (const label of items) {
                  itemCounts[label] = (itemCounts[label] || 0) + 1;
                }

                const maxCount = Math.max(...Object.values(itemCounts));
                finalCounts[group] = maxCount;
              }

              // Step 3: Render badges
              return Object.entries(finalCounts).map(([item, count], index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xl px-3 py-1.5"
                >
                  {`${count} × ${item}`}
                </Badge>
              ));
            })()}
          </div>
          <div className="text-muted-foreground text-sm">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
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
