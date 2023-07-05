import React from "react"
import { styled } from "styled-components"
import { laserFont } from "../../../styles/fonts"
import { Link } from "gatsby"

export const LogoText = styled(Link)<{
	hideTextLogo: boolean
	children: React.ReactNode
	pathname: string
}>`
	// Layout
	display: flex;
	padding: 16px;

	// Text
	// ${laserFont}
	text-decoration: none;

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
