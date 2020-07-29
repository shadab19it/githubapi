import React, { FC, useContext } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Redirect } from "react-router-dom";
import { userContext } from "../../Context/Context";
import "./BaseLayout.scss";
import { isSignOut, isAuthenticate } from "../auth";
import { UserOutlined } from "@ant-design/icons/lib/icons";
const { Header, Content, Footer } = Layout;

const BaseLayout: FC<{ children: React.ReactNode; selectMenu?: string }> = ({ children, selectMenu }) => {
  const context = useContext(userContext);
  const { user, setUser } = context;
  let username = user ? user.email.split("@") : "";
  return (
    <div className='main-wrapper'>
      <Layout className='layout'>
        <Header className='header-wrapper'>
          <div className='username'>
            <div className='icon'>
              <UserOutlined />
            </div>
            <h3 style={{ textTransform: "capitalize", margin: "0" }}>{username[0]}</h3>
          </div>
          {user ? (
            <Menu mode='horizontal' style={{ float: "right", background: "none" }}>
              <Menu.Item key='1'>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key='4' onClick={isSignOut}>
                SignOut
              </Menu.Item>
            </Menu>
          ) : (
            <Menu mode='horizontal' style={{ float: "right", background: "none" }}>
              <Menu.Item key='2'>
                <Link to='/signin'>SignIn</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to='/signup'>SignUp</Link>
              </Menu.Item>
            </Menu>
          )}
        </Header>
        <Content style={{ minHeight: "calc(100vh - 64px)", padding: "0 50px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default BaseLayout;
