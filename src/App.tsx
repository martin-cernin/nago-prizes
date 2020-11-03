import React from 'react'
import Main from 'sections/main'
import Settings from 'sections/settings'
import {TPrize} from 'types/TPrize'

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
	const [isSettings, setIsSettings] = React.useState(true)
	const [prizes, setPrizes] = React.useState<TPrize[]>([])
	handleWheelEvent(setIsSettings)

	return isSettings
		? <Settings prizes={prizes} setPrizes={setPrizes} />
		: <Main prizes={prizes} setPrizes={setPrizes} />
}

export default App
