import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";


interface Props{
    searchParams: {sortOrder: string}
}

const UserPages = async ({searchParams:{sortOrder}}:Props) => {
console.log(sortOrder)

  return (
    <>
      <h1>This is All users Pages</h1>
      <Link href={'/users/new'} className="btn btn-primary mb-4">New User</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense fallback={<p>Loading....</p>}>
        <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  );
};

export default UserPages;
