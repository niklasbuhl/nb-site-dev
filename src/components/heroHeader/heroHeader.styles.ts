import styled from "styled-components"
import elementStyles from "../../styles/elementStyles"

export const Section = styled.section`
	${elementStyles.pageSection}
	transition: transform 0.2s, height 0.3s ease;
	height: var(--hero-header-height);
	background: purple;
	z-index: 1337;
	position: relative;
`
