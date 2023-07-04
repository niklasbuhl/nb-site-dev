import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/pageLayout.component"

const IndexPage: React.FC<PageProps> = (PageProps) => {
	return (
		<PageLayout PageProps={PageProps}>
			<h1>Hello, World! 🪐</h1>
		</PageLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
