import React from 'react'

class Input extends React.Component {

    render() {

        const { showList, placeholder, inputIsEmpty, clearInput } = this.props
        const wrapperClassName = this.props.isActive ? 'input__wrapper input__wrapper_focus' : 'input__wrapper'
        const labelClassName = this.props.inputValue.length !== 0 ? 'select__label-text select__label-text_small' : 'select__label-text'

        return (       
            <div className={wrapperClassName} onClick={() => showList()}>
                <input 
                    type="text" 
                    className='select__input' 
                    value={this.props.inputValue}  
                    autoComplete='no'
                    onChange={this.props.handleChange}
                    readOnly={!this.props.isFiltered}
                    />
                {!inputIsEmpty && 
                    <img className='input__close' onClick={() => clearInput()} src={`${process.env.PUBLIC_URL}/img/close.png`} alt='Очистить'/>
                }
                <div className={labelClassName}>{placeholder}</div>
            </div>
        )
    }
    
}

export default Input