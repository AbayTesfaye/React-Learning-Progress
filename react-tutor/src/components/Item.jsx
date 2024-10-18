import DeleteIcon from "@mui/icons-material/Delete";
function Item(props) {
  return (
    <li key={props.index}>
      {props.item}{" "}
      <button onClick={() => props.deleteItem(props.index)}>
        <DeleteIcon />
      </button>
    </li>
  );
}

export default Item;
