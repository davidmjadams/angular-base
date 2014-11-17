Feature: Homepage
  As a user
  I want to visit the homepage
  So that I can be the coolest guy in town

  Scenario: Visit Homepage
    Given I am on the homepage
    When I should see a "heading"
    Then I should see a list of tasks