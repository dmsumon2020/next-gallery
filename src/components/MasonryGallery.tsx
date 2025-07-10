"use client";

import Image from "next/image";
import images from "../data/images";

import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  768: 1,
};

export default function MasonryGallery() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4"
      columnClassName="bg-clip-padding"
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="mb-4 overflow-hidden rounded shadow-md relative w-full h-auto"
        >
          <Image
            src={src}
            alt={`Image ${idx}`}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            className="rounded"
          />
        </div>
      ))}
    </Masonry>
  );
}
