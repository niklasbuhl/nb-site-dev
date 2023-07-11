import React, { useContext } from "react"
import { Link } from "gatsby"
import typefaces from "../../styles/typefaces"
import { styled } from "styled-components"
import typographies from "../../styles/typographies"
import LayoutContext from "../../contexts/layout.context"

const StyledLink = styled(Link)`
	font-family: ${typefaces.code};
	font-size: 0.8rem;
`

const VersionSpan = styled.span<{ gutter: string }>`
	font-size: 0.8rem;
	${typographies.code}
	margin: ${(p) => p.gutter};
	margin-top: 0;
`

interface IVersion {
	version: string
}

const Version: React.FC<IVersion> = ({ version }) => {
	const { layout } = useContext(LayoutContext)

	return <VersionSpan gutter={layout.gutter}>Version {version}</VersionSpan>
}

export default Version
