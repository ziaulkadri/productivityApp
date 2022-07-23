import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isLoading, error } = useAuth0();

	return (
		<main className="column">
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading...</p>}
			{!error && !isLoading && (
				<>
					<LoginButton />
					<TodoList />
				</>
			)}
		</main>
	);
}

export default App;
