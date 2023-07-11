import React, { useState } from "react"
import { RuleSet, Styles } from "styled-components/dist/types"
import Color from "color"
import colors from "../styles/colors"
import { css } from "styled-components"
import writingTypographies from "../styles/writingTypographies"
import typographies from "../styles/typographies"

interface IThemeContext {
	typography: {
		navigationBar: Styles<object>
		navigationBarActive: Styles<object>
		tech: Styles<object>
		code: Styles<object>
	}
	typographyStyle: {
		writing: Styles<object>
	}
	color: {
		purple: Color
		white: Color
		black: Color
	}
}

const themeDefaultState: IThemeContext = {
	typography: {
		navigationBar: typographies.navigationBar,
		navigationBarActive: typographies.navigationBarActive,
		tech: typographies.tech,
		code: typographies.code as Styles<object>,
	},
	typographyStyle: {
		writing: writingTypographies as Styles<object>,
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
	const [typography, setTypography] = useState(themeDefaultState.typography)
	const [typographyStyle, setTypographyStyles] = useState(
		themeDefaultState.typographyStyle
	)
	const [color, setColor] = useState(themeDefaultState.color)

	return (
		<ThemeContext.Provider value={{ typography, typographyStyle, color }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext
