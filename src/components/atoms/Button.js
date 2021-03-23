import styled, { css } from "styled-components";

const Button = styled.button`
	border: 1px solid grey;
	padding: 20px;
	text-transform: uppercase;
	background-color: ${({ theme }) => theme.body};
	font-weight: 600;
	color: ${({ theme }) => theme.text};
`;

export default Button;
