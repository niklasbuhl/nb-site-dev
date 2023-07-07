import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Niklas Buhl Personal Website`,
		siteUrl: `https://www.niklas.com/nb-website-dev`,
	},
	// Online Repo
	pathPrefix: `/nb-website-dev`,
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		`gatsby-plugin-sass`,
		"gatsby-transformer-sharp",
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "images",
		// 		path: "./src/images/",
		// 	},
		// 	__key: "images",
		// },
		// Projects
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/content/projects/`,
			},
		},
		// Writings
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/content/writings/`,
			},
		},
		// Pages
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		// Typefaces
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					selfHosted: [
						// OCR
						{
							family: "OCR",
							urls: {
								woff: `./src/typefaces/ocr/OCRAExtended.woff`,
								woff2: `./src/typefaces/ocr/OCRAExtended.woff2`,
							},
							fontStyle: "normal",
							fontWeight: 400,
						},
						// Space Grotesk
						{
							family: "Space Grotesk",
							urls: {
								woff: `./src/typefaces/spaceGrotesk/SpaceGrotesk-Light.woff`,
							},
							fontStyle: "light",
							fontWeight: 300,
						},
						{
							family: "Space Grotesk",
							urls: {
								woff: `./src/typefaces/spaceGrotesk/SpaceGrotesk-Regular.woff`,
							},
							fontStyle: "regular",
							fontWeight: 400,
						},
						{
							family: "Space Grotesk",
							urls: {
								woff: `./src/typefaces/spaceGrotesk/SpaceGrotesk-Medium.woff`,
							},
							fontStyle: "medium",
							fontWeight: 500,
						},
						{
							family: "Space Grotesk",
							urls: {
								woff: `./src/typefaces/spaceGrotesk/SpaceGrotesk-SemiBold.woff`,
							},
							fontStyle: "semibold",
							fontWeight: 600,
						},
						{
							family: "Space Grotesk",
							urls: {
								woff: `./src/typefaces/spaceGrotesk/SpaceGrotesk-Bold.woff`,
							},
							fontStyle: "bold",
							fontWeight: 700,
						},
						// Space Mono
						{
							family: "Space Mono",
							urls: {
								woff: `./src/typefaces/spaceMono/SpaceMono-Regular.woff`,
							},
							fontStyle: "regular",
							fontWeight: 400,
						},
						{
							family: "Space Mono",
							urls: {
								woff: `./src/typefaces/spaceMono/SpaceMono-Italic.woff`,
							},
							fontStyle: "italic",
							fontWeight: 400,
						},
						{
							family: "Space Mono",
							urls: {
								woff: `./src/typefaces/spaceMono/SpaceMono-Bold.woff`,
							},
							fontStyle: "bold",
							fontWeight: 700,
						},
						{
							family: "Space Mono",
							urls: {
								woff: `./src/typefaces/spaceMono/SpaceMono-BoldItalic.woff`,
							},
							fontStyle: "bold italic",
							fontWeight: 700,
						},
					],
				},
			},
		},
	],
}

export default config
