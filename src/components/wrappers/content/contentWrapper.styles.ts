import { RuleSet } from "styled-components"
import styled from "styled-components"
import { DisplayType } from "../../../contexts/event.context"
import alingContent from "../../../styles/alignContent"

export interface IProps {
	height?: string
	width?: string
	maxWidth?: string
	gutter?: string
	mainGutter?: string
	direction?: string // default: column
	vertical?: string // default: center
	horizontal?: string // default: center
	addCSS?: RuleSet
	typography?: RuleSet
}

export interface IContentWrapperDiv {
	$props: IProps
}

export const ContentWrapperDiv = styled.div<IContentWrapperDiv>`
	// Display
	display: flex;

	// Height
	${(p) => (p.$props.height ? "min-height: " + p.$props.height + ";" : null)}

	// Width
	${(p) => (p.$props.width ? "width: " + p.$props.width + ";" : null)}

	// Max Width
	${(p) => (p.$props.maxWidth ? "max-width: " + p.$props.maxWidth + ";" : null)}

	// Gutter
	${(p) => (p.$props.gutter ? "padding: " + p.$props.gutter + ";" : null)}
	${(p) =>
		p.$props.mainGutter
			? "padding-top: calc(" +
			  p.$props.mainGutter +
			  " + " +
			  p.$props.gutter +
			  ");"
			: null}
	${(p) =>
		p.$props.mainGutter
			? "padding-bottom: calc(" +
			  p.$props.mainGutter +
			  " + " +
			  p.$props.gutter +
			  ");"
			: null};

	// Position Content (direction, vertical, horizontal)
	${alingContent}

	// Typography
	${(p) => (p.$props.typography ? p.$props.typography : null)}

	// Additional CSS
	${(p) => (p.$props.addCSS ? p.$props.addCSS : null)}
`

export const ContentWrapperMain = styled(ContentWrapperDiv).attrs({
	as: "main",
})<IContentWrapperDiv>``

export const ContentWrapperNav = styled(ContentWrapperDiv).attrs({
	as: "nav",
})<IContentWrapperDiv>``

export const ContentWrapperFooter = styled(ContentWrapperDiv).attrs({
	as: "footer",
})<IContentWrapperDiv>``
