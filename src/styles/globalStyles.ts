import { createGlobalStyle } from "styled-components"
import { reset } from "./reset"
// import { fonts } from "./fonts"

export const GlobalStyles = createGlobalStyle`
    ${reset}

	:root {
		--disable-scroll: visible;
	}

	body {
  		overflow: var(--disable-scroll);
	}
`
