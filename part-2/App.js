const App = () => {
	return (
		<div>
			<Tweet username="u1" name="user1" date="02-17-21" message="hello" />
			<Tweet username="u2" name="user2" date="02-14-21" message="goodbye" />
			<Tweet username="u3" name="user3" date="02-13-21" message="hi" />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));
