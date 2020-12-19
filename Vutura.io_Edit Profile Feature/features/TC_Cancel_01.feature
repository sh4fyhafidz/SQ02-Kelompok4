# ./features/TC_Cancel_01.feature

Feature: Cancel edit user profile 01 
    As a user admin
    I want to Cancel edit My Profile on Dashboard My Account Vutura.io

    @success
    Scenario: User cancel to edit profile on dashboard
        Given user browse sign in page
        And user fill email field
        And fill password field
        And user click sign button
        And user can see bot page
        And user click menu button
        And user click profile menu
        And user browse dashboard my account page
        And user click edit button
        And user fill Nama6 field
        And user fill NamaBisnis6 field
        And user fill Telepon6 field
        When user click Batal button
        Then data user not updated