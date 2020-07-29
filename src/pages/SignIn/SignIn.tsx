/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useState, useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.scss";
import { Store } from "antd/lib/form/interface";
import { userContext } from "../../Context/Context";
import { Redirect } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import { setUsetInCocke, isAuthenticate } from "../../components/auth/index";
import firebase from "firebase/app";
import AuthForm, { onErrorMessage, onSuccessMessage } from "../../components/BaseLayout/AuthForm";

const SignIn: FC = () => {
  const user = isAuthenticate();
  const onSignin = (values: Store) => {
    const { username, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((res) => {
        setUsetInCocke({ email: username, uid: res.user?.uid });
        onSuccessMessage();
      })
      .catch((e) => {
        onErrorMessage(e.message);
      });
  };

  if (isAuthenticate()) {
    return <Redirect to='/' />;
  }

  return (
    <BaseLayout selectMenu='2'>
      <div className='signin-wrapper'>
        <AuthForm formName='SignIn' onHandleChange={onSignin} />
      </div>
    </BaseLayout>
  );
};

export default SignIn;
