import React from "react";
import { Menu, Icon, Button } from "antd";
const { SubMenu } = Menu;

class HomeMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);

    };
    toggleCollapsed(){
        this.setState({
            collapsed: !this.state.collapsed
        });
        this.props.onClick();//向父组件通信，通知点击事件
    }
    render() {
        return(
            <div style={{width:256}}
                className="homeMenu">
                <Button type="primary"
                        onClick={this.toggleCollapsed}
                        style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed? "menu-unfold" : "menu-fold"}/>
                </Button>
                <Menu
                    defaultOpenKeys={["sub1"]}
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="inbox"/>
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail"/>
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default HomeMenu;

