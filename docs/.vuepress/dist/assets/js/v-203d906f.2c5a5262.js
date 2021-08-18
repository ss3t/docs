"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[203],{5767:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-203d906f",path:"/dive-into/",title:"Погружение",lang:"ru",frontmatter:{title:"Погружение",sidebar:"auto",sidebarDepth:5},excerpt:"",headers:[{level:2,title:"Системные конструкции:",slug:"системные-конструкции",children:[]},{level:2,title:"Функции:",slug:"функции",children:[]},{level:2,title:"Теги:",slug:"теги",children:[{level:3,title:"Оформление",slug:"оформление",children:[]}]},{level:2,title:"Локации:",slug:"локации",children:[]},{level:2,title:"Блочные конструкции:",slug:"блочные-конструкции",children:[]},{level:2,title:"Системные функции",slug:"системные-функции",children:[]},{level:2,title:"Математические и логические операторы:",slug:"математические-и-логические-операторы",children:[]},{level:2,title:"Все что ниже еще не реализовано в движке:",slug:"все-что-ниже-еще-не-реализовано-в-движке",children:[]},{level:2,title:"Дополнительные пакеты:",slug:"дополнительные-пакеты",children:[{level:3,title:"Inventory",slug:"inventory",children:[]},{level:3,title:"Audio",slug:"audio",children:[]},{level:3,title:"String",slug:"string",children:[]},{level:3,title:"Array",slug:"array",children:[]},{level:3,title:"View",slug:"view",children:[]},{level:3,title:"Canvas",slug:"canvas",children:[]},{level:3,title:"RPG",slug:"rpg",children:[]},{level:3,title:"Map",slug:"map",children:[]},{level:3,title:"Date",slug:"date",children:[]},{level:3,title:"Math",slug:"math",children:[]}]}],filePathRelative:"dive-into/README.md",git:{updatedTime:null,contributors:[]}}},1674:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var n=a(6252);const l=(0,n.uE)('<h1 id="погружение" tabindex="-1"><a class="header-anchor" href="#погружение" aria-hidden="true">#</a> Погружение</h1><h2 id="системные-конструкции" tabindex="-1"><a class="header-anchor" href="#системные-конструкции" aria-hidden="true">#</a> Системные конструкции:</h2><p><code>~ a = 1</code> присвоение</p><p><code>~ a = &quot;тес&quot; + &quot;т&quot;</code> склейка строк</p><p><code>{a}</code> вывод переменной или функции в текст</p><p><code>-&gt;локация</code> переход</p><p><code>\\</code> экранирование спецсимволов для их вывода на экран, ставится перед символом</p><p>Пример:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">\\~</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>или:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">Это знак решетки - \\#</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>&lt;&gt;</code> не переносить строку</p><p>Примеры:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">Привет, &lt;&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">мир!</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">Привет,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">&lt;&gt; мир!</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">Привет,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">&lt;&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">мир!</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Результат:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">Привет, мир!\nПривет, мир!\nПривет, мир!\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="функции" tabindex="-1"><a class="header-anchor" href="#функции" aria-hidden="true">#</a> Функции:</h2><p>Обозначение новой функции, которая выведет фразу &quot;Привет!&quot;:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">:поздороваться()</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    Привет!</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>или функции с параметрами, которая складывает два параметра</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">:сложить(x, y)</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    ~ x + y</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Функции всегда возвращают последнее значение, поэтому фунция выше будет возвращать результат вычисления x + y</p><p>Вызов функций:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">~ поздороваться()</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>или</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">2 + 4 это будет {сложить(2, 4)}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="теги" tabindex="-1"><a class="header-anchor" href="#теги" aria-hidden="true">#</a> Теги:</h2><h3 id="оформление" tabindex="-1"><a class="header-anchor" href="#оформление" aria-hidden="true">#</a> Оформление</h3>',28),p=(0,n.Uk)("Оформление с помощью тегов описанны в отдельном "),i=(0,n.Uk)("разделе"),r=(0,n.uE)('<h2 id="локации" tabindex="-1"><a class="header-anchor" href="#локации" aria-hidden="true">#</a> Локации:</h2><p><code>:локация</code></p><p>Вложенная локация:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">:лес</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">   Это лес </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">   :пещера</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">        Это пещера в лесу</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">        :обрыв</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">            А это обрыв, которым кончается эта пещера</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">            В доме который построил джек</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">-&gt;лес.пещера.обрыв</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="блочные-конструкции" tabindex="-1"><a class="header-anchor" href="#блочные-конструкции" aria-hidden="true">#</a> Блочные конструкции:</h2><p><code>:локация</code></p><p><code>:локация()</code></p><p><code>~ if условие</code></p><p><code>~ elseif условие</code></p><p><code>~ else</code></p><h2 id="системные-функции" tabindex="-1"><a class="header-anchor" href="#системные-функции" aria-hidden="true">#</a> Системные функции</h2><p><code>pause(время в микросекундах : int) : void</code> пауза</p><p>Пример:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">~ pause(5000) // пауза на 5 секунд</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>input() : string</code> - возвращает введенное пользователем значение</p><p>Пример:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">~ a = input()</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">{a}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>anykey() : int</code> - возвращает код нажатой клавиши (мышь тоже считается)</p><p>Пример:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">~ a = anykey()</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">{a}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>random(число от : int, число до : int) : int</code> - случайное целое число от N1 до N2</p><p>Пример:</p><div class="language-ssthreet ext-ssthreet line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">{random(1, 5)}  // выведет случайное число от 1 до 5</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">~ a = random(1, 5) // присвоит в переменную &quot;а&quot; случайное число от 1 до 5</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="математические-и-логические-операторы" tabindex="-1"><a class="header-anchor" href="#математические-и-логические-операторы" aria-hidden="true">#</a> Математические и логические операторы:</h2><p><code>(</code></p><p><code>)</code></p><p><code>*</code> умножение</p><p><code>/</code> деление</p><p><code>%</code> остаток от деления</p><p><code>+</code> сложение</p><p><code>-</code> вычитание</p><p><code>&lt;</code> меньше</p><p><code>&lt;=</code> меньше или равно</p><p><code>&gt;</code> больше</p><p><code>&gt;=</code> больше или равно</p><p><code>==</code> равно</p><p><code>!=</code> не равно</p><p><code>and</code> - и</p><p><code>or</code> - или</p><h2 id="все-что-ниже-еще-не-реализовано-в-движке" tabindex="-1"><a class="header-anchor" href="#все-что-ниже-еще-не-реализовано-в-движке" aria-hidden="true">#</a> Все что ниже еще не реализовано в движке:</h2><h2 id="дополнительные-пакеты" tabindex="-1"><a class="header-anchor" href="#дополнительные-пакеты" aria-hidden="true">#</a> Дополнительные пакеты:</h2><h3 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory" aria-hidden="true">#</a> Inventory</h3><p>add(предмет : string, [кол-во : int]) : void - добавляет 1 предмет, или N, если указано</p><p>remove(предмет : string, [кол-во : int]) : void - удаляет 1 предмет, или N, если указано</p><p>count({предмет : string}) : int возвращает кол-во указанного предмета, или количество всех предметов</p><p>clear() : void - очистить инвентарь</p><p>bind(предмет : string, название действия : string, локация или выражение: string) : void - добавляет действие для данного предмета</p><p><code>~Inventory.bind(&quot;одеколон&quot;, &quot;подушиться&quot;, &quot;использовать_одеколон&quot;)</code></p><p>unbind(предмет : string, название действия : string) : void - убирает указанное действие у предмета</p><h3 id="audio" tabindex="-1"><a class="header-anchor" href="#audio" aria-hidden="true">#</a> Audio</h3><p>music([“file.mp3”] : string[]) : void - сахар, зациклена по умолчанию, поток 0</p><p>sound(“file.mp3”: string): void, саха, не зациклена, поток 1</p><p>play(поток : int, repeat : boolean, [“file.mp3”, “file2.mp3”] : string[]) : void</p><p>createPlaylist() : Playlist - под вопросом</p><h4 id="playlist-под-вопросом" tabindex="-1"><a class="header-anchor" href="#playlist-под-вопросом" aria-hidden="true">#</a> Playlist - под вопросом</h4><p>setRepeat(:boolean) : void</p><p>add(:string) : void</p><p>shuffle() : void</p><p>play() : void</p><p>remove(:string) : void</p><p>clear() : void</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><p>сравнение строк по маске (?)</p><p>length</p><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><p>модуль работы с массивами, count foreach push</p><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h3><p>rgb(r : int, g : int, b : int) : string - hex</p><h4 id="effects" tabindex="-1"><a class="header-anchor" href="#effects" aria-hidden="true">#</a> Effects</h4><p>Инверсия</p><p>Вспышка</p><p>Блюр</p><p>Тряска (с вибрацией)</p><h4 id="font" tabindex="-1"><a class="header-anchor" href="#font" aria-hidden="true">#</a> Font</h4><p>size(14 : int) : void</p><p>color(hex : string) : void</p><h4 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h4><p>image(файл : string) : void</p><p>size(‘auto’ : enum) : void</p><p>color(hex : string) : void</p><p>repeat(‘repeat’ : enum) : void</p><p>Button</p><p>Image</p><p>Link</p><h3 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h3><p>пакет для рисования графических элементов на экране</p><h3 id="rpg" tabindex="-1"><a class="header-anchor" href="#rpg" aria-hidden="true">#</a> RPG</h3><p>пакет всякого RPG, навороченный инвентарь, персонажи, статы, торговля, итп</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><p>карта для игры</p><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h3><p>getTime() : int - текущее время (unix timestamp)</p><h3 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h3><p>round(1.4 : number) : int - округление до ближайшего целого числа</p>',94),d={render:function(e,s){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("p",null,[p,(0,n.Wm)(a,{to:"/design/"},{default:(0,n.w5)((()=>[i])),_:1})]),r],64)}}}}]);