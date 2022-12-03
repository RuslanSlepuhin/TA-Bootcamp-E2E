# TA-Bootcamp-E2E

## For running thees tests you need:
1. clone or fork this repository to your local machine
2. open the folder in your IDE
3. type "yarn install" to install all modules mentioned in package.json
4. type "yarn test" for run this test
5. if you need to see the browser process, remove the following settings in wdio.conf.js on 61-63 lines:
'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
          }

# The Hometask

Develop E2E automated JS tests for https://www.newegg.com

Create bootcamp.feature file with the following 2 scenarios. Prepare tests only for Desktop run

Feature: Bootcamp E2E

Scenario: Search bar
1. Open the home page
2. Close the promo banner if it appears
3. Entry the word "Windows" in the search bar (top middle)
4. Click the search
5. Check that at least one item appears

Scenario: Internet shop logo button
1. Open the home page
2. Close the promo banner if it appears
3. Open "Today's Best Deals" tab
4. Click on the Internet shop logo (top right corner)
5. Check that the main page opened

# Extra requirements: 
* For task set up WebdriverIO + Cucumber (As it was done in Cucumber lectures)
* As you may already notice, the 2 first steps are the same for both scenarios. Please use `Background:` to reduce the number of steps.
* Before sending me a task prepare README.md so I can run your tests. 
* Good practice, avoid magic numbers (You can google if you don't know what it means)
* Use consts for variables
* For assertions use WebdriverIO

# Hint
* For "Close the promo banner if it appears" 2 possible ideas. You can use try-catch. Or the banner disappears if you refresh the page when the banner appears.
-------------------------------------------------------------------------------------------------

# Additional from Slack:
FYI:
Don’t forget to remove all task unrelated code. (ex: WebdriverIO initial steps that are unused)
Pay attention to requirements. Task is to create one feature file not 2 or 3.
PS:  I’ll reject each HW that does not contain those points. Or any other from the list of Extra requirements.  Everybody who send me HW already, please recheck your repos before tomorrow morning

For those who wanna more. This part is optional. It will not influence on course results
Please make add Item to cart testing by e2e tests.
Requirements:
It should be a new feature file.
At least 3 scenarios (you need to choose on your own).
Please describe in README your scenario choice. Why?
You can use already existing steps and functions.
Use the best practices that you learn during the course.
Verify that tests are stable (at least 5 successful runs in the roll) and add results to the README
Create separate files for selectors and variables.
FYI: Please wait for green light from me :green: that the main task is successfully finished and you may take extra :if_you_know_what_i_mean:  When you push successfully and double check please ping me in

Steps in the task are written as pseudocode
Please update your cucumber steps according to cucumber lecture rules and recommendations. Steps in the task are not for copy/paste

Use cssSelector instead of XPath

Good article
https://www.testim.io/blog/xpath-vs-css-selector-difference-choose/
