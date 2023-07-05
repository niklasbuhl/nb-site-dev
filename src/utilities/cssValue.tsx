class cssValue {
	value: string

	constructor(value: string) {
		this.value = value
	}

	str() {
		return this.value.toString()
	}

	num(w?: number, h?: number) {
		// View width
		if (this.value.includes("vw") && w) {
			return parseFloat(this.value) * w
		}

		// View height
		else if (this.value.includes("vh") && h) {
			return parseFloat(this.value) * h
		}

		// px
		return parseFloat(this.value)
	}
}
