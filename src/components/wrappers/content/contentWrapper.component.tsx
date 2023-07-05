import { RuleSet } from "styled-components"
import EventContext, { DisplayType } from "../../../contexts/event.context"
import { useContext, useEffect } from "react"
import React, { useState } from "react"
import {
	ContentWrapperDiv,
	ContentWrapperFooter,
	ContentWrapperMain,
	ContentWrapperNav,
	IProps,
} from "./contentWrapper.styles"

export interface IContentWrapper {
	height?: string
	width?: string
	maxWidth?: string
	gutter?: string
	mainGutter?: string
	// display?: DisplayType
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
	maxWidth,
	gutter,
	mainGutter,
	// display,
	direction,
	vertical,
	horizontal,
	children,
	type,
	addCSS,
}) => {
	const [props, setProps] = useState<IProps>({
		height,
		width,
		maxWidth,
		gutter,
		mainGutter,
		direction,
		vertical,
		horizontal,
		addCSS,
	})

	// Return based on type
	return (
		<>
			{type === "nav" ? (
				<ContentWrapperNav $props={props}>{children}</ContentWrapperNav>
			) : type === "main" ? (
				<ContentWrapperMain $props={props}>{children}</ContentWrapperMain>
			) : type === "footer" ? (
				<ContentWrapperFooter $props={props}>{children}</ContentWrapperFooter>
			) : (
				<ContentWrapperDiv $props={props}>{children}</ContentWrapperDiv>
			)}
		</>
	)
}

export default ContentWrapper
