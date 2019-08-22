import React from "react";
import { Menu, Icon, Button } from "antd";
let menuList = [
    {
        key: 'photoWall',
        icon: 'desktop',
        label: '照片墙'
    },
    {
        key: 'user',
        icon: 'user',
        label: '个人信息'
    },
    {
        key: 'upload',
        icon: 'upload',
        label: '文件上传'
    },
    {
        key: 'navigation1',
        icon: 'mail',
        label: 'Navigation one',
    },
    {
        key: 'navigation2',
        icon: 'appstore',
        label: 'Navigation two',

    },

];
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
        this.props.toggleCollapsed();//向父组件通信，通知点击事件
    };

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
                    {
                        menuList.map((item) => {
                            return (
                                <Menu.Item key={item.key}
                                           onClick={() => this.props.menuSelected(item.key)}>
                                    <Icon type={item.icon}/>
                                    <span>{item.label}</span>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default HomeMenu;

