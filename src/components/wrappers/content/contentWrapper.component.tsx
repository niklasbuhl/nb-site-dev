import { RuleSet } from "styled-components"
import EventContext, { DisplayType } from "../../../contexts/event.context"
import alingContent from "../../../styles/alignContent"
import { useContext, useEffect } from "react"
import React from "react"
import {
	ContentWrapperDiv,
	ContentWrapperFooter,
	ContentWrapperMain,
	ContentWrapperNav,
} from "./ContentWrapper.styles"

export interface IContentWrapper {
	height?: string | number
	width?: string | number
	gutter?: number
	display?: DisplayType
	direction?: string // default: row
	vertical?: string // default: center
	horizontal?: string // default: center
	children?: React.ReactNode
	type?: string
	addCSS?: RuleSet
}

const ContentWrapper: React.FC<IContentWrapper> = ({
	height,
	width,
	gutter,
	display,
	direction,
	vertical,
	horizontal,
	children,
	type,
	addCSS,
}) => {
	const { view } = useContext(EventContext)

	const props = {
		height,
		width: width
			? width
			: getComputedStyle(document.documentElement).getPropertyValue(
					"--page-width"
			  ),
		gutter: gutter
			? gutter
			: getComputedStyle(document.documentElement).getPropertyValue("--gutter"),
		display: display ? display : view.display,
		direction,
		vertical,
		horizontal,
		addCSS,
	}

	// Return based on type
	return (
		<>
			{type === "nav" ? (
				<ContentWrapperNav props={props}>{children}</ContentWrapperNav>
			) : type === "main" ? (
				<ContentWrapperMain props={props}>{children}</ContentWrapperMain>
			) : type === "footer" ? (
				<ContentWrapperFooter props={props}>{children}</ContentWrapperFooter>
			) : (
				<ContentWrapperDiv props={props}>{children}</ContentWrapperDiv>
			)}
		</>
	)
}

export default ContentWrapper
