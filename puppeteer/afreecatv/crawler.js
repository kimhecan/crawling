const puppeteer = require('puppeteer');

module.exports = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--window-size=1920,1080', '--disable-notifications']
    });
    
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080,
    });
    await page.goto('http://www.afreecatv.com');
    await page.evaluate(() => {
      document.querySelector('.hotissue').parentElement.removeChild(document.querySelector('.hotissue'));
    })
    let countArr = [];

    while(true) {
      await page.waitForSelector('.viewer');
      let newArr = await page.evaluate(() => {
        let countArr = [];
        let bjBoxs = document.querySelectorAll('.viewer');
        bjBoxs.forEach(v => {
          countArr.push(parseInt(v.innerText.replace(",",""),10))
          let li= v.parentElement.parentElement.parentElement;
          li.parentElement.removeChild(li);
        });
        return countArr;
      });
      countArr.push(...newArr);
      if(await page.$(".more_list[style='display: block;']")) {
        await page.click('.more_list');
      } else {
        break;
      }
      break;
    }
    totalPeople = countArr.reduce((a,b) => a+b,0);
    totalBj = countArr.length

    await page.close();
    await browser.close();

    return countArr
  
  } catch (e) {
    console.error(e);
  }
}