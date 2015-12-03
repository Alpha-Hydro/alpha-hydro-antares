<?

// доступные расширения файлов для поиска
$allowed_extensions = array(
    'php'       => true,
    'htm'       => false,
    'html'      => false,
    'xhtml'     => false,
    'js'        => false,
    'css'       => false,
    'pl'        => false,
    'sh'        => false,
    'cgi'       => false,
    'txt'       => false,
    'xml'       => false,
    'tpl'       => false,
    'htaccess'  => false,
    'htpasswd'  => false,
    'ini'  		=> false
);

// эти файлы/каталоги игнорировать при поиске
$ignore_files = array(
    '.',
    '..',
    '.ssh',
    '.bash_history',
    '.nano_history',
    '.aptitude',
    '.ssh',
    '.git',
    '.mc'
);

?>

<!DOCTYPE HTML>
<html lang="ru" >
    <head>
        <title>FIND IT!</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        
        
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" type="text/css" >
        
        <style>
        
            a:active, a:focus, button:active, button:focus, input:active, input:focus {
                outline: none !important;
            }
            
            textarea {
                resize: vertical;
            }
            
            div.checkbox label {
                margin-right: 20px;
            }
        
            div.checkbox {
                margin-bottom: 10px !important;
            }
            
            span.quick_path a {
                margin-right: 20px;
                cursor: pointer;
            }
        
        </style>
        
        
        <script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript" ></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript" ></script>
        
        <script>
            
            $(document).ready(function() {
                
                // обработчик клика по кнопке Отметить все
                $('#check_all_extensions').click(function() {
                    $('div.checkbox input:checkbox').prop('checked', true);
                });
                
                // обработчик клика по кнопке Убрать все
                $('#check_none_extensions').click(function() {
                    $('div.checkbox input:checkbox').prop('checked', false);
                });
                
                // обработчик клика по полю текста для замены
                $('#replace').click(function() {
                    $('input:radio[value = replace]').prop('checked', true);
                });
                
                // обработчик клика по ссылкам быстрого пути
                $('.quick_path a').click(function() {
                    $('#path').val($(this).html());
                });
                
                // обработчик для отправки формы по Ctrl+Enter
                $(document).keydown(function(event) {
                    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
                        $('#find').click();
                    }
                });
                
            });
            
        </script>
    </head>
    
    <body>
        <div class="col-lg-12" >
            <div class="well bs-component" >
                <form class="form-horizontal" method="post" >
                    <fieldset>
                        <legend>
                            <label class="col-lg-6 control-label text-info" >FIND IT!</label>
                        </legend>
                        
                        <div class="form-group" >
                            <label for="path" class="col-lg-2 control-label" >Искать от</label>
                            <div class="col-lg-8" >
                                <textarea id="path" name="path" class="form-control" rows="1" placeholder="Абсолютный путь директории, с которой начнётся поиск" ><?=getcwd()?></textarea>
                                <span class="help-block quick_path" >
                                    <a><?=getcwd()?>/tickets</a>
                                    <a><?=getcwd()?>/custom_scripts</a>
                                </span>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="search_1" class="col-lg-2 control-label" >Искомая строка 1</label>
                            <div class="col-lg-8" >
                                <textarea id="search_1" name="search_1" class="form-control" rows="1" placeholder="Пароль, БД, логин и прочее - 1" ></textarea>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="search_2" class="col-lg-2 control-label" >Искомая строка 2</label>
                            <div class="col-lg-8" >
                                <textarea id="search_2" name="search_2" class="form-control" rows="1" placeholder="Пароль, БД, логин и прочее - 2" ></textarea>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label class="col-lg-2 control-label" >Искать в файлах</label>
                            <div class="col-lg-8" >
                                <div class="checkbox" >
                                    <? foreach ($allowed_extensions as $extension => $checked): ?>
                                        <label for="<?=$extension?>" >
                                            <input id="<?=$extension?>" type="checkbox" name="extensions[]" value="<?=$extension?>" <?= ($checked) ? ' checked="checked"' : '' ?>>*.<?=$extension?></input>
                                        </label>
                                    <? endforeach; ?>
                                </div>
                                <button id="check_all_extensions" type="button" class="btn btn-primary btn-xs" >Отметить все</button>
                                <button id="check_none_extensions" type="button" class="btn btn-primary btn-xs" >Убрать все</button>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label class="col-lg-2 control-label" >Что сделать</label>
                            <div class="col-lg-8" >
                                <div class="radio" >
                                    <label>
                                        <input name="mode" type="radio" value="find" checked="checked" >Найти</input>
                                    </label>
                                </div>
                                <div class="radio" >
                                    <label>
                                        <input type="radio" name="mode" value="replace" >Заменить на</input>
                                    </label>
                                    <textarea id="replace" name="replace" class="form-control" rows="1" placeholder="это" ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="recursion" class="col-lg-2 control-label" >Рекурсия</label>
                            <div class="col-lg-8" >
                                <select id="recursion" name="recursion" class="form-control" >
                                    <option value="1" selected="selected" >Да, я люблю рекурсивный метод</option>
                                    <option value="0" >Нет, не нужно</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group" >
                            <div class="col-lg-8 col-lg-offset-2" >
                                <button id="find" type="submit" class="btn btn-primary btn-lg" >&emsp;&emsp;Find&emsp;&emsp;</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </body>
