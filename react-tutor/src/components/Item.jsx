function Item(props) {
  return (
    <li key={props.index}>
      {props.item}{" "}
      <button onClick={() => props.deleteItem(props.index)}>Delete</button>
    </li>
  );
}

export default Item;
