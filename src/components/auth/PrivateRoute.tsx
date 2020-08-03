import React, { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./index";
import { userContext } from "../../Context/Context";

const PrivateRoute: FC<{ component: any; exact: boolean; path: string }> = ({ component: Component, ...rest }) => {
  const context = useContext(userContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        context.user?.uid ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
