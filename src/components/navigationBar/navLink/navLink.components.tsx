import React, { useContext, useEffect, useState } from "react"
import { StyledButton, StyledLink } from "./navLink.styles"
import EventContext from "../../../contexts/event.context"
import LayoutContext from "../../../contexts/layout.context"
import ThemeContext from "../../../contexts/theme.context"

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
	const { typography } = useContext(ThemeContext)
	const [activeLinkStyle, setActiveLinkStyle] = useState<object>({})
	const activeStyle = typography.navigationBarActive

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
					typography={typography.navigationBar}
				>
					{children}
				</StyledLink>
			) : onClick !== undefined ? (
				<StyledButton
					onClick={onClick}
					// Above hero header
					active={active}
					activeStyle={activeStyle}
					typography={typography.navigationBar}
				>
					{children}
				</StyledButton>
			) : (
				<StyledButton typography={typography.navigationBar} disabled>
					{children}
				</StyledButton>
			)}
		</React.Fragment>
	)
}

export default NavLink
