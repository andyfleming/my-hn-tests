const test = require('ava')
const puppeteer = require('puppeteer');

test('test health check in browser', async t => {
	t.plan(2)

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const response = await page.goto('http://localhost:7852/health')
    const content = await page.content()

    t.is(response.status, 200)
    t.is(content, '<html><head></head><body>healthy</body></html>')

    await browser.close()
})
