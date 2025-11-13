// utility

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 200,
  color: "black",
};

type OptionalProduct = Partial<Product>;

type ReadOnlyProduct = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "mouse",
  price: "20",
};
