import React from "react"
import PositionWrapper from "../wrappers/position/positionWrapper.component"
import {
	mainContentWrapperCSS,
	mainPositionWrapperCSS,
} from "./mainContent.styles"
import ContentWrapper from "../wrappers/content/contentWrapper.component"

interface IMain {
	children: React.ReactNode
}

const MainContent: React.FC<IMain> = ({ children }) => {
	return (
		<PositionWrapper addCSS={mainContentWrapperCSS}>
			<ContentWrapper
				addCSS={mainPositionWrapperCSS}
				height={`calc(100vh - 2 * var(--main-gutter))`}
				type="main"
			>
				{children}
			</ContentWrapper>
		</PositionWrapper>
	)
}

export default MainContent
