import React, { createContext, useContext, useState } from "react";

export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
};

type AppContextType = {
  loading: boolean;
  products: Product[] | null;
  startFetching: () => void;
  finishFetching: (products: Product[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);

  const startFetching = () => {
    setLoading(true);
    setProducts(null);
  };

  const finishFetching = (products: Product[]) => {
    setLoading(false);
    setProducts(products);
  };

  return (
    <AppContext.Provider
      value={{ loading, products, startFetching, finishFetching }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
};
