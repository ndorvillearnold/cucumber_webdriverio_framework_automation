

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get signInButton () {
        return $('//a[@data-nav-ref="nav_ya_signin"]');
    }

    get inputEmail () {
        return $('//input[@id="ap_email"]');
    }

    get continueBtn () {
        return $('//input[@id="continue"]');
    }


    get inputPassword () {
        return $('//input[@id="ap_password"]');
    }
   
    get signInbtn () {
        return $('//input[@id="signInSubmit"]');
    }
   
    get searchField () {
        return $('//input[@id="twotabsearchtextbox"]');
    }
    get searchTextBox () {
        return $('//input[@id="twotabsearchtextbox"]');
    }
    get searchIcon () {
        return $('//input[@id="nav-search-submit-button"]');
    }
    get shoppingCart () {
        return $('//input[@id="nav-cart-count"]');
      
    }
    //span[@id='']
    get addToCartBtn () {
        return $('//button[@id="dealsx_atc_btn-announce"]');
      
    }
    get buyNowBtn () {
        return $('//input[@id="buy-now-button"]');
    }
    get amzSpecificItem () {
        // return $('//a[text()="Solar-Charger-Power-Bank - 36800mAh Portable Charger,QC3.0 Fast Charger Dual USB Port Built-in Led Flashlight and Compass for All Cell Phone and Electronic Devices(Black)"] ');
        return $('//span[@id="B09ZNXRWM5-amazons-choice"]');   
    }
    
//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_4']//span[@class='a-size-medium a-color-base a-text-bold a-text-normal'][normalize-space()='36800mAh']
    //input[@name='proceedToRetailCheckout']

    
    
 
    
   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     * I MOVED THIS TO STEP FILE PAGE and REMOVED THIS keyword
     */
    // async login (email, password) {
    //     await this.inputEmail.setValue(email);
    //     await this.continueBtn.click();
    //     await browser.pause(5000)
    //     await this.inputPassword.setValue(password);
    // }
 

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
