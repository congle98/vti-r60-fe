import React, {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";

function Home(props) {
    return (
        <Fragment>
            <div>Đây là Home</div>
            <div>
                <nav>
                    <li>
                        <Link to="/todo">TodoList</Link>
                    </li>
                    <li>
                        <Link to="/create">CreateTodo</Link>
                    </li>
                </nav>
            </div>

            <h1>Bên trên outlet</h1>
            <Outlet/>
            <h1>Bên dưới outlet</h1>
        </Fragment>

    );
}

export default Home;