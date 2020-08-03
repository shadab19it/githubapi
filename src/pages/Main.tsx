import React, { FC, useState, useEffect } from "react";
import "./Main.scss";
import { Layout, Menu, Breadcrumb, Input, Row, Col, Spin, Space } from "antd";
import Axios from "axios";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { onSuccessMessage, onErrorMessage } from "../components/BaseLayout/AuthForm";
import UserCard from "../components/UserComponent/UserCard";
import RepoList from "../components/UserComponent/RepoList";
import { SearchOutlined } from "@ant-design/icons/lib/icons";
const { Search } = Input;

interface IState {
  userName: string;
  loading: boolean;
}

const Main: FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (value: string) => {
    setLoading(true);
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${value}`);
      setUserData(data);
      setLoading(false);
    } catch (err) {
      onErrorMessage("user Not able to locate ");
    }
  };

  console.log(userData);

  return (
    <BaseLayout>
      <div className='github-page'>
        <div className='search-wrapper'>
          <Search
            placeholder='type your github username'
            prefix={<SearchOutlined />}
            size='large'
            onSearch={fetchUser}
            enterButton='Search'
          />
        </div>
        <div className='user-wrapper'>
          {loading ? (
            <Space size='middle'>
              <Spin size='large' />
            </Space>
          ) : (
            <div></div>
          )}
          {userData ? (
            <Row>
              <Col span={8}>
                <h3>User Profile</h3>
                <UserCard user={userData} />
              </Col>
              <Col span={16}>
                <h3>Repo List</h3>
                <RepoList repoUrl={userData} />
              </Col>
            </Row>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Main;
