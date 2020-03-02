(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(a,t,s){"use strict";s.r(t);var e=s(28),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"быстрый-старт"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#быстрый-старт"}},[a._v("#")]),a._v(" Быстрый старт")]),a._v(" "),s("h2",{attrs:{id:"вывод-текста"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#вывод-текста"}},[a._v("#")]),a._v(" Вывод текста")]),a._v(" "),s("p",[a._v("Текст выводится сразу, без дополнительных операторов.")]),a._v(" "),s("p",[a._v("конструкция "),s("code",[a._v("{}")]),a._v(" выводит переменную или функцию в текст")]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('~ a = "по лесу"\n\nИдет медведь {a}...\n')])])]),s("p",[a._v("Результат:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Идет медведь по лесу...\n")])])]),s("h2",{attrs:{id:"переменные"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#переменные"}},[a._v("#")]),a._v(" Переменные")]),a._v(" "),s("p",[a._v("Символ "),s("code",[a._v("~")]),a._v(" означает исполняемый код (который не выводится как текст)")]),a._v(" "),s("p",[s("code",[a._v("~ a = 1")]),a._v(" присвоение")]),a._v(" "),s("p",[s("code",[a._v('~ a = "тес" + "т"')]),a._v(" склейка строк")]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~ a = \n\nИдет медведь по лесу, {a}\n")])])]),s("p",[a._v("или просто:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Идет медведь по лесу, {"сел" + " в машину и..."}\n')])])]),s("p",[a._v("Результат:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Идет медведь по лесу, сел в машину и...\n")])])]),s("h2",{attrs:{id:"локации"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#локации"}},[a._v("#")]),a._v(" Локации")]),a._v(" "),s("p",[a._v("Это #"),s("a",{attrs:{href:"#%D0%B1n%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8"}},[a._v("блочная")]),a._v(" конструкция")]),a._v(" "),s("p",[a._v("Локация это изолированный блок, который не выполнится сам по себе, пока на него не будет выполнен переход.")]),a._v(" "),s("p",[a._v("Код игры выполняется построчно, и останавливается когда встречает конструкцию локации "),s("code",[a._v(":")]),a._v(". При переходе проигрывание начнется с первой строки локации:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":лес\n  Текст локации\n")])])]),s("p",[s("code",[a._v("->локация")]),a._v(" переход в локацию")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-> лес\n:горы\n    Это локация горы\n\n:лес\n    Это локация лес\n")])])]),s("p",[a._v("Результат:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Это локация лес\n")])])]),s("h2",{attrs:{id:"усnовия"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#усnовия"}},[a._v("#")]),a._v(" Условия")]),a._v(" "),s("p",[a._v("Это #"),s("a",{attrs:{href:"#%D0%B1n%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8"}},[a._v("блочная")]),a._v(" конструкция")]),a._v(" "),s("p",[a._v("Если:\n"),s("code",[a._v("~ if условие")]),a._v("\nЕсли нет, иначе:\n"),s("code",[a._v("~ elseif условие")]),a._v("\nИначе:\n"),s("code",[a._v("~ else")])]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~ деньги = 5\n\n~ if деньги > 10\n    У вас хватает монет оплатить покупку\n~ elseif деньги > 5\n    Придется еще немного поднакопить\n~ else\n    Денег явно недостаточно!\n")])])]),s("p",[a._v("Или:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~ деньги = 5\n\n~ if деньги < 10\n    Денег явно недостаточно!\n")])])]),s("p",[a._v("Результат:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Денег явно недостаточно!\n")])])]),s("h2",{attrs:{id:"выбор"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#выбор"}},[a._v("#")]),a._v(" Выбор")]),a._v(" "),s("p",[a._v("Это #"),s("a",{attrs:{href:"#%D0%B1n%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8"}},[a._v("блочная")]),a._v(" конструкция")]),a._v(" "),s("p",[s("code",[a._v("+")]),a._v(" выбор, который можно сделать "),s("strong",[a._v("сколько угодно")]),a._v(" раз")]),a._v(" "),s("p",[s("code",[a._v("*")]),a._v(" выбор, который можно сделать только "),s("strong",[a._v("один")]),a._v(" раз")]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("В поисках трав, я углубился в чащу леса. Внезапно, неподалеку послышался вой. Оглядевшись, я увидел большого волка на холме в паре десятков метрах от меня. Холодок пробежал по спине. Надо что-то делать.\n* Бежать\n    Я убегаю, но второй раз это не сработает\n    ->деревня\n+ Залезть на дерево\n    ->дерево\n+ Атаковать\n    ->локация_атака\n")])])]),s("p",[a._v("Результат будет зависить от выбора игрока")]),a._v(" "),s("h2",{attrs:{id:"бnочные-конструкции"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#бnочные-конструкции"}},[a._v("#")]),a._v(" Блочные конструкции")]),a._v(" "),s("p",[a._v("Все блочные конструкции определяются отступами (пробелы)")]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("~ if a > 10\n    -> лес\n\n:горы\n    Это локация горы\n\n:лес\n    Текст локации\n")])])]),s("h2",{attrs:{id:"комментарии"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#комментарии"}},[a._v("#")]),a._v(" Комментарии")]),a._v(" "),s("p",[s("code",[a._v("//")]),a._v(" комментарий")]),a._v(" "),s("p",[s("code",[a._v("/* многострочный комментарий */")])]),a._v(" "),s("p",[a._v("Пример:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Этот текст выведется на экран // а этот нет\n")])])]),s("p",[a._v("Результат:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Этот текст выведется на экран\n")])])]),s("p",[a._v("Хочется "),s("RouterLink",{attrs:{to:"/dive-into/"}},[a._v("больше")]),a._v("?")],1)])}),[],!1,null,null,null);t.default=v.exports}}]);