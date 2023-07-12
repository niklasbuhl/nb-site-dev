import Color from "color"

interface IColors {
	[key: string]: Color
}

const colors: IColors = {
	// Neon
	neonGreen: Color.rgb([58, 255, 90]),
	neonLime: Color.rgb([200, 255, 36]),
	neonYellow: Color.rgb([239, 255, 1]),
	neonRed: Color.rgb([244, 71, 37]),
	neonBlue: Color.rgb([41, 0, 251]),
	neonPurple: Color.rgb([83, 1, 255]),
	neonPink: Color.rgb([255, 5, 113]),

	// Grayscale
	hardWhite: Color.rgb([255, 255, 255]),
	superLightGray: Color([250, 251, 252]),
	lightGray: Color([243, 243, 243]),
	gray: Color([218, 213, 217]),
	darkGray: Color([85, 86, 85]),
	superDarkGray: Color([33, 34, 36]),
	softBlack: Color([17, 17, 17]),
	hardBlack: Color.rgb([0, 0, 0]),

	// Coral
	coralOrange: Color.rgb([255, 96, 96]),
	// Blue
	// Green
}

export default colors
