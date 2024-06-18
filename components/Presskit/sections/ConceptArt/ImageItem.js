import Image from "next/image";
import Link from "next/link";

function ImageItem(props) {
  let className = "break-inside-avoid-column block";
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
        className="m-auto"
      />
    </Link>
  );
}

export default ImageItem;
