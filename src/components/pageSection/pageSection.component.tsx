import React, { useContext } from "react"
import LayoutContext from "../../contexts/layout.context"
import PositionWrapper from "../wrappers/position/positionWrapper.component"
import ContentWrapper from "../wrappers/content/contentWrapper.component"
import { RuleSet } from "styled-components"
import BackgroundWrapper from "../wrappers/background/BackgroundWrapper.component"
import Color from "color"

interface IPageSection {
	children: React.ReactNode
	typography?: RuleSet
	backgroundColor?: Color
	height?: string
}

const PageSection: React.FC<IPageSection> = ({
	children,
	typography,
	backgroundColor,
	height,
}) => {
	const { layout } = useContext(LayoutContext)

	return (
		<PositionWrapper type="pageSection">
			<BackgroundWrapper type="pageSection" backgroundColor={backgroundColor}>
				<ContentWrapper
					height={
						height
							? `calc(${height} - 2 * ${layout.gutter} - 2 * ${layout.mainGutter})`
							: `calc(100vh - 2 * ${layout.gutter} - 2 * ${layout.mainGutter})`
					}
					width={`calc(100% - 2 * ${layout.gutter})`}
					gutter={layout.gutter}
					mainGutter={layout.mainGutter}
					maxWidth={`calc(${layout.pageWidth} - 2 * ${layout.gutter})`}
					type="section"
					typography={typography}
				>
					{children}
				</ContentWrapper>
			</BackgroundWrapper>
		</PositionWrapper>
	)
}

export default PageSection
