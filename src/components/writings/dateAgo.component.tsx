import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import typefaces from "../../styles/typefaces"
import { RuleSet, styled } from "styled-components"
import typographies from "../../styles/typographies"
import LayoutContext from "../../contexts/layout.context"

const DateSpan = styled.span<{ gutter: string }>`
	font-size: 0.8rem;
	${typographies.code as RuleSet}
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

	useEffect(() => {
		setAgo(getTimeAgo(date))
	}, [date])

	const getTimeAgo = (dateString: string) => {
		const currentDate = new Date()
		const pastDate = new Date(dateString)

		const timeDiff = currentDate.getTime() - pastDate.getTime()

		// Calculate the time differences in various units
		const hours = Math.floor(timeDiff / (1000 * 60 * 60))
		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
		const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7))
		const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30))
		const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))

		// Determine the appropriate time unit and format the result
		if (years > 0) {
			return years + (years === 1 ? " year ago" : " years ago")
		} else if (months > 0) {
			return months + (months === 1 ? " month ago" : " months ago")
		} else if (weeks > 0) {
			return weeks + (weeks === 1 ? " week ago" : " weeks ago")
		} else if (days > 0) {
			return days + (days === 1 ? " day ago" : " days ago")
		} else {
			return hours + (hours === 1 ? " hour ago" : " hours ago")
		}
	}

	return (
		<DateSpan gutter={layout.gutter}>
			Date:{" "}
			{newDate.getDate() +
				" " +
				newDate.toLocaleString("default", { month: "long" }) +
				" " +
				newDate.getUTCFullYear()}{" "}
			({ago})
		</DateSpan>
	)
}

export default DateAgo
