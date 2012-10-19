Вариант 1
==
```javascript
$('.days').russian();  
```

```html
<div class="days" data-one="день" data-several="дня" data-many="дней">7</div>
<div class="days" data-one="день" data-several="дня" data-many="дней">1</div>
<div class="days" data-one="день" data-several="дня" data-many="дней">2</div>
```

Вывод
```
7 дней
1 день
2 дня
```

Вариант 2
==

```javascript
$('span.guest').russian({one: "гость", several:"гостя", many: "гостей"});
```

```html
<p>
  Стол накрыт на <span class="guest">25</span>. <br />
  Ложек хватало только на <span class="guest">4</span>.<br />
  <span class="guest">21</span> остались без ложек.
</p>
```

Вывод
```
Стол накрыт на 25 гостей. 
Ложек хватало только на 4 гостя. 21 гость остались без ложек.
```

