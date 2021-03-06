CREATE TABLE pages (
  id INT,
  path VARCHAR,
  title VARCHAR,
  description VARCHAR,
  content_html VARCHAR,
  meta_title VARCHAR,
  meta_description VARCHAR,
  meta_keywords VARCHAR,
  sorting INT,
  active INT,
  deleted INT,
  content_markdown VARCHAR,
  image VARCHAR,
  date_create TIMESTAMP
);
INSERT INTO pages(id, path, title, description, content_html, meta_title, meta_description, meta_keywords, sorting, active, deleted, content_markdown, image, date_create) VALUES (1, 'home', 'Альфа Гидро. Гидравлика.', 'Поставка гидравлического оборудования и гидрокомпонентов. Продажа и опрессовка рукавов высокого давления (РВД), фитингов, труб и трубных соединений. Проектировка и производство гидростанций и гидроцилиндров.', '<p>Поставка гидравлического оборудования и гидрокомпонентов. Продажа и опрессовка рукавов высокого давления (РВД), фитингов, труб и трубных соединений. Проектировка и производство гидростанций и гидроцилиндров.</p>
', 'Альфа Гидро. Гидравлика.', 'Поставка гидравлического оборудования и гидрокомпонентов. Продажа и опрессовка рукавов высокого давления (РВД), фитингов, труб и трубных соединений. Проектировка и производство гидростанций и гидроцилиндров.', 'гидравлика, гидравлическое оборудование, гидрокомпоненты, рукава высокого давления, РВД, фитинги, трубы, трубные соединения, гидростанции, продажа, опрессовка, проектировка, производство', 0, 1, 0, 'Поставка гидравлического оборудования и гидрокомпонентов. Продажа и опрессовка рукавов высокого давления (РВД), фитингов, труб и трубных соединений. Проектировка и производство гидростанций и гидроцилиндров.', null, '2015-10-09 12:29:13');
INSERT INTO pages(id, path, title, description, content_html, meta_title, meta_description, meta_keywords, sorting, active, deleted, content_markdown, image, date_create) VALUES (2, 'about', 'О нас', 'Компания ALPHA-HYDRO на сегодняшний день является крупным производителем и поставщиком гидравлики, давно на рынке, все знаем, динамично развиваемся и т.п.…', '<p>Компания ALPHA-HYDRO на сегодняшний день является крупным производителем и поставщиком гидравлики, давно на рынке, все знаем, динамично развиваемся и т.п. … Вы это уже где-то читали, не так ли?…</p>

<p>Уверены, Вы уже знаете про наши услуги и сервис, раз вы зашли на наш сайт. А подробнее о них Вы можете прочитать в соответствующих разделах нашего сайта. Посему мы просто расскажем немного о себе.</p>

<p>Мы - позитивный коллектив. Мы ценим честность, юмор, доверие, пунктуальность. Мы уважаем мнение и точку зрения собеседника. Мы презираем вранье, хамство, наглость. Мы любим общаться, советоваться, обсуждать вопросы по делу. За консультации денег мы не берем. Мы не любим и не общаемся с людьми, которые «любят поговорить не о чем», которые «сжигают» наше время. Мы положительно относимся к критике, принимает ее без обид и исправляем свои ошибки. Мы даем другим обратную связь с предложением как улучшить.</p>

<p>Ваша техника Вас не слушается? Вы устали от некачественного сервиса, текущих цилиндров, дырявых шлангов, не профессионализма и вранья поставщиков? Вам надоело ухаживать за вашей престарелой гидравликой? Сдайте ее в дом престарелого металлолома. Мы же дадим вам новую, которая будет служить Вам утром, днем, вечером и ночью.</p>

<p>Мы ценим Вашу индивидуальность и то, что Вы выбрали нашу компанию.
Мы готовы взять на себя Ваши заботы по решению производственных задач.
Экономьте Ваше время и силы.</p>

<p>С уважением,
Коллектив ALPHA-HYDRO </p>
', 'Альфа Гидро. О нас.', 'Компания ALPHA-HYDRO на сегодняшний день является крупным производителем и поставщиком гидравлики, давно на рынке, все знаем, динамично развиваемся', '', 0, 1, 0, 'Компания ALPHA-HYDRO на сегодняшний день является крупным производителем и поставщиком гидравлики, давно на рынке, все знаем, динамично развиваемся и т.п. … Вы это уже где-то читали, не так ли?…

Уверены, Вы уже знаете про наши услуги и сервис, раз вы зашли на наш сайт. А подробнее о них Вы можете прочитать в соответствующих разделах нашего сайта. Посему мы просто расскажем немного о себе.

Мы - позитивный коллектив. Мы ценим честность, юмор, доверие, пунктуальность. Мы уважаем мнение и точку зрения собеседника. Мы презираем вранье, хамство, наглость. Мы любим общаться, советоваться, обсуждать вопросы по делу. За консультации денег мы не берем. Мы не любим и не общаемся с людьми, которые «любят поговорить не о чем», которые «сжигают» наше время. Мы положительно относимся к критике, принимает ее без обид и исправляем свои ошибки. Мы даем другим обратную связь с предложением как улучшить.

Ваша техника Вас не слушается? Вы устали от некачественного сервиса, текущих цилиндров, дырявых шлангов, не профессионализма и вранья поставщиков? Вам надоело ухаживать за вашей престарелой гидравликой? Сдайте ее в дом престарелого металлолома. Мы же дадим вам новую, которая будет служить Вам утром, днем, вечером и ночью.

Мы ценим Вашу индивидуальность и то, что Вы выбрали нашу компанию.
Мы готовы взять на себя Ваши заботы по решению производственных задач.
Экономьте Ваше время и силы.

С уважением,
Коллектив ALPHA-HYDRO ', null, '2015-10-09 12:29:16');
INSERT INTO pages(id, path, title, description, content_html, meta_title, meta_description, meta_keywords, sorting, active, deleted, content_markdown, image, date_create) VALUES (3, 'contacts', 'Контакты', 'Контакты.', '
', 'Альфа Гидро. Контакты.', 'Альфа Гидро - контакты. Режим работы. Схемы проезда', 'контакты, режим работы, схема проезда', 0, 1, 0, '', null, '2015-10-09 12:29:19');
INSERT INTO pages(id, path, title, description, content_html, meta_title, meta_description, meta_keywords, sorting, active, deleted, content_markdown, image, date_create) VALUES (4, 'manufacture', 'Наше производство', 'Производство гидравлического оборудования по Вашему техническому заданию. Наш конструкторский отдел поможет найти Вам оптимальное для Вас решение, спроектирует и составит техническое задание за Вас. Мы отремонтируем Ваше оборудование, проведем профилактику, сделаем дефектацию, запрограммируем электронику, осуществим монтаж, сделаем пусконаладку.', '<p>Ассортимент нашей продукции не оставит Вас равнодушными. Компания "АЛЬФА-ГИДРО" имеет возможность предложить Вам:</p>

<ul>
<li><a href="/catalog/">Гидравлическое оборудование</a></li>
<li><a href="/manufacture/gidrostancii/">Гидравлические станции</a></li>
<li><a href="/manufacture/gidrocilindry/">Гидроцилиндры</a></li>
<li>Гидронасосы</li>
<li>Гидромоторы</li>
<li>Уплотнения</li>
<li>Гильзы</li>
<li>Штока</li>
<li>Трубы</li>
<li>РВД</li>
</ul>

<p>Мы произведем гидравлическое оборудование по Вашему техническому заданию, либо наш конструкторский отдел поможет найти Вам оптимальное для Вас решение, спроектирует и составит техническое задание за Вас. Мы отремонтируем Ваше оборудование, проведем профилактику, сделаем дефектацию, запрограммируем электронику, осуществим монтаж, сделаем пусконаладку.</p>

<p>Сертификаты на продукцию прилагаются по запросу заказчика с указанием сферы использования данного материала.</p>

<p>Будем рады видеть Вашу компанию в числе наших постоянных клиентов!</p>
', 'Наше производство', 'Производство гидравлического оборудования по Вашему техническому заданию. Наш конструкторский отдел поможет найти Вам оптимальное для Вас решение, спроектирует и составит техническое задание за Вас. Мы отремонтируем Ваше оборудование, проведем профилактику, сделаем дефектацию, запрограммируем электронику, осуществим монтаж, сделаем пусконаладку.', '', 0, 1, 0, 'Ассортимент нашей продукции не оставит Вас равнодушными. Компания "АЛЬФА-ГИДРО" имеет возможность предложить Вам:

- [Гидравлическое оборудование](/catalog/)
- [Гидравлические станции](/manufacture/gidrostancii/)
- [Гидроцилиндры](/manufacture/gidrocilindry/)
- Гидронасосы
- Гидромоторы
- Уплотнения
- Гильзы
- Штока
- Трубы
- РВД

Мы произведем гидравлическое оборудование по Вашему техническому заданию, либо наш конструкторский отдел поможет найти Вам оптимальное для Вас решение, спроектирует и составит техническое задание за Вас. Мы отремонтируем Ваше оборудование, проведем профилактику, сделаем дефектацию, запрограммируем электронику, осуществим монтаж, сделаем пусконаладку.

Сертификаты на продукцию прилагаются по запросу заказчика с указанием сферы использования данного материала.

Будем рады видеть Вашу компанию в числе наших постоянных клиентов!', '/upload/pages/production.png', '2015-10-30 10:01:08');