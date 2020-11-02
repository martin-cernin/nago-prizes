import React from 'react'
import Main from 'sections/main'
import Settings from 'sections/settings'

function handleWheelEvent (setIsSettings: (isSettings: boolean) => void) {
	document.addEventListener('wheel', (event) => {
		const {deltaY} = event

		if (deltaY > 99) {
			setIsSettings(true)
		} else if (deltaY < -99) {
			setIsSettings(false)
		}
	})
}

function App() {
	const [isSettings, setIsSettings] = React.useState(false)
	const [prizes, setPrizes] = React.useState<string[]>([])

	handleWheelEvent(setIsSettings)

	return isSettings
		? <Settings prizes={prizes} setPrizes={setPrizes} />
		: <Main prizes={prizes} setPrizes={setPrizes} />
}

export default App
