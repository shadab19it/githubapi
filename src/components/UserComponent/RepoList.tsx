import React, { FC, useState, useEffect, ReactNode } from "react";
import { onErrorMessage } from "../BaseLayout/AuthForm";
import { List, Typography, Divider } from "antd";
import Axios from "axios";

const RepoList: FC<any> = ({ repoUrl }) => {
  const [repoList, setRepoList] = useState<any>([]);
  const fetchRepoList = async (reposUrl: string) => {
    try {
      const { data } = await Axios.get(reposUrl);
      setRepoList(data);
    } catch (err) {
      onErrorMessage("something wents Wrong");
    }
  };
  useEffect(() => {
    fetchRepoList(repoUrl.repos_url);
  }, [repoUrl]);
  return (
    <div>
      <List
        size='large'
        bordered
        dataSource={repoList}
        renderItem={(item: any, i: number) => (
          <List.Item>
            {i + 1} ; {item.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default RepoList;
