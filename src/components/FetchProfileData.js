import React, { useState, useEffect } from "react";

function FetchProfileData() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState({});
	//

	useEffect(() => {
		const page_url = `https://api.linkedin.com/v2/me?oauth2_access_token=${access_token}`;

		fetch(page_url)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
					console.log(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				{items.map((item) => (
					<ul>
						<li> {item.access_token}</li>
					</ul>
				))}
			</div>
		);
	}
}

export default FetchProfileData;
