import { styled } from "styled-components"
import { NavLinkStyle } from "../navLink/navLink.styles"
import { Link } from "gatsby"

const LogoGraphic = styled(Link)`
	${NavLinkStyle}
	overflow: hidden;

	&::before {
		content: "N";
	}
`

export default LogoGraphic
