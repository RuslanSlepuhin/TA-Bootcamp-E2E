Feature: Bootcamp E2E

  Background:
    Given I go to the home page
    Given I close promo banner if it displayed

  Scenario: Search bar
    When I search the "windows" on the Home Page
    Then I see at least one element on the Result Search Page

  Scenario: Internet shop logo button
    When I click Today's Best Deals on the Home Page
    When I click on the Internet shop logo on the Result Search Page
    Then I'm on the Home Page
