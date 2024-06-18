import Image from "next/image";

function ImageItem(props) {
  let className = "break-inside-avoid-column block";
  if (props.className) {
    className += " " + props.className;
  }
  return (
    <a href={props.src.src} target="_blank" className={className}>
      <Image 
        className="w-full aspect-auto" 
        src={props.src} 
        alt={props.alt} 
      />
    </a>
  );
}

export default ImageItem;
