function Item(props) {
  return (
    <section class="break-inside-avoid-column">
      <h1 class="py-8 text-center text-2xl font-semibold">
        {props.title}
      </h1>
      <div>
        {props.children}
      </div>
    </section>
  );
}

export default Item;
