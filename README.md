## Совместная работа по сайту

- Работаем только через GitHub.
- Настроен **"Webhook"** по событию "push", т.е. на сервер ничего заливать **не надо**, файлы на сервере обновляются автоматически. 
- Работаем с веткой "master".

## Настройки хостинга

- www -> /public
- admin -> /backend
- old -> /frontend

## Настройка локального окружения

#### Composer
```
composer install
```

#### php.ini
```
include_path = ".... vendor/zendframework/zendframework1/library"
```

#### Open Server user path.txt (или windows PATH)
```
... vendor/bin
```

#### ZF1 Tool CLI
- копируем из `.... vendor/zendframework/zendframework1/bin` -> `.... vendor/bin`