"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface cloudinaryResult {
  public_id: string
}

const Upload = () => {
  const [ publicId, setPubliceId] = useState('')
  return (
    <>
    {
      publicId && (
        <CldImage src={publicId} width={300} height={200} alt="Cloudinary  Image"></CldImage>
      )
    }
    <CldUploadWidget
      uploadPreset="m4qcnhuf"
      onSuccess={(resutlt, {widget}) => {
        if(resutlt.event !== 'success') return;
        const info = resutlt.info as cloudinaryResult
        setPubliceId(info.public_id)
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>

    </>
  );
};

export default Upload;
