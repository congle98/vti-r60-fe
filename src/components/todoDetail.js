import React, {Fragment} from 'react';

function TodoDetail(props) {
    return (
        <Fragment>
            <tr>
                <td>{props.todo.id}</td>
                <td>{props.todo.description}</td>
            </tr>
        </Fragment>
    );
}

export default TodoDetail;