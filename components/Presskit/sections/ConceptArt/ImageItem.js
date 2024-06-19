import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ImageItem(props) {
  let className = "break-inside-avoid-column block cursor-pointer";
  let sizes = "(max-width: 768px) 100vw, 50vw";
  if (!props.large) {
    className += " max-w-4xl";
  }
  if (props.center) {
    className += " column-span-all";
  }
  if (props.className) {
    className += " " + props.className;
  }

  return (
    <a 
      href={props.src.src}
      className={className}
      download={props.name}
    >
      <Image 
        src={props.display} 
        sizes={sizes}
        alt={props.alt} 
        quality={100}
        className="mx-auto"
        priority={props.large}
      />
    </a>
  );
}

export default ImageItem;
