import { notFound } from 'next/navigation';
import React from 'react';

interface Props{
    params:{id: number, photoid: number}
}

const PhotoDetailPage = ({params:{id, photoid}}:Props) => {

    if(id>10){
        notFound();
    }
    return (
        <div>
            <h3>Photo Details Pages  user id:{id} & photo id :{photoid}</h3>
        </div>
    );
};

export default PhotoDetailPage;