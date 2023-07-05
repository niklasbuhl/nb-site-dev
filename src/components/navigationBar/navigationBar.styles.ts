import styled from "styled-components"
import elementStyles from "../../styles/elementStyles"

interface INav {
	hidden: boolean
}

export const Nav = styled.nav<INav>`
	${elementStyles.pageSection}
	position: absolute;
	height: var(--navigation-bar-height);
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1337;
	animation-timing-function: ease-in;
	transition: transform 0.2s, height 0.3s ease;
	${(props) => (props.hidden ? `transform: translateY(-96px);` : "")}
`
