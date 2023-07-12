import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/pageLayout.component"
import PageSection from "../components/pageSection/pageSection.component"

const NotFoundPage: React.FC<PageProps> = (PageProps) => {
	const texts = [
		"Sorry, this page seems to be hanging too loose... 🤙🏼",
		"This is not the page you're looking for... 👋🏼",
	]

	const n = Math.floor(Math.random() * texts.length)

	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>4L0H4</h1>
				<p>{texts[n]}</p>
			</PageSection>
		</PageLayout>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page Not found</title>
