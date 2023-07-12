import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../../layouts/pageLayout.component"
import PageSection from "../../components/pageSection/pageSection.component"
import ProjectsIndex from "../../components/projects/projectsIndex/projectsIndex.component"

const ProjectsPage: React.FC<PageProps> = (PageProps) => {
	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<h1>Projects</h1>
				<ProjectsIndex />
			</PageSection>
		</PageLayout>
	)
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
