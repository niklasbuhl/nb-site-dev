import React from "react"
import { styled } from "styled-components"
import { laserFont } from "../../../styles/fonts"
import { Link } from "gatsby"
import { Styles } from "styled-components/dist/types"

export const LogoText = styled(Link)<{
	hideTextLogo: boolean
	children: React.ReactNode
	pathname: string
	typography: Styles<object>
}>`
	// Layout
	display: flex;
	padding: 16px;

	// Typography
	// ${laserFont}
	// text-decoration: none;
	${(props) => props.typography}

	// Animation
	animation-timing-function: ease;
	transition: transform 0.7s;
	color: black;

	${(props) =>
		props.hideTextLogo && props.pathname === "/"
			? "transform: translateY(-96px);"
			: ""}
`

export default LogoText
