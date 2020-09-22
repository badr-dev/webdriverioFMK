import { Given, When, Then } from 'cucumber';
import GH from '../pages/googleHomePage';

Given("I'm on google home page", (): void => {
    GH.startPage();
});

When("I fill in the keyword {string} in the search field", (keyword: string): void => {
    GH.populate(keyword);
});

When("I click on submit button", (): void => {
    GH.submit();
});

Then("the url contains the keyword {string}", (keyword: string): void => {
    GH.checkResult(keyword);
});

Then("I can filter my results by:", (filterTable): void => {
    filterTable.rawTable.map((filter: any[]) => {
        const expectedFilter = filter[0];
        GH.checkFilterExist(expectedFilter);
    })
});