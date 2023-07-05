import React, { useContext } from "react"
import LayoutContext from "../../contexts/layout.context"
import PositionWrapper from "../wrappers/position/positionWrapper.component"
import ContentWrapper from "../wrappers/content/contentWrapper.component"

interface IPageSection {
	children: React.ReactNode
}

const PageSection: React.FC<IPageSection> = ({ children }) => {
	const { layout } = useContext(LayoutContext)

	return (
		<PositionWrapper type="pageSection">
			<ContentWrapper
				height={`calc(100vh - 2 * ${layout.gutter} - 2 * ${layout.mainGutter})`}
				width={"100%"}
				gutter={layout.gutter}
				mainGutter={layout.mainGutter}
				maxWidth={`calc(${layout.pageWidth} - 2 * ${layout.gutter})`}
				type="section"
			>
				{children}
			</ContentWrapper>
		</PositionWrapper>
	)
}

export default PageSection
