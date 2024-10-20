import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
export default async function Home() {

  const session = await getServerSession(authOption)
  return (
    <main>
      <h1>Hello {session?.user?.name}. Welcome to NextWave</h1>
      <Link className="text-2xl" href={'users'}>Users</Link>
      <ProductCard/>
    </main>
  );
}
