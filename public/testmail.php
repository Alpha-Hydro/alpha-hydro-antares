<?php
#!/usr/bin/php -q
/*$address="admin@alpha-hydro.com";
$subj="Mail Test";
$text=date("D, d.m.y, H:i");
$head="Content-type:text/plain; \n\t charset=windows-1251;";
echo "Sending to $address <br/>";
mail($address, $subj, $text, $head);
echo "Ok, it works";*/

// несколько получателей
//$to  = 'admin@alpha-hydro.com' . ', '; // обратите внимание на запятую
//$to .= 'mvl@alpha-hydro.com';

$to  = 'admin@alpha-hydro.com';

// тема письма
$subject = 'Mail Test';

// текст письма
$message = date("D, d.m.y, H:i");

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Дополнительные заголовки
$headers .= 'To: Admin <admin@alpha-hydro.com>' . "\r\n";
$headers .= 'From: Alpha-Hydro <info@alpha-hydro.com>' . "\r\n";
//$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
$headers .= 'Bcc: mvl@alpha-hydro.com' . "\r\n";


echo "Sending to $to <br/>";
// Отправляем
mail($to, $subject, $message, $headers, " -f info@alpha-hydro.com");
echo "Ok, it send";