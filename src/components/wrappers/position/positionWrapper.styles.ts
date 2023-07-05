import { RuleSet, styled } from "styled-components"
import elementStyles from "../../../styles/elementStyles"

export interface IPositionWrapperDiv {
	sticky?: string
	background?: string
	zIndex?: number
	type?: string
	$addCSS?: RuleSet | string
	// display?: DisplayType
}

export const PositionWrapperDiv = styled.div<IPositionWrapperDiv>`
	// Display
	display: flex;
	// justify-content: center;
	align-items: center;
	flex-direction: column;

	// Page Section
	${(props) => (props.type === "pageSection" ? elementStyles.pageSection : "")}

	// Position (only for navigationBar or credits types)
	${(props) =>
		props.sticky !== undefined ? "position: sticky;" : "position: relative;"}

	${(props) => (props.sticky === "top" ? "top: 0;" : null)}
	${(props) => (props.sticky === "bottom" ? "bottom: 0;" : null)}

	// Z-Index
	${(props) => (props.zIndex ? "z-index: " + props.zIndex : "")}

	// Additional CSS
	${(props) => (props.$addCSS ? props.$addCSS : "")}
`
