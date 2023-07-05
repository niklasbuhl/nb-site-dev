import { PageProps } from "gatsby"
import { GlobalStyles } from "../styles/globalStyles"
import React, { useContext, useEffect } from "react"
import EventContext from "../contexts/event.context"
import NavigationBar from "../components/navigationBar/navigationBar.components"
import HeroHeader from "../components/heroHeader/heroHeader.component"
import MainContent from "../components/mainContent/mainContent.component"
import LayoutContext from "../contexts/layout.context"

interface IPage {
	children: React.ReactNode
	PageProps: PageProps
}

const PageLayout: React.FC<IPage> = ({ children, PageProps }) => {
	const { setLocation } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)

	useEffect(() => {
		setLocation(PageProps.location)
	}, [])

	return (
		<React.Fragment>
			<GlobalStyles />
			<HeroHeader />
			<NavigationBar />
			<MainContent
				$topMargin={layout.mainTopMargin}
				$bottomMargin={layout.mainBottomMargin}
			>
				{children}
			</MainContent>
		</React.Fragment>
	)
}

export default PageLayout
