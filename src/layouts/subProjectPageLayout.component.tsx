import React from "react"
import { PageProps, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import PageLayout from "./pageLayout.component"
import PageSection from "../components/pageSection/pageSection.component"

const shortcodes = { Link } // Provide common components here

interface IProjectLayout {
	data: any // TODO
	children: React.ReactNode
	// PageProps: PageProps
}

const ProjectLayout: React.FC<IProjectLayout> = ({
	data,
	children,
	// PageProps,
	...props
}) => {
	return (
		<PageLayout PageProps={props as PageProps}>
			<PageSection>
				<Link to="/projects">Back to projects</Link>
				<h1>{data.mdx.frontmatter.title}</h1>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</PageSection>
		</PageLayout>
	)
}

export default ProjectLayout

export const query = graphql`
	query ($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`
