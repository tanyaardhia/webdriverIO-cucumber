Feature: a Website e-commerce

  Scenario Outline: As a user, I can log into the secure area
    When I am on the login page
    Then I login with <username> and <password>
    Then see list product
    When Select a product and add it to the cart
    Then Success adding to cart
    When Click cart icon
    Then Go to cart page

    Examples:
      | username        | password     |
      | standard_user   | secret_sauce |