# ./features/signin.feature

Feature: Invalid Data Create 
    As a user
    I want to be able to wrong when create chatbot

    Scenario: User creates invalid data on name field
        Given user browse sign in page
        And user fill email field
        And user fill password field
        And user click sign in button
        And user can see bot page
        And user can click chatbot button
        And user fill description field
        And user click create chatbot button
        And chatbot was not created 