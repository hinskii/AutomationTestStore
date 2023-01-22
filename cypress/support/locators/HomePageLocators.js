const homePageLocators = {
    logo: ".header-logo",
    logInRegister: 'ul#customer_menu_top  a',
    mainMenu: "a[href*='product/category&path=']",
    changeCurrency: ".currency a[href*='index/home&currency=']",
    currencyBtnSymbol: '.language .label-orange',
    price: '.oneprice',
    header: '.maintext',
    specials: '#main_menu_top > [data-id="menu_specials"] > .top',
    saleJPG: '.sale',
    cart: "ul#main_menu_top  .nobackground.top",
    searchCategories: '.search-category',
    selectedCategory: '#category_selected',
    searchBox: '#filter_keyword',
    searchKeyword: '#keyword',
    productName: '.prdocutname'
}

export {homePageLocators}