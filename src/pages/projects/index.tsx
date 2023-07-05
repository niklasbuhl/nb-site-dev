import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/pageLayout.component"
import EventContext from "../../contexts/event.context"
import PageSection from "../../components/pageSection/pageSection.component"

const ProjectsPage: React.FC<PageProps> = (PageProps) => {
	const { view, mouse, location } = React.useContext(EventContext)
	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>Projects! 🪐</h1>
				<p>Info</p>
				<p>Window Height {view.width}</p>
				<p>Window Width {view.height}</p>
				<p>Window Scroll {view.scroll}</p>
				<p>Window Display {view.display}</p>
				<p>Mouse X {mouse.position.x}</p>
				<p>Mouse Y {mouse.position.y}</p>
				<p>Location {location?.pathname}</p>
				<p>This page is under construction, this is version 0.0.10</p>
				<p>Event Context</p>
			</PageSection>
		</PageLayout>
	)
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
