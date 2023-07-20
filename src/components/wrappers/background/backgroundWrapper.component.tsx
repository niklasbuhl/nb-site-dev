import Color from "color"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import elementStyles from "../../../styles/elementStyles"

/* Background

- Color
- Image
- Animation

*/

interface IBackground {
	backgroundColor?: Color
	backgroundImage?: string
	type?: string
}

const Background = styled.div<IBackground>`
	display: flex;
	${(props) =>
		props.type === "pageSection" ? elementStyles.pageSection : null}

	${(props) =>
		props.backgroundColor
			? "background: " + props.backgroundColor.hsl().string() + ";"
			: null}
`

interface IBackgroundWrapper {
	backgroundColor?: Color
	backgroundImage?: string
	children: React.ReactNode
	type?: string
	animationSetup?: () => {}
	animationDraw?: () => {}
}

const BackgroundWrapper: React.FC<IBackgroundWrapper> = ({
	backgroundColor,
	children,
	type,
}) => {
	return (
		<Background
			backgroundColor={backgroundColor}
			// backgroundImage={backgroundImage}
			type={type}
		>
			{children}
		</Background>
	)
}

export default BackgroundWrapper
