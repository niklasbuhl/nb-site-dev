import React from "react"
import EventProvider from "./src/contexts/event.context"

export const wrapPageElement = ({ element }) => {
	return <EventProvider>{element}</EventProvider>
}
