import React, { useContext, useEffect, useState } from "react"
import { StyledButton, StyledLink } from "./navLink.styles"
import EventContext from "../../../contexts/event.context"
import LayoutContext from "../../../contexts/layout.context"
import { RuleSet, css } from "styled-components"

interface INavLink {
	to?: string
	onClick?: () => void
	active?: boolean
	activeStyle?: RuleSet
	children: React.ReactNode
}

const NavLink: React.FC<INavLink> = ({
	children,
	to = undefined,
	active,
	activeStyle,
	onClick = undefined,
}) => {
	const { view } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)
	const [activeLinkStyle, setActiveLinkStyle] = useState<RuleSet>()

	const goToTop = () => {
		// Instant scroll to the last position
		window.scrollTo(0, view.scroll)

		// Smoothly scroll the rest of the distance smoothly
		window.scrollTo({
			top: layout.getHeroHeaderHeightPixel(),
			behavior: "smooth",
		})
	}

	// Set active style for Links
	useEffect(() => {
		// Above heroheader edge
		if (view.scroll < layout.getHeroHeaderHeightPixel() / 2) {
			setActiveLinkStyle(undefined)

			// Below
		} else {
			setActiveLinkStyle(activeStyle)
		}
	}, [view.scroll])

	return (
		<React.Fragment>
			{to !== undefined ? (
				<StyledLink
					activeStyle={activeLinkStyle}
					partiallyActive={true}
					to={to}
					onClick={goToTop}
				>
					{children}
				</StyledLink>
			) : onClick !== undefined ? (
				<StyledButton
					onClick={onClick}
					// Above hero header
					active={active}
					activeStyle={activeStyle}
				>
					{children}
				</StyledButton>
			) : (
				<StyledButton disabled>{children}</StyledButton>
			)}
		</React.Fragment>
	)
}

export default NavLink
