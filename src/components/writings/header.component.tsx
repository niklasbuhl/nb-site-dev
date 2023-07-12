import React from "react"
import { Info, WritingsBackLink } from "./header.styles"
import Author from "./author.component"
import DateAgo from "./dateAgo.component"
import Version from "./version.component"
import Tldr from "./tldr.component"

interface IWritingsHeader {
	title: string
	author: string
	authorLink: string
	date: string
	version: string
	tldr: string
}

const WritingsHeader: React.FC<IWritingsHeader> = ({
	title,
	author,
	authorLink,
	date,
	version,
	tldr,
}) => {
	return (
		<header>
			<WritingsBackLink to="/writings">
				<span style={{ fontFamily: "Space Grotesk" }}>Back to </span>
				<code>/writings</code>
			</WritingsBackLink>
			<h1>{title}</h1>
			<Info>
				<Author author={author} to={authorLink} />
				<DateAgo date={date} />
				<Version version={version} />
			</Info>
			<Tldr tldr={tldr} />
		</header>
	)
}

export default WritingsHeader
