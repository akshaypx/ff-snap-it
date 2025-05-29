import type { Product } from "@/AppContext";

const ProductList = ({ products }: { products: Product[] }) => (
  <div className="max-w-7xl w-full flex-1 mx-auto px-4 py-12 space-y-6">
    {/* <h2 className="text-2xl font-bold">Recommended Products</h2> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-xl shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-3 font-semibold">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);
export default ProductList;
