import { useAuth0 } from '@auth0/auth0-react';

import React from 'react';
import './TodoList.css';

function LoginButton() {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		!isAuthenticated && (
			<div className="login">
				<h1>Productivity App</h1>
				<button
					className="button"
					onClick={() =>
						loginWithRedirect()
					}
				>
					Sign in
				</button>
			</div>
		)
	);
}

export default LoginButton;
