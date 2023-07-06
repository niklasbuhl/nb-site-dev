import React, { useContext } from "react"
import { Section } from "./credits.styles"
import ThemeContext from "../../contexts/theme.context"

import { CSSProperties } from "react"
import { Styles } from "styled-components/dist/types"

const convertStylesToCSSProperties = (
	styles: Styles<object>
): CSSProperties => {
	return styles as CSSProperties
}

const Credits: React.FC = () => {
	const { typography } = useContext(ThemeContext)

	return (
		<Section>
			<div>
				{/* <span>IBM CIC</span>
				<span>Cybernauterne</span>
				<span>Kintsugi Design</span>
				<span>Model</span> */}
			</div>
			<div>
				<span style={convertStylesToCSSProperties(typography.tech)}>
					Niklas Buhl (c) {new Date().getFullYear()}
				</span>
			</div>
			<div>
				{/* <span>Instagram</span>
				<span>LinkedIn</span>
				<span>Twitter</span>
				<span>GitHub</span> */}
			</div>
		</Section>
	)
}

export default Credits
