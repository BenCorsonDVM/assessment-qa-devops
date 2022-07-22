import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id of choices', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)

    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed() 

    expect(displayed).toEqual(true)
    await driver.sleep(2000)
})

test('Add to Duo displays div with id of player-duo', async () => {
    const botButton = await driver.findElement(By.xpath("//div[@id='choices']/div[1]/button"))
    await botButton.click()
    await driver.sleep(2000)

    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed() 

    expect(displayed).toEqual(true)
})