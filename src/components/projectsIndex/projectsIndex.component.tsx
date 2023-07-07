import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

interface IProject {
	id: string
	frontmatter: {
		title: string
		slug: string
	}
}

interface IProjects {
	allMdx: {
		nodes: [IProject]
	}
}

const ProjectIndex: React.FC = () => {
	const [projects] = useState<IProjects>(
		useStaticQuery(
			graphql`
				query ProjectsIndexQuery {
					allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
						nodes {
							id
							frontmatter {
								title
								slug
							}
						}
					}
				}
			`
		)
	)

	return (
		<React.Fragment>
			<ul>
				{projects.allMdx.nodes.map((project: IProject) => (
					<li key={project.id}>
						<Link to={"/projects/" + project.frontmatter.slug}>
							{project.frontmatter.title}
						</Link>
					</li>
				))}
			</ul>
		</React.Fragment>
	)
}

export default ProjectIndex
