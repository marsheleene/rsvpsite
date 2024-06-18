import Image from "next/image";

function ImageItem(props) {
  let className = "break-inside-avoid-column block";
  let sizes = "(max-width: 768px) 100vw, 50vw";
  if (props.full) {
    className += " column-span-all";
    sizes = "(max-width: 768px) 50vw, 100vw";
  }
  return (
    <a href={props.src.src} target="_blank" className={className}>
      <Image 
        className="aspect-auto" 
        src={props.src} 
        sizes={sizes}
        alt={props.alt} 
        quality={100}
      />
    </a>
  );
}

export default ImageItem;
