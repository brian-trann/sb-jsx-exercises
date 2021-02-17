const Person = ({ age, name, hobbies }) => {
	const vote = age >= 18 ? 'please go vote!' : 'you must be 18';
	const hobsArr = hobbies.map((hobby) => <li>{hobby}</li>);
	return (
		<div>
			<p>Learn some more information about this person.</p>
			<ul>
				<li>Name: {name.slice(0, 6)}</li>
				<li>Age: {age}</li>
				<ul>
					<b>Hobbies</b>
					{hobsArr}
				</ul>
			</ul>
			<h3>{vote}</h3>
		</div>
	);
};
