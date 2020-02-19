import React from 'react'
import { render } from 'react-dom'
import Select from './components/select/select.jsx'
import {items} from './countries.json'

render(
    <div className="wrapper">
        <p>Базовые возможности: указание <span class='white'>placeholder</span> и <span class='white'>list</span> (список элеметов в виде массива строк)</p>
        <Select 
            placeholder='Имя'
            list={['Ваня','Петя','Саша','Андрей']}
            />
        <p>Мультивыбор подключается добавлением атрибута <span class='white'>multiple</span>. Данные получены при помощи import</p>
        <Select 
            placeholder={'Страна'}
            multiple
            items={items}
            />
        <p>Фильтрация текста подключается с помощью атрибута <span class='white'>isFiltered</span>. Список получен с помощью <span class='white'>.fetch()</span></p>
        <Select 
            placeholder='Операционная система'
            url={`${process.env.PUBLIC_URL}/json/os.json`}
            isFiltered
            />
    </div>,
    document.getElementById('root')
)
