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
```bash
> cp vendor/zendframework/zendframework1/bin vendor/bin
> zf --setup storage-directory
> zf --setup config-file
```

#### .zf.ini
```
php.include_path = "... vendor\zendframework\zendframework1\library; ... vendor\vladmeh"
autoloadernamespaces.0 = "Zftool_"
basicloader.classes.0 = "Zftool_Tool_Project_Provider_ModelMapperProvider"
basicloader.classes.1 = "Zftool_Tool_Project_Provider_Manifest"
```