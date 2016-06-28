<?php
namespace Step\Acceptance;

class Admin extends \AcceptanceTester
{

    public function loginAsAdmin()
    {
        $I = $this;
        $I->amOnPage('/');
        $I->fillField('username','admin@alpha-hydro.com');
        $I->fillField('password','admin');
        $I->click('Вход');
    }

}