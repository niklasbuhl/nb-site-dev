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
}

export interface IContentWrapperDiv {
	$props: IProps
}

export const ContentWrapperDiv = styled.div<IContentWrapperDiv>`
	// Display
	display: flex;

	// Height
	${(p) => (p.$props.height ? "height: " + p.$props.height + ";" : "")}

	// Width
	${(p) => (p.$props.width ? "width: " + p.$props.width + ";" : "")}

	// Max Width
	${(p) => (p.$props.maxWidth ? "max-width: " + p.$props.maxWidth + ";" : "")}

	// Gutter
	${(p) => (p.$props.gutter ? "margin: " + p.$props.gutter + ";" : "")}
	${(p) => (p.$props.mainGutter ? "padding-top: " + p.$props.mainGutter : "")};
	${(p) =>
		p.$props.mainGutter ? "padding-bottom: " + p.$props.mainGutter : ""};

	// Position Content (direction, vertical, horizontal)
	${alingContent}

	// Additional CSS
	${(p) => (p.$props.addCSS ? p.$props.addCSS : "")}
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
