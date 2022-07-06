Feature: Search Book on Goodreads

  # Scenario Outline: As a user, If I enter a invalid query I should see that thre is no results

  #   Given I am on the home page
  #   When I enter an invalid search <query> 
  #   Then I must see that there aren't results

  #   Examples:
  #     | query | 
  #     | $$$$  | 
  #     | #### |
  
  Scenario Outline: As a user, I want to enter a query condition and find a book around it

    Given I am on the home page
    When I enter a search <query> 
    Then I must see a list of Books that match <query>

    Examples:
      | query | 
      | 1984  | 
      | Padre |

  Scenario: As a user, I want to select a book from the Result list

    When I click on a book from the result list
    Then I must be redirected to the book detailed page