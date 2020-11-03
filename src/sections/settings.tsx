import Input from 'components/Input'
import React from 'react'
import './settings.css'
import {TPrize} from 'types/TPrize'
import {apiPostImage} from 'util/images'

type TProps = {
    prizes: TPrize[],
    setPrizes: (prizes: TPrize[]) => void,
}

async function handleImageUpload (image: File, prize: TPrize, prizeIndex: number, prizes: TPrize[], setPrizes: (prizes: TPrize[]) => void) {
    const imageUrl = await apiPostImage(image)
    const newPrizes = prizes.map((item, index) => {
        if (index === prizeIndex) {
            return {
                ...prize,
                image: imageUrl,
            }
        }
        return item
    })
    setPrizes(newPrizes)
}

const Settings: React.FC<TProps> = ({prizes, setPrizes}) => {
    const [shouldUseNames, setShouldUseNames] = React.useState(true)
    const [prizeName, setPrizeName] = React.useState('')

    return (
        <div className={'settings'}>
            <div style={{width: '25%', borderRight: '1px solid lightgray'}}>
                <div className={'settings__buttons'}>
                    <div
                        className={'button button--names'}
                        onClick={() => setShouldUseNames(!shouldUseNames)}
                        style={{
                            background: shouldUseNames ? 'lightgreen' : 'red'
                        }}
                    >
                        ZAPISOVAT JMÉNA
                    </div>
                    <button
                        className={'button button--clear'}
                    >
                        PROMAZAT VŠE
                    </button>
                </div>
                <div>
                    <Input
                        value={prizeName}
                        onChange={(value) => setPrizeName(String(value))}
                        label={'Přidat odměnu'}
                        onSubmit={() => {
                            setPrizes([...prizes, {name: prizeName, image: '', count: 1}])
                            setPrizeName('')
                        }}
                        isSubmitDisabled={prizeName.length < 1}
                    />
                </div>
            </div>

            <div style={{width: '75%'}}>
                <div>
                    <div>Seznam odměn</div>
                    <div className={'settings__prizes-wrapper'}>
                        {prizes.length ? prizes.map((item, index) => (
                            <div
                                key={`${item.name}_${index}`}
                                className={'settings__prize-item'}
                            >
                                <b>{item.name}</b>
                                {item.image ? (
                                    <img src={item.image} width={200} height={120} />
                                ) : (
                                    <input
                                        type='file'
                                        onChange={(ev) => ev.target.files && handleImageUpload(ev.target.files[0], item, index, prizes, setPrizes)}
                                    />
                                )}
                                <button
                                    className={'button button--small button--names'}
                                    onClick={() => {
                                        setPrizes([...prizes, item])
                                    }}
                                >
                                    DUPLIKOVAT
                                </button>
                                <button
                                    className={'button button--small button--danger'}
                                    onClick={() => {
                                        setPrizes(
                                            prizes.filter((item, itemIndex) => itemIndex !== index)
                                        )
                                    }}
                                >
                                    SMAZAT
                                </button>
                            </div>
                        )) : '...'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
