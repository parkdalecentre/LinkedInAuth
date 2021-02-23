import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

// Imports

export const StyledButton = styled(Button)({
	display: "inline-block",
	borderRadius: "3px",
	padding: "0.5rem 0",
	margin: "0.5rem 1rem",
	width: "11rem",
	background: "transparent",
	color: "black",
	border: "2px solid black"
});

function LoginButton() {
	return (
		<div>
			<StyledButton>Login with Linkedin</StyledButton>
		</div>
	);
}

export default LoginButton;
