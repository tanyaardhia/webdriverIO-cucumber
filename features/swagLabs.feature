Feature: a Website e-commerce

  Scenario Outline: As a user, I can log into the secure area
    When 01_I am on the login page
    Then 01_I login with <username> and <password>
    Then 01_see list product
    When 02_Select a product and add it to the cart
    Then 02_Success adding to cart
    When 03_Click cart icon
    Then 03_Go to cart page
    When 04_Click icon checkout
    Then 04_Go to page your infomation
    When 05_fill the form order <firstname>, <lastname>, <postalcode>
    Then 05_Click Continue
    Then 05_Go to Checkout overview

    Examples:
      | username        | password     | firstname   | lastname   | postalcode |
      | standard_user   | secret_sauce | haruka      | ya         | 17415   |