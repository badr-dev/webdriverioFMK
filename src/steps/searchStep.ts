import { Given, When, Then } from 'cucumber';
import googlePage from '../pages/googleHomePage';

Given("I'm on google home page", (): void => {
    googlePage.startPage();
});

When("I fill in the keyword {string} in the search field", (keyword: string): void => {
    googlePage.populate(keyword);
});

When("I click on submit button", (): void => {
    googlePage.submit();
});

Then("the url contains the keyword {string}", (keyword: string): void => {
    googlePage.checkResult(keyword);
});

Then("I can filter my results by:", (filterTable): void => {
    filterTable.rawTable.map((filter: any[]) => {
        const expectedFilter = filter[0];
        googlePage.checkFilterExist(expectedFilter);
    })
});