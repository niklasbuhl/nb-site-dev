import { RuleSet } from "styled-components"
import React from "react"
import { PositionWrapperDiv } from "./positionWrapper.styles"

// Position

export interface IPositionWrapper {
	sticky?: string
	background?: string
	zIndex?: number
	topMargin?: string
	bottomMargin?: string
	// display?: DisplayType
	children?: React.ReactNode
	$addCSS?: RuleSet | string
}

const PositionWrapper: React.FC<IPositionWrapper> = ({
	sticky,
	background,
	zIndex,
	children,
	topMargin,
	bottomMargin,
	$addCSS,
}) => {
	return (
		<PositionWrapperDiv
			sticky={sticky}
			background={background}
			zIndex={zIndex}
			topMargin={topMargin}
			bottomMargin={bottomMargin}
			$addCSS={$addCSS}
		>
			{children}
		</PositionWrapperDiv>
	)
}

export default PositionWrapper
