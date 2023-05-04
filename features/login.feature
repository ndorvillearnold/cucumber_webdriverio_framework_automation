Feature: Amazon Login Scenerio

  Scenario Outline: As a user, I can log into Amazon

    Given I am on the login page
    Then I click "sign in button" in the login page
    When I login with "<inputEmail>" and "<inputPassword>"
    Then I info in the search field "<searchTextBox>"
    When I click search icon "searchIcon"
    Then I click on the item "amzSpecificItem"
    Then I click buy now "buyNowBtn"
    
   

    Examples:
      | inputEmail | inputPassword      | searchTextBox|       
      | cucumberselenium504@gmail.com   | Cucumb3r1!$      | Solar-Charger-Power-Bank - 36800mAh Portable Charger,QC3.0 Fast Charger Dual USB Port Built-in Led Flashlight and Compass for All Cell Phone and Electronic Devices(Black)|

    
 
   