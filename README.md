# Amazon Purchase Automation with WebdriverIO and Cucumber

This project automates the process of purchasing a product on **Amazon** using **WebdriverIO** and **Cucumber** for behavior-driven testing. This is an ongoing project that I will continue to improve and extend as time permits.


## Project Overview

This project automates the process of purchasing a product on **Amazon**. It uses **Cucumber** for behavior-driven testing (BDD) and **WebdriverIO** for browser automation.

The steps of the project include:
- Setting up **WebdriverIO** with **Cucumber** as the testing framework.
- Automating the product purchase flow on **Amazon**.

This is an ongoing project, and I will continue to enhance the features and automate more complex flows.

## Installation Requirements

Before starting, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/en/download/)

Once you have **Node.js** installed, follow these steps to set up the project.

1. **Install Cucumber** as a dev dependency:
 
   npm install --save-dev cucumber
   npm install --save-dev @wdio/cli
   npx wdio config

 --**  Configuration for WDO below
I named the project.
Select Cucumber as the framework.
For the question "Where is your automation backend located?", select "On my local machine".
Select the compiler (choose JavaScript).
Select Yes for WebdriverIO.
Select Yes for Page Objects.
Choose localhost for the execution environment.

-**Dependencies
npm install

-**run automation
npm run dev

-**run wdio test
npm run wdio




        Any questions please email  ndorvillearnold@gmail.com
        
        

    
Common Errors and Fixes

Error 1: ChromeDriver version mismatch
Fix: Ensure that the version of ChromeDriver matches the version of Chrome installed on your system. For this project, Chrome version 112 is supported.

        
 If you encounter issues running the tests, particularly with the ChromeDriver, make sure the ChromeDriver version is compatible with your installed Chrome version.
 
Error 2: Missing or incorrect WebdriverIO configuration
Fix: Run the npx wdio config again and ensure that all the options are correctly selected (Cucumber, Page Objects, etc.).

Error 3: Cucumber Errors / Test Failures
Fix: Ensure your feature files in the features/ directory are written correctly according to the Cucumber syntax. Also, check the corresponding step definitions in the steps/ directory.


Lessons Learned
Cucumber and WebdriverIO Integration: Cucumber's Gherkin syntax allows for easy-to-read feature files, and integrating it with WebdriverIO makes automation more structured and readable.

Page Object Model (POM): Using the Page Object Model allows for better maintainability of tests by abstracting the page-
specific elements and actions into separate objects.

Automation Flow: Automating a real-world flow, such as a product purchase on Amazon, provides hands-on experience with real-time use cases.

Key Actions:
Finding Elements: Using locators like By.id(), By.name(), By.xpath() to interact with the web elements.

Assertions: Using assertions to verify actions like checking if the product is added to the cart, verifying the cart contents, etc.
Waiting for Elements: Proper use of waits (driver.wait()) to ensure elements are loaded before interacting with them.        

**side note to self**
repo folder


