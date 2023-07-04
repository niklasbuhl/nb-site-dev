import { PageProps } from "gatsby"
import { GlobalStyles } from "../styles/globalStyles"
import React from "react"

interface IPage {
	children: React.ReactNode
	PageProps: PageProps
}

const PageLayout: React.FC<IPage> = ({ children, PageProps }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			{PageProps.location.pathname}
			{children}
		</React.Fragment>
	)
}

export default PageLayout
