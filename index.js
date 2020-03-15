const axios = require("axios")
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

const site = "https://accounts.craigslist.org/login";

class Craigslist {
  constctor(ususer, pass){ 
    this.user = user;
    this.pass = pass;
    this._launchOptions = {
      headless:false
    };
  }
  async init() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site);
    const content = await page.content();
    await browser.close();
    return cheerio.load(content);
  }
}

(async () => {
  try {
    const cl = new Craigslist('u','p');
    const $ = await cl.init();
    const email_elem = $('#inputEmailHandle');
  }
  catch(e) {
    console.error(e);
  }
})();
