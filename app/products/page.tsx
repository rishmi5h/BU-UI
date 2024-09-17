import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 1999,
    gender: "Unisex" as const,
    size: ["S", "M", "L"],
    type: "Top",
    imageFront: "/images/tshirt-front.jpg",
    imageBack: "/images/tshirt-back.jpg",
  },
  {
    id: 2,
    name: "Jeans",
    price: 3999,
    gender: "Men" as const,
    size: ["30", "32", "34"],
    type: "Bottom",
    imageFront: "/images/jeans-front.jpg",
    imageBack: "/images/jeans-back.jpg",
  },
  {
    id: 3,
    name: "Dress",
    price: 5999,
    gender: "Women" as const,
    size: ["S", "M", "L"],
    type: "Dress",
    imageFront: "/images/dress-front.jpg",
    imageBack: "/images/dress-back.jpg",
  },
  {
    id: 4,
    name: "Sweater",
    price: 3499,
    gender: "Unisex" as const,
    size: ["M", "L", "XL"],
    type: "Top",
    imageFront: "/images/sweater-front.jpg",
    imageBack: "/images/sweater-back.jpg",
  },
  {
    id: 5,
    name: "Jacket",
    price: 6999,
    gender: "Unisex" as const,
    size: ["S", "M", "L", "XL"],
    type: "Outerwear",
    imageFront: "/images/jacket-front.jpg",
    imageBack: "/images/jacket-back.jpg",
  },
  {
    id: 6,
    name: "Sweatshirt",
    price: 2999,
    gender: "Unisex" as const,
    size: ["S", "M", "L", "XL"],
    type: "Top",
    imageFront: "/images/sweatshirt-front.jpg",
    imageBack: "/images/sweatshirt-back.jpg",
  },
];

export default function ProductsPage() {
  return <ProductList initialProducts={products} />;
}
