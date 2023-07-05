import React, { useContext, useEffect, useState } from "react"
import { DesktopMenu, Nav } from "./navigationBar.styles"
import EventContext, { DisplayType } from "../../contexts/event.context"
import ContentWrapper from "../wrappers/content/contentWrapper.component"
import LayoutContext from "../../contexts/layout.context"
import NavLink from "./navLink/navLink.components"
import Logo from "./logoGraphic/logo.component"
import LogoText from "./logoText/logoText.component"
import LogoGraphic from "./logoGraphic/logo.component"

const NavigationBar: React.FC = () => {
	const { view, location } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)
	const [hideNav, setHideNav] = useState<boolean>(false)
	const [hideTextLogo, setHideTextLogo] = useState<boolean>(false)
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	// Hide navigation bar
	useEffect(() => {
		if (
			view.lastScroll > 0 &&
			view.scroll > layout.getHeroHeaderHeightPixel() + 100 &&
			!showMobileMenu
		)
			setHideNav(true)
		else setHideNav(false)
	}, [view.lastScroll])

	// Hide logo text
	// Check if the logo should be shown (on scroll) and only hide on front page when scrolled beyond "Hi I'm Niklas!".
	useEffect(() => {
		if (
			view.scroll <= view.height / 2 + layout.getHeroHeaderHeightPixel() &&
			(location?.pathname === "/" || location?.pathname === undefined) // undefined at first load
		) {
			setTimeout(() => setHideTextLogo(true), 500)
		} else {
			setHideTextLogo(false)
		}
	}, [view.scroll, location?.pathname])

	return (
		<Nav
			hidden={hideNav}
			height={
				view.display === DisplayType.Mobile && hideNav
					? "100vh"
					: layout.navigationBarHeight
			}
		>
			<DesktopMenu
				display={view.display}
				width={layout.pageWidth}
				gutter={layout.gutter}
			>
				<div style={{ display: "flex" }}>
					<LogoGraphic to="/" />
					<LogoText
						to="/"
						hideTextLogo={hideTextLogo}
						pathname={location?.pathname || ""}
					>
						Niklas Buhl
					</LogoText>
				</div>
				<div style={{ display: "flex" }}>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink>Writings</NavLink>
					<NavLink>About</NavLink>
					<NavLink>Contact</NavLink>
				</div>
			</DesktopMenu>
		</Nav>
	)
}

export default NavigationBar
