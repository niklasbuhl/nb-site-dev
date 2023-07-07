import React, { useContext } from "react"
import { Section } from "./credits.styles"
import ThemeContext from "../../contexts/theme.context"

import { CSSProperties } from "react"
import { Styles } from "styled-components/dist/types"

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
				<span style={typography.tech as CSSProperties}>
					Copyrights {new Date().getFullYear()} Niklas Buhl
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
