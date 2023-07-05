import React, { useContext, useState } from "react"
import EventContext from "./event.context"

interface ILayoutContext {
	layout: {
		heroHeaderHeight: string
		getHeroHeaderHeightPixel: () => number
		setHeroHeaderHeight: (height: string | number) => void
		pageWidth: string
		gutter: string
		mainGutter: string
		mainTopMargin: string
		mainBottomMargin: string
		navigationBarHeight: string
		disableScroll: (disable: boolean) => void
	}
}

const layoutDefaultState: ILayoutContext = {
	layout: {
		heroHeaderHeight: "480px",
		getHeroHeaderHeightPixel: () => {
			return 0
		},
		setHeroHeaderHeight: () => {},
		pageWidth: "960px",
		gutter: "16px",
		mainGutter: "48px",
		mainTopMargin: "-48px",
		mainBottomMargin: "-48px",
		navigationBarHeight: "48px",
		disableScroll: () => {},
	},
}

const LayoutContext = React.createContext<ILayoutContext>(layoutDefaultState)

interface ILayoutProvider {
	children: React.ReactNode
}

export const LayoutProvider: React.FC<ILayoutProvider> = ({ children }) => {
	const { view } = useContext(EventContext)

	const [heroHeaderHeight, setHeroHeaderHeightCSS] = useState<string>(
		layoutDefaultState.layout.heroHeaderHeight
	)
	const [pageWidth] = useState<string>(layoutDefaultState.layout.pageWidth)
	const [gutter] = useState<string>(layoutDefaultState.layout.gutter)
	const [mainGutter] = useState<string>(layoutDefaultState.layout.mainGutter)
	const [mainTopMargin] = useState<string>(
		layoutDefaultState.layout.mainTopMargin
	)
	const [mainBottomMargin] = useState<string>(
		layoutDefaultState.layout.mainBottomMargin
	)
	const [navigationBarHeight] = useState<string>(
		layoutDefaultState.layout.navigationBarHeight
	)

	// Convert a css string to a pixel
	const cssPixel = (value: string) => {
		if (value.includes("px")) {
			return parseInt(value, 10)
		} else if (value.includes("vh")) {
			const vh = view.height
			const percentage = parseFloat(value.replace("vh", "").trim())
			return (vh * percentage) / 100
		} else if (value.includes("vw")) {
			const vw = view.width
			const percentage = parseFloat(value.replace("vw", "").trim())
			return (vw * percentage) / 100
		} else {
			return parseInt(value, 10)
		}
	}

	const getHeroHeaderHeightPixel = () => {
		return cssPixel(heroHeaderHeight)
	}

	const setHeroHeaderHeight = (height: number | string) => {
		if (typeof height === "string") setHeroHeaderHeightCSS(height)
		else setHeroHeaderHeightCSS(height.toString() + "px")
	}

	const disableScroll = (disable: boolean) => {
		if (disable) {
			document.documentElement.style.setProperty("--disable-scroll", "hidden")
		} else {
			document.documentElement.style.setProperty("--disable-scroll", "visible")
		}
	}

	const layout = {
		heroHeaderHeight,
		getHeroHeaderHeightPixel,
		setHeroHeaderHeight,
		pageWidth,
		gutter,
		mainGutter,
		mainTopMargin,
		mainBottomMargin,
		navigationBarHeight,
		disableScroll,
	}

	return (
		<LayoutContext.Provider value={{ layout }}>
			{children}
		</LayoutContext.Provider>
	)
}

export default LayoutContext
