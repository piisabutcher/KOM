import React from "react";
import Login from "../component/Login/login.jsx"
import { Button } from "antd";

export default class App extends React.Component{
    render() {
        return(
            <div className="App">
                <h1>Hello React</h1>
                <Login/>
                <Button type="primary">primary</Button>


            </div>
        )
    }
}
