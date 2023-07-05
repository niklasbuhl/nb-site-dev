import React, { useContext, useEffect, useState } from "react"
import EventContext from "../../contexts/event.context"
import LayoutContext from "../../contexts/layout.context"
import { Section } from "./heroHeader.styles"

const HeroHeader: React.FC = () => {
	const { layout } = useContext(LayoutContext)
	const { view, location } = useContext(EventContext)

	// Scroll beyond heroheader
	useEffect(() => {
		if (
			location?.pathname === undefined ||
			view.scroll === layout.getHeroHeaderHeightPixel()
		) {
			// Instant scroll to the navigationbar on refresh
			window.scrollTo(0, layout.getHeroHeaderHeightPixel())
		} else {
			// Instant scroll to the last position
			window.scrollTo(0, view.scroll)

			// Smoothly scroll the rest of the distance smoothly
			window.scrollTo({
				top: layout.getHeroHeaderHeightPixel(),
				behavior: "smooth",
			})
		}
	}, [])

	return (
		<Section height={layout.heroHeaderHeight}>
			<h1>Hero Header</h1>
		</Section>
	)
}

export default HeroHeader
