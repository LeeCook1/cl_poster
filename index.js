const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const site = 'https://accounts.craigslist.org/login';

const CraigsList = async (...args) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(site);
    const content = await page.content();
    await browser.close();
    const cio = cheerio.load(content);

    const Class = class {                                                                                                                  
        constctor(user, pass){
            this.user = user;
            this.pass = pass;
			this.cheerio = cio;
            this._launchOptions = {
                headless: false
            };
        }
    };

	return new Class(...args);
};

(async () => {
	try {
		const cl = await CraigsList('u', 'p');
		const email_elem = cl.cheerio('#inputEmailHandle');

		// ... do more stuff
	}

	catch(e) {
		// catch and handle any errors that occur or even rethrow them if you want
		// also, note that console.error is NOT an error handling function!
	   	console.error(e);
	}
})();