</html>



<?

// при первом обращении к скрипту ($_POST будет пуст), не выполнять ничего
if (empty($_POST)) {
    die();
}


$found      = array();                                                                                  // массив найденных файлов
$count      = 0;                                                                                        // счётчик
$path       = isset($_POST['path']) ? $_POST['path'] : false;                                           // путь к корню (откуда искать)
$search_1   = isset($_POST['search_1']) ? $_POST['search_1'] : false;                                   // искомая строка (что искать)
$search_2   = isset($_POST['search_2']) ? $_POST['search_2'] : false;                                   // искомая строка (что искать)
$extensions = isset($_POST['extensions']) ? $_POST['extensions'] : false;                               // какие расширения проверять
$mode       = isset($_POST['mode']) ? $_POST['mode'] : false;                                           // флаг перезаписи
$replace    = isset($_POST['replace']) ? $_POST['replace'] : false;                                     // строка замены
$recursion  = isset($_POST['recursion']) ? $_POST['recursion'] : false;                                 // флаг рекурсивного поиска


if (empty($path) || empty($search_1)) {
    die();
}


echo '<div id="result" class="col-lg-12" ><br />';

if (!empty($search_1)) {
    
    $found_1 = xdir($path, $search_1, $mode, $replace, $recursion, $found_text_class = 'text-danger');  // поиск первой строки
    
    if (!empty($search_2)) {
        
        echo '<hr /><hr /><hr />';
        
        $found = array();                                                                               // сбрасываем массив найденных файлов, ибо ищем второю строку
        $found_2 = xdir($path, $search_2, $mode, $replace, $recursion, $found_text_class = 'text-primary'); // поиск второй строки
        
        
        // если вторая строка встречается хоть где-то
        if (!empty($found_2)) {
            
            echo '<hr /><hr /><hr />';
            
            // вычисляем файлы с вхождением обеих строк поиска 
            $match = array_intersect($found_1, $found_2);
            if (!empty($match)) {
                foreach($match as $key => $value) {
                    echo '<p class="text-success" >' . $value . '<span class="text-muted" > - <strong>MATCHING HERE !!!</strong></span></p>';   // вывод имени найденного файла с вхождением обеих строк поиска
                }
            }
        }
        // вторая строка нигде не найдена
        else {
            echo '<p class="text-primary" >NO MATCHES</p>';
            echo '<hr /><hr /><hr />';
        }
    }
}

