# ./features/TC_Incomplete_02.feature

Feature: Edit user profile 08
    As a user 8
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
        And user fill Nama8 field
        And user fill NamaBisnis8 field
        And user fill Telepon8 field
        When user click Perbarui button
<<<<<<< HEAD
        Then data user has been unsuccessfully updated
=======
        Then There is a notification and data user has been unsuccessfully updated
>>>>>>> d3210eb007ab9ff3ef4d909d69955ef00034f996
