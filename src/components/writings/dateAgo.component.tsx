import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import typefaces from "../../styles/typefaces"
import { styled } from "styled-components"
import typographies from "../../styles/typographies"
import LayoutContext from "../../contexts/layout.context"

const DateSpan = styled.span<{ gutter: string }>`
	font-size: 0.8rem;
	${typographies.code}
	margin: ${(p) => p.gutter};
	margin-top: 0;
`

interface IDateAgo {
	date: string
}

const DateAgo: React.FC<IDateAgo> = ({ date }) => {
	const { layout } = useContext(LayoutContext)
	const [ago, setAgo] = useState<string>("2 days")
	const newDate = new Date(date)

	useEffect(() => {}, [])

	return (
		<DateSpan gutter={layout.gutter}>
			Date:{" "}
			{newDate.getDate() +
				" " +
				newDate.toLocaleString("default", { month: "long" }) +
				" " +
				newDate.getUTCFullYear()}{" "}
			({ago} ago)
		</DateSpan>
	)
}

export default DateAgo
