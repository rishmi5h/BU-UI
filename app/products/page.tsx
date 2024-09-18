import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 1999,
    gender: "Unisex" as const,
    size: ["S", "M", "L"],
    type: "Top",
    imageFront: "/images/tshirt-front.webp",
    imageBack: "/images/tshirt-back.webp",
  },
  {
    id: 2,
    name: "Jeans",
    price: 3999,
    gender: "Men" as const,
    size: ["30", "32", "34"],
    type: "Bottom",
    imageFront: "/images/jeans-front.webp",
    imageBack: "/images/jeans-back.webp",
  },
  {
    id: 3,
    name: "Dress",
    price: 5999,
    gender: "Women" as const,
    size: ["S", "M", "L"],
    type: "Dress",
    imageFront: "/images/dress-front.webp",
    imageBack: "/images/dress-back.webp",
  },
  {
    id: 4,
    name: "Sweater",
    price: 3499,
    gender: "Unisex" as const,
    size: ["M", "L", "XL"],
    type: "Top",
    imageFront: "/images/sweater-front.webp",
    imageBack: "/images/sweater-back.webp",
  },
  {
    id: 5,
    name: "Jacket",
    price: 6999,
    gender: "Unisex" as const,
    size: ["S", "M", "L", "XL"],
    type: "Outerwear",
    imageFront: "/images/jacket-front.webp",
    imageBack: "/images/jacket-back.webp",
  },
  {
    id: 6,
    name: "Sweatshirt",
    price: 2999,
    gender: "Unisex" as const,
    size: ["S", "M", "L", "XL"],
    type: "Top",
    imageFront: "/images/sweatshirt-front.webp",
    imageBack: "/images/sweatshirt-back.webp",
  },
];

export default function ProductsPage() {
  return <ProductList initialProducts={products} />;
}
