import React from "react"
import { EventProvider } from "./src/contexts/event.context"
import { LayoutProvider } from "./src/contexts/layout.context"

export const wrapRootElement = ({ element }) => {
	return (
		<EventProvider>
			<LayoutProvider>{element}</LayoutProvider>
		</EventProvider>
	)
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
	return false
}
