@Search
Feature: Google Search

    @smoke
    Scenario: Populate field
        Given I'm on google home page
        When I fill in the keyword "ingenico" in the search field
        And I click on submit button
        Then the url contains the keyword "ingenico"

    Scenario Outline: make several search
        Given I'm on google home page
        When I fill in the keyword "<keyword>" in the search field
        And I click on submit button
        Then the url contains the keyword "<result>"

        Examples:
            | keyword     | result      |
            | WebdriverIO | WebdriverIO |
            | TestCafe    | TestCafe    |

    Scenario: Filter search result by type
        Given I'm on google home page
        When I fill in the keyword "webdriver" in the search field
        And I click on submit button
        Then I can filter my results by:
            | Actualités |
            | Images     |
            | Vidéos     |
            | Livres     |