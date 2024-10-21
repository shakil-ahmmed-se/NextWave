
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import banner from "./assets/banner.jpg"
import banner2 from "./assets/banner-2.jpg"
// import HeavyComponent from "./components/HeavyComponent";
// import { useState } from "react";


export default async function Home() {
  // const [ isVisible, setVisible] = useState(false)


  const session = await getServerSession(authOption)
  return (
    <main>
      <h1>Hello {session?.user?.name}. Welcome to NextWave</h1>
      <Link className="text-2xl" href={'users'}>Users</Link>
      <ProductCard/>
      {/* <button onClick={()=> setVisible(true)}>Show</button>
      { isVisible && <HeavyComponent/>} */}
      <Image sizes="100vw" className=" object-cover" src={banner}  alt="Banner Image" quality={100} />
      <Image sizes="100vw" className=" object-cover" src={banner2}  alt="Banner Image" 
      quality={100}
      
      />
    </main>
  );
}
