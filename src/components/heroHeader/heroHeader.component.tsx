import React, { useContext, useEffect, useState } from "react"
import EventContext from "../../contexts/event.context"
import LayoutContext from "../../contexts/layout.context"
import { Section } from "./heroHeader.styles"
import ThemeContext from "../../contexts/theme.context"
import PageSection from "../pageSection/pageSection.component"
import colors from "../../styles/colors"
import { Link } from "gatsby"

const HeroHeader: React.FC = () => {
	const { layout } = useContext(LayoutContext)
	const { view, location, mouse } = useContext(EventContext)
	const { color } = useContext(ThemeContext)

	// const [encrypedEmail, setEncryptedEmail] = useState<string>(
	// 	"4UTTN@kAtTXHv04T.qNQ"
	// )

	const [encrypedEmail, setEncryptedEmail] = useState<string>(
		"9Laze7:jRzz7@dawzLD0Ojz.g79"
	)

	const [encryptedPhone, setEncryptedPhone] =
		useState<string>("xh3:+AJv1o47iAA")
	const [decryptedPhone, setDecryptedPhone] = useState<string>("")

	const [decryptedEmail, setDecryptedEmail] = useState<string>("")

	const [mouseMovementCount, setMouseMovementCount] = useState<number>(0)

	// Scroll beyond heroheader
	useEffect(() => {
		if (
			location?.pathname === undefined ||
			view.scroll === layout.getHeroHeaderHeightPixel()
		) {
			// Instant scroll to the navigationbar on refresh
			window.scrollTo(0, layout.getHeroHeaderHeightPixel())
		} else {
			// Instant scroll to the last position
			window.scrollTo(0, view.scroll)

			// Smoothly scroll the rest of the distance smoothly
			window.scrollTo({
				top: layout.getHeroHeaderHeightPixel(),
				behavior: "smooth",
			})
		}
	}, [])

	useEffect(() => {
		// console.log(`mouse x: ${mouse.position.x}, ${mouse.position.x}`)

		if (encrypedEmail.length || encryptedPhone.length) {
			const count: number = mouseMovementCount + 1
			setMouseMovementCount(count)
		}
	}, [mouse.position])

	//

	useEffect(() => {
		// const key = "tyPq2bmXOBzGNhZp9gwf78nDlvQRMCLis4FurKeJYjkETcx5Ia6AH3o0SVUWd1"
		const key = "j5m8UHIA7cSlXpaPd0kGRuJMF16Nt9WEs3fhgQzZxLBoywCVOi2nbKYeq4TDvr"
		const shift = 27

		const phoneKey =
			"DYGWmLdw9vR8rjhsCINKHkT4Q07lStF5fOZzUyAp1i3uxXJacPbngVEo6qMB2e"

		const phoneShift = 15

		if (mouseMovementCount > 2) {
			// E-mail
			if (encrypedEmail.length) {
				var link = ""
				var enc = encrypedEmail
				var letter: string = enc.slice(0, 1)

				// https://web.archive.org/web/20180103001806/http://www.jottings.com/obfuscator/

				if (key.indexOf(letter) == -1) {
					var ltr: string = letter
					link += ltr
				} else {
					var ltrN: number =
						(key.indexOf(letter) - shift + key.length) % key.length
					link += key.charAt(ltrN)
				}

				enc = enc.slice(1)

				setEncryptedEmail(enc)
				setDecryptedEmail(decryptedEmail + link)
			} else if (encryptedPhone.length) {
				var call = ""
				var enc = encryptedPhone
				var num = enc.slice(0, 1)

				if (phoneKey.indexOf(num) == -1) {
					var ltr: string = num
					call += ltr
				} else {
					var ltrN: number =
						(phoneKey.indexOf(num) - phoneShift + phoneKey.length) %
						phoneKey.length
					call += phoneKey.charAt(ltrN)
				}

				enc = enc.slice(1)

				setEncryptedPhone(enc)
				setDecryptedPhone(decryptedPhone + call)
			}

			setMouseMovementCount(0)
		}
	}, [mouseMovementCount])

	return (
		// <Section
		// 	height={layout.heroHeaderHeight}
		// 	$backgroundColor={color.neonPurple.hsl().string()}
		// >
		// 	<h1>Hero Header</h1>
		// 	<p>
		// 		{encrypedEmail}
		// 		{decryptedEmail}
		// 	</p>
		// </Section>
		<PageSection
			height={layout.heroHeaderHeight}
			backgroundColor={color.neonPurple}
		>
			<p>Niklas Buhl</p>
			<p>Software Engineer @ IBM Client Innovation Center</p>
			<p>
				Email:{" "}
				<a href={!encrypedEmail.length ? decryptedEmail : ""}>
					<span style={{ color: colors.neonGreen.hsl().string() }}>
						{decryptedEmail.slice(7)}
					</span>
					<span style={{ color: colors.coralOrange.hsl().string() }}>
						{encrypedEmail.slice(7)}
					</span>
				</a>
			</p>
			<p>
				Signal:{" "}
				<a href={!encryptedPhone.length ? decryptedPhone : ""}>
					<span style={{ color: colors.neonGreen.hsl().string() }}>
						{decryptedPhone.slice(4)}
					</span>
					<span style={{ color: colors.coralOrange.hsl().string() }}>
						{encryptedPhone.slice(4)}
					</span>
				</a>
			</p>
			<p>
				{encrypedEmail.length || encryptedPhone.length ? (
					<span style={{ color: colors.neonLime.hsl().string() }}>
						{" "}
						(Move mouse to decrypt)
					</span>
				) : null}
			</p>
			<p>
				Website: <Link to="/">niklasbuhl.com</Link>
			</p>
		</PageSection>
	)
}

export default HeroHeader
