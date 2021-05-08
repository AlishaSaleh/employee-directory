import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import API from "../../utils/API";
import TableItem from "../TableItem";

function TableContainer() {
    // setting the state for the table data
    const [employees, setEmployees] = useState({
        people: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            {
                name: "Image", width: "10%",
            },
            {
                name: "Name", width: "10%",
            },
            {
                name: "Phone", width: "20%",
            },
            {
                name: "Email", width: "20%",
            },
            {
                name: "DOB", width: "10%",
            },
        ]
    });

    // function to handle ascending/descending order
    const handleSorting = heading => {
        if (employees.order === "descend") {
            setEmployees(
                {
                    order: "ascend"
                }
            )
        } else {
            setEmployees(
                {
                    order: "descend"
                }
            )
        }
    };

    // api call as useEffect
    useEffect(() => {
        API.getEmployees().then(res => {
            console.log(res);
            setEmployees({
                ...employees,
                people: res.data.results,
                filteredUsers: res.data.results
            });
            console.log(employees)
            // console.log(employees.people[0].picture.thumbnail);
        })
    }, []);

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

                    {employees.people.map(employee => (
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

export default TableContainer;
