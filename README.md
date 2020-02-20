# Select компонент

Многофункциональный React компонент выбора по аналогии из HTML.  
Cтраница интерактивной тех. документации: [React Select](https://zloit.github.io/React-Select/build/)

### Инициализация компонента


```html
<Select 
	placeholder='Имя'
	list={['Ваня','Петя','Саша','Андрей']}
	/>
```

### Возможности компонента
- Передача в компонент массива строк для реализации выбора. <br/>`list={['Ваня','Петя','Саша','Андрей']}>`.
- Передача массива объектов с указанием для каждого элемента списка его названия и иконку (опционально). В начале файла:<br/> `import {items} from './countries.json'` <br/> Затем при инициализации компонента передаем атрибут `items={items}`
- Возможность передать url, по которому будет получен список элементов (объекты, как в предыдущем пункте в формате JSON). <br/>`url={'http://***.**/*/file.json'}`
- Настройка стиля компонента. Для указания пользовательских стилей используйте атрибуты containerStyle, inputStyle, itemStyle, listStyle. Например:<br/>`inputStyle={{ backgroundColor: '#1d1f20', border: '1px solid white', color: '#fff' }}`
- Параметр для возможности ввода текста с фильтрацией предлагаемых элементов, а не только выбор из списка. <br/>`isFiltered`
- Параметр для возможности отображения списка компонента в отдельном модальном окне. <br/>`modal`
- Настройка placeholder. <br/>`placeholder={'Страна'}`
- Возможность множественного выбора.<br/>`multiple`

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
