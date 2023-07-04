import { css } from "styled-components"

interface IAlignContent {
	direction?: string // default: column
	vertical?: string // default: center
	horizontal?: string // default: center
}

const alingContent = css<IAlignContent>`
	display: flex;

	// Direction
	${(props) =>
		props.direction
			? "flex-direction: " + props.direction + ";"
			: "flex-direction: column;"}

	// Horizontal
	${(props) =>
		props.horizontal
			? props.direction === "column"
				? "align-content: " + props.horizontal
				: "justify-content: " + props.horizontal
			: null}

	// Vertically
	${(props) =>
		props.vertical
			? props.direction === "column"
				? "justify-content: " + props.horizontal
				: "align-content: " + props.horizontal
			: null}
`

export default alingContent
