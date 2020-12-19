# ./features/TC_Email_01.feature

Feature: Edit user profile 09
    As a user 9
    I want to Edit My Profile on Dashboard My Account Vutura.io

    @unsuccess
    Scenario: User can't to edit email field profile on dashboard
        Given user browse sign in page
        And user fill email field
        And fill password field
        And user click sign button
        And user can see bot page
        And user click menu button
        And user click profile menu
        And user browse dashboard my account page
        And user click edit button
        And user fill Nama1 field
        And user fill NamaBisnis1 field
        And user fill Email1 field
        And user fill Telepon1 field
        When user click Perbarui button
        Then data user has been unsuccessfully updated