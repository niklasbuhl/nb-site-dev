import React, { CSSProperties, useContext } from "react"
import { PageProps, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import PageLayout from "./pageLayout.component"
import PageSection from "../components/pageSection/pageSection.component"
import ThemeContext from "../contexts/theme.context"
import { RuleSet, styled } from "styled-components"
import Author from "../components/writings/author.component"
import DateAgo from "../components/writings/dateAgo.component"
import Version from "../components/writings/version.component"
import Tldr from "../components/writings/tldr.component"

const shortcodes = { Link } // Provide common components here

const Info = styled.div`
	display: flex;
	flex-direction: row;
`

const WritingsHeader = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 48px;
`

const WritingsBackLink = styled(Link)`
	text-decoration: none;
	margin: 16px;
`

interface IArticleLayout {
	data: any // TODO
	children: React.ReactNode
	// PageProps: PageProps
}

const ArticleLayout: React.FC<IArticleLayout> = ({
	data,
	children,
	// PageProps,
	...props
}) => {
	const { typographyStyle } = useContext(ThemeContext)

	return (
		<PageLayout PageProps={props as PageProps}>
			<PageSection typography={typographyStyle.writing as RuleSet}>
				<WritingsBackLink to="/writings">
					Back to <code>/writings</code>
				</WritingsBackLink>
				<WritingsHeader>
					<h1>{data.mdx.frontmatter.title}</h1>
					<Info>
						<Author author={data.mdx.frontmatter.author} to="/about" />
						<DateAgo date={data.mdx.frontmatter.date} />
						<Version version={data.mdx.frontmatter.version} />
					</Info>
					<Tldr tldr={data.mdx.frontmatter.tldr} />
				</WritingsHeader>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</PageSection>
		</PageLayout>
	)
}

export default ArticleLayout

export const query = graphql`
	query ($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				author
				date
				type
				updatedDate
				tldr
				slug
				version
			}
		}
	}
`
