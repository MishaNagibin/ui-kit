# ui-kit

- [**Установка**](#установка)
  - [Использование](#использование)
- [**Accordion**](#accordion)
  - [Пропсы](#пропсы-accordion)
  - [Примеры](#примеры-использования-accordion)
- [**Alert**](#alert)
  - [Статусы](#статусы-alert)
  - [Пропсы](#пропсы-alert)
  - [Примеры](#примеры-использования-alert)
- [**ArrowSVG**](#arrowsvg)
  - [Пропсы](#пропсы-arrowsvg)
  - [Примеры](#примеры-использования-arrowsvg)
- [**Button**](#button)
  - [Пропсы](#пропсы-button)
  - [Стили кнопки](#стили-кнопки)
  - [Размеры кнопки](#размеры-кнопки)
  - [Размеры кнопки для мобильной версии](#размеры-кнопки-для-мобильной-версии)
  - [Примеры](#примеры-использования-button)
- [**Checkbox**](#checkbox)
  - [Пропсы](#пропсы-checkbox)
  - [Стили чекбокса](#стили-чекбокса)
  - [Размеры чекбокса](#размеры-чекбокса)
  - [Примеры](#примеры-использования-checkbox)
- [**Combobox**](#combobox)
  - [Пропсы](#пропсы-combobox)
  - [Размеры](#размеры-элементов-выпадающего-списка)
  - [Структура массива элементов выпадающего списка](#comboboxitem)
  - [Примеры](#примеры-использования-combobox)
- [**DropDown**](#dropdown)
  - [Пропсы](#пропсы-dropdown)
  - [Примеры](#примеры-использования-dropdown)
- [**Edit**](#edit)
  - [Пропсы](#пропсы-edit)
  - [Примеры](#примеры-использования-edit)
- [**Emoji**](#emoji)
  - [Пропсы](#пропсы-emoji)
- [**Radio**](#radio)
  - [Пропсы](#пропсы-radio)
  - [Примеры](#примеры-использования-radio)
- [**RadioGroup**](#radiogroup)
  - [Пропсы](#пропсы-radiogroup)
  - [Примеры](#примеры-использования-radiogroup)
- [**Range**](#range)
  - [Пропсы](#пропсы-range)
  - [Примеры](#примеры-использования-range)
- [**Slider**](#slider)
  - [Пропсы](#пропсы-slider)
  - [Примеры](#примеры-использования-slider)
- [**Spinner**](#spinner)
  - [Пропсы](#пропсы-spinner)
  - [Размеры спиннера](#размеры-spinner)
  - [Примеры](#примеры-использования-spinner)
- [**Tabs и Tab**](#tabs-и-tab)
  - [Пропсы](#пропсы-табов)
  - [Примеры](#примеры-использования-табов)
- [**Toggle**](#toggle)
  - [Пропсы](#пропсы-toggle)
  - [Примеры](#примеры-использования-toggle)
- [**Table**](#table)
  - [Пропсы](#пропсы-table)
  - [Структура массива столбцов таблицы](#tablecolumn)
  - [Слоты](#слоты-таблицы)
  - [Примеры со слотами](#примеры-со-слотами)
  - [Пример массивов для таблицы](#пример-массивов-для-таблицы)
  - [Примеры использования таблицы](#примеры-использования-table)
  - [Пример с событием select](#пример-с-событием-select)

## Установка

```
npm i https://github.com/MishaNagibin/ui-kit.git
```

### Использование

Необходимо подключить стили библиотеки, либо глобально в конфиге, либо выборочно в нужном компоненте/странице.
Если это Nuxt:

```
// nuxt.config.js
css: ['ui-kit/dist/ui-kit.css']
```
Если это Vue | компонент | страница:

```
// mait.ts / main.js
import "ui-kit/dist/ui-kit.css"
```

После подключения в нужном месте просто импортируем нужные компоненты и включаем их в compotents:

```
import { cButton, cEdit, cSpinner } from "ui-kit"

export default Vue.extend({
    name: "Index",
    components: { cButton, cEdit, cSpinner },
})
```

Также, если у вас typescript, можно импортировать интерфейсы, которые есть в библиотеке:

```
import { ComboboxItem } from "ui-kit"

export default Vue.extend({
    name: "Index",
    data() {
        return {
            items: {} as ComboboxItem,
        }
    }
})
```

## Accordion

Представляет собой компонент, который плавно разворачивает и сворачивает элементы аккордеона по клику на заголовок элемента. У компонента может быть заголовок, максимальная ширина, у каждого элемента аккордеона может быть свой заголовок.

#### Пропсы Accordion:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| title | string | заголовок аккордеона (находится над аккордеоном) | undefined |
| maxWidth | string | максимальная ширина аккордеона | undefined |
| headerName | string | название каждого элемента в аккордеоне + инкремированный индекс, например всего будет 3 элемента в аккордеоне, и мы передадим в `headerName` значение `item`, тогда в каждом элементе аккордеона будет заголовок `item index + 1` -> `item 1`, `item 2`, `item 3` | undefined |
| headers | string[] | мы можем передать массив состоящий из заголовков, применены они будут по индексам элементов | [] |
| headersByIndexes | { [key: number]: string } | мы можем передать объект, в котором связать индекс с конкретным заголовком, чтобы к каждому индексу применился соответствующий ему заголовок | undefined |
| onlyOneCanActive | boolean | можно будет раскрыть только один элемент аккордеона (по умолчанию можно все) | false |
| notActiveColor | string | цвет текста заголовка элемента аккордеона, когда он не активен | #1e1e1e |
| hoverNotActiveColor | string | цвет текста заголовка элемента аккордеона, когда он не активен, при наведении | #1e1e1e |
| activeColor | string | цвет текста заголовка и иконки элемента аккордеона, когда он активен | #3f51b5 |
| hoverActiveColor | string | цвет текста заголовка и иконки элемента аккордеона, когда он активен, при наведении | #4960df |
| iconNotActiveColor | string | цвет иконки заголовка элемента аккордеона, когда он не активен | #e7e7ea |
| iconHoverNotActiveColor | string | цвет иконки заголовка элемента аккордеона, когда он не активен, при наведении | #8e8e8e |


#### Примеры использования Accordion:

```html
<cAccordion title="Тайтл аккордеона">
    <span v-for="i of 5" :key="i">{{ `элемент аккордеона ${i}` }}</span>
</cAccordion>
```

```html
<cAccordion max-width="900px">
    <span v-for="i of 5" :key="i">{{ `элемент аккордеона ${i}` }}</span>
</cAccordion>
```

```html
<cAccordion only-one-can-active>
    <span v-for="i of 5" :key="i">{{ `элемент аккордеона ${i}` }}</span>
</cAccordion>
```

```html
<cAccordion header-name="item accordion number">
    <span v-for="i of 5" :key="i">текст аккордеона...</span>
</cAccordion>
```

```html
<cAccordion :headers="['первый', 'второй', 'третий', 'четвертый', 'пятый']">
    <span v-for="i of 5" :key="i">текст аккордеона...</span>
</cAccordion>
```

```html
<cAccordion :headers-by-indexes="{ 0: 'Петя', 4: 'Федя', 2: 'Алиса', 1: 'Наташа', 3: 'Герыч' }">
    <span v-for="i of 5" :key="i">Описание персонажей аккордеона...</span>
</cAccordion>
```

```html
<cAccordion 
    :headers="['первый', 'второй', 'третий', 'четвертый', 'пятый']" 
    not-active-color="green" 
    hover-not-active-color="blue" 
    active-color="purple" 
    hover-active-color="violet" 
    icon-not-active-color="green" 
    icon-hover-not-active-color="blue"
>
    <span v-for="i of 5" :key="i">текст аккордеона...</span>
</cAccordion>
```

## Alert

Представляет собой компонент, отображающий заголовок и обычный текст, а также иконку соответствующую статусу, и возможность закрыть алерт.
Заголовок и обычный текст передаются через слоты.

#### Статусы Alert:

| name | description |
| ---- | ----------- |
| info | Информационный |
| success | Например, успешно авторизовались |
| warning | Предупреждение |
| error | Ошибка |

#### Пропсы Alert:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| closeable | boolean | дает возможность закрыть алерт | false |
| hideIcon | boolean | скрывает иконку алерта | false |
| status | string | описаны в таблице выше | не задан |
| backgroundColor | string | цвет фона алерта | не задано |
| titleColor | string | цвет текста заголовка | не задано |
| titleSize | string | размер текста заголовка | не задано |
| descColor | string | цвет текста обычного текста | не задано |
| descSize | string | размер обычного текста | не задано |
| iconColor | string | цвет иконки алерта | не задано |
| iconCloseColor | string | цвет иконки закрытия алерта | не задано |
| iconCloseHoverColor | string | цвет иконки закрытия алерта при наведении | не задано |
| iconCloseSize | string | размер иконки закрытия алерта | не задано |
| borderRadius | string | скругление углов алерта | не задано |
| iconPositionCenter | boolean | позиционированние иконок по центру | не задано |

**не задано** - значит используется то, что по умолчанию в стилях, а если передать какие-то значения, то будут использоваться они, как кастомные.

Также есть событие **close**, которое означает, что алерт закрыли.

#### Примеры использования Alert:

```html
// статичный
<cAlert
    status="info"
    border-radius="5px"
>
    <template slot="title">Заголовок</template>
    <template slot="desc">Какой-то текст</template>
</cAlert>
```

```html
// ошибка
<cAlert
    v-if="isError"
    status="error"
    @close="closeAlert"
>
    <template slot="title">Ошибка!</template>
    <template slot="desc">{{ errorText }}</template>
</cAlert>

...

closeAlert() {
    this.isError = false
}
```

```html
//custom
<cAlert
    status="info"
    border-radius="5px"
    background-color="purple"
    desc-color="#fff"
    desc-size="16px"
    icon-color="#fff"
>
    <template slot="desc">Какой-то текст</template>
</cAlert>
```

## ArrowSVG

Представляет собой компонент анимированной стрелочки (при наведении).

#### Пропсы ArrowSVG:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| mode | string | режим стрелки, обычная или в круге (для слайдера), допустимые значения: normal &#124; circle | normal |
| color | string | цвет стрелки | #818ca9 |
| hoverColor | string | цвет стрелки при наведении | #818ca9 |
| circleColor | string | цвет фона круга в которой стрелка | #ffffff |
| size | string | размер стрелки, допустимые значения: s &#124; m &#124; l | m |
| rotate | string | наклон стрелки | undefined |
| isUp | boolean | значит стрелка будет повернута вверх | false |
| isDown | boolean | значит стрелка будет повернута вниз | false |
| isLeft | boolean | значит стрелка будет повернута влево | false |
| isNoShadow | boolean | отключает тень у стрелки, которая в круге | false |

#### Примеры использования ArrowSVG:

```html
<div style="display: flex; align-items: center;">
    <cArrowSVG
        is-left
        color="#3f51b5"
        hoverColor="#4960df"
        size="s"
    />Перейти в каталог
</div>
```

```html
<cArrowSVG rotate="110deg" />
```

```html
// для слайдера
<div class="slider">
    <cArrowSVG
        is-left
        size="m"
        mode="circle"
        @click="prev"
    />
    <div
        class="carousel"
        ref="carousel"
    >
        <div
            class="items"
            ref="items"
        >
            <slot />
        </div>
    </div>
    <cArrowSVG
        size="m"
        mode="circle"
        @click="next"
    />
</div>
```

## Button

Представляет собой компонент кнопки, красиво стилизованной, поддерживающей слоты, индикатор загрузки, например если отправили данные из формы на апи, можно включить индикатор, пока не получим ответ с апи, чтобы не спамить кнопку и явно показать, что выполняется какой-то процесс. Также кнопка отлично выполняет анимацию как в ПК режиме, так и в режиме для мобильных устройств. У кнопки есть несколько цветовых режимов, но вы всегда можете изменить цвета, размеры, и переданные пропсы, например, color, background - будут приоритетнее чем те, что есть у `mode`. Также вы можете задать кнопке свой градиент, через background, но обязательно с mode: gradient.

#### Пропсы Button:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| mode | string | стиль кнопки, допустимые значения в таблице ниже | normal |
| type | string | тип кнопки, допустимые значения: button &#124; submit &#124; reset | button |
| isLoading | boolean | нужно показать индикатор загрузки на кнопке | false |
| disabled | boolean | кнопка отключена | false |
| size | string | размер кнопки, допустимые значения: s &#124; m &#124; l &#124; xl, подробнее в таблице ниже | m |
| dontUpperCase | boolean | текст в кнопке не должен быть в верхнем регистре (по умолчанию он в верхнем регистре) | false |
| isMobile | boolean | кнопка должна быть в стиле для мобильных устройств | false |
| background | string | фон кнопки | undefined |
| backgroundHoverColor | string | фон кнопки при наведении | undefined |
| backgroundActiveColor | string | фон кнопки при нажатии | undefined |
| backgroundPosition | string | смещение фона при наведении на кнопку (нажатию если isMobile: true) по `x` и `y` в том случае, если фон кнопки градиент | undefined |
| color | string | цвет текста в кнопке | undefined |
| colorHover | string | цвет текста в кнопке при наведении на кнопку | undefined |
| colorActive | string | цвет текста в кнопке при нажатии на кнопку | undefined |
| fontSize | string | размер текста в кнопке | 12px |
| fontWeight | string | толщина текста в кнопке | 600 |
| padding | string | отступы внутри кнопки | 8px 4px 8px 4px |
| lineHeight | string | высота строки текста внутри кнопки | 15px |
| border | string | бордер кнопки | undefined |
| borderWidth | string | толщина бордера кнопки | undefined |
| borderColor | string | цвет бордера кнопки | undefined |
| borderHoverColor | string | цвет бордера кнопки при наведении на кнопку | undefined |
| borderActiveColor | string | цвет бордера кнопки при нажатии на кнопку | undefined |
| iconColor | string | цвет иконки в кнопке (индикатор загрузки isLoading: true или которую передадите в кнопку через слот) | undefined |
| iconHoverColor | string | цвет иконки в кнопке при наведении на кнопку | undefined |
| borderRadius | string | скругление углов кнопки | 5px |
| width | string | ширина кнопки | undefined |
| height | string | высота кнопки | undefined |

#### Стили кнопки:

| name | description |
| ---- | ----------- |
| normal | дефолтный стиль кнопки в темно-синей обводке |
| orange | оранжевый стиль |
| primary | темно-синий стиль |
| gradient | градиентный стиль |
| crimson | малиновый стиль |
| disabled | стиль будто она отключена |
| white-to-crimson | белая кнопка в малиновой обводке, при наведении становится полностью малиновой |
| red | красный стиль |
| green | зеленый стиль |
| white | белая кнопка, при наведении появляется синяя обводка |
| just-text | просто текст без фона и обводки |

#### Размеры кнопки:

| name | description |
| ---- | ----------- |
| s | max-width: 120px; height: 40px; |
| m | max-width: 166px; height: 40px; |
| l | max-width: 188px; height: 40px; |
| xl | max-width: 304px; height: 40px; |

#### Размеры кнопки для мобильной версии:

| name | description |
| ---- | ----------- |
| s | max-width: 124px; height: 38px; |
| m | max-width: 166px; height: 38px; |
| l | max-width: 188px; height: 38px; |
| xl | max-width: 314px; height: 38px; |

#### Примеры использования Button:

```html
<cButton mode="primary">Текст кнопки</cButton>
```

```html
<cButton mode="red" size="l">Текст большой красной кнопки</cButton>
```

```html
<cButton dont-upper-case mode="crimson">Текст кнопки без верхнего регистра</cButton>
```

```html
<cButton is-mobile mode="green">Текст мобильной кнопки</cButton>
```

```html
<cButton disabled mode="green">Отключенная кнопка</cButton>
```

```html
<cButton :is-loading="isLoading" mode="green" >Отключенная кнопка</cButton>

...

computed: {
    isLoading(): boolean {
        return this.$store.getters["app/isLoading"]
    }
}
```

```html
<cButton mode="crimson" background="pink">Кастомная кнопка с розовым фоном</cButton>
```

```html
<cButton
    mode="crimson"
    background="#ff728b"
    background-hover-color="violet"
    background-active-color="purple"
    border-color="#ff728b"
    border-hover-color="violet"
    border-active-color="purple"
    color="#fff"
    border-radius="10px"
>Кастомная кнопка</cButton>
```

```html
<cButton
    mode="gradient"
    background="linear-gradient(92.59deg, red, blue, green, purple) 0% 50% / 300% 100%"
    background-position="70% 70%"
>Кастомная градиентная кнопка</cButton>
```

Более подходящий градиент можно [**тут придумать**](https://pictures.apteka-april.ru/generic/GradientSandbox.html)


## Checkbox

Представляет собой компонент чекбокса.

#### Пропсы Checkbox:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| checked | boolean | чекбокс активен | false |
| disabled | boolean | чекбокс отключен | false |
| nowrap | boolean | текст не надо переносить | false |
| mode | string | стиль чекбокса, допустимые значения: primary &#124; red &#124; default, подробнее в таблице ниже | primary |
| size | string | размер чекбокса, допустимые значения: s &#124; sm &#124; m &#124; l, подробнее в таблице ниже | m |
| color | string | цвет чекбокса | undefined |
| hoverColor | string | цвет чекбокса при наведении | undefined |
| activeColor | string | цвет чекбокса при нажатии | undefined |
| borderWidth | string | толщина обводки чекбокса | 2px |

#### Стили чекбокса:

| name | description |
| ---- | ----------- |
| primary | темно-синий чекбокс с белой галочкой внутри на темно-синем фоне, когда активен |
| red | красный чекбокс с белой галочкой внутри на красном фоне, когда активен |
| default | серый чекбокс с белой галочой внутри на темно-синем фоне, когда активен, толщина обводки 1px |

#### Размеры чекбокса:

| name | description |
| ---- | ----------- |
| s | 16x16 px |
| sm | 18x18 px |
| m | 20x20 px |
| l | 25x25 px |

#### Примеры использования Checkbox:

```html
<cCheckbox v-model="isActive">чекбокс активен</cCheckbox>
```

```html
<cCheckbox v-model="isActive" mode="red">чекбокс активен</cCheckbox>
```

```html
<cCheckbox v-model="isActive" nowrap>очень очень очень очень длинный текст в чекбоксе, который не надо переносить</cCheckbox>
```

```html
<cCheckbox v-model="isActive" size="l">большой чекбокс</cCheckbox>
```

```html
<cCheckbox v-model="isActive" color="pink" hoverColor="violet" activeColor="purple" border-width="1px">кастомный чекбокс</cCheckbox>
```

## Combobox

Представляет собой компонент выпадающего меню, в котором можно выбрать какой-то либо элемент. Также можно искать элемент по названию, очистить поле выбора. Можно задать стилизацию комбобокса как ошибка через пропс, а также передать текст ошибки через слот.

#### Пропсы Combobox:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| items | ComboboxItem | массив элементов для выпадающего списка, подробнее о структуре в таблице ниже | [] |
| required | boolean | выбор обязателен | false |
| disabled | boolean | выпадающее меню отключено | false |
| placeholder | string | плейсхолдер | Выбрать |
| filter | boolean | можно фильтровать вывод элементов в списке по названию элемента | true |
| clearable | boolean | можно очистить выбор | false |
| size | string | размер элементов выпадающего списка, допустимые значения: s &#124; m &#124; l, подробнее в таблице ниже | m |
| limit | number | лимит по количеству выводимых элементов в списке | null |
| isPrefixSearch | boolean | фильтрация будет по префиксу | false |
| isSearchedAnyMatch | boolean | поиск будет по любому совпадению | false |
| isError | boolean | есть ошибка и ее надо отобразить (передается через слот) | false |
| isHideStatus | boolean | скрыть блок с ошибкой | false |
| isNoAutocomplete | boolean | убрать автозаполнение поля ввода (если используем пропс filter) | false |
| maxWidth | string | максимальная ширина комбобокса | 360px |

#### Размеры элементов выпадающего списка:

| name | description |
| ---- | ----------- |
| s | padding: 5px 12px; font-size: 12px; |
| m | padding: 7px 16px; font-size: 14px; |
| l | padding: 10px 12px; font-size: 16px; |


#### ComboboxItem:

| name | type | description |
| ---- | ---- | ----------- |
| name | string | название, отображаемое в выпадающем списке |
| value | number | идентификатор элемента |


#### Примеры использования Combobox:

```html
<cCombobox
    v-model="bannerTypeID"
    :items="bannerTypesItems"
    :is-error="isNoBannerTypeID"
    clearable
>
    <template
        v-if="isNoBannerTypeID"
        slot="status-text"
    >
        <span>Нужно выбрать тип баннера</span>
    </template>
</cCombobox>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    :limit="10"
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    filter="false"
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    filter="false"
    size="l"
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    is-prefix-search
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    is-searched-any-match
/>
```

```html
<cCombobox
    v-model="itemID"
    :items="items"
    is-prefix-search
    is-searched-any-match
/>
```

## DropDown

Представляет собой компонент, который через слоты отображает элементы в блоке с тенью, который абсолютно позиционирован (важно чтобы родительский элемент, в котором этот компонент, был position: relative), и стрелочкой указывает вверх, поцизия стрелочки изменяется через пропсы.

#### Пропсы DropDown:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| position | string | позиция, допустимые значения: left &#124; center &#124; right | left |

#### Примеры использования DropDown:

```html
<div>
    <span>Title</span>
    <cDropDown>
        <cCheckbox v-for="(c, i) of items" v-model="c.active" :key="i">{{ c.name }}</cCheckbox>
    </cDropDown>
</div>

...

data() {
    return {
        items: [
            { name: Вариант 1, active: false },
            { name: Вариант 2, active: false },
            { name: Вариант 3, active: false },
        ]
    }
}

...

<style lang="scss" scoped>
div {
    position: relative;

    & > :deep(.ui-drop-down) {
        & .ui-checkbox {
            padding: 10px;
        }
    }
}
</style>
```

```html
<div>
    <span>Description</span>
    <cDropDown position="center">
        <div v-for="(v, i) of items" :key="i" class="desc">{{ v }}</div>
    </cDropDown>
</div>

...

data() {
    return {
        items: ["Description 1", "Description 2", "Description 3"]
    }
}

...

<style lang="scss" scoped>
div {
    position: relative;    
    display: flex;
    justify-content: center;
    max-width: 150px;

    & > :deep(.ui-drop-down) {
        & .desc {
            padding: 10px;
        }
    }
}
</style>
```

```html
<div class="filters">
    <div>
        <span>Фильтр 1</span>
        <cDropDown>
            <cCheckbox v-for="(c, i) of filterItems1" v-model="c.active" :key="i">{{ c.name }}</cCheckbox>
        </cDropDown>
    </div>
    <div>
        <span>Фильтр 2</span>
        <cDropDown position="center">
                <cCheckbox v-for="(c, i) of filterItems2" v-model="c.active" :key="i">{{ c.name }}</cCheckbox>
        </cDropDown>
    </div>
    <div>
        <span>Фильтр 3</span>
        <cDropDown position="center">
                <cCheckbox v-for="(c, i) of filterItems3" v-model="c.active" :key="i">{{ c.name }}</cCheckbox>
        </cDropDown>
    </div>
    <div>
        <span>Фильтр 4</span>
        <cDropDown position="right">
                <cCheckbox v-for="(c, i) of filterItems4" v-model="c.active" :key="i">{{ c.name }}</cCheckbox>
        </cDropDown>
    </div>
</div>

...
import Vue from "vue"
import cDropDown from "@/components/DropDown.vue"
import cCheckbox from "@/components/Checkbox.vue"

export default Vue.extend({
    name: "App",
    components: { cCheckbox, cDropDown },
    data() {
        return {
            filterItems1: [
                { name: "Вариант 1", active: false },
                { name: "Вариант 2", active: false },
                { name: "Вариант 3", active: false },
            ],
            filterItems2: [
                { name: "Вариант 1", active: false },
                { name: "Вариант 2", active: false },
            ],
            filterItems3: [
                { name: "Вариант 1", active: false },
                { name: "Вариант 2", active: false },
                { name: "Вариант 3", active: false },
                { name: "Вариант 4", active: false },
            ],
            filterItems4: [
                { name: "Вариант 1", active: false },
                { name: "Вариант 2", active: false },
                { name: "Вариант 3", active: false },
                { name: "Вариант 4", active: false },
                { name: "Вариант 5", active: false },
            ],
        }
    },  
})

...

<style lang="scss" scoped>
.filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;

    & > div {
        position: relative;
        margin-right: 40px;
        width: 130px;
        margin: 0 20px;
        display: flex;
        justify-content: center;

        &:first-child {
            justify-content: left;
        }

        &:last-child {
            justify-content: right;
        }

        & > :deep(.ui-drop-down) {
            opacity: 0;
            visibility: hidden;
            transition: 0.3s;
            pointer-events: none;

            & .ui-checkbox {
                padding: 10px;
            }
        }

        &:hover {
            & > :deep(.ui-drop-down) {
                opacity: 1;
                visibility: visible;
                pointer-events: unset;
            }
        }
    }
}
</style>
```

## Edit

Представляет собой многофункциональный компонент инпута. Это может быть простой инпут, может быть textarea, может быть инпут для номера телефона с маской, может быть инпут для кода из смс. Красивые и плавные анимации. Множество пропсов.

#### Пропсы Edit:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| mode | string | режим инпута, допустимые значения: singleline &#124; multiline | singleline |
| placeholder | string | плейсхолдер инпута | undefined |
| required | boolean | обязателен к заполнению | false |
| type | string | тип инпута, допустимые значения: text &#124; number &#124; password &#124; email &#124; tel | text |
| value | string | значение инпута | "" |
| inputmode | string | подсказывает браузеру, какой набор символов предложить пользователю для взаимодействия с полем ввода | text |
| autocomplete | string | автозаполнение браузером | off |
| cols | number | видимая ширина текстовой области (для textarea) | 20 |
| rows | number | видимая высота текстовой области (для textarea) | 1 |
| disabled | boolean | инпут отключен | false |
| readonly | boolean | инпут нельзя изменять, только читать | false |
| isClear | boolean | можно очистить инпут | false |
| isConfirmationCode | boolean | код подтверждения | false |
| codeLength | number | длина кода подтверждения | 6 |
| isError | boolean | есть ошибка и ее надо отобразить (передается через слот) | false |
| isWarning | boolean | есть предупреждение и его надо отобразить (передается через слот) | false |
| isValid | boolean | данные корректны, показывается иконка (если isShowIcon=true) | false |
| isLazy | boolean | лэзи мод для инпута, т.е. события о измении значения будут прокидываться после того как уберется фокус с инпута | false |
| isPassword | boolean | режим пароля для инпута, в таком случае добавляется иконка, позволяющая увидеть введнный пароль, а также скрыть его | false |
| isShowIcon | boolean | показывать иконки, соответствующие уведомлениям инпута (ошибка, предупреждение, успех) | false |
| resize | string | режим изменения размеров textarea, допустимые значения: vertical &#124; horizontal &#124; none &#124; both | vertical |
| isHideStatus | boolean | скрыть блок с ошибкой под инпутом | false |
| isSearch | boolean | значит инпут для поиска, будет иконка лупы | false |
| isSearchLeft | boolean | иконка поиска будет слева, а не справа | false |
| isSearchIconBold | boolean | иконка поиска будет большой | true |
| iconName | string | в инпуте слева будет иконка, название которой будет передано в этот пропс | undefined |
| iconColor | string | цвет иконки iconName | #3F51B5 |
| isHideRequired | boolean | скрыть звездочку в инпуте, о том что оно обязательно для заполнения | false |
| enableEmoji | boolean | добавить возможность выбора и вставки эмодзи | false |
| emojiPosition | string | позиция блока с эмодзи, подробнее в таблице ниже | "" |
| emojiIconColor | string | цвет иконки эмодзи в инпуте | #3f51b5 |
| emojiIconHoverColor | string | цвет иконки эмодзи в инпуте при наведении | #4960df |
| width | string | задать свою ширину, для textarea при не дефолтном значении cols этот пропс работать не будет, для isConfirmationCode тоже | 360px |
| backgroundColor | string | цвета фона поля ввода | #ebf0f9 |
| placeholderColor | string | цвет плейсхолдера | #818ca9 |
| color | string | цвет текста | #1e1e1e |
| borderActiveColor | string | цвет обводки при фокусе | #3f51b5 |
| borderWidth | string | толщина обводки при фокусе | 1px |
| clearIconColor | string | цвет иконки для очищения инпута | #818ca9 |
| clearIconHoverColor | string | цвет иконки для очищения инпута при наведении | #3f51b5 |
| mask | string | маска для инпута, только если там числа, например номер какой-то или дата. Маска в данном случае это количество цифр + разделитель, например 3 цифры а после них тире и следом 2 цифры -> 3-2. Разделителем считается любой символ и они могут быть разными -> 1+1=1. Еще кстати можно регулировать макс. кол-во цифр в инпуте, передав просто значение -> 10. Примеры ниже. | undefined |
| maxlength | string | максимальное количество символов в инпуте | undefined |


#### Позиции блока с эмодзи:

| name | description |
| ---- | ----------- |
| top-center | По центру сверху над иконкой |
| top-left | Слева сверху над иконкой |
| top-right | Справа сверху над иконкой |
| bottom-center | По центру снизу под иконкой |
| bottom-left | Слева снизу под иконкой |
| bottom-right | Справа снизу под иконкой |
| left | Слева по центру от иконки |
| right | Справа по центру от иконки |

#### Примеры использования Edit:

```html
<cEdit v-model="name" placeholder="Введите ваше имя" />
```

```html
<cEdit 
    v-model.trim="phone" 
    :is-error="isErrorPhone || isInvalidPhone" 
    :is-valid="phone.length > 0 && !isErrorPhone && !isInvalidPhone"
    is-show-icon 
    required 
    type="tel" 
    inputmode="numeric" 
    placeholder="Номер телефона"
>
    <template
        v-if="isInvalidPhone || isErrorPhone"
        slot="status-text"
    >
        <span>{{ isInvalidPhone ? "Номер телефона введён не полностью" : errorPhone }}</span>
    </template>
</cEdit>
```

```html
    <cEdit
        v-model="search"
        is-clear
        is-hide-status
        is-search
        placeholder="Поиск по названию"
    />
```

```html
<cEdit
    v-model="confirmationCode"
    :code-length="4"
    :is-error="isErrorCode"
    is-confirmation-code
    ref="code"
>
    <template
        v-if="isErrorCode"
        slot="status-text"
    >
        <span>{{ errorCode }}</span>
    </template>
</cEdit>
```

```html
<cEdit
    v-model="val"
    enable-emoji
/>
```

```html
<cEdit
    v-model="val"
    is-clear
    placeholder="text"
    background-color="purple"
    placeholder-color="lightgray"
    color="#fff"
    border-active-color="pink"
    border-width="2px"
    clear-icon-color="lightgray"    
    clear-icon-hover-color="#fff"
/>
```

```html
<cEdit
    v-model="val"
    placeholder="text"
    background-color="purple"
    placeholder-color="lightgray"
    color="#fff"
    border-active-color="purple"
    clear-icon-color="lightgray"    
    clear-icon-hover-color="#fff"
    emoji-icon-color="lightgray"
    emoji-icon-hover-color="#fff"
/>
```

```html
<cEdit v-model="val" max-length="10" />
```

```html
<cEdit v-model="passport" mask="4 6" placeholder="серия и номер паспорта" />
```

```html
<cEdit v-model="snils" mask="3-3-3-2" placeholder="номер снилс" />
```

```html
<cEdit v-model="birthday" mask="2.2.4" placeholder="дата рождения" />
```

```html
<cEdit v-model="val" mask="1+1=1" placeholder="решаем примерчик" />
```

```html
<cEdit v-model="val" mask="10" placeholder="макс кол-во цифр - 10" />
```

Маску можно применить и к номеру телефона, но если не указать то будет применена стандартная маска формата: 999 999-99-99 (+7 ставится автоматически и к маске отношения не имеет)

```html
<cEdit v-model="phone" type="tel" mask="3 3 2 2" placeholder="номер телефона" />
```

## Emoji

Представляет собой компонент для выбора эмодзи. Также компонент сохраняет в отдельный список последние выбранные эмодзи, хранит его в localStorage.

Имеет событие `select` в которое передает выбранное эмодзи.

#### Пропсы Emoji:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| position | string | позиция блока с эмодзи, подробнее в таблице ниже | "" |

#### Позиции блока с эмодзи:

| name | description |
| ---- | ----------- |
| top-center | По центру сверху над иконкой |
| top-left | Слева сверху над иконкой |
| top-right | Справа сверху над иконкой |
| bottom-center | По центру снизу под иконкой |
| bottom-left | Слева снизу под иконкой |
| bottom-right | Справа снизу под иконкой |
| left | Слева по центру от иконки |
| right | Справа по центру от иконки |

## Radio

Представляет собой компонент радиокнопки.

#### Пропсы Radio:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| value | string | значение радиокнопки | null |
| disabled | boolean | радиокнопка отключена | false |
| checked | boolean | радиокнопка активна | false |
| nowrap | boolean | не переносить текст радиокнопки | false |
| mode | string | стиль радиокнопки, допустимые значения: primary &#124; red | primary |
| color | string | цвет радиокнопки | undefined |
| hoverColor | string | цвет радиокнопки при наведении | undefined |
| activeColor | string | цвет радиокнопки при нажатии | undefined |

#### Примеры использования Radio:

```html
<cRadio
    value="val"
    @change="changeRadio"
>текст радиокнопки</cRadio>
```

```html
<cRadio
    value="val"
    mode="red"
>текст красной радиокнопки</cRadio>
```

```html
<cRadio
    value="val"
    disabled
>отключеная радиокнопка</cRadio>
```

```html
<cRadio
    value="val"
    color="purple"
    hoverColor="violet"
    activeColor="pink"
>текст кастомной радиокнопки</cRadio>
```

## RadioGroup

Представляет собой компонент выбора единственного варианта из группы вариантов через радиокнопки.

#### Пропсы RadioGroup:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| disabled | boolean | все кнопки группы отключены | false |

#### Примеры использования RadioGroup:

```html
<cRadioGroup
    v-model="radioGroupVal"
>
    <cRadio value="val1" color="purple" hoverColor="violet" activeColor="pink">текст радиокнопки 1</cRadio>
    <cRadio value="val2">текст радиокнопки 2</cRadio>
</cRadioGroup>
```

```html
<cRadioGroup
    v-model="radioGroupVal"
>
    <cRadio value="val1">текст радиокнопки 1</cRadio>
    <cRadio value="val2" mode="red">текст радиокнопки 2</cRadio>
    <cRadio value="val3">текст радиокнопки 3</cRadio>
    <cRadio disabled value="val4">текст отключенной радиокнопки</cRadio>
</cRadioGroup>
```

```html
<cRadioGroup
    v-model="radioGroupVal"
    disabled
>
    <cRadio value="val1">текст радиокнопки 1</cRadio>
    <cRadio value="val2">текст радиокнопки 2</cRadio>
</cRadioGroup>
```

## Range

Представляет собой компонент ползунка, диапазон между 2 значениями. Также это можно использовать как диапазон между ценами (от меньшей к большей) или же просто между минимальным и максимальным числами. Или просто как ползунок для определения громкости, например.

#### Пропсы Range:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| max | number | максимальное значение | undefined |
| min | number | минимальное значение | undefined |
| minRange | number | минимальная разница между минимальным и максимальным значениями | 10 |
| resetID | number | если нужно сбросить значения компонента, то достаточно передать значение в этот пропс, с каждым изменением resetID будут сбрасываться значения в компоненте | undefined |
| internalMax | number | текущее максимальное значение | undefined |
| internalMin | number | текущее минимальное значение | undefined |
| isPrice | boolean | использовать компонент для цен | false |
| currency | string | валюта, допустимые значения: RUB &#124; USD &#124; EUR | RUB |
| isOnlyDraging | boolean | использовать только ползунок, без полей ввода | false |
| isOnlyOneRange | boolean | использовать только одно значение, а не два (например для определения громкости) | false |
| name | string | название диапазона, используется при isOnlyOneRange=true | undefined |
| color | string | цвет неактивного ползунка | #eeeeee |
| activeColor | string | цвет активного ползунка | #3f51b5 |

#### Примеры использования Range:

```html
<cRange
    :min-range="10"
    :min="0"
    :max="100"
    :internal-max="currentMax"
    :internal-min="currentMin"
    :reset-i-d="resetID"
    @change="changeRange"
/>

...

methods: {
    changeRange(min: number | undefined, max: number | undefined) {
        this.currentMin = min
        this.currentMax = max
    }
}
```

```html
<cRange
    :min-range="10"
    :min="0"
    :max="100"
    :internal-max="currentMax"
    :internal-min="currentMin"
    :reset-i-d="resetID"
    is-only-draging
    @change="changeRange"
/>
```

```html
<cRange
    :min-range="0"
    :min="0"
    :max="10"
    :internal-max="currentMax"
    :internal-min="currentMin"
    :reset-i-d="resetID"
    name="Громкость"
    is-only-one-range
    @change="changeRange"
/>
```

```html
<cRange
    :min-range="10"
    :min="0"
    :max="100"
    :internal-max="currentMax"
    :internal-min="currentMin"
    :reset-i-d="resetID"
    is-price
    currency="USD"
    @change="changeRange"
/>
```

```html
<cRange
    :min-range="10"
    :min="0"
    :max="100"
    :internal-max="currentMax"
    :internal-min="currentMin"
    :reset-i-d="resetID"
    is-price
    currency="USD"
    color="pink"
    activeColor="purple"
    @change="changeRange"
/>
```

## Slider

Представляет собой компонент бесконечного слайдера с плавной анимацией, в который можно передать что угодно. Можно изменять размер стрелочек слайдера, максимальную ширину самого слайдера, сделать автовоспроизведение слайдера.

В автовоспроизводимом слайдере анимация приостанавливается при наведении курсора мыши на слайдер, и продолжается после того как его убрать со слайдера. Таким образом можно будет при желании остановить слайдер. Также слайдер приостанавливается если вкладка браузера не активна.

#### Пропсы Slider:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| isMobile | boolean | слайдер для мобильных устройств, на нем нет стрелочек, листание слайдера через свайпы и слайдер не бесконечный | false |
| itemMargin | number | боковые отступы элементов в слайдере, например у элементов суммарный отступ по бокам - 20px | 0 |
| itemsCount | number | количество элементов в слайдере | 0 |
| isLoaded | boolean | признак, обозначающий, что все элементы слайдера загружены и их можно отобразить (например ожидается получение элементов с апи) | false |
| arrowSize | string | размер стрелок, допустимые значения: s &#124; m &#124; l | m |
| needReset | boolean | нужно ресетнуть слайдер | false |
| isAutoplay | boolean | автовоспроизведение слайдера | false |
| autoplayDuration | number | скорость листания элементов при автовоспроизведении слайдера, в миллисекундах | 1500 |
| maxWidth | string | максимальная ширина слайдера | unset |
| arrowColor | string | цвет стрелочки слайдера | #818ca9 |
| arrowHoverColor | string | цвет стрелочки слайдера при наведении | #818ca9 |
| arrowCircleColor | string | цвет фона круга в которой стрелочка | #ffffff |

**Пропс isLoaded** рекомендуется указывать всегда, например при beforeMount, если с апи данные не ожидаются.

#### Примеры использования Slider:

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>

...

beforeMount() {
    this.isLoaded = true
}

...

<style lang="scss" scoped>
:deep(.ui-slider) {
    & > .carousel {
        & > .list {
            & > .item {
                min-width: 200px;
                height: 200px;
                border-radius: 5px;
                margin: 0 10px;
                background-color: pink;
            }
        }
    }
}
</style>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    arrow-size="l"
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    is-autoplay
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    :autoplay-duration="500"
    is-autoplay
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    max-width="880px"
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    is-mobile
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

```html
<cSlider
    :item-margin="20"
    :items-count="10"
    :is-loaded="isLoaded"
    arrowCircleColor="purple"
    arrowColor="lightgray"
    arrowHoverColor="#fff"
>
    <div
        v-for="i in 10"
        :key="i"
        class="item"
    ></div>
</cSlider>
```

## Spinner 

Представляет собой компонент спиннера, его можно использовать в качестве визуализации загрузки данных.

#### Пропсы Spinner:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| isMobile | boolean | значит спиннер для мобильных устройств | false |
| size | string | размер спиннера, допустимые значения: s &#124; m &#124; l, подробнее в таблице ниже | s |
| position | string | позиция спиннера, допустимые значения: fixed &#124; absolute &#124; relative | fixed |
| hideOverlay | boolean | убрать фон позади спиннера | false |
| color | string | цвет спиннера | #3f51b5 |
| customSize | string | кастомный размер спиннера | undefined |
| left | string | позиция слева для fixed и absolute | 0 |
| top | string | позиция сверху для fixed и absolute | 0 |


#### Размеры Spinner:

| name | description |
| ---- | ----------- |
| s | 38px |
| m | 50px |
| l | 65px |

#### Примеры использования Spinner:

```html
<cSpinner v-if="isLoading" />
```

```html
<cSpinner v-if="isLoading" color="purple" />
```

```html
<cSpinner v-if="isLoading" color="purple" position="relative" />
```

```html
<cSpinner v-if="isLoading" color="purple" position="absolute" left="100px" top="50px" />
```

```html
<cSpinner v-if="isLoading" color="purple" custom-size="70px" />
```

```html
<cSpinner v-if="isLoading" color="purple" hide-overlay/>
```
## Tabs и Tab

Представляет собой компонент, который рендерит контент в табах.
По умолчанию рендерится контент активного таба, т.е. аналогично `v-if`. Однако, если надо рендерить контент всех табов, но при этом не отображать его пока таб не активен, аналогично `v-show`, то нужно передать пропс `renderAllTabs`.

#### Пропсы табов:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| tabIndex | number | индекс активного таба | undefined |
| isBorderFitContent | boolean | линия под табами будет в соответствии с суммой ширины каждого таба | false |
| isNoBorder | boolean | не будет линии под табами | false |
| isNotStretchTabs | boolean | табы не будут растягиваться на 100% как это делается по дефолту | false |
| activeColor | string | цвет текста активного таба | #3f51b5 |
| hoverColor | string | цвет текста таба при наведении | #3f51b5 |
| borderActiveColor | string | цвет линии под активным табом | #3f51b5 |
| borderColor | string | цвет линии под табами | #d6d6e1 |
| renderAllTabs | boolean | рендерить все табы | false |

#### Примеры использования табов:

```html
<cTabs
    :tab-index="tabIndex"
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
</cTabs>
```

```html
<cTabs
    :tab-index="tabIndex"
    is-border-fit-content
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
    <cTab>
        <template v-slot:caption>Третья вкладка</template>
        Контент третьего таба
    </cTab>
    <cTab>
        <template v-slot:caption>Четвертая вкладка</template>
        Контент четвертого таба
    </cTab>
</cTabs>
```

```html
<cTabs
    :tab-index="tabIndex"
    is-not-stretch-tabs
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
    <cTab>
        <template v-slot:caption>Третья вкладка</template>
        Контент третьего таба
    </cTab>
</cTabs>
```

```html
<cTabs
    :tab-index="tabIndex"
    is-no-border
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
    <cTab>
        <template v-slot:caption>Третья вкладка</template>
        Контент третьего таба
    </cTab>
</cTabs>
```

```html
<cTabs
    :tab-index="tabIndex"
    is-not-stretch-tabs
    is-no-border
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
</cTabs>
```

```html
<cTabs
    :tab-index="tabIndex"
    is-border-fit-content
    active-color="purple"
    hover-color="violet"
    border-active-color="purple"
    border-color="lightgray"
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Первая вкладка</template>
        Контент первого таба
    </cTab>
    <cTab>
        <template v-slot:caption>Вторая вкладка</template>
        Контент второго таба
    </cTab>
</cTabs>
```

Рендер всех вкладок на примере, что у нас есть разные компоненты, а в каждом компоненте есть инпут, и мы, при переключении вкладок, не хотим терять значение инпута каждого компонента. 

По умолчанию, если делать так без пропса `renderAllRabs: true` - то переключая вкладки, компоненты будут рендериться заново т.е. мы будем каждый раз терять значения инпутов этих компонентов.

```html
<cTabs
    :tab-index="tabIndex"
    is-not-stretch-tabs
    render-all-tabs
    @tab-index-change="changeTabIndex"
>
    <cTab>
        <template v-slot:caption>Вкладка 1</template>
        <cCompOne />
    </cTab>
    <cTab>
        <template v-slot:caption>Вкладка 2</template>
        <cCompTwo />
    </cTab>
    <cTab>
        <template v-slot:caption>Вкладка 3</template>
        <cCompThree />
    </cTab>
    <cTab>
        <template v-slot:caption>Вкладка 4</template>
        <cCompFour />
    </cTab>
</cTabs>

...


import cTab from "@/components/Tab.vue"
import cTabs from "@/components/Tabs.vue"
import cCompOne from "@/components/CompOne.vue"
import cCompTwo from "@/components/CompTwo.vue"
import cCompThree from "@/components/CompThree.vue"
import cCompFour from "@/components/CompFour.vue"

...

components: { cCompOne, cCompTwo, cCompThree, cCompFour, cTab, cTabs },

```

## Toggle

Представляет собой компонент переключателя.

#### Пропсы Toggle:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| disabled | boolean | переключатель нельзя использовать | false |
| size | string | размер переключателя, допустимые размеры: m (15px) &#124; l (20px) | l |
| color | string | цвет переключателя | #3f51b5 |
| customSize | string | кастомный размер переключателя | undefined |

#### Примеры использования Toggle:

```html
<cToggle v-model="isActive" @toggle="toggle">Включен</cToggle>

...

methods: {
    toggle(n: boolean) {
        this.isActive = n
    },
}
```

```html
<cToggle v-model="isActive" size="m" @toggle="toggle">Включен</cToggle>
```

```html
<cToggle v-model="isActive" disabled @toggle="toggle">Включен</cToggle>
```

```html
<cToggle v-model="isActive" color="purple" @toggle="toggle">Включен</cToggle>
```

```html
<cToggle v-model="isActive" color="purple" custom-size="30px" @toggle="toggle">Включен</cToggle>
```

## Table

Представляет собой компонент таблицы. Можно сделать на всю ширину, можно изменить позицию таблицы если она не на всю ширину, можно включить в таблице сортировку по столбцам.

#### Пропсы Table:

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| title | string | название таблицы | "" |
| align | string | позиция таблицы, допустимые значения: left &#124; center &#124; right | left |
| isFullWidth | boolean | таблица на всю ширину | false |
| needSorted | boolean | в таблице можно сортировать данные по столбцам | false |
| borderRadius | string | скругление углов таблицы | 0px |
| columns | TableColumn[] | массив столбцов таблицы, подробнее в таблице ниже | [] |
| items | any[] | массив строк таблицы, важно чтобы набор полей соответствовал ключу столбца | [] |
| titleSize | string | размер названия таблицы | 14px |
| titlePosition | string | позиция названия таблицы, допустимые значения: left &#124; center &#124; right &#124; end &#124; start &#124; unset | center |
| headerBackgroundColor | string | цвет фона header таблицы | #4e62d1 |
| headerColor | string | цвет текста в header таблицы | #ffffff |
| sortedArrowColor | string | цвет стрелочек для сортировки | #ffffff |
| rowBackgroundColor | string | фон строчек таблицы `:nth-of-type(2n + 1)` | #3f51b511 |
| rowColor | string | цвет строчек таблицы `:nth-of-type(2n + 1)` | #1e1e1e |
| isSelectingRow | boolean | признак, обозначающий, что можно выбрать строку кликнув на нее. Будет отправлено событие `select` с элементом из `items`, который выбрали | false |
| selectingRowDataTooltip | string | если вы используете мой [vue-data-tooltip](https://www.npmjs.com/package/vue-data-tooltip) то можете задать текст тултипа при наведении на строку | undefined |
| selectingRowTooltip | string | текст обычного тултипа (title) при наведении на строку, не работает если передано значение для `selectingRowDataTooltip` | undefined |
| selectingRowHoverBackground | string | фон строки при наведении | #5167e231 |
| width | string | ширина таблицы, но при `isFullWidth: true` ширина будет 100% | fit-content |
| maxWidth | string | максимальная ширина таблицы | none |

#### TableColumn:

| name | type | description |
| ---- | ---- | ----------- |
| key | string | ключ столбца, в массиве строк таблицы этот ключ должен содержать значение, пример ниже |
| title | string | название столбца отображаемое в таблице (не обязательное) |
| align | string | выравнивание столба по переданному значению (не обязательное) |
| width | number | ширина столбца в пикселях (не обязательное) |


#### Слоты таблицы:

Можно передать в таблицу что-то через слоты. 
Например у нас таблица с данными, где нужно изменить / удалить запись, и для этого нам надо передать через слоты соответствующие кнопки, и в scoped-slots передать `clicked`, а на `click` кнопки задать `clicked` и указать название события, как пример: 

```html
<template #custom="{ clicked }">
    <button @click="clicked('open')">Открыть</button>
</template>
```

Соответственно, в таблице создается td в который помещается то, что передано через слот, а на кнопки навешивается событие, название которого, надо будет передать, и при нажатии на кнопку будет передаваться весь элемент items относительно конкретного td. Примеры ниже.

Также вы можете задать название этому столбцу, ширину и позицию. Для этого в `columns` надо добавить объект, у которого значение ключа `key` будет `custom`:

```js
columns: [
    { key: "name", title: "Название", align: "left", width: 240 },
    { key: "description", title: "Описание", align: "left", width: 200 },
    { key: "price", title: "Цена", align: "center", width: 200 },
    { key: "custom", title: "Кастомный столбик", align: "center", width: 200 },
]
```

#### Примеры со слотами:

```html
<cTable
    :columns="columns"
    :items="items"
    border-radius="10px"
>
    <template #custom>
        <span>Текст через слот</span>
    </template>
</cTable>
```

```html
<cTable
    :columns="columns"
    :items="items"
    border-radius="10px"
    @remove="removeItem"
    @open="openItem"
>
    <template #custom="{ clicked }">
        <cButton
            mode="red"
            @click="clicked('remove')"
        >Удалить</cButton>
        <cButton
            mode="primary"
            @click="clicked('open')"
        >Открыть</cButton>
    </template>
</cTable>

...

removeItem(item: any) {
    console.log("Удалить", item);
},
openItem(item: any) {
    console.log("Открыть", item);
}
```

#### Пример массивов для таблицы:

```js
// очередность полей не важна
columns: [
    { key: "code", title: "Код", align: "center", width: 120 },
    { key: "status", title: "Статус", align: "center", width: 200 },
    { title: "Масса", key: "weight", align: "center", width: 120 },
],
items: [
    { ID: 1, code: "1111", status: "Готов", weight: "50кг" },
    { ID: 2, code: "222", status: "В пути", weight: "80кг" },
    { ID: 3, code: "5", status: "В обработке", weight: "150кг" },
]
```

#### Примеры использования Table:

```html
<cTable :columns="columns" :items="items" need-sorted  title="Название таблицы" />
```

```html
<cTable :columns="columns" :items="items" />
```

```html
<cTable :columns="columns" :items="items" align="center" />
```

```html
<cTable :columns="columns" :items="items" is-full-width />
```

```html
<cTable :columns="columns" :items="items" is-full-width border-radius="10px" />
```

```html
<cTable
    :columns="columns"
    :items="items"
    border-radius="10px"
    title="Справочник услуг"
    title-position="left"
    title-size="20px"
/>
```

```html
<cTable
    :columns="columns"
    :items="items"
    need-sorted
    align="center"
    border-radius="10px"
    title="Справочник услуг"
    title-position="left"
    title-size="20px"
    header-background-color="purple"
    header-color="#f14a4a"
    row-background-color="#cf27b3"
    row-color="lightgray"
    sorted-arrow-color="red"
/>
```

#### Пример с событием select:
```html
<cTable
    :columns="columns"
    :items="items"
    is-selecting-row
    border-radius="10px"
    title="Справочник услуг"
    title-position="left"
    title-size="20px"
    selecting-row-data-tooltip="Выбрать"
    @select="selectRow"
/>

...

methods: {
    selectRow(item) {
        console.log(item, "Выбранный элемент")
    }
}
```
