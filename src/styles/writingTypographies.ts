import { CSSProperties } from "react"
import { css } from "styled-components"
import typefaces from "./typefaces"

export const writingTypographies = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: ${typefaces.articleHeader};
		letter-spacing: -1px;
		margin: 16px;
	}

	h1 {
		font-size: 4rem;
		letter-spacing: -2px;
		margin-bottom: 8px;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.8rem;
	}

	h2, h3, h4, h5, h6, p, pre {
		margin: 16px;
		margin-top: 0;
	}

	p {
		font-family: ${typefaces.paragraph}
		font-size: 1rem;

	}

	code, pre {
		font-family: ${typefaces.code};
		letter-spacing: -1px;
		font-size: 1rem;
	}

	// https://www.w3schools.com/tags/tag_pre.asp
	pre {
		background: lightgray;
		padding: 4px;
	}
`

export default writingTypographies
