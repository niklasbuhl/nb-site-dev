import styled from "styled-components"
import elementStyles from "../../styles/elementStyles"
import { DisplayType } from "../../contexts/event.context"
import React from "react"

interface INav {
	hidden: boolean
	height: string
	$showMobileMenu: boolean
}

export const Nav = styled.nav<INav>`
	${elementStyles.pageSection}
	height: ${(props) => props.height};
	position: sticky;
	top: 0;
	z-index: 1337;
	overflow: hidden;
	animation-timing-function: ease-in;
	transition: transform 0.2s, height 0.3s ease;
	${(props) => (props.hidden ? `transform: translateY(-96px);` : "")}
	${(props) => (props.$showMobileMenu ? "background: white;" : "")}
`

interface IDesktopMenu {
	width: string
	gutter: string
	display?: DisplayType
}

export const DesktopMenu = styled.div<IDesktopMenu>`
	display: flex;
	justify-content: space-between;
	width: calc(
		100vw -
			${(props) => (props.display === DisplayType.Mobile ? "0" : props.gutter)} *
			2
	);
	padding-left: ${(props) =>
		props.display === DisplayType.Mobile ? 0 : props.gutter};
	padding-right: ${(props) =>
		props.display === DisplayType.Mobile ? 0 : props.gutter};
	max-width: calc(${(props) => props.width + " - " + props.gutter + " * 2"});
`

interface IMenu {
	children: React.ReactNode
	display: DisplayType
}

export const Menu = styled.div<IMenu>`
	display: flex;
	flex-direction: ${(props) =>
		props.display !== DisplayType.Mobile ? "row" : "column"};
`

interface IMobileMenu {}

export const MobileMenu = styled.div<IMobileMenu>`
	display flex;
	flex-direction: column;
	width: 100%;
`
