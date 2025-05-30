import React, { createContext, useContext, useState } from "react";

// Change Product definition only if not defined globally
export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
};

export type RecommendationGroups = {
  similar: Product[];
  completeLook: Product[];
  boughtTogether: Product[];
};

type AppContextType = {
  loading: boolean;
  products: RecommendationGroups | null;
  annotatedImage: string | null;
  detectedItems: string[];
  startFetching: () => void;
  finishFetching: (
    products: RecommendationGroups,
    image: string,
    items: string[]
  ) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<RecommendationGroups | null>(null);
  const [annotatedImage, setAnnotatedImage] = useState<string | null>(null);
  const [detectedItems, setDetectedItems] = useState<string[]>([]);

  const startFetching = () => {
    setLoading(true);
    setProducts(null);
  };

  const finishFetching = (
    products: RecommendationGroups,
    image: string,
    items: string[]
  ) => {
    setLoading(false);
    setProducts(products);
    setAnnotatedImage(image);
    setDetectedItems(items);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        products,
        annotatedImage,
        detectedItems,
        startFetching,
        finishFetching,
      }}
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
