import React from "react";

import { Card } from "antd";

const { Meta } = Card;

const UserCard = ({ user }: any) => {
  console.log("cared " + JSON.stringify(user));

  return (
    <div>
      <Card hoverable style={{ width: 300 }} cover={<img alt={user.name} src={user.avatar_url} />}>
        <Meta title={user.name} description={user.bio} />
      </Card>
    </div>
  );
};

export default UserCard;
