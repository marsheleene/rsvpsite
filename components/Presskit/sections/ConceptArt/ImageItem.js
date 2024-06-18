import Image from "next/image";

function ImageItem(props) {
  return (
    <a href={props.src.src} target="_blank" class="break-inside-avoid-column">
      <Image 
        className="w-full aspect-auto" 
        src={props.src} 
        alt={props.alt} 
      />
    </a>
  );
}

export default ImageItem;
