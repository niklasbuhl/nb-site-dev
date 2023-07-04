import { RuleSet } from "styled-components"
import React from "react"
import { PositionWrapperDiv } from "./positionWrapper.styles"

// Position

export interface IPositionWrapper {
	sticky?: string
	background?: string
	zIndex?: number
	// display?: DisplayType
	children?: React.ReactNode
	addCSS?: RuleSet
}

const PositionWrapper: React.FC<IPositionWrapper> = ({
	sticky,
	background,
	zIndex,
	children,
	addCSS,
}) => {
	return (
		<PositionWrapperDiv
			sticky={sticky}
			background={background}
			zIndex={zIndex ? zIndex : 0}
			addCSS={addCSS}
		>
			{children}
		</PositionWrapperDiv>
	)
}

export default PositionWrapper
