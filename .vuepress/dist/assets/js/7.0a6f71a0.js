(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(v,_,t){"use strict";t.r(_);var a=t(0),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"быстрый-старт"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#быстрый-старт"}},[v._v("#")]),v._v(" Быстрый старт")]),v._v(" "),t("h3",{attrs:{id:"бnочные"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#бnочные"}},[v._v("#")]),v._v(" Блочные:")]),v._v(" "),t("p",[t("code",[v._v(":локация")])]),v._v(" "),t("p",[t("code",[v._v(":локация(x)")])]),v._v(" "),t("p",[t("code",[v._v(":локация(x, y)")])]),v._v(" "),t("p",[t("code",[v._v("~ if условие:")])]),v._v(" "),t("p",[t("code",[v._v("~ elseif условие:")])]),v._v(" "),t("p",[t("code",[v._v("~ else:")])]),v._v(" "),t("p",[v._v("все блочные конструкции определяются отступами (пробелы)")]),v._v(" "),t("h2",{attrs:{id:"системные-конструкции"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#системные-конструкции"}},[v._v("#")]),v._v(" Системные конструкции:")]),v._v(" "),t("p",[t("code",[v._v("~ a = 1")]),v._v(" присвоение")]),v._v(" "),t("p",[t("code",[v._v('~ a = "тес" + "т"')]),v._v("  склейка строк")]),v._v(" "),t("p",[t("code",[v._v("{a}")]),v._v(" вывод переменной или функции в текст")]),v._v(" "),t("p",[t("code",[v._v("->локация")]),v._v(" goto")]),v._v(" "),t("p",[t("code",[v._v("~ локация()")]),v._v(" или "),t("code",[v._v("~ локация(x)")]),v._v(" прок")]),v._v(" "),t("p",[t("code",[v._v("~ return")]),v._v(" возврат значения функции (локации)")]),v._v(" "),t("p",[t("code",[v._v(";")]),v._v(" - разделитель строки (кода), необязательный")]),v._v(" "),t("h2",{attrs:{id:"комментарии"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#комментарии"}},[v._v("#")]),v._v(" Комментарии:")]),v._v(" "),t("p",[t("code",[v._v("//")]),v._v(" комментарий")]),v._v(" "),t("p",[t("code",[v._v("/* многострочный комментарий */")])]),v._v(" "),t("h2",{attrs:{id:"основные-пакеты"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#основные-пакеты"}},[v._v("#")]),v._v(" Основные пакеты:")]),v._v(" "),t("h3",{attrs:{id:"math"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#math"}},[v._v("#")]),v._v(" Math")]),v._v(" "),t("p",[v._v("random(1 : int, 5 : int) : int - случайное целое число от N1 до N2")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("~кубик = Math.random(1, 6)\nНа костях выпало {кубик}!\n")])])]),t("p",[v._v("round(1.4 : number) : int - округление до ближайшего целого числа")]),v._v(" "),t("h3",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[v._v("#")]),v._v(" Date")]),v._v(" "),t("p",[v._v("getTime() : int - текущее время (unix timestamp)")]),v._v(" "),t("h3",{attrs:{id:"input"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[v._v("#")]),v._v(" Input")]),v._v(" "),t("p",[v._v("prompt({тип: число, строка : enum = string}) : string - возвращает введенное пользователем значение")]),v._v(" "),t("p",[v._v("anykey() : int - возвращает код нажатой клавиши (мышь тоже считается)")]),v._v(" "),t("h3",{attrs:{id:"game"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game"}},[v._v("#")]),v._v(" Game")]),v._v(" "),t("p",[v._v("pause(время в микросекундах : int) : void")]),v._v(" "),t("p",[v._v("print(текст : string) : void - вывод текста на экран (требуется только в выражениях, где невозможно выводить текст напрямую)")]),v._v(" "),t("p",[v._v("Теги в тексте:")]),v._v(" "),t("p",[t("code",[v._v("[[ текст : string | локация или выражение: string]]")])]),v._v(" "),t("p",[t("code",[v._v("Рыцарь с [[ мечом на поясе | внимательность = внимательность + 1; ->осмотреть_меч ]] громко рассмеялся.")])]),v._v(" "),t("p",[v._v("Рыцарь с мечом на поясе громко рассмеялся.")]),v._v(" "),t("p",[t("code",[v._v("[[img:example.jpg : string | локация или выражение: string]]")]),v._v(" - подумать над align, выводит картинку")]),v._v(" "),t("p",[t("code",[v._v("[[btn: текст : string | локация или выражение: string]]")]),v._v(" - подумать над align, выводит кнопку")]),v._v(" "),t("h2",{attrs:{id:"математические-и-nогические-операторы"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#математические-и-nогические-операторы"}},[v._v("#")]),v._v(" Математические и логические операторы:")]),v._v(" "),t("p",[t("code",[v._v("(")])]),v._v(" "),t("p",[t("code",[v._v(")")])]),v._v(" "),t("p",[t("code",[v._v("not")]),v._v(' "не"')]),v._v(" "),t("p",[t("code",[v._v("*")]),v._v(" умножение")]),v._v(" "),t("p",[t("code",[v._v("/")]),v._v(" деление")]),v._v(" "),t("p",[t("code",[v._v("%")]),v._v(" остаток от деления")]),v._v(" "),t("p",[t("code",[v._v("+")]),v._v(" сложение")]),v._v(" "),t("p",[t("code",[v._v("-")]),v._v(" вычитание")]),v._v(" "),t("p",[t("code",[v._v("<")]),v._v(" меньше")]),v._v(" "),t("p",[t("code",[v._v("<=")]),v._v(" меньше или равно")]),v._v(" "),t("p",[t("code",[v._v(">")]),v._v(" больше")]),v._v(" "),t("p",[t("code",[v._v(">=")]),v._v(" больше или равно")]),v._v(" "),t("p",[t("code",[v._v("==")]),v._v(" равно")]),v._v(" "),t("p",[t("code",[v._v("!=")]),v._v(" не равно")]),v._v(" "),t("p",[t("code",[v._v("AND")]),v._v(" - и")]),v._v(" "),t("p",[t("code",[v._v("OR")]),v._v(" - или")]),v._v(" "),t("h2",{attrs:{id:"примеры"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#примеры"}},[v._v("#")]),v._v(" Примеры")]),v._v(" "),t("p",[v._v("локация, переменная, условие, {}:")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v(":лес\n  ~ a = a + 1\n  Описание леса\n  ~if a > 4:\n    Кажется я хожу кругами, я тут уже в {a}-й раз!\n  ~else:\n    Я еще не заблудился\n")])])]),t("p",[v._v("использование пакетов:")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v(':лес\n  ~Audio.music(["трек1.mp3", "трек2.mp3"])\n')])])]),t("p",[v._v("Хочется "),t("RouterLink",{attrs:{to:"/dive-into/"}},[v._v("больше")]),v._v("?")],1)])}),[],!1,null,null,null);_.default=e.exports}}]);