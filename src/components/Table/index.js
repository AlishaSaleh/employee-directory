import React from "react";
import { Table } from "react-bootstrap";

function TableContainer() {
   
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>90230324</td>
                        <td>mark@mdo.com</td>
                        <td>01/01/1980</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableContainer;
