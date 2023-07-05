import styled from "styled-components"
import elementStyles from "../../styles/elementStyles"

interface ISection {
	height: string
}

export const Section = styled.section<ISection>`
	${elementStyles.pageSection}
	transition: transform 0.2s, height 0.3s ease;
	height: ${(p) => p.height};
	background: purple;
	z-index: 1337;
	position: relative;
`
