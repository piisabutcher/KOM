import React from 'react';
import "./home.scss"
import HomeMenu from './Menu/HomeMenu.jsx'

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
    }
    render() {
       return(
           <div className="container">
               <div className="left"
                    style={{ width: this.state.collapsed? "80px" : "256px"}}>
                   <HomeMenu onClick={this.toggleCollapsed}/>
               </div>
               <div className="right">
                   哈哈哈哈

               </div>

           </div>

       )

    }

}
export default Home;
