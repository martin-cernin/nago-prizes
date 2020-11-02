import React from 'react'
import './main.css'

type TProps = {
    prizes: string[],
    setPrizes: (prizes: string[]) => void,
}

const Item = (prize: string, index: number) => {
    const [isSelected, setIsSelected] = React.useState(false)
    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`main__item${isSelected ? ' main__item--selected' : ''}`}
            key={`${prize}_${index}`}
        >
            {prize}
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
