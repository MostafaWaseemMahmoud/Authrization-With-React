import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
  return (
<button onClick={() => loginWithRedirect()}>Join App</button>
  );
};

export default Login;