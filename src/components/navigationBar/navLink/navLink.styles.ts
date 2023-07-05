import { Link } from "gatsby"
import styled, { RuleSet, css } from "styled-components"
import { headerFont } from "../../../styles/fonts"
import { Styles } from "styled-components/dist/types"

export const NavLinkWrapper = styled.div`
	display: flex;
`

export const NavLinkStyle = css`
	display: flex;
	text-decoration: none;
	border: none;
	background: none;
	padding: 16px;
	${headerFont}

	// font-family: Helvetica;
	font-weight: 700;
	font-size: 1rem;
	color: black;
	height: calc(100% - 32px);
	align-items: center;
`

export const StyledLink = styled(Link)`
	${NavLinkStyle}
`

interface IStyledButton {
	active?: boolean
	activeStyle?: Styles<object>
	disabled?: boolean
}

export const StyledButton = styled.button<IStyledButton>`
	${NavLinkStyle}
	height: 48px;
	cursor: pointer;
	${(props) =>
		props.active && props.activeStyle !== undefined
			? css(props.activeStyle)
			: ""}

	${(props) =>
		props.disabled &&
		css`
			opacity: 0.5;
			cursor: not-allowed;
		`}
`

export const DisabledLink = styled.button<IStyledButton>`
	${NavLinkStyle}
	height: 48px;
	cursor: pointer;
`

export const ActiveStyle = css`
	color: cyan;
`
