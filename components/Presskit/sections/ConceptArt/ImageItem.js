import Image from "next/image";
import Link from "next/link";

function ImageItem(props) {
  let className = "break-inside-avoid-column block";
  let sizes = "(max-width: 768px) 100vw, 50vw";
  if (props.full) {
    className += " column-span-all";
    sizes = "(max-width: 768px) 50vw, 100vw";
  }
  return (
    <Link 
      href={props.src.src} 
      target="_blank" 
      className={className}
    >
      <Image 
        src={props.display} 
        sizes={sizes}
        alt={props.alt} 
        quality={100}
      />
    </Link>
  );
}

export default ImageItem;
