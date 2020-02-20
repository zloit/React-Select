import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Items from './items'
import Input from './input'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            inputIsEmpty: true,
            selectedItems: [],
            items: undefined,
            inputValue: '',
            isLoaded: false,
            modalIsOpen: false
        }
        this.showList = this.showList.bind(this)
        this.selectItem = this.selectItem.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.toOpenModal = this.toOpenModal.bind(this);
        this.ModalRender = this.ModalRender.bind(this);
        this.toCloseModal = this.toCloseModal.bind(this);
    }

    render() {
        this.listToObject()
        let elem =
            <div className='select__container' style={this.props.containerStyle}>
                <Input
                    showList={this.showList}
                    isActive={this.state.isActive}
                    placeholder={this.props.placeholder}
                    inputIsEmpty={this.state.inputIsEmpty}
                    clearInput={this.clearInput}
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    isFiltered={this.props.isFiltered}
                    inputStyle={this.props.inputStyle}
                />
                {this.state.isLoaded &&
                    <Items
                        isActive={this.state.isActive}
                        multiple={this.props.multiple}
                        items={this.state.items}
                        selectItem={this.selectItem}
                        inputValue={this.state.inputValue}
                        isFiltered={this.props.isFiltered}
                        listStyle={this.props.listStyle}
                        itemStyle={this.props.itemStyle}
                    />}
            </div>
        this.props.modal && (elem = this.ModalRender(elem))
        return (
            <div>
                {elem}
            </div>
        )
    }

    toOpenModal() {
        this.setState({ modalIsOpen: true })
    }

    toCloseModal() {
        this.setState({ modalIsOpen: false })
    }

    ModalRender(elem) {
        const buttonText = this.props.modalButtonText !== undefined ? this.props.modalButtonText : 'Выберите'
        const modalClassName = this.state.modalIsOpen ? 'modal modal_opened' : 'modal'
                return (
                    <div>
                        <button onClick={this.toOpenModal} className='modal-open'>{buttonText}</button>
                        <div className={modalClassName}>
                            <div className="modal-wrapper">
                                <div className="CSS-modal-inner">
                                    <div className="modal-header">
                                        <span className='modal-headtext'>Выберите</span>
                                        <span onClick={this.toCloseModal} className='modal-control'>✕</span>
                                    </div>
                                    <div className="modal-content">
                                        {elem}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
            inputIsEmpty: false,
            isActive: true
        })
    }

    listToObject() {
        const list = this.props.list
        if (list !== undefined) {
            let items = []
            list.forEach((item, i) => {
                items[i] = {
                    name: item
                }
            })
            return items;
        } else return false
    }

    selectItem(value) {

        let inputValue = this.state.inputValue
        const isRepeat = inputValue.indexOf(value) !== -1
        switch (this.props.multiple) {
            case true:
                inputValue = isRepeat ?
                    inputValue.replace(` ${value},`, '')
                    :
                    `${this.state.inputValue} ${value},`
                this.setState({
                    inputValue: inputValue,
                    inputIsEmpty: false
                })
                break;
            default:
                inputValue = isRepeat ?
                    '' : value
                this.setState({
                    inputValue,
                    inputIsEmpty: false,
                    isActive: false
                })
                break;
        }
    }

    clearInput() {
        this.setState(() => ({
            inputValue: '',
            inputIsEmpty: true
        }))
    }

    showList() {
        this.setState(state => ({
            isActive: !state.isActive
        }))
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
        const listItems = this.listToObject();
        if (this.props.url !== undefined) {
            fetch(this.props.url)
                .then(response => response.json())
                .then(data => {
                    const { items } = data
                    this.setState({
                        items,
                        isLoaded: true
                    })
                })
                .catch(err => console.log('Данные по URL не получены. Ошибка: ', err))
        } else if (listItems) {
            this.setState({ items: listItems, isLoaded: true })
        } else if (this.props.items !== undefined) {
            this.setState({ items: this.props.items, isLoaded: true })
        } else console.log('Данные не получены!');

    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                isActive: false
            });
        }
    }
}

export default Select