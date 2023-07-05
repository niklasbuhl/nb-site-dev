import React, { useContext, useEffect, useState } from "react"
import { ActiveStyle, StyledButton, StyledLink } from "./navLink.styles"
import EventContext from "../../../contexts/event.context"
import LayoutContext from "../../../contexts/layout.context"
import { RuleSet, css } from "styled-components"

interface INavLink {
	to?: string
	onClick?: () => void
	active?: boolean
	children: React.ReactNode
}

const NavLink: React.FC<INavLink> = ({
	children,
	to = undefined,
	active,
	onClick = undefined,
}) => {
	const { view } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)
	const [activeLinkStyle, setActiveLinkStyle] = useState<object>({})
	const activeStyle = {
		color: "cyan",
	}

	// Set active style for Links
	useEffect(() => {
		// Above heroheader edge
		if (view.scroll < layout.getHeroHeaderHeightPixel() / 2) {
			setActiveLinkStyle({})

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
					onClick={onClick}
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
