import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

interface IWriting {
	id: string
	frontmatter: {
		title: string
		slug: string
		type: string
	}
}

interface IWritings {
	allMdx: {
		nodes: [IWriting]
	}
}

const WritingsIndex: React.FC = () => {
	const [writings] = useState<IWritings>(
		useStaticQuery(
			graphql`
				query WritingsIndexQuery {
					allMdx(
						filter: { frontmatter: { type: { in: ["guide", "article"] } } }
					) {
						nodes {
							id
							frontmatter {
								title
								slug
								type
							}
						}
					}
				}
			`
		)
	)

	const [articles, setArticles] = useState<Array<IWriting>>()
	const [guides, setGuides] = useState<Array<IWriting>>()

	useEffect(() => {
		var tmpArticles: Array<IWriting> = []
		var tmpGuides: Array<IWriting> = []

		writings.allMdx.nodes.map((writing: IWriting) => {
			if (writing.frontmatter.type === "article") tmpArticles.push(writing)
			if (writing.frontmatter.type === "guide") tmpGuides.push(writing)
		})

		setArticles(tmpArticles)
		setGuides(tmpGuides)
	}, [writings])

	return (
		<React.Fragment>
			<h1>Writings</h1>
			{articles?.length ? (
				<>
					<h2>Articles</h2>
					<ul>
						{articles.map((article: IWriting) => (
							<li key={article.id}>
								<Link to={"/articles/" + article.frontmatter.slug}>
									{article.frontmatter.title}
								</Link>
							</li>
						))}
					</ul>
				</>
			) : null}
			{guides?.length ? (
				<>
					<h1>Guides</h1>
					<ul>
						{guides.map((guide: IWriting) => (
							<li key={guide.id}>
								<Link to={"/guides/" + guide.frontmatter.slug}>
									{guide.frontmatter.title}
								</Link>
							</li>
						))}
					</ul>
				</>
			) : null}
			{/* {Object.entries(tutorials).length ? <h1>Tutorials</h1> : null}
			{Object.entries(reviews).length ? <h1>Reviews</h1> : null}
			{Object.entries(blogposts).length ? <h1>Blog Posts</h1> : null} */}
		</React.Fragment>
	)
}

export default WritingsIndex
