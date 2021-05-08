import React from "react";

function TableItem(props) {
    return (
        <>
            <tr>
                <td><img src={props.image} alt={props.firstname} /></td>
                <td>{props.firstname} {props.lastname}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.age}</td>
            </tr>
        </>
    );
}

export default TableItem;
