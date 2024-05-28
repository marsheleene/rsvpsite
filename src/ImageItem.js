function ImageItem(props) {
  return (
    <a href={props.src} target="_blank">
      <img class="w-full aspect-auto" src={props.src} alt={props.alt} />
    </a>
  );
}

export default ImageItem;
