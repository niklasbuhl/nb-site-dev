import React from "react"
import EventProvider from "./src/contexts/event.context"

export const wrapRootElement = ({ element }) => {
	return (
		<React.Fragment>
			<EventProvider>{element}</EventProvider>
		</React.Fragment>
	)
}
