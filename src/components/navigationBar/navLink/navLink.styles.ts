import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { Styles } from "styled-components/dist/types"

export const NavLinkWrapper = styled.div`
	display: flex;
`

export const NavLinkStyle = css`
	display: flex;
	border: none;
	background: none;
	padding: 16px;
	height: calc(100% - 32px);
	align-items: center;
`

interface IStyledLink {
	typography: Styles<object>
}

export const StyledLink = styled(Link)<IStyledLink>`
	${NavLinkStyle}

	// Typography
	${(props) => props.typography}
`

interface IStyledButton extends IStyledLink {
	$active?: boolean
	$activeStyle?: Styles<object>
	disabled?: boolean
}

export const StyledButton = styled.button<IStyledButton>`
	${NavLinkStyle}
	height: 48px;
	cursor: pointer;

	// Typography
	${(props) => props.typography}

	// Active Typography Style
	${(props) =>
		props.$active && props.$activeStyle !== undefined
			? css(props.$activeStyle)
			: ""}

	// Disabled Style
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
