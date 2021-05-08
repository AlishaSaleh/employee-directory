import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import SearchForm from '../SearchForm';
import TableContext from "../../utils/TableContext";
import TableBody from "../TableBody";

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
                name: "Age", width: "10%",
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
        const compareFnc = (a, b) => {
            if (employees.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedEmployees = employees.filteredUsers.sort(compareFnc);

        setEmployees({
            ...employees,
            filteredUsers: sortedEmployees
        });
    };

    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = employees.people.filter(item => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setEmployees({
            ...employees,
            filteredUsers: filteredList
        });
    };

    // api call in useEffect
    useEffect(() => {
        API.getEmployees().then(res => {
            // console.log(res);
            setEmployees({
                ...employees,
                people: res.data.results,
                filteredUsers: res.data.results
            });
            // console.log(employees)
            // console.log(employees.people[0].picture.thumbnail);
        })
    }, []);

    return (
        <>
            <TableContext.Provider value={{ employees, handleSearchChange, handleSorting }}>
                <SearchForm />
                <TableBody />
            </TableContext.Provider>
        </>
    )
}

export default TableContainer;
