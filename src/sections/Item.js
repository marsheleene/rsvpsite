function Item(props) {
  return (
    <section>
      <h1 class="py-8 text-center text-2xl">
        {props.title}
      </h1>
      <div>
        {props.children}
      </div>
    </section>
  );
}

export default Item;
