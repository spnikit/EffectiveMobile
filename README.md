Необходимо создать мини-тасктреккер (по типу Asana, можно брать её в пример).
Стек: Angular (желательно последней версии), Angular Material, SCSS/SASS/LESS, TypeScript, RxJs, по желанию NgRx.
---
В приложении должен быть реализован функционал:
- создания задачи (заголовок, название, дедлайн, приоритет, статус, исполнители);
- редактирование задач (статус, исполнители);
- страница детального просмотра задач и переход на неё;
- отдельная страница со всеми задачами + фильтрация и сортировка задач по статусам, исполнителю и дате дедлайна;
- сохранение всех изменений в localStorage;
 #### Доп требования (необязательны, но желательны):
- максимально использовать TypeScript (везде должны быть указаны типы, енамы, кастомные типы/интерфейсы, utility types и т.д.);
- использовать последнюю версию ангуляра и его новые фичи;
- реализовать имитацию получения данных с сервера с использование angular-сервисов и NgRx (в качестве сервера можно использовать localStorage); 

---
### Запуск
`npm run start
`

Приложение запустится на `localhost` 4200
