import React, { useContext, useEffect, useState } from "react"
import { StyledButton, StyledLink } from "./navLink.styles"
import EventContext from "../../../contexts/event.context"
import LayoutContext from "../../../contexts/layout.context"
import ThemeContext from "../../../contexts/theme.context"
import { RuleSet } from "styled-components"
import { Styles } from "styled-components/dist/types"

interface INavLink {
	to?: string
	onClick?: () => void
	$active?: boolean
	children: React.ReactNode
	activeStyle?: Styles<object>
	activeLinkStyle?: Styles<object>
}

const NavLink: React.FC<INavLink> = ({
	children,
	to = undefined,
	$active,
	onClick = undefined,
	activeStyle,
	activeLinkStyle,
}) => {
	const { typography } = useContext(ThemeContext)

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
					$active={$active}
					$activeStyle={activeStyle}
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
