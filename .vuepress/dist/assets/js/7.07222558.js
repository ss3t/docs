(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{207:function(a,v,t){"use strict";t.r(v);var _=t(0),e=Object(_.a)({},function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"быстрый-старт"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#быстрый-старт","aria-hidden":"true"}},[a._v("#")]),a._v(" Быстрый старт")]),a._v(" "),t("h3",{attrs:{id:"бnочные"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#бnочные","aria-hidden":"true"}},[a._v("#")]),a._v(" Блочные:")]),a._v(" "),t("p",[t("code",[a._v(":локация")])]),a._v(" "),t("p",[t("code",[a._v(":локация(x)")])]),a._v(" "),t("p",[t("code",[a._v(":локация(x, y)")])]),a._v(" "),t("p",[t("code",[a._v("~ if условие:")])]),a._v(" "),t("p",[t("code",[a._v("~ elseif условие:")])]),a._v(" "),t("p",[t("code",[a._v("~ else:")])]),a._v(" "),t("p",[a._v("все блочные конструкции определяются отступами (пробелы)")]),a._v(" "),t("h2",{attrs:{id:"системные-конструкции"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#системные-конструкции","aria-hidden":"true"}},[a._v("#")]),a._v(" Системные конструкции:")]),a._v(" "),t("p",[t("code",[a._v("~ a = 1")]),a._v(" присвоение")]),a._v(" "),t("p",[t("code",[a._v('~ a = "тес" + "т"')]),a._v("  склейка строк")]),a._v(" "),t("p",[t("code",[a._v("{a}")]),a._v(" вывод переменной или функции в текст")]),a._v(" "),t("p",[t("code",[a._v("->локация")]),a._v(" goto")]),a._v(" "),t("p",[t("code",[a._v("~ локация()")]),a._v(" или "),t("code",[a._v("~ локация(x)")]),a._v(" прок")]),a._v(" "),t("p",[t("code",[a._v("~ return")]),a._v(" возврат значения функции (локации)")]),a._v(" "),t("p",[t("code",[a._v(";")]),a._v(" - разделитель строки (кода), необязательный")]),a._v(" "),t("h2",{attrs:{id:"комментарии"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#комментарии","aria-hidden":"true"}},[a._v("#")]),a._v(" Комментарии:")]),a._v(" "),t("p",[t("code",[a._v("//")]),a._v(" комментарий")]),a._v(" "),t("p",[t("code",[a._v("/* многострочный комментарий */")])]),a._v(" "),t("h2",{attrs:{id:"основные-пакеты"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#основные-пакеты","aria-hidden":"true"}},[a._v("#")]),a._v(" Основные пакеты:")]),a._v(" "),t("h3",{attrs:{id:"math"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#math","aria-hidden":"true"}},[a._v("#")]),a._v(" Math")]),a._v(" "),t("p",[a._v("random(1 : int, 5 : int) : int - случайное целое число от N1 до N2")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("~кубик = Math.random(1, 6)\nНа костях выпало {кубик}!\n")])])]),t("p",[a._v("round(1.4 : number) : int - округление до ближайшего целого числа")]),a._v(" "),t("h3",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date","aria-hidden":"true"}},[a._v("#")]),a._v(" Date")]),a._v(" "),t("p",[a._v("getTime() : int - текущее время (unix timestamp)")]),a._v(" "),t("h3",{attrs:{id:"input"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input","aria-hidden":"true"}},[a._v("#")]),a._v(" Input")]),a._v(" "),t("p",[a._v("prompt({тип: число, строка : enum = string}) : string - возвращает введенное пользователем значение")]),a._v(" "),t("p",[a._v("anykey() : int - возвращает код нажатой клавиши (мышь тоже считается)")]),a._v(" "),t("h3",{attrs:{id:"game"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game","aria-hidden":"true"}},[a._v("#")]),a._v(" Game")]),a._v(" "),t("p",[a._v("pause(время в микросекундах : int) : void")]),a._v(" "),t("p",[a._v("print(текст : string) : void - вывод текста на экран (требуется только в выражениях, где невозможно выводить текст напрямую)")]),a._v(" "),t("p",[a._v("Теги в тексте:")]),a._v(" "),t("p",[t("code",[a._v("[[ текст : string | локация или выражение: string]]")])]),a._v(" "),t("p",[t("code",[a._v("Рыцарь с [[ мечом на поясе | внимательность = внимательность + 1; ->осмотреть_меч ]] громко рассмеялся.")])]),a._v(" "),t("p",[a._v("Рыцарь с мечом на поясе громко рассмеялся.")]),a._v(" "),t("p",[t("code",[a._v("[[img:example.jpg : string | локация или выражение: string]]")]),a._v(" - подумать над align, выводит картинку")]),a._v(" "),t("p",[t("code",[a._v("[[btn: текст : string | локация или выражение: string]]")]),a._v(" - подумать над align, выводит кнопку")]),a._v(" "),t("h2",{attrs:{id:"математические-и-nогические-операторы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#математические-и-nогические-операторы","aria-hidden":"true"}},[a._v("#")]),a._v(" Математические и логические операторы:")]),a._v(" "),t("p",[t("code",[a._v("(")])]),a._v(" "),t("p",[t("code",[a._v(")")])]),a._v(" "),t("p",[t("code",[a._v("not")]),a._v(' "не"')]),a._v(" "),t("p",[t("code",[a._v("*")]),a._v(" умножение")]),a._v(" "),t("p",[t("code",[a._v("/")]),a._v(" деление")]),a._v(" "),t("p",[t("code",[a._v("%")]),a._v(" остаток от деления")]),a._v(" "),t("p",[t("code",[a._v("+")]),a._v(" сложение")]),a._v(" "),t("p",[t("code",[a._v("-")]),a._v(" вычитание")]),a._v(" "),t("p",[t("code",[a._v("<")]),a._v(" меньше")]),a._v(" "),t("p",[t("code",[a._v("<=")]),a._v(" меньше или равно")]),a._v(" "),t("p",[t("code",[a._v(">")]),a._v(" больше")]),a._v(" "),t("p",[t("code",[a._v(">=")]),a._v(" больше или равно")]),a._v(" "),t("p",[t("code",[a._v("==")]),a._v(" равно")]),a._v(" "),t("p",[t("code",[a._v("!=")]),a._v(" не равно")]),a._v(" "),t("p",[t("code",[a._v("AND")]),a._v(" - и")]),a._v(" "),t("p",[t("code",[a._v("OR")]),a._v(" - или")]),a._v(" "),t("h2",{attrs:{id:"примеры"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#примеры","aria-hidden":"true"}},[a._v("#")]),a._v(" Примеры")]),a._v(" "),t("p",[a._v("локация, переменная, условие, {}:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(":лес\n  ~ a = a + 1\n  Описание леса\n  ~if a > 4:\n    Кажется я хожу кругами, я тут уже в {a}-й раз!\n  ~else:\n    Я еще не заблудился\n")])])]),t("p",[a._v("использование пакетов:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(':лес\n  ~Audio.music(["трек1.mp3", "трек2.mp3"])\n')])])]),t("h2",{attrs:{id:"допоnнитеnьные-пакеты"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#допоnнитеnьные-пакеты","aria-hidden":"true"}},[a._v("#")]),a._v(" Дополнительные пакеты:")]),a._v(" "),t("h3",{attrs:{id:"inventory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inventory","aria-hidden":"true"}},[a._v("#")]),a._v(" Inventory")]),a._v(" "),t("p",[a._v("add(предмет : string, [кол-во : int]) : void - добавляет 1 предмет, или N, если указано")]),a._v(" "),t("p",[a._v("remove(предмет : string, [кол-во : int]) : void - удаляет 1 предмет, или N, если указано")]),a._v(" "),t("p",[a._v("count({предмет : string}) : int возвращает кол-во указанного предмета, или количество всех предметов")]),a._v(" "),t("p",[a._v("clear() : void - очистить инвентарь")]),a._v(" "),t("p",[a._v("bind(предмет : string, название действия : string, локация или выражение: string) : void - добавляет действие для данного предмета")]),a._v(" "),t("p",[t("code",[a._v('~Inventory.bind("одеколон", "подушиться", "использовать_одеколон")')])]),a._v(" "),t("p",[a._v("unbind(предмет : string, название действия : string) : void - убирает указанное действие у предмета")]),a._v(" "),t("h3",{attrs:{id:"audio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio","aria-hidden":"true"}},[a._v("#")]),a._v(" Audio")]),a._v(" "),t("p",[a._v("music([“file.mp3”] : string[]) : void - сахар, зациклена по умолчанию, поток 0")]),a._v(" "),t("p",[a._v("sound(“file.mp3”: string): void, саха, не зациклена, поток 1")]),a._v(" "),t("p",[a._v("play(поток : int, repeat : boolean, [“file.mp3”, “file2.mp3”] : string[]) : void")]),a._v(" "),t("p",[a._v("createPlaylist() : Playlist - под вопросом")]),a._v(" "),t("h4",{attrs:{id:"playlist-под-вопросом"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playlist-под-вопросом","aria-hidden":"true"}},[a._v("#")]),a._v(" Playlist - под вопросом")]),a._v(" "),t("p",[a._v("setRepeat(:boolean) : void")]),a._v(" "),t("p",[a._v("add(:string) : void")]),a._v(" "),t("p",[a._v("shuffle() : void")]),a._v(" "),t("p",[a._v("play() : void")]),a._v(" "),t("p",[a._v("remove(:string) : void")]),a._v(" "),t("p",[a._v("clear() : void")]),a._v(" "),t("h3",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[a._v("#")]),a._v(" String")]),a._v(" "),t("p",[a._v("сравнение строк по маске (?)")]),a._v(" "),t("p",[a._v("length")]),a._v(" "),t("h3",{attrs:{id:"array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array","aria-hidden":"true"}},[a._v("#")]),a._v(" Array")]),a._v(" "),t("p",[a._v("модуль работы с массивами,\ncount\nforeach\npush")]),a._v(" "),t("h3",{attrs:{id:"view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view","aria-hidden":"true"}},[a._v("#")]),a._v(" View")]),a._v(" "),t("p",[a._v("rgb(r : int, g : int, b : int) : string - hex")]),a._v(" "),t("h4",{attrs:{id:"effects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#effects","aria-hidden":"true"}},[a._v("#")]),a._v(" Effects")]),a._v(" "),t("p",[a._v("Инверсия")]),a._v(" "),t("p",[a._v("Вспышка")]),a._v(" "),t("p",[a._v("Блюр")]),a._v(" "),t("p",[a._v("Тряска (с вибрацией)")]),a._v(" "),t("h4",{attrs:{id:"font"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#font","aria-hidden":"true"}},[a._v("#")]),a._v(" Font")]),a._v(" "),t("p",[a._v("size(14 : int) : void")]),a._v(" "),t("p",[a._v("color(hex : string) : void")]),a._v(" "),t("h4",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[a._v("#")]),a._v(" Background")]),a._v(" "),t("p",[a._v("image(файл : string) : void")]),a._v(" "),t("p",[a._v("size(‘auto’ : enum) : void")]),a._v(" "),t("p",[a._v("color(hex : string) : void")]),a._v(" "),t("p",[a._v("repeat(‘repeat’ : enum) : void")]),a._v(" "),t("p",[a._v("Button")]),a._v(" "),t("p",[a._v("Image")]),a._v(" "),t("p",[a._v("Link")]),a._v(" "),t("h3",{attrs:{id:"canvas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canvas","aria-hidden":"true"}},[a._v("#")]),a._v(" Canvas")]),a._v(" "),t("p",[a._v("пакет для рисования графических элементов на экране")]),a._v(" "),t("h3",{attrs:{id:"rpg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpg","aria-hidden":"true"}},[a._v("#")]),a._v(" RPG")]),a._v(" "),t("p",[a._v("пакет всякого RPG, навороченный инвентарь, персонажи, статы, торговля, итп")]),a._v(" "),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[a._v("#")]),a._v(" Map")]),a._v(" "),t("p",[a._v("карта для игры")])])},[],!1,null,null,null);v.default=e.exports}}]);