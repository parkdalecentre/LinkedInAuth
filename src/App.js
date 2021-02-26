import "./App.css";
import LoginButton from "./components/LoginButton";
import PushToAccessToken from "./components/PushToAccessToken";
import PushToProfileData from "./components/PushToProfileData";

function App() {
	const isLoggedIn = window.location.href.indexOf("code") > -1;
	// The constant isLoggedin will check the url of the browser for the parameter code
	return (
		<div className="App">
			<div>
				<LoginButton />
			</div>
			{isLoggedIn && (
				// If the url of the browser contains the parameter code then return the below div
				<div>
					<PushToAccessToken />
					{/* push the user to the access_token page */}
					<PushToProfileData />
					{/* push the user to the profile_data page */}
				</div>
			)}
		</div>
	);
}

export default App;
