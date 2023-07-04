import React from "react"
import EventProvider from "./src/contexts/event.context"

export const wrapRootElement = ({ element }) => {
	return <EventProvider>{element}</EventProvider>
}
