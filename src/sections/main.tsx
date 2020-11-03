import React from 'react'
import './main.css'
import {TPrize} from 'types/TPrize'

type TProps = {
    prizes: TPrize[],
    setPrizes: (prizes: TPrize[]) => void,
}

const Item = (prize: TPrize, index: number) => {
    const [isSelected, setIsSelected] = React.useState(false)
    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`main__item${isSelected ? ' main__item--selected' : ''}`}
            key={`${prize.name}_${index}`}
        >
            <b>{prize.name}</b>
            {prize.image && <img src={prize.image} width={200} height={120} />}
        </div>
    )
}

const Main: React.FC<TProps> = ({prizes}) => {
    return (
        <div className={'main'}>
            {prizes.map(Item)}
            {/*vypis odmen, moznost klikonut na ne, vyplnovat jmena vyherce*/}
        </div>
    )
}

export default Main
