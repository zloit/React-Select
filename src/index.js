import React from 'react'
import { render } from 'react-dom'
import Select from './components/select/select.jsx'
import {items} from './countries.json'

render(
    <div className="wrapper">
        <h2><span className='white'>React Select компонент</span></h2>
        <p>Базовые возможности: <br />
            - указание <span className='white'>placeholder</span> (в данном случае 'Имя')<br />
            - передача <span className='white'>list</span> (массив строчных элементов)</p>
        <Select 
            placeholder='Имя'
            list={['Ваня','Петя','Саша','Андрей']}
            />
        <p>Мультивыбор подключается добавлением атрибута <span className='white'>multiple</span>. Данные получены при помощи <span className='white'>import</span></p>
        <Select
            placeholder={'Страна'}
            multiple
            items={items}
            />
        <p>Фильтрация текста подключается с помощью атрибута <span className='white'>isFiltered</span>. Список получен с помощью <span className='white'>.fetch()</span></p>
        <Select 
            placeholder='Операционная система'
            url={`${process.env.PUBLIC_URL}/json/os.json`}
            isFiltered
            />
        <p>Возможность открытия в модальном окне устанавливается с помощью атрибута <span className='white'>modal</span>. Текст кнопки содержится в атрибуте <span className='white'>modalButtonText</span> (По умолчанию 'Выберите')</p>
        <Select 
            placeholder='Город'
            url={`${process.env.PUBLIC_URL}/json/cities.json`}
            modal
            isFiltered
            modalButtonText='Выбрать город'
            />
        <p>Передача кастомизированных стилей осуществляется через <span className='white'>containerStyle</span>, <span className='white'>inputStyle</span>, <span className='white'>listStyle</span>, <span className='white'>itemStyle</span>, например:<br />
        <span className='white'>containerStyle=&#123;&#123;fontSize: '15px'&#125;&#125;</span></p>
        <Select 
            containerStyle={{fontSize: '15px'}}
            inputStyle={{
                backgroundColor: '#1d1f20',
                border: '1px solid white',
                color: '#fff',
            }}
            placeholder='Операционная система'
            url={`${process.env.PUBLIC_URL}/json/os.json`}
            />
    </div>,
    document.getElementById('root')
)
