---
title: Быстрый старт
sidebar: auto
sidebarDepth: 6
---

# Быстрый старт

## Вывод текста
Текст выводится сразу, без дополнительных операторов.

конструкция `{}` выводит переменную или функцию в текст

Пример:
```ssthreet
~ a = "по лесу"

Идет медведь {a}...
```
Результат:
```
Идет медведь по лесу...
```

## Переменные

Символ `~` означает исполняемый код (который не выводится как текст)

`~ a = 1` присвоение

`~ a = "тес" + "т"` склейка строк

Пример:
```ssthreet
~ a = "сел" + " в машину и..."

Идет медведь по лесу, {a}
```

или просто:
```ssthreet
Идет медведь по лесу, {"сел" + " в машину и..."}
```
Результат:
```
Идет медведь по лесу, сел в машину и...
```

## Локации
Это #[блочная](#бnочные-конструкции) конструкция

Локация это изолированный блок, который не выполнится сам по себе, пока на него не будет выполнен переход.

Код игры выполняется построчно, и останавливается когда встречает конструкцию локации `:`. При переходе проигрывание начнется с первой строки локации:

```ssthreet
:лес
  Текст локации
```

`->локация` переход в локацию

```ssthreet
-> лес
:горы
    Это локация горы

:лес
    Это локация лес
```
Результат:
```
Это локация лес
```

## Условия
Это #[блочная](#бnочные-конструкции) конструкция

Если:
`~ if условие`
Если нет, иначе:
`~ elseif условие`
Иначе:
`~ else`

Пример:
```ssthreet
~ деньги = 5

~ if деньги > 10
    У вас хватает монет оплатить покупку
~ elseif деньги > 5
    Придется еще немного поднакопить
~ else
    Денег явно недостаточно!
```

Или:
```ssthreet
~ деньги = 5

~ if деньги < 10
    Денег явно недостаточно!
```

Результат:
```
Денег явно недостаточно!
```



## Выбор
Это #[блочная](#бnочные-конструкции) конструкция

`+` выбор, который можно сделать **сколько угодно** раз

`*` выбор, который можно сделать только **один** раз

Пример:
```ssthreet
В поисках трав, я углубился в чащу леса. Внезапно, неподалеку послышался вой. Оглядевшись, я увидел большого волка на холме в паре десятков метрах от меня. Холодок пробежал по спине. Надо что-то делать.
* Бежать
    Я убегаю, но второй раз это не сработает
    ->деревня
+ Залезть на дерево
    ->дерево
+ Атаковать
    ->локация_атака
```

Результат будет зависить от выбора игрока

## Блочные конструкции

Все блочные конструкции определяются отступами (пробелы)

Пример:
```ssthreet
~ if a > 10
    -> лес

:горы
    Это локация горы

:лес
    Текст локации
```

## Комментарии
`//` комментарий

`/* многострочный комментарий */`

Пример:
```ssthreet
Этот текст выведется на экран // а этот нет
```

Результат:
```
Этот текст выведется на экран
```

Хочется [больше](../../dive-into/)?