// если ничего не нашли, говорим об этом
if (empty($found)) {
    echo '<h1><p class="text-success" >All clear</p></h1>';
}

// сколько файлов перелопачено в сумме
echo '<br /><br /><h2><p class="text-primary" >Проверено файлов: ' . $count . '</p></h2><br /><br /><br /><br /></div>';



// рабочая лошадка - функция, которая рекурсивно ищет и при необходимости заменяет вхождения
function xdir($path, $search_str, $mode, $replace, $recursion, $found_text_class = 'text-danger') {
    
    global $extensions;
    global $ignore_files;
    global $found;
    global $count;
    
    
    // если не выбрано ни одно расширение, то не искать
    if (empty($extensions)) {
        return array();
    }
    
    
    // открываем папку и получаем её handle (дескриптор)
    if (($dir_handle = @opendir($path)) !== false) {
        
        // открываем файл по списку и получаем его handle (дескриптор)
        while(($file = readdir($dir_handle)) !== false) {
            
            // если это файл-исключение, то пропускаем
            if (in_array($file, $ignore_files)) {
                continue;                            
            }
            
            
            $count++;                                                                                   // инкрементируем счётчик
            
            $file = $path . '/' . $file;
            if (is_dir($file) && $recursion) {                                                          // определяет, является ли имя текущего файла директорией
                xdir($file, $search_str, $mode, $replace, $recursion, $found_text_class);               // если это директория, выполняем рекурсию и заходим в неё
            }
            
            
            // если это файл и он пододит по расширению
            if (is_file($file) && in_array(pathinfo($file, PATHINFO_EXTENSION), $extensions)) {
                
                $f = @fopen($file, 'rb');                                                               // открывает поток IO файла; 'r' - открывает файл только для чтения; помещает указатель в начало файла.
                
                // если файл удалось открыть
                if ($f !== false) {
                    
                    $char = @fread($f, filesize($file));                                                // читаем весь файл
                    if (@strstr($char, $search_str)) {                                                  // если искомая строка найдена в файле
                        
                        $found[] = $file;                                                               // добавляем файл в массив найденных файлов
                        echo '<p class="' . $found_text_class . '" >' . $file . '<span class="text-muted" > - <strong>' . $search_str . '</strong></span>'; // вывод имени найденного файла
                    }
                    @fclose($f);                                                                        // закрываем поток IO
                    
                    // если используется режим поиска и замены
                    if ($mode == 'replace') {
                        $new_content = str_replace($search_str, $replace, $char, $replace_count);       // создаём обновленное содержимое файла
                        
                        // если есть что заменять
                        if ($replace_count > 0) {
                            
                            $f = @fopen($file, 'wb');                                                   // открывает поток IO файла; 'wb' - Открывает файл для чтения и записи; помещает указатель в начало файла и обрезает файл до нулевой длины.
                            
                            // если файл удалось открыть
                            if ($f !== false) {
                                @fwrite($f, $new_content);                                              // пишем в файл содержимое после замены
                                echo '<span class="text-muted" >&emsp;&emsp;=> выполнено замен: <strong>' . $replace_count . '</strong></span>';
                                @fclose($f);
                            }
                            // говорим, что доступ к файлу отсутствует
                            else {
                                echo '<h3><p class="text-warning" >' . $file . ' - access denied - запись в файл невозможна</p></h3>';
                            }
                        }
                    }
                    
                    echo '</p>';
                }
                // говорим, что доступ к файлу отсутствует
                else {
                    echo '<h3><p class="text-warning" >' . $file . ' - access denied - чтение файла не удалось</p></h3>';
                }
            }
        }
        closedir($dir_handle);                                                                          // закрываем поток чтения папки
    }
    // говорим, что доступ к папке отсутствует
    else {
        echo '<h3><p class="text-warning" >' . $path . ' - access denied - чтение папки не удалось</p></h3>';
    }
    
    return $found;
}

?>
