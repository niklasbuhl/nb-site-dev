import { styled } from "styled-components"

interface IMainContent {
	$topMargin: string
	$bottomMargin: string
}

const MainContent = styled.main<IMainContent>`
	// Display
	display: flex;
	justify-content: center;
	flex-direction: column;

	// Margin (only for mainContent type)
	${(props) =>
		props.$topMargin ? "margin-top: " + props.$topMargin + ";" : ""}
	${(props) =>
		props.$bottomMargin ? "margin-bottom: " + props.$bottomMargin + ";" : ""}
`

export default MainContent
