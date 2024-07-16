import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <ProductCard product={{
          image: "/jordan1.jpg",
          name: "Air Jordan 1",
          price: 1,
        }} 
      />
    </>
  )
}
