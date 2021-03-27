import styled, { css } from "styled-components";

const Button = styled.button`
	border: 1px solid #8b8b8b;
	padding: 10px;
	margin: 25px 5px 0 0;
	text-transform: uppercase;
	background-color: ${({ theme }) => theme.bodyColor};
	font-weight: 600;
	color: ${({ theme }) => theme.buttonTextColor};
	transition: 0.3s;
   border-radius: 2px;
	cursor: pointer;
	&:hover {
		border-color: ${({ theme }) => theme.buttonHoverColor};
		color: ${({ theme }) => theme.buttonHoverColor};
	}
`;

export default Button;
