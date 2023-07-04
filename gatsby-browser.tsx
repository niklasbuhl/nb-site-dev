import React from "react"

export const wrapRootElement = ({ element }) => {
	return <React.Fragment>{element}</React.Fragment>
}
