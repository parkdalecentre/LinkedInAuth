function PushToAccessToken() {
	//
	const code = window.location.search;
	// The constant code stores the parameters search of the url
	// The parameter search contains the code and state values in the url

	const newcode = code.substring(1);
	// The first character in the string that's stored in the constant code is a '?',
	// here we remove this character and store the edited string in the constant newcode

	const client_id_key = "78hzvxuwnyy814";
	// store the client_id in a constant

	const client_secret_key = "y7vibZhLOUp4fwev";
	// store the client_secret in a constant

	const localhost = "http://localhost:3000/";
	// store the localhost in a constant

	const pushthisurl = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${client_id_key}&client_secret=${client_secret_key}&${newcode}&redirect_uri=${localhost}`;
	// the constant pushthisurl stores the url that will take the user to page where he will get the access token

	window.location.href = pushthisurl;
	// push the user to this new url page
}

export default PushToAccessToken;
