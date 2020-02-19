import React from 'react'
import { render } from 'react-dom'
import Select from './components/select/select.jsx'
import {items} from './countries.json'

render(
    <div className="wrapper">
        <p>На входе поступает массив строк с вариантами выбора:</p>
        <Select 
            placeholder='Имя'
            list={['Ваня','Петя','Саша','Андрей']}
            />
        <p>Исходные данные получены путем импорта JSON объекта, включен мультивыбор</p>
        <Select 
            placeholder={'Страна'}
            multiple
            items={items}
            />
        <p>Список получен по URL адресу с помощью .fetch()</p>
        <Select 
            placeholder='Операционная система'
            url={`${process.env.PUBLIC_URL}/json/os.json`}
            isFiltered
            />
    </div>,
    document.getElementById('root')
)
