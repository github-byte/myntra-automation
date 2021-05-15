const puppeteer = require('puppeteer')

let pages;
let arr=[];

(async  function(){


    let browser=await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
    })
    pages=await browser.pages();
    pages=pages[0]
    await pages.setDefaultNavigationTimeout(0);
    await pages.goto("https://www.myntra.com/")

    await pages.waitForSelector('input[placeholder="Search for products, brands and more"]')
    await pages.type('input[placeholder="Search for products, brands and more"]',"Top");
    await pages.waitForSelector('li[data-index="1"]');
    await pages.click('li[data-index="1"]')
    await pages.waitForSelector('input[type="checkbox"]') 

    for(let i=2;i<process.argv.length;i++){
        await pages.click(`input[value=${process.argv[i]}]`)
    }
    
        await pages.waitForSelector('a[href="tops/her-by-invictus/her-by-invictus-women-white-solid-semi-sheer-top/6939221/buy"]');
      await pages.goto('https://www.myntra.com/tops/harpa/harpa-women-white-solid-top-/13532724/buy')
    //   await pages.screenshot({ path: "white-top.png" })
    //   await pages.goto("https://web.whatsapp.com/")
      await pages.waitForSelector(".pdp-add-to-wishlist.pdp-button.pdp-add-to-wishlist.pdp-button.pdp-flex.pdp-center");
      await pages.click(".pdp-add-to-wishlist.pdp-button.pdp-add-to-wishlist.pdp-button.pdp-flex.pdp-center");
      await pages.waitForSelector('.form-control.mobileNumberInput')
      await pages.type('.form-control.mobileNumberInput','9319422218')
      await pages.waitForSelector(".submitBottomOption")
      await pages.click(".submitBottomOption")

      await pages.waitForNavigation();

     
//add to wishlist

    // await page.click(".RPX_m")
    // await page.type(".RPX_m","R")
    //await page.click('_2n-zq')
})();

// function caller(pages){
//     return new Promise(function(resolve,reject){
//          Promise.all[pages.waitForSelector('.product-imageSliderContainer'),pages.click(".product-imageSliderContainer")]
//     })

// }

