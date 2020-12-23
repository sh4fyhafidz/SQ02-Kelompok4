# ./features/signin.feature

Feature: Create Chatbot 01
    As a user
    I want to be able to create chatbot on Dshboard bot Vutura.io

    Scenario: User success to create chatbot on the website
        Given user browse sign in page
        And user fill email field
        And user fill password field
        And user click sign in button
        And user can see bot page
        And user can click chatbot button
        And user fill name field
        And user fill description field
        When user click create chatbot button
        Then chatbot has been succsessfully created