import React from 'react'
import './input.css'

type TProps = {
	value: string | number,
	onChange: (value: string | number) => void,
	label: string,
	onSubmit?: () => void,
	isSubmitDisabled?: boolean,
}

const Input: React.FC<TProps> = ({value, onChange, label, onSubmit, isSubmitDisabled = false}) => {
    return (
        <div className={'input'}>
           <div className={'input__label'}>{label}</div>
	       <div className={'input__input-wrapper'}>
		       <input
		            value={value}
		            className={'input__input'}
		            onChange={(event) => onChange(event.currentTarget.value)}
		       />
		       {onSubmit && (
		       	    <button
			            onClick={onSubmit}
			            className={'input__button'}
			            disabled={isSubmitDisabled}
		            >
			            ODESLAT
		            </button>
		       )}
	       </div>
        </div>
    )
}

export default Input
