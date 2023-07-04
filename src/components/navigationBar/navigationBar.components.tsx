import React, { useContext, useEffect, useState } from "react"
import { Nav } from "./navigationBar.styles"
import EventContext from "../../contexts/event.context"

const NavigationBar: React.FC = (location) => {
	const { view } = useContext(EventContext)

	return <Nav>Navigation Bar</Nav>
}

export default NavigationBar
