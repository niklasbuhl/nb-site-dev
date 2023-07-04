import { createGlobalStyle } from "styled-components"
import reset from "./reset"
// import { fonts } from "./fonts"
import root from "./root"

export const GlobalStyles = createGlobalStyle`
    ${reset}
	${root}
	
	body {
  		overflow: var(--disable-scroll);
	}
`
