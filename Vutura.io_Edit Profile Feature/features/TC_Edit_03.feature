# ./features/TC_Edit_03.feature

Feature: Edit user profile 03 
    As a user 3
    I want to Edit My Profile on Dashboard My Account Vutura.io

    @success
    Scenario: User success to edit profile on dashboard
        Given user browse sign in page
        And user fill email field
        And fill password field
        And user click sign button
        And user can see bot page
        And user click menu button
        And user click profile menu
        And user browse dashboard my account page
        And user click edit button
        And user fill Nama3 field
        And user fill NamaBisnis3 field
        And user fill Telepon3 field
        When user click Perbarui button
        Then There is a notification and data user has been successfully updated