# ./features/logout2.feature

Feature: Login and Logout
    As a user
    I want to be able wrong fill email on login so logout will fail

    Scenario: Login and Logout3 on vutura user dashboard
        Given user load login page
        And user fill email on login
        And user fill password on login
        When user click on login button
        Then user still see dashboard