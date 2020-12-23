# ./features/TC_Incomplete_01.feature

Feature: Edit user profile 07 
    As a user 7
    I want to Edit My Profile on Dashboard My Account Vutura.io

    @unsuccess
    Scenario: User incomplete to fill edit profile on dashboard
        Given user browse sign in page
        And user fill email field
        And fill password field
        And user click sign button
        And user can see bot page
        And user click menu button
        And user click profile menu
        And user browse dashboard my account page
        And user click edit button
        And user fill Nama7 field
        And user fill NamaBisnis7 field
        And user fill Telepon7 field
        When user click Perbarui button
        Then There is a notification and data user has been unsuccessfully updated