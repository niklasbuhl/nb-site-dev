import FlattenSimpleInterpolation from "styled-components"
import styled from "styled-components"
import { DisplayType } from "../../../contexts/event.context"
import alingContent from "../../../styles/alignContent"

export interface IContentWrapperDiv {
	props: {
		height?: string | number
		width: string | number
		gutter: string | number
		display: DisplayType
		direction?: string // default: row
		vertical?: string // default: center
		horizontal?: string // default: center
		additionalCSS?: typeof FlattenSimpleInterpolation | string
	}
}

const getCalcWidthString = (
	width: number | string,
	display: DisplayType,
	gutter: number | string
) => {
	if (typeof gutter === "number") gutter = gutter.toString() + "px"

	if (typeof width === "number") width = width + "px"

	if (display !== DisplayType.Mobile) width += " - 2 * " + gutter

	return width
}

export const ContentWrapperDiv = styled.div<IContentWrapperDiv>`
	// Display
	display: flex;

	// Height
	height: ${(props) =>
		typeof props.props.height === "number"
			? props.props.height + "px"
			: props.props.height};

	// Width
	// use gutter on all other devices than mobile
	width: calc(
		${(props) =>
			getCalcWidthString(
				props.props.width,
				props.props.display,
				props.props.gutter
			)}
	);

	// Gutter (padding)
	${(props) =>
		props.props.display !== DisplayType.Mobile
			? "margin-left: " + props.props.gutter + "px;"
			: null}
	${(props) =>
		props.props.display !== DisplayType.Mobile
			? "margin-right: " + props.props.gutter + "px;"
			: null}

	// Position Content (direction, vertical, horizontal)
	${alingContent}

	// Additional CSS
	${(props) =>
		typeof props.props.additionalCSS === "string"
			? props.props.additionalCSS
			: ""}
`

export const ContentWrapperMain = styled(ContentWrapperDiv).attrs({
	as: "main",
})``
export const ContentWrapperNav = styled(ContentWrapperDiv).attrs({
	as: "nav",
})``
export const ContentWrapperFooter = styled(ContentWrapperDiv).attrs({
	as: "footer",
})``
