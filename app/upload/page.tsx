"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const Upload = () => {
    const [ publicId, setPubliceId] = useState('')
  return (
    <CldUploadWidget
      uploadPreset="m4qcnhuf"
      onUploadAdded={(resutlt, widget) => {
        console.log(resutlt)
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default Upload;
