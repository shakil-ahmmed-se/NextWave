import React from 'react';

interface Props{
    params : {slug: string[]};
    searchParams : {sortOrder: string}
}

const ProductPage = ({params:{slug}, searchParams:{sortOrder}}:Props) => {
    return (
        <div>
            <h3>Product Page {slug} {sortOrder}</h3>
        </div>
    );
};

export default ProductPage;