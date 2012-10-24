Вариант 1
==
```javascript
$('.days').russian_declension();  
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
$('span.guest').russian_declension({one: "гость", several:"гостя", many: "гостей"});
```

```html
<p>
    Стол накрыт на <span class="guest">25</span>. <br />
    Ложек хватало только на <span class="guest">4</span>.
    <span data-rudecle data-one="гость остался" data-several="гостя остались" data-many="гостeй остались">21</span> без ложек.
</p>
```

Вывод
```
Стол накрыт на 25 гостей. 
Ложек хватало только на 4 гостя. 21 гость остался без ложек.
```

Вариант 3
==

Укажите аттрибут data-rudecle.

```html
<p>
    <span data-rudecle data-one="гость остался" data-several="гостя остались" data-many="гостeй остались">21</span>.
</p>
```
