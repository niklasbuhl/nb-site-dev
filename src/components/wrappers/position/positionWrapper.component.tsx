import { RuleSet } from "styled-components"
import React from "react"
import { PositionWrapperDiv } from "./positionWrapper.styles"

// Position

export interface IPositionWrapper {
	sticky?: string
	background?: string
	zIndex?: number
	// display?: DisplayType
	type?: string
	children?: React.ReactNode
	$addCSS?: RuleSet | string
}

const PositionWrapper: React.FC<IPositionWrapper> = ({
	sticky,
	background,
	zIndex,
	type,
	children,
	$addCSS,
}) => {
	return (
		<PositionWrapperDiv
			sticky={sticky}
			background={background}
			zIndex={zIndex}
			type={type}
			$addCSS={$addCSS}
		>
			{children}
		</PositionWrapperDiv>
	)
}

export default PositionWrapper
