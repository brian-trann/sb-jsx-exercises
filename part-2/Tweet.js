const Tweet = ({ username, name, date, message }) => {
	return (
		<div>
			<p>Username: {username}</p>
			<p>Name: {name}</p>
			<p>Date: {date}</p>
			<p>Message: {message}</p>
		</div>
	);
};
