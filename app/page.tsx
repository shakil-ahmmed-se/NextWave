import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <main>
      <h1>Welcome to home pages</h1>
      <Link className="text-2xl" href={'users'}>Users</Link>
      <ProductCard/>
    </main>
  );
}
