# ./features/logout3.feature

Feature: Login and Logout
    As a user
    I want to be able wrong fill Password on login so logout will fail

    Scenario: Login and Logout3 on vutura user dashboard
        Given user will load login page
        And user fill email at login
        And user fill password at login
        When user click at login button
        Then user will still see dashboard