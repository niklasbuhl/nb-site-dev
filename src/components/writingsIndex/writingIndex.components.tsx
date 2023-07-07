import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"

interface IWriting {
	id: string
	frontmatter: {
		title: string
		slug: string
	}
}

interface IWritings {
	allMdx: {
		nodes: [IWriting]
	}
}

const WritingsIndex: React.FC = () => {
	const [guides] = useState<IWritings>(
		useStaticQuery(
			graphql`
				query WritingsIndexQuery {
					allMdx(filter: { frontmatter: { type: { eq: "guide" } } }) {
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

	const [articles] = useState<object>({})
	const [tutorials] = useState<object>({})
	const [reviews] = useState<object>({})
	const [blogposts] = useState<object>({})

	return (
		<React.Fragment>
			{Object.entries(articles).length ? <h1>Articles</h1> : null}
			{Object.entries(guides).length ? (
				<>
					<h1>Guides</h1>
					<ul>
						{guides.allMdx.nodes.map((guide: IWriting) => (
							<li key={guide.id}>
								<Link to={"/writings/guides/" + guide.frontmatter.slug}>
									{guide.frontmatter.title}
								</Link>
							</li>
						))}
					</ul>
				</>
			) : null}
			{Object.entries(tutorials).length ? <h1>Tutorials</h1> : null}
			{Object.entries(reviews).length ? <h1>Reviews</h1> : null}
			{Object.entries(blogposts).length ? <h1>Blog Posts</h1> : null}
		</React.Fragment>
	)
}

export default WritingsIndex
