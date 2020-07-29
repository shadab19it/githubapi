import React, { FC } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Store } from "antd/lib/form/interface";

interface AuthForm {
  onHandleChange: (value: Store) => void;
  formName: string;
  value?: Store;
}

export const onErrorMessage = (e: string) => {
  notification.error({
    message: "Auth Error",
    description: e,
  });
};
export const onSuccessMessage = () => {
  notification.success({
    message: "Login Successful",
  });
};
const AuthForm: FC<AuthForm> = ({ formName, onHandleChange }) => {
  return (
    <div>
      <h1 className='form-header'>{formName}</h1>
      <Form name='normal_login' className='login-form box-shadow' initialValues={{ remember: true }} onFinish={onHandleChange}>
        <Form.Item name='username' rules={[{ required: true, message: "Please input your Username!" }]}>
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            {formName}
          </Button>
          <br />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
