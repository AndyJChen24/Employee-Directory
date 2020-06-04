import React from "react";
import "./style.css"
function Row(props) {
  return (
    <tr className="tr">
      <td><img src={props.picture} alt="profilePic"/></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  )
}

export default Row;
