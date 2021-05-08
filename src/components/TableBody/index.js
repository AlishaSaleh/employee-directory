import React, { useContext } from "react";
import TableContext from "../../utils/TableContext";
import TableItem from "../TableItem";
import { Table } from "react-bootstrap";


function TableBody() {
    const context = useContext(TableContext);
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>

                    {context.employees.filteredUsers.map(employee => (
                        <TableItem
                            image={employee.picture.thumbnail}
                            firstname={employee.name.first}
                            lastname={employee.name.last}
                            phone={employee.cell}
                            email={employee.email}
                            age={employee.dob.age} />
                    ))}
                    {/* <td><img src={employees.people[0].picture.thumbnail} alt={employees.people[0].name.first}/></td>
                        <td>{employees.people[0].name.first} {employees.people[0].name.last}</td>
                        <td>{employees.people[0].cell}</td>
                        <td>{employees.people[0].email}</td>
                        <td>{employees.people[0].dob.age}</td> */}

                </tbody>
            </Table>
        </>
    )
}

export default TableBody;
