import React from "react"

interface ILayoutContext {
	layout: {
		getHeroHeaderHeightNumber: () => number
		getHeroHeaderHeightCSS: () => string
		setHeroHeaderHeight: (height: string | number) => void
	}
}

const layoutDefaultState: ILayoutContext = {
	layout: {
		getHeroHeaderHeightNumber: () => 0,
		getHeroHeaderHeightCSS: () => "",
		setHeroHeaderHeight: () => {},
	},
}

const LayoutContext = React.createContext<ILayoutContext>(layoutDefaultState)

interface ILayoutProvider {
	children: React.ReactNode
}

export const LayoutProvider: React.FC<ILayoutProvider> = ({ children }) => {
	const getHeroHeaderHeightCSS = () => {
		const height = getComputedStyle(document.documentElement).getPropertyValue(
			"--hero-header-height"
		)

		return height
	}

	const getHeroHeaderHeightNumber = () => {
		const height = getComputedStyle(document.documentElement).getPropertyValue(
			"--hero-header-height"
		)

		if (height.includes("px")) {
			return parseInt(height, 10)
		} else if (height.includes("vh")) {
			const vh = window.innerHeight
			const percentage = parseFloat(height.replace("vh", "").trim())
			return (vh * percentage) / 100
		} else {
			return 0
		}
	}

	const setHeroHeaderHeight = (height: string | number) => {
		if (typeof height === "number") {
			height = height.toString() + "px"
		}

		document.documentElement.style.setProperty("--hero-header-height", height)
	}

	const layout = {
		getHeroHeaderHeightNumber,
		getHeroHeaderHeightCSS,
		setHeroHeaderHeight,
	}

	return (
		<LayoutContext.Provider value={{ layout }}>
			{children}
		</LayoutContext.Provider>
	)
}

export default LayoutContext
