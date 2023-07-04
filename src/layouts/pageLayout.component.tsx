import { PageProps } from "gatsby"
import { GlobalStyles } from "../styles/globalStyles"
import React, { useContext, useEffect } from "react"
import { EventContext } from "../contexts/event.context"

interface IPage {
	children: React.ReactNode
	PageProps: PageProps
}

const PageLayout: React.FC<IPage> = ({ children, PageProps }) => {
	const { setLocation } = useContext(EventContext)

	useEffect(() => {
		setLocation(PageProps.location)
	}, [])

	return (
		<React.Fragment>
			<GlobalStyles />
			{children}
		</React.Fragment>
	)
}

export default PageLayout
