import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/pageLayout.component"
import { EventContext } from "../contexts/event.context"

const IndexPage: React.FC<PageProps> = (PageProps) => {
	const { view, mouse, location } = React.useContext(EventContext)
	return (
		<PageLayout PageProps={PageProps}>
			<h1>Hello, World! 🪐</h1>
			<p>This page is under construction, this is version 0.0.9 - Repo path</p>
			<p>Window Height {view.width}</p>
			<p>Window Width {view.height}</p>
			<p>Window Scroll {view.scroll}</p>
			<p>Window Display {view.display}</p>
			<p>Mouse X {mouse.position.x}</p>
			<p>Mouse Y {mouse.position.y}</p>
			<p>Location {location?.pathname}</p>
		</PageLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
