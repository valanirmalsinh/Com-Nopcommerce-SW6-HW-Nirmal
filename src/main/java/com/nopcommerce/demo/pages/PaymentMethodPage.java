package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PaymentMethodPage extends Utility {

    private static final Logger log = LogManager.getLogger(PaymentMethodPage.class.getName());
    public PaymentMethodPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "paymentmethod_1")
    WebElement creditCardRadioButton;

    @CacheLookup
    @FindBy(xpath = "//div[@id='payment-method-buttons-container']/descendant::a/following::button[1]")
    WebElement continueButton;

    public void clickOnCreditCardRadioButton(){
        clickOnElement(creditCardRadioButton);
        log.info("Clicking on credit card radio button : " + creditCardRadioButton.toString());
    }

    public void clickOnContinueButtonToPaymentInformation(){
        clickOnElement(continueButton);
        log.info("Clicking on continue button : " + continueButton.toString());
    }
}
