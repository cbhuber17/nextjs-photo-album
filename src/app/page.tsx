"use client";

import Image from "next/image";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
  };

  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => setImageId(result.info.public_id)}
        uploadPreset="unlssvf6"
      />

      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Young girl ballet dancing"
        />
      )}
    </main>
  );
}
