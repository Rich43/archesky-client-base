import React, { FunctionComponent } from 'react';

export const Base: FunctionComponent = (children) => {
  return (
        <KeycloakProvider keycloak={keycloak}>
          <ConfigureEnvironment />
          <BrowserRouter>
            { children }
            <Switch>
              {/* TODO fix me */}
              {/*<Route path={LOGIN} component={Login}/>*/}
              {/*<Route path={HOME} component={Home}/>*/}
            </Switch>
          </BrowserRouter>
        </KeycloakProvider>
  );
};
