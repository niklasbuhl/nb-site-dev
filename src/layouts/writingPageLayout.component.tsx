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
import WritingsHeader from "../components/writings/header.component"

const shortcodes = { Link } // Provide common components here

interface IArticleLayout {
	data: any // TODO
	children: React.ReactNode
	// PageProps: PageProps
}

const WritingLayout: React.FC<IArticleLayout> = ({
	data,
	children,
	// PageProps,
	...props
}) => {
	const { typographyStyle } = useContext(ThemeContext)

	return (
		<PageLayout PageProps={props as PageProps}>
			<PageSection typography={typographyStyle.writing as RuleSet}>
				<WritingsHeader
					title={data.mdx.frontmatter.title}
					author={data.mdx.frontmatter.author}
					authorLink="/about"
					date={data.mdx.frontmatter.date}
					version={data.mdx.frontmatter.version}
					tldr={data.mdx.frontmatter.tldr}
				/>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</PageSection>
		</PageLayout>
	)
}

export default WritingLayout

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
