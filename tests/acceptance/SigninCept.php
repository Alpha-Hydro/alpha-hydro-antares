<?php 
$I = new AcceptanceTester($scenario);
$I->am('admin'); // actor's role
$I->wantTo('login to website'); // feature to test
$I->lookForwardTo('access all website features'); // result to achieve
$I->amOnPage('/admin');
$I->fillField('username','admin@alpha-hydro.com');
$I->fillField('password','admin');
$I->click('Вход');
$I->see('Админ панель');
