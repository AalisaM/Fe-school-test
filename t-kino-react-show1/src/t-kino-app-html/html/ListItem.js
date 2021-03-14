import { React } from "react";
import { Link } from "react-router-dom";

function ListItemComponent(props) {
  return (
    <Link to={`/shop/${props.id}`}>
      <img src={props.item.images.icon} alt="" />
      <h1>{props.item.name}</h1>
      <p>{props.item.description}</p>
    </Link>
  );
}

export default ListItemComponent;
