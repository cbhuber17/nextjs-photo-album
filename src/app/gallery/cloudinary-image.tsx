"use client";

// Put in its own file to "use client" above rather than server
// Otherwise it won't work

import { CldImage } from "next-cloudinary";

export function CloudinaryImage(props: any) {
  return <CldImage {...props} />;
}
