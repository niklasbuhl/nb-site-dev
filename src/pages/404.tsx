import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
	return <h1>This is not the page you are looking for... 👋🏼</h1>
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
