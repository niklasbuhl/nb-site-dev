import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/pageLayout.component"
import EventContext from "../../contexts/event.context"
import PageSection from "../../components/pageSection/pageSection.component"

const AboutPage: React.FC<PageProps> = (PageProps) => {
	const { view, mouse, location } = React.useContext(EventContext)
	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>About</h1>
				<p>Super Full-Stack Softare Engineer</p>
			</PageSection>
		</PageLayout>
	)
}

export default AboutPage

export const Head: HeadFC = () => <title>Dev 🚧🏗️</title>
