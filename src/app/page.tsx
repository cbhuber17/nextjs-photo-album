"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };

  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="m8 8 4-4 4 4"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 4v12M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
        <CldUploadButton
          onUpload={(result: UploadResult) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="unlssvf6"
        />
      </div>

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="TBD"
        />
      )}
    </main>
  );
}
