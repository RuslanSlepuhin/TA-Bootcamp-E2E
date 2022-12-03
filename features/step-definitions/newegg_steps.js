const {When, Then} = require('@wdio/cucumber-framework');
const {homePage, resultSearchPage} = require("../../utils/variables");

When("I search the {string} on the Home Page", async (word) => {
    await $(homePage.header.searchField).setValue(word);
    await $(homePage.header.searchButton).click();
});

Then("I see at least one element on the Result Search Page", async () => {
    const resultSearchItem = await $(resultSearchPage.resultSearchItem);
    await resultSearchItem.waitForDisplayed({timeout: 10000});
    await expect(resultSearchItem).not.toBeNull();
});

When("I click Today's Best Deals on the Home Page", async () => {
    await $(homePage.header.todayBestDealsLink).click();
});

When("I click on the Internet shop logo on the Result Search Page", async () => {
    await $(resultSearchPage.header.shopLogo).click();
});

Then("I'm on the Home Page", async () => {
    const homePageMainBanner = await $(homePage.mainBanner);
    await expect(homePageMainBanner).toBeExisting();
});
