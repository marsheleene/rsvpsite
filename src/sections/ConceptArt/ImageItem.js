function ImageItem(props) {
  return (
    <a href={props.src} target="_blank" class="break-inside-avoid-column">
      <img class="w-full aspect-auto" src={props.src} alt={props.alt} />
    </a>
  );
}

export default ImageItem;
