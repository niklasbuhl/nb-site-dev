import React from "react"
import { GlobalStyles } from "./src/styles/globalStyles"

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			{element}
		</React.Fragment>
	)
}
