import React, { useContext, useEffect, useState } from "react"
import { DesktopMenu, Menu, MobileMenu, Nav } from "./navigationBar.styles"
import EventContext, { DisplayType } from "../../contexts/event.context"
import LayoutContext from "../../contexts/layout.context"
import NavLink from "./navLink/navLink.components"
import LogoText from "./logoText/logoText.component"
import LogoGraphic from "./logoGraphic/logo.component"
import { MoreVertical, X } from "lucide-react"
import ThemeContext from "../../contexts/theme.context"

const NavigationBar: React.FC = () => {
	const { view, location } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)
	const { typography } = useContext(ThemeContext)

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
			(location?.pathname === "/" || // index
				location?.pathname === undefined || // undefined at first load
				location?.pathname === "/nb-website-dev/") // dev site
		) {
			setTimeout(() => setHideTextLogo(true), 500)
		} else {
			setHideTextLogo(false)
		}
	}, [view.scroll, location?.pathname])

	// Toggle hide/show the mobile menu
	const toggleMenu = () => {
		// if (view.scroll < layout.getHeroHeaderHeightPixel()) {
		const topPosition = layout.getHeroHeaderHeightPixel()

		setTimeout(
			() =>
				window.scrollTo({
					top: topPosition,
					behavior: "smooth",
				}),
			10
		)

		// }

		// Toggle Show Menu
		setShowMobileMenu(!showMobileMenu)
	}

	// Disable Scrolling when menu is shown
	useEffect(() => {
		if (view.display === DisplayType.Mobile)
			layout.disableScroll(showMobileMenu)
	}, [showMobileMenu])

	// Hide mobile menu is display changes
	useEffect(() => {
		if (view.display !== DisplayType.Mobile) {
			setShowMobileMenu(false)
			layout.disableScroll(false)
		}
	}, [view.display])

	// Scroll to top
	const goToTop = () => {
		const topPosition = layout.getHeroHeaderHeightPixel()

		// If in the mobile menu, hide menu if the same page is clicked
		if (view.display === DisplayType.Mobile) {
			setShowMobileMenu(false)
			setTimeout(
				() =>
					window.scrollTo({
						top: topPosition,
						behavior: "smooth",
					}),
				100
			)
		}

		// Instant scroll to the last position
		if (view.display !== DisplayType.Mobile) {
			window.scrollTo(0, view.scroll)
			window.scrollTo({
				top: topPosition,
				behavior: "smooth",
			})
		}

		// Smoothly scroll the rest of the distance smoothly
		// window.scrollTo({
		// 	top: layout.getHeroHeaderHeightPixel(),
		// 	behavior: "smooth",
		// })

		console.log(
			`getHeroHeaderHeightPixel: ${layout.getHeroHeaderHeightPixel()}`
		)
	}

	// Scroll to hero header / Contact
	const scrollToHeroHeader = () => {
		// If in the mobile menu, hide menu if the same page is clicked
		if (view.display === DisplayType.Mobile) {
			setShowMobileMenu(false)
		}

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	const Logo: React.ReactNode = (
		<LogoGraphic
			typography={typography.navigationBar}
			activeStyle={typography.navigationBarActive}
			onClick={goToTop}
			to="/"
		/>
	)

	const menu: React.ReactNode = (
		<Menu display={view.display}>
			<NavLink onClick={goToTop} to="/projects">
				Projects
			</NavLink>
			<NavLink>Writings</NavLink>
			<NavLink>About</NavLink>
			<NavLink
				onClick={scrollToHeroHeader}
				active={view.scroll < layout.getHeroHeaderHeightPixel() / 2}
			>
				Contact
			</NavLink>
		</Menu>
	)

	return (
		<Nav
			hidden={hideNav}
			height={
				view.display === DisplayType.Mobile && showMobileMenu
					? "100vh"
					: layout.navigationBarHeight
			}
			showMobileMenu={showMobileMenu}
		>
			{view.display === DisplayType.Mobile ? (
				<MobileMenu>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						{Logo}
						<NavLink onClick={toggleMenu}>
							{showMobileMenu ? <X size={20} /> : <MoreVertical size={20} />}
						</NavLink>
					</div>
					{showMobileMenu ? menu : null}
				</MobileMenu>
			) : (
				<DesktopMenu
					display={view.display}
					width={layout.pageWidth}
					gutter={layout.gutter}
				>
					<div style={{ display: "flex" }}>
						{Logo}
						<LogoText
							onClick={goToTop}
							to="/"
							hideTextLogo={hideTextLogo}
							pathname={location?.pathname || ""}
							typography={typography.navigationBar}
							activeStyle={typography.navigationBarActive}
						>
							Niklas Buhl
						</LogoText>
					</div>
					{menu}
				</DesktopMenu>
			)}
		</Nav>
	)
}

export default NavigationBar
