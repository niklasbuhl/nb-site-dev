import React from "react"
import { EventProvider } from "./src/contexts/event.context"
import { LayoutProvider } from "./src/contexts/layout.context"
import { ThemeProvider } from "./src/contexts/theme.context"

export const wrapRootElement = ({ element }) => {
	return (
		<EventProvider>
			<LayoutProvider>
				<ThemeProvider>{element}</ThemeProvider>
			</LayoutProvider>
		</EventProvider>
	)
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
	return false
}
