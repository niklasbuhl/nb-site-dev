import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import PageLayout from "../layouts/pageLayout.component"
import PageSection from "../components/pageSection/pageSection.component"
import { styled } from "styled-components"
import typefaces from "../styles/typefaces"
import colors from "../styles/colors"

const IntroductionArticle = styled.article`
	display: flex;
	flex-grow: 1;
	margin: 16px;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 64px;
	padding-bottom: 64px;

	h1,
	p {
		display: flex;
		font-family: ${typefaces.header};
	}

	h1 {
		font-size: 3.4rem;
		font-weight: bold;
		letter-spacing: 0.9px;
	}

	p {
		font-size: 2.7rem;
	}
`

const IndexPage: React.FC<PageProps> = (PageProps) => {
	const earthSymbol: Array<string> = ["🌍", "🌏", "🌎", "🪐", "🪩"]
	const [earthCount, setEarthCount] = useState<number>(0)

	useEffect(() => {
		const animation = setInterval(() => {
			setEarthCount((count) => (count + 1) % earthSymbol.length)
		}, 200)

		return () => {
			clearInterval(animation)
		}
	}, [])

	return (
		<PageLayout PageProps={PageProps}>
			<PageSection>
				<IntroductionArticle>
					<h1>Hello, World {earthSymbol[earthCount]} I'm Niklas Buhl!</h1>
					<p>
						I work as a Full-stack Software Engineer at IBM Client Innovation
						Center by day.
						<br />I studied Embedded Systems Engineering and Design Engineering.
					</p>
					<p style={{ color: colors.neonPurple.hsl().string() }}>
						By night I am a creative coder, new media artisan, maker,
						environmentalist and technology literacy and ethics
						advocate/activist.
					</p>
					<p style={{ color: colors.coralOrange.hsl().string() }}>
						As a passionate surfer I live in a remote corner of Denmark called
						Thy, where I follow the rhythm of the sea.
					</p>
				</IntroductionArticle>
			</PageSection>
		</PageLayout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
