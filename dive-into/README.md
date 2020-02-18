---
title: Погружение
sidebar: auto
sidebarDepth: 5
---

# Погружение 

### Вывод текста:
```
Идет медведь по лесу...
```

## Системные конструкции:
`~ a = 1` присвоение

`~ a = "тес" + "т"`  склейка строк

`{a}` вывод переменной или функции в текст

`->локация` переход

`~ локация()` или `~ локация(x)` прок

`~ return` возврат значения функции (локации)

`;` - разделитель строки (кода), необязательный

### Блочные конструкции:
`:локация`

`:локация(x)`

`:локация(x, y)`

`~ if условие:`

`~ elseif условие:`

`~ else:`

## Дополнительные пакеты:
### Inventory
add(предмет : string, [кол-во : int]) : void - добавляет 1 предмет, или N, если указано

remove(предмет : string, [кол-во : int]) : void - удаляет 1 предмет, или N, если указано

count({предмет : string}) : int возвращает кол-во указанного предмета, или количество всех предметов

clear() : void - очистить инвентарь

bind(предмет : string, название действия : string, локация или выражение: string) : void - добавляет действие для данного предмета

`~Inventory.bind("одеколон", "подушиться", "использовать_одеколон")`

unbind(предмет : string, название действия : string) : void - убирает указанное действие у предмета

### Audio
music([“file.mp3”] : string[]) : void - сахар, зациклена по умолчанию, поток 0

sound(“file.mp3”: string): void, саха, не зациклена, поток 1

play(поток : int, repeat : boolean, [“file.mp3”, “file2.mp3”] : string[]) : void

createPlaylist() : Playlist - под вопросом

#### Playlist - под вопросом
setRepeat(:boolean) : void
	
add(:string) : void

shuffle() : void

play() : void

remove(:string) : void

clear() : void

### String
сравнение строк по маске (?)

length

### Array
модуль работы с массивами, 
count
foreach
push

### View
rgb(r : int, g : int, b : int) : string - hex

#### Effects
Инверсия

Вспышка

Блюр

Тряска (с вибрацией)

#### Font
size(14 : int) : void 

color(hex : string) : void 

#### Background
image(файл : string) : void 

size(‘auto’ : enum) : void 

color(hex : string) : void 

repeat(‘repeat’ : enum) : void 

Button

Image

Link

### Canvas
пакет для рисования графических элементов на экране

### RPG
пакет всякого RPG, навороченный инвентарь, персонажи, статы, торговля, итп

### Map
карта для игры
