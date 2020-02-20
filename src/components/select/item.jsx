import React from 'react'

class Item extends React.Component {

    render() {
        const { value } = this.props
        const itemClassName = this.props.inputValue.indexOf(value.name) !== -1 ? 'list-item list-item_selected' : 'list-item'
        return (
            <div className={itemClassName} style={this.props.itemStyle} onClick={() => this.props.selectItem(value.name)}>
                <span className='list-item__text'>{value.name}</span>
                {value.icon !== undefined &&
                    <img className='list-item__icon' src={`${process.env.PUBLIC_URL}/img/${value.icon}`} alt={value.name} />
                }
            </div>
        )
    }
}

export default Item