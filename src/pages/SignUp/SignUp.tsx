/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useState, useContext } from "react";
import "./SignUp.scss";
import { Store } from "antd/lib/form/interface";
import { userContext } from "../../Context/Context";
import { Redirect } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import firebase from "firebase/app";
import { setUsetInCocke } from "../../components/auth";
import AuthForm, { onErrorMessage } from "../../components/BaseLayout/AuthForm";

const SignUp: FC = () => {
  const context = useContext(userContext);
  const onSignUp = (values: Store) => {
    const { username, password } = values;
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((res) => {
        setUsetInCocke({ email: username, uid: res.user?.uid });
      })
      .catch((error) => {
        onErrorMessage(error.message);
      });
  };
  if (context.user?.uid) {
    return <Redirect to='/' />;
  }
  return (
    <BaseLayout selectMenu='3'>
      <div className='signup-wrapper'>
        <AuthForm formName='SignUp' onHandleChange={onSignUp} />
      </div>
    </BaseLayout>
  );
};

export default SignUp;
