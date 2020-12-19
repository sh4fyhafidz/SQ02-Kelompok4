# ./features/logout.feature

Feature: Login and Logout
    As a user
    I want to be able to login and logout

    Scenario: Login and Logout on vutura user dashboard
        Given user browse login page
        And user fill email to login
        And user fill password to login
        And user click login button
        And user see homepage
        When user click menu button
        Then user click logout button