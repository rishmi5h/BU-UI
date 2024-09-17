import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 1999,
    gender: "Unisex" as const,
    size: ["S", "M", "L"],
    type: "Top",
  },
  {
    id: 2,
    name: "Jeans",
    price: 3999,
    gender: "Men" as const,
    size: ["30", "32", "34"],
    type: "Bottom",
  },
  {
    id: 3,
    name: "Dress",
    price: 5999,
    gender: "Women" as const,
    size: ["S", "M", "L"],
    type: "Dress",
  },
  {
    id: 4,
    name: "Sweater",
    price: 3499,
    gender: "Unisex" as const,
    size: ["M", "L", "XL"],
    type: "Top",
  },
  {
    id: 5,
    name: "Jacket",
    price: 6999,
    gender: "Unisex" as const,
    size: ["S", "M", "L", "XL"],
    type: "Outerwear",
  },
  {
    id: 6,
    name: "Skirt",
    price: 2999,
    gender: "Women" as const,
    size: ["S", "M", "L"],
    type: "Bottom",
  },
];

export default function ProductsPage() {
  return <ProductList initialProducts={products} />;
}
