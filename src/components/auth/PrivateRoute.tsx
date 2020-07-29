import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./index";

const PrivateRoute: FC<{ component: any; exact: boolean; path: string }> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate() ? (
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
