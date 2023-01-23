const homePageLocators = {
    logo: ".header-logo",
    logInRegister: 'ul#customer_menu_top  a',
    mainMenu: ".categorymenu li",
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
    productName: ".prdocutname",
    mainMenu: ".categorymenu > li > a",
    menuCategoriesNames: ".categorymenu > li > a",
    menuApparelCategories: ".subnav > ul > li:nth-of-type(2) > .subcategories > ul  > li > a",
    menuHomeOptions: 'ul#main_menu  > li > a',
    makeUp: '.subnav > ul > li:nth-of-type(3) > a',
    addProductToCard: '.thumbnail .pricetag .productcart',
    productNewPrice: '.pricenew',
    basketIcon: '.quick_basket',
    cartPrice: '.cart_total',
    newsletterBtn: "#subscribeFrm .btn.btn-orange"
}

export {homePageLocators}