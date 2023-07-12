import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/pageLayout.component"
import PageSection from "../../components/pageSection/pageSection.component"
import WritingsIndex from "../../components/writings/writingsIndex/writingIndex.components"

const WritingsPage: React.FC<PageProps> = (PageProps) => {
	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>Writings</h1>
				<p>Sharing is caring.</p>
				<WritingsIndex />
			</PageSection>
		</PageLayout>
	)
}

export default WritingsPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
