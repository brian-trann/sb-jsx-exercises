const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="Brian" />
	</div>
);
ReactDOM.render(<App />, document.getElementById('root'));
