import React from 'react';
import "./home.scss";
import HomeMenu from './menu/HomeMenu.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from "./user/User.jsx"
import PhotoWall from "./photoWall/PhotoWall.jsx";
import Upload from "./upload/Upload.jsx";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            collapsed: false
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);

    };
    toggleCollapsed(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    menuSelected(path){
        browserHistory.push(path);
        console.log("选择了" + path);
    }


    render() {
       return(
           <div className="container">
               <div className="left"
                    style={{ width: this.state.collapsed? "80px" : "256px"}}>
                   <HomeMenu toggleCollapsed={this.toggleCollapsed}
                             menuSelected={path => this.menuSelected(path)}/>
               </div>
               <div className="right">
                   <Router history={history}>
                       <Route path="/" component={User}/>
                       <Route path="/user" component={User}/>
                       <Route path="/photoWall" component={PhotoWall}/>
                       <Route path="/upload" component={Upload}/>
                   </Router>
               </div>

           </div>

       )

    }

}
export default Home;
