import React, { useContext } from "react"
import LayoutContext from "../../contexts/layout.context"
import PositionWrapper from "../wrappers/position/positionWrapper.component"
import ContentWrapper from "../wrappers/content/contentWrapper.component"

interface IMain {
	children: React.ReactNode
}

const MainContent: React.FC<IMain> = ({ children }) => {
	const { layout } = useContext(LayoutContext)

	return (
		<PositionWrapper
			topMargin={layout.mainTopMargin}
			bottomMargin={layout.mainBottomMargin}
		>
			<ContentWrapper
				height={`calc(100vh - ( 2 * ${layout.gutter}) + ${layout.mainTopMargin} + ${layout.mainBottomMargin})`}
				width={"100%"}
				gutter={layout.gutter}
				mainGutter={layout.mainGutter}
				maxWidth={`calc(${layout.pageWidth} - 2 * ${layout.gutter})`}
				type="main"
			>
				{children}
			</ContentWrapper>
		</PositionWrapper>
	)
}

export default MainContent
