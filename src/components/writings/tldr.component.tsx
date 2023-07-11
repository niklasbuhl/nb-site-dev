import React, { useContext } from "react"
import { styled } from "styled-components"
import LayoutContext from "../../contexts/layout.context"

const TldrP = styled.p<{ gutter: string }>`
	font-size: 1.2rem;
	margin: ${(p) => p.gutter};
	margin-top: 0;
`

interface ITldr {
	tldr: string
}

const Tldr: React.FC<ITldr> = ({ tldr }) => {
	const { layout } = useContext(LayoutContext)

	return <TldrP gutter={layout.gutter}>{tldr}</TldrP>
}

export default Tldr
