import React, {Fragment, useState} from 'react';
import axios from "axios";

function TodoCreateForm(props) {
    const [todo,setTodo] = useState();

    const create = () => {
      axios.post("http://localhost:8088/todo", todo).then(rp => alert(rp.data)).catch(error => alert(error))
    }
    return (
        <Fragment>
            <div>Đây là form tạo mới todo</div>
            <input type="text" onChange={(input) =>
                setTodo({description:input.target.value})}/>
            <button onClick={create}>Nhấn vào đây để thêm mới</button>
        </Fragment>

    );
}

export default TodoCreateForm;