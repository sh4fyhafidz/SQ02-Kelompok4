# ./features/signin.feature

Feature: Signin on the web
    As a user
    I want to be able to signin

    Scenario: User success to sign in on the website
        Given user browse sign in page
        And user fill email field
        And user fill password field
        And user click sign in
        When user can see bot page
        Then user can click chatbot
