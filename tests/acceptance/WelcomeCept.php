<?php
$I = new AcceptanceTester($scenario);
$I->amOnPage('/');
$I->click('Каталог');
$I->submitForm('#search', ['query' => 'ASDR']);
$I->see('Результаты поиска', 'h1');
