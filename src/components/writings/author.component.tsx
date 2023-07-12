import React, { useContext } from "react"
import { Link } from "gatsby"
import typefaces from "../../styles/typefaces"
import { RuleSet, styled } from "styled-components"
import typographies from "../../styles/typographies"
import LayoutContext from "../../contexts/layout.context"

const StyledLink = styled(Link)`
	font-family: ${typefaces.code};
	font-size: 0.8rem;
	color: black;
	// text-decoration: none;
`

const AuthorSpan = styled.span<{ gutter: string }>`
	font-size: 0.8rem;
	${typographies.code as RuleSet}
	margin: ${(p) => p.gutter};
	margin-top: 0;
`

interface IAuthor {
	author: string
	to: string
}

const Author: React.FC<IAuthor> = ({ author, to }) => {
	const { layout } = useContext(LayoutContext)

	return (
		<AuthorSpan gutter={layout.gutter}>
			Author: <StyledLink to={to}>{author}</StyledLink>
		</AuthorSpan>
	)
}

export default Author
