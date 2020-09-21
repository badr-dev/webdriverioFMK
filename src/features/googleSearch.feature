@Search
Feature: Google Search

    @Scenario
    Scenario: Populate field
    Given I'm on google home page
    When I fill in the keyword "ingenico" in the search field
    And I click on submit button
    Then Check if string "ingenico" is in url