import React from "react";
import "./style.css";
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
function Search(props) {
  return (
    <Form onSubmit={props.handleFormSubmit}>
      <Form.Control
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        placeholder="Search a name"
      />
      <Button type="submit" >Submit</Button>
    </Form>
  )

}

export default Search;
