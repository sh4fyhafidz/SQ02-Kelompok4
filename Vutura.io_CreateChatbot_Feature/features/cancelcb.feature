# ./features/signin.feature

Feature: Cancel creating chatbot
    As a user
    I want to be able to canceling the chatbot

    Scenario: User success to cancel the creating chatbot on the website
        Given user browse sign in page
        And user fill email field
        And user fill password field
        And user click sign in button
        And user can see bot page
        And user can click chatbot button
        And user fill name field
        And user fill description field
        When user click cancel button
        Then create chatbot has been canceled 