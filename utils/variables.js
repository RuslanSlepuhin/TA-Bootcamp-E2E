const header = {
    searchField: 'header input[type=search]',
    searchButton: 'header button[class*="ico-search"]',
    todayBestDealsLink: 'header div[id="Portals_swiper"] a[title="Today\'s Best Deals"]',
    shopLogo: 'header div[class*="logo"]',
}

const promoBanner = {
    bannerTitleField: 'header div[class*="popup-body-title"]',
    bannerBody: 'header div[class*="popup-body-detail"]',
    bannerCloseButton: 'header i[class*="menu-close"]',
}

const homePage = {
    url: "https://www.newegg.com/",
    mainBanner: "div[id=Hero_Banner]",
    header: header,
}

const resultSearchPage = {
    resultSearchItem: "div[class=item-cell]",
    header: header,
}

module.exports = {
    header: header,
    promoBanner: promoBanner,
    homePage: homePage,
    resultSearchPage: resultSearchPage,
};



