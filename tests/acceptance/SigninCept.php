<?php
use Step\Acceptance\Admin as AdminTester;

$I = new AdminTester($scenario);
$I->am('admin'); // actor's role
$I->wantTo('login to website'); // feature to test
$I->lookForwardTo('access all website features'); // result to achieve

$I->loginAsAdmin();

$I->see('Advanced Admin');
