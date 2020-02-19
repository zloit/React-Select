import React from 'react'
import Item from './item'

class Items extends React.Component {
    render() {
        let items
        switch (this.props.isFiltered) {
            case true:
                const mask = this.props.inputValue.split(' ').pop();
                items = this.props.items.filter(value => {
                    if (value.name.indexOf(mask) !== -1) return true
                })
                break;
        
            default:
                items = this.props.items
                break;
        }
        const listClassName = this.props.isActive ? 'select__list select__list_display' : 'select__list'
        
        return (
            <div className={listClassName}>
                {items.map((value, index) => (
                    <Item 
                        inputValue={this.props.inputValue}
                        key={index}
                        selectItem={this.props.selectItem}
                        value={value}
                        multiple={this.props.multiple}
                         />
                ))}
            </div>
        )
    }
}

export default Items