Feature: Add to book to My Bookshelve

    # Scenario: As a user, I want to add Books to my Reaading list

    # Given I am at a Detailed Screen of a book
    # When I click the Want to Read button
    # # Then si se cambio el label...
    # Then that button must change to a label with a green checkmark 

    # Scenario: Check book on my Want to read bookshelve
    # When the user clicks the My Books link on the page header
    # Then then I must see the book I just added

    Scenario: As a user, I want to create a custom bookshelf

    Given I am at My Books Screen
    When the user clicks the Add shelf button at the left pane
    And I enter a name for the bookshelf
    And I click the add button
    Then a custom shelf must be created
