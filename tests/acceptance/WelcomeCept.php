<?php
$I = new AcceptanceTester($scenario);
$I->am('admin');
$I->amOnPage('/');
$I->fillField('username','admin@alpha-hydro.com');
$I->fillField('password','admin');
$I->click('Вход');
$I->click('Каталог');
$I->submitForm('#search', ['query' => 'ASDR']);
$I->see('Результаты поиска', 'h1');
