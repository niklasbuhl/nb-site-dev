import styled from "styled-components"
import elementStyles from "../../styles/elementStyles"
import { useContext } from "react"
import ThemeContext from "../../contexts/theme.context"

interface ISection {
	height: string
	$backgroundColor: string
}

export const Section = styled.section<ISection>`
	${elementStyles.pageSection}
	transition: transform 0.2s, height 0.3s ease;
	height: ${(p) => p.height};
	background: ${(p) => p.$backgroundColor};
	z-index: 1337;
	position: relative;
`
