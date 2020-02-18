(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(v,t,_){"use strict";_.r(t);var a=_(0),e=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"погружение"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#погружение"}},[v._v("#")]),v._v(" Погружение")]),v._v(" "),_("h3",{attrs:{id:"вывод-текста"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#вывод-текста"}},[v._v("#")]),v._v(" Вывод текста:")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("Идет медведь по лесу...\n")])])]),_("h2",{attrs:{id:"системные-конструкции"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#системные-конструкции"}},[v._v("#")]),v._v(" Системные конструкции:")]),v._v(" "),_("p",[_("code",[v._v("~ a = 1")]),v._v(" присвоение")]),v._v(" "),_("p",[_("code",[v._v('~ a = "тес" + "т"')]),v._v("  склейка строк")]),v._v(" "),_("p",[_("code",[v._v("{a}")]),v._v(" вывод переменной или функции в текст")]),v._v(" "),_("p",[_("code",[v._v("->локация")]),v._v(" переход")]),v._v(" "),_("p",[_("code",[v._v("~ локация()")]),v._v(" или "),_("code",[v._v("~ локация(x)")]),v._v(" прок")]),v._v(" "),_("p",[_("code",[v._v("~ return")]),v._v(" возврат значения функции (локации)")]),v._v(" "),_("p",[_("code",[v._v(";")]),v._v(" - разделитель строки (кода), необязательный")]),v._v(" "),_("h3",{attrs:{id:"бnочные-конструкции"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#бnочные-конструкции"}},[v._v("#")]),v._v(" Блочные конструкции:")]),v._v(" "),_("p",[_("code",[v._v(":локация")])]),v._v(" "),_("p",[_("code",[v._v(":локация(x)")])]),v._v(" "),_("p",[_("code",[v._v(":локация(x, y)")])]),v._v(" "),_("p",[_("code",[v._v("~ if условие:")])]),v._v(" "),_("p",[_("code",[v._v("~ elseif условие:")])]),v._v(" "),_("p",[_("code",[v._v("~ else:")])]),v._v(" "),_("h2",{attrs:{id:"основные-пакеты"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#основные-пакеты"}},[v._v("#")]),v._v(" Основные пакеты:")]),v._v(" "),_("h3",{attrs:{id:"math"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#math"}},[v._v("#")]),v._v(" Math")]),v._v(" "),_("p",[v._v("random(1 : int, 5 : int) : int - случайное целое число от N1 до N2")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("~кубик = Math.random(1, 6)\nНа костях выпало {кубик}!\n")])])]),_("p",[v._v("round(1.4 : number) : int - округление до ближайшего целого числа")]),v._v(" "),_("h3",{attrs:{id:"date"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[v._v("#")]),v._v(" Date")]),v._v(" "),_("p",[v._v("getTime() : int - текущее время (unix timestamp)")]),v._v(" "),_("h3",{attrs:{id:"input"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[v._v("#")]),v._v(" Input")]),v._v(" "),_("p",[v._v("prompt({тип: число, строка : enum = string}) : string - возвращает введенное пользователем значение")]),v._v(" "),_("p",[v._v("anykey() : int - возвращает код нажатой клавиши (мышь тоже считается)")]),v._v(" "),_("h3",{attrs:{id:"game"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#game"}},[v._v("#")]),v._v(" Game")]),v._v(" "),_("p",[v._v("pause(время в микросекундах : int) : void")]),v._v(" "),_("p",[v._v("print(текст : string) : void - вывод текста на экран (требуется только в выражениях, где невозможно выводить текст напрямую)")]),v._v(" "),_("p",[v._v("Теги в тексте:")]),v._v(" "),_("p",[_("code",[v._v("[[ текст : string | локация или выражение: string]]")])]),v._v(" "),_("p",[_("code",[v._v("Рыцарь с [[ мечом на поясе | внимательность = внимательность + 1; ->осмотреть_меч ]] громко рассмеялся.")])]),v._v(" "),_("p",[v._v("Рыцарь с мечом на поясе громко рассмеялся.")]),v._v(" "),_("p",[_("code",[v._v("[[img:example.jpg : string | локация или выражение: string]]")]),v._v(" - подумать над align, выводит картинку")]),v._v(" "),_("p",[_("code",[v._v("[[btn: текст : string | локация или выражение: string]]")]),v._v(" - подумать над align, выводит кнопку")]),v._v(" "),_("h2",{attrs:{id:"математические-и-nогические-операторы"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#математические-и-nогические-операторы"}},[v._v("#")]),v._v(" Математические и логические операторы:")]),v._v(" "),_("p",[_("code",[v._v("(")])]),v._v(" "),_("p",[_("code",[v._v(")")])]),v._v(" "),_("p",[_("code",[v._v("not")]),v._v(' "не"')]),v._v(" "),_("p",[_("code",[v._v("*")]),v._v(" умножение")]),v._v(" "),_("p",[_("code",[v._v("/")]),v._v(" деление")]),v._v(" "),_("p",[_("code",[v._v("%")]),v._v(" остаток от деления")]),v._v(" "),_("p",[_("code",[v._v("+")]),v._v(" сложение")]),v._v(" "),_("p",[_("code",[v._v("-")]),v._v(" вычитание")]),v._v(" "),_("p",[_("code",[v._v("<")]),v._v(" меньше")]),v._v(" "),_("p",[_("code",[v._v("<=")]),v._v(" меньше или равно")]),v._v(" "),_("p",[_("code",[v._v(">")]),v._v(" больше")]),v._v(" "),_("p",[_("code",[v._v(">=")]),v._v(" больше или равно")]),v._v(" "),_("p",[_("code",[v._v("==")]),v._v(" равно")]),v._v(" "),_("p",[_("code",[v._v("!=")]),v._v(" не равно")]),v._v(" "),_("p",[_("code",[v._v("AND")]),v._v(" - и")]),v._v(" "),_("p",[_("code",[v._v("OR")]),v._v(" - или")]),v._v(" "),_("h2",{attrs:{id:"допоnнитеnьные-пакеты"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#допоnнитеnьные-пакеты"}},[v._v("#")]),v._v(" Дополнительные пакеты:")]),v._v(" "),_("h3",{attrs:{id:"inventory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#inventory"}},[v._v("#")]),v._v(" Inventory")]),v._v(" "),_("p",[v._v("add(предмет : string, [кол-во : int]) : void - добавляет 1 предмет, или N, если указано")]),v._v(" "),_("p",[v._v("remove(предмет : string, [кол-во : int]) : void - удаляет 1 предмет, или N, если указано")]),v._v(" "),_("p",[v._v("count({предмет : string}) : int возвращает кол-во указанного предмета, или количество всех предметов")]),v._v(" "),_("p",[v._v("clear() : void - очистить инвентарь")]),v._v(" "),_("p",[v._v("bind(предмет : string, название действия : string, локация или выражение: string) : void - добавляет действие для данного предмета")]),v._v(" "),_("p",[_("code",[v._v('~Inventory.bind("одеколон", "подушиться", "использовать_одеколон")')])]),v._v(" "),_("p",[v._v("unbind(предмет : string, название действия : string) : void - убирает указанное действие у предмета")]),v._v(" "),_("h3",{attrs:{id:"audio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[v._v("#")]),v._v(" Audio")]),v._v(" "),_("p",[v._v("music([“file.mp3”] : string[]) : void - сахар, зациклена по умолчанию, поток 0")]),v._v(" "),_("p",[v._v("sound(“file.mp3”: string): void, саха, не зациклена, поток 1")]),v._v(" "),_("p",[v._v("play(поток : int, repeat : boolean, [“file.mp3”, “file2.mp3”] : string[]) : void")]),v._v(" "),_("p",[v._v("createPlaylist() : Playlist - под вопросом")]),v._v(" "),_("h4",{attrs:{id:"playlist-под-вопросом"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#playlist-под-вопросом"}},[v._v("#")]),v._v(" Playlist - под вопросом")]),v._v(" "),_("p",[v._v("setRepeat(:boolean) : void")]),v._v(" "),_("p",[v._v("add(:string) : void")]),v._v(" "),_("p",[v._v("shuffle() : void")]),v._v(" "),_("p",[v._v("play() : void")]),v._v(" "),_("p",[v._v("remove(:string) : void")]),v._v(" "),_("p",[v._v("clear() : void")]),v._v(" "),_("h3",{attrs:{id:"string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[v._v("#")]),v._v(" String")]),v._v(" "),_("p",[v._v("сравнение строк по маске (?)")]),v._v(" "),_("p",[v._v("length")]),v._v(" "),_("h3",{attrs:{id:"array"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[v._v("#")]),v._v(" Array")]),v._v(" "),_("p",[v._v("модуль работы с массивами,\ncount\nforeach\npush")]),v._v(" "),_("h3",{attrs:{id:"view"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[v._v("#")]),v._v(" View")]),v._v(" "),_("p",[v._v("rgb(r : int, g : int, b : int) : string - hex")]),v._v(" "),_("h4",{attrs:{id:"effects"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#effects"}},[v._v("#")]),v._v(" Effects")]),v._v(" "),_("p",[v._v("Инверсия")]),v._v(" "),_("p",[v._v("Вспышка")]),v._v(" "),_("p",[v._v("Блюр")]),v._v(" "),_("p",[v._v("Тряска (с вибрацией)")]),v._v(" "),_("h4",{attrs:{id:"font"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#font"}},[v._v("#")]),v._v(" Font")]),v._v(" "),_("p",[v._v("size(14 : int) : void")]),v._v(" "),_("p",[v._v("color(hex : string) : void")]),v._v(" "),_("h4",{attrs:{id:"background"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[v._v("#")]),v._v(" Background")]),v._v(" "),_("p",[v._v("image(файл : string) : void")]),v._v(" "),_("p",[v._v("size(‘auto’ : enum) : void")]),v._v(" "),_("p",[v._v("color(hex : string) : void")]),v._v(" "),_("p",[v._v("repeat(‘repeat’ : enum) : void")]),v._v(" "),_("p",[v._v("Button")]),v._v(" "),_("p",[v._v("Image")]),v._v(" "),_("p",[v._v("Link")]),v._v(" "),_("h3",{attrs:{id:"canvas"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[v._v("#")]),v._v(" Canvas")]),v._v(" "),_("p",[v._v("пакет для рисования графических элементов на экране")]),v._v(" "),_("h3",{attrs:{id:"rpg"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpg"}},[v._v("#")]),v._v(" RPG")]),v._v(" "),_("p",[v._v("пакет всякого RPG, навороченный инвентарь, персонажи, статы, торговля, итп")]),v._v(" "),_("h3",{attrs:{id:"map"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[v._v("#")]),v._v(" Map")]),v._v(" "),_("p",[v._v("карта для игры")])])}),[],!1,null,null,null);t.default=e.exports}}]);