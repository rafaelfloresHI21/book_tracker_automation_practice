Feature: Log In into GoodReads

  # Scenario Outline: As a user, I cannot log into Anilist if I don't have an account

  #   Given I am on the login page
  #   When I try to login with <username> and <password>
  #   Then I must receive a <message>

  #   Examples:
  #     | username | password             | message                                                 |
  #     | foobar@coreo.com   | barfoo               | Sorry, that email or password isn't right. You can      |
  #     | admin@coreo.com    | admin                | Sorry, that email or password isn't right. You can      |

  Scenario Outline: As a user, I can log into Anilist

    Given I am on the login page
    When I login with username and password
    Then I must be redirect to the Homepage

