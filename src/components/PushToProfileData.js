function PushToProfileData() {
	//
	const accesstoken = document.getElementsByClassName("objectBox")[0].innerHTML;
	// the document location of the access token is stored in the constant access token

	const pushnewurl = `https://api.linkedin.com/v2/me?oauth2_access_token=${accesstoken}`;
	// then the accesstoken is stored in the new url

	window.location.href = pushnewurl;
	// then the page is pushed to the new url
}

export default PushToProfileData;
