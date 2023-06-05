import React, {Fragment, useEffect, useState} from 'react';
import TodoDetail from "./todoDetail";
import axios from "axios";

function TodoList(props) {
    const [todos,setTodo]= useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8088/todo").then(rp => setTodo(rp.data)).catch(error => console.log(error));
    }, [])
    return (
        <Fragment>
            <table>
                <tr>
                    <td>
                        Id của công việc
                    </td>
                    <td>
                        Mô tả công việc
                    </td>
                </tr>
                {
                    todos.map(it => (<TodoDetail todo = {it}/>))
                }
            </table>
        </Fragment>
    )
}

export default TodoList;