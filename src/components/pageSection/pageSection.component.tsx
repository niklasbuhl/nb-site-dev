import React, { useContext } from "react"
import LayoutContext from "../../contexts/layout.context"
import PositionWrapper from "../wrappers/position/positionWrapper.component"
import ContentWrapper from "../wrappers/content/contentWrapper.component"
import { RuleSet } from "styled-components"

interface IPageSection {
	children: React.ReactNode
	typography?: RuleSet
}

const PageSection: React.FC<IPageSection> = ({ children, typography }) => {
	const { layout } = useContext(LayoutContext)

	return (
		<PositionWrapper type="pageSection">
			<ContentWrapper
				height={`calc(100vh - 2 * ${layout.gutter} - 2 * ${layout.mainGutter})`}
				width={`calc(100% - 2 * ${layout.gutter})`}
				gutter={layout.gutter}
				mainGutter={layout.mainGutter}
				maxWidth={`calc(${layout.pageWidth} - 2 * ${layout.gutter})`}
				type="section"
				typography={typography}
			>
				{children}
			</ContentWrapper>
		</PositionWrapper>
	)
}

export default PageSection
