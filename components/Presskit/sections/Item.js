function Item(props) {
  return (
    <section class="break-inside-avoid-column">
      <h1 className="font-coquette py-8 text-center text-3xl">
        {props.title}
      </h1>
      <div className="text-justify">
        {props.children}
      </div>
    </section>
  );
}

export default Item;
