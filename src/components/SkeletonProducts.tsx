import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProducts = () => (
  <div className="max-w-7xl w-full flex-1 mx-auto px-4 py-12 space-y-6">
    <Skeleton className="h-10 w-1/3" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="border rounded-xl p-4 space-y-4 bg-white">
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  </div>
);
export default SkeletonProducts;
