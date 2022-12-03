const {Given} = require('@wdio/cucumber-framework');
const {homePage, promoBanner} = require("../../utils/variables")

Given("I go to the home page", async () => {
    await browser.url(`${homePage.url}`);
});

Given("I close promo banner if it displayed", async () => {
        const bannerDisplayed = await $(promoBanner.bannerTitleField).isDisplayed();
        if (bannerDisplayed) {
            await $(promoBanner.bannerCloseButton).click();
        }
    }
);
