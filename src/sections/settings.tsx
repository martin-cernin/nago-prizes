import Input from 'components/Input'
import React from 'react'
import './settings.css'

type TProps = {
    prizes: string[],
    setPrizes: (prizes: string[]) => void,
}

const Settings: React.FC<TProps> = (props) => {
    const [columnCount, setColumnCount] = React.useState(4)
    const [customBackground, setCustomBackground] = React.useState('')
    const [shouldUseNames, setShouldUseNames] = React.useState(true)
    const [prizeName, setPrizeName] = React.useState('')
    const {prizes, setPrizes} = props

    return (
        <div className={'settings'}>
            <div style={{width: '25%', borderRight: '1px solid lightgray'}}>
                <div>
                    <Input
                        value={prizeName}
                        onChange={(value) => setPrizeName(String(value))}
                        label={'Přidat odměnu'}
                        onSubmit={() => {
                            setPrizes([...prizes, prizeName])
                            setPrizeName('')
                        }}
                    />
                </div>
                <div>
                    <Input
                        value={columnCount}
                        onChange={(value) => setColumnCount(Number(value))}
                        label={'Počet sloupců'}
                    />
                </div>
                <div>
                    <Input
                        value={customBackground}
                        onChange={(value) => setCustomBackground(String(value))}
                        label={'Custom pozadí'}
                    />
                </div>
                <div className={'settings__buttons'}>
                    <div
                        className={'button button--names'}
                        onClick={() => setShouldUseNames(!shouldUseNames)}
                        style={{
                            background: shouldUseNames ? 'lightgreen' : 'red'
                        }}
                    >
                        VYŽADOVAT JMÉNA
                    </div>
                    <button
                        className={'button button--clear'}
                    >
                        PROMAZAT
                    </button>
                    <button className={'button button--import button--disabled'}>IMPORT</button>
                    <button className={'button button--export button--disabled'}>EXPORT</button>
                </div>
            </div>

            <div style={{width: '75%'}}>
                <div>
                    <div>Seznam odměn</div>
                    <div>
                        {prizes.length ? prizes.map((item, index) => (
                            <div key={`${item}_${index}`}>
                                {item}
                            </div>
                        )) : '...'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
