interface ITypefaces {
	[key: string]: string
}

const typefaces: ITypefaces = {
	code: "'Space Mono', monospace",
	articleHeader: "'Space Grotesk', sans-serif",
	navigationBar: "'Space Grotesk', sans-serif",
	header: "'Space Grotesk', sans-serif",
	tech: "'OCR', monospace",
	paragraph: "'Charter', serif",
}

export default typefaces

/*

export const typefaces = css`
	// Laser84
	// @import url("https://fonts.cdnfonts.com/css/lazer84");

	// Headers 1 (Sans) Swansea
	// @import url("https://fonts.cdnfonts.com/css/swansea?styles=32249,32248,32247,32246");

	// Headers 2 (Sans) SpaceText
	@import url("https://fonts.cdnfonts.com/css/space-text");

	// Text (Serif)

	// Electronics
	@import url("https://fonts.cdnfonts.com/css/ocr-a-bt");

	// @import url("https://fonts.cdnfonts.com/css/islandvari");



export const laserFont = css`
	font-family: "lazer84", sans-serif;
`
export const techFont = css`
	// font-family: "ISL_Andvari", sans-serif;
	font-family: "OCR-A BT", sans-serif;
`
*/
