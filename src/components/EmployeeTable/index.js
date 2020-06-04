import React from "react";
import {Table} from "react-bootstrap";
import "./style.css"

function EmployeeTable(props) {
    return (
        <Table>
            <thead>
                <tr> 
                    <th>Picture</th>
                    <th onClick={props.handleSort}>Name</th>
                    <th>Phone#</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    )

}

export default EmployeeTable;