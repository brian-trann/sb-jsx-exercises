const App = () => {
	return (
		<div>
			<Person name="Brian" age={28} hobbies={[ 'cooking', 'tinkering', 'reading' ]} />
			<Person name="Jessica" age={30} hobbies={[ 'cooking', 'painting' ]} />
			<Person name="Austin" age={10} hobbies={[ 'biking' ]} />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));
