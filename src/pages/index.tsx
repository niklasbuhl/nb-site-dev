import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/pageLayout.component"
import PageSection from "../components/pageSection/pageSection.component"

const IndexPage: React.FC<PageProps> = (PageProps) => {
	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>Hello, World! 🪐</h1>
				<p>I'm Niklas Buhl!</p>
				<p>This page is under construction, this is version 0.0.10</p>
				<p>Event Context</p>
			</PageSection>
			{/* <PageSection>
				<h1>Section #2</h1>
			</PageSection> */}
		</PageLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
