import { RuleSet, styled } from "styled-components"

export interface IPositionWrapperDiv {
	sticky?: string
	background?: string
	zIndex?: number
	topMargin?: string
	bottomMargin?: string
	$addCSS?: RuleSet | string
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
	${(props) => (props.zIndex ? "z-index: " + props.zIndex : "")}

	// Margin
	${(props) => (props.topMargin ? "margin-top: " + props.topMargin + ";" : "")}
	${(props) =>
		props.bottomMargin ? "margin-bottom: " + props.bottomMargin + ";" : ""}

	// Additional CSS
	${(props) => (props.$addCSS ? props.$addCSS : "")}
`
