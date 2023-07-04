import { RuleSet, styled } from "styled-components"

export interface IPositionWrapperDiv {
	sticky?: string
	background?: string
	zIndex?: number
	addCSS?: RuleSet
	// display?: DisplayType
}

export const PositionWrapperDiv = styled.div<IPositionWrapperDiv>`
	// Display
	display: flex;
	justify-content: center;
	flex-direction: row;

	// Position
	${(props) =>
		props.sticky !== undefined ? "position: sticky;" : "position: relative;"}

	${(props) => (props.sticky === "top" ? "top: 0;" : null)}
	${(props) => (props.sticky === "bottom" ? "bottom: 0;" : null)}

	// Background
	${(props) => (props.background ? props.background : null)}

	// Z-Index
	z-index: ${(props) => (props.zIndex !== undefined ? props.zIndex + "px;" : 0)};

	// Additional CSS
	${(props) => props.addCSS}
`
