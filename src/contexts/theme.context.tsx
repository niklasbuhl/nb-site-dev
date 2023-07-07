import React, { useState } from "react"
import { Styles } from "styled-components/dist/types"
import Color from "color"

interface IThemeContext {
	typography: {
		navigationBar: Styles<object>
		navigationBarActive: Styles<object>
		tech: Styles<object>
	}
	color: {
		purple: Color
		white: Color
		black: Color
	}
}

const colors = {
	purple: Color.rgb([83, 1, 255]),
	white: Color.rgb([255, 255, 255]), // TODO better white
	black: Color.rgb([0, 0, 0]), // TODO better black
}

const themeDefaultState: IThemeContext = {
	typography: {
		navigationBar: {
			fontFamily: "'Space Grotesk', sans-serif",
			// fontFamily: "'space-text', sans-serif",
			textDecoration: "none",
			fontWeight: "500",
			fontSize: "1rem",
			color: colors.black.hsl().string(),
		},
		navigationBarActive: {
			color: colors.purple.hsl().string(),
		},
		tech: {
			fontFamily: "'OCR', sans-serif",
			fontWeight: "400",
			fontSize: "0.8rem",
		},
	},
	color: {
		purple: colors.purple,
		white: colors.white,
		black: colors.black,
	},
}

const ThemeContext = React.createContext<IThemeContext>(themeDefaultState)

interface IThemeProvider {
	children: React.ReactNode
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
	// const theme: IThemeContext = themeDefaultState
	const [typography, setTypography] = useState(themeDefaultState.typography)
	const [color, setColor] = useState(themeDefaultState.color)

	return (
		<ThemeContext.Provider value={{ typography, color }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext
