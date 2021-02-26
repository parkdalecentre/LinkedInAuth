import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

// Imports

export const StyledButton = styled(Button)({
	display: "inline-block",
	borderRadius: "3px",
	padding: "1rem",
	margin: "0.5rem 1rem",
	width: "11rem",
	background: "blue",
	color: "white",
	border: "2px solid black",
	margin: "2rem",
	textDecoration: "none"
});

const authURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78hzvxuwnyy814&scope=r_liteprofile&state=666666&redirect_uri=http://localhost:3000/`;

function LoginButton() {
	//
	return (
		<div>
			<StyledButton>
				<a
					style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}
					href={authURL}
				>
					Login with Linkedin
				</a>
			</StyledButton>
		</div>
	);
}

export default LoginButton;
