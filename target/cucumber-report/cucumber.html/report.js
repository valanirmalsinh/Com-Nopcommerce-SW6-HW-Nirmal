$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerstest.feature");
formatter.feature({
  "line": 1,
  "name": "Computers Page",
  "description": "As a user I want to check Computers Page functionality",
  "id": "computers-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21199790700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify product arrange in alphabetical order",
  "description": "",
  "id": "computers-page;verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the Computers top menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Desktop link in Computers top menu dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"Name: Z to A\" option from the Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Products should be arranged in descending order by name",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 466884500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClicksOnTheTopMenuTab()"
});
formatter.result({
  "duration": 1564160300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnDesktopLinkInComputersTopMenuDropdown()"
});
formatter.result({
  "duration": 1364024500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 10
    }
  ],
  "location": "ComputersTestSteps.iSelectOptionFromTheSortByDropdown(String)"
});
formatter.result({
  "duration": 271481500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.productsShouldBeArrangedInDescendingOrderByName()"
});
formatter.result({
  "duration": 185477000,
  "status": "passed"
});
formatter.after({
  "duration": 911794900,
  "status": "passed"
});
formatter.before({
  "duration": 5295322800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "computers-page;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the Computers top menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop link in Computers top menu dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select \"Name: A to Z\" option from the Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I add \u0027Build Your Own Computer\u0027 in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the text \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I select the \"2.2 GHz Intel Pentium Dual-Core E2200\" processor",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select \"8GB [+$60.00]\" of RAM",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on desired  HDD",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on desired  OS",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on the software needed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the price \"$1,475.00\" of Build Your Own Computer",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on \u0027Add To Cart\u0027 button after filters added",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify the message \"The product has been added to your shopping cart\" on top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027Shopping Cart\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover and click on \u0027Go to Cart\u0027 button button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I change the quantity to \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click on \u0027Update shopping cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify the total price \"$2,950.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on checkbox \u0027I agree with the terms of service\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Checkout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify the text as \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Checkout As Guest\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter first name as \"Karunaa\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter last name as \"Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email as \"karuna28koradiya@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select country from country field as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter city as \"Ahmedabad\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter address as \"16, Happy residency\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter postal code as \"390002\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter number as \"07436252668\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on \u0027Continue\u0027 button to shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Next Day Air Shipping Method",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on \u0027Continue\u0027 for payment method",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on \u0027Credit card\u0027 radio button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \u0027Continue\u0027 button to payment information",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select credit card type \"Master card\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter card holder name as \"Miss Karunaa Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter card number as \"5425233430109903\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select expiry month as \"04\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select expiry year as \"2026\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter card code as \"676\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on \u0027Continue\u0027 to confirm order",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify payment method is \"Credit Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I verify shipping method is \"Shipping Method: Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify total price is \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on \u0027Confirm\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I verify text \"Thank you\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I verify the message on confirm order page as \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on \u0027Continue\u0027 to storage page",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I verify the text pn login page \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClicksOnTheTopMenuTab()"
});
formatter.result({
  "duration": 1188607300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnDesktopLinkInComputersTopMenuDropdown()"
});
formatter.result({
  "duration": 995230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 10
    }
  ],
  "location": "ComputersTestSteps.iSelectOptionFromTheSortByDropdown(String)"
});
formatter.result({
  "duration": 183758100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iAddBuildYourOwnComputerInTheCart()"
});
formatter.result({
  "duration": 3884784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 19
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 126196300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 14
    }
  ],
  "location": "ComputersTestSteps.iSelectTheProcessor(String)"
});
formatter.result({
  "duration": 289066100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputersTestSteps.iSelectOfRAM(String)"
});
formatter.result({
  "duration": 231989300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnDesiredHDD()"
});
formatter.result({
  "duration": 150821800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnDesiredOS()"
});
formatter.result({
  "duration": 1104854000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnTheSoftwareNeeded()"
});
formatter.result({
  "duration": 108635000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 20
    }
  ],
  "location": "ComputersTestSteps.iVerifyThePriceOfBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 1074238000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnAddToCartButtonAfterFiltersAdded()"
});
formatter.result({
  "duration": 113711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 449405100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iMouseHoverOnShoppingCartLink()"
});
formatter.result({
  "duration": 442711000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iMouseHoverAndClickOnGoToCartButtonButton()"
});
formatter.result({
  "duration": 2079205800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 50342800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ComputersTestSteps.iChangeTheQuantityTo(String)"
});
formatter.result({
  "duration": 1513896200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnUpdateShoppingCartButton()"
});
formatter.result({
  "duration": 1224674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 26
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTotalPrice(String)"
});
formatter.result({
  "duration": 47712300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 125337000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 1103623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTextAs(String)"
});
formatter.result({
  "duration": 53931800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckoutAsGuestButton()"
});
formatter.result({
  "duration": 1437673400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karunaa",
      "offset": 23
    }
  ],
  "location": "ComputersTestSteps.iEnterFirstNameAs(String)"
});
formatter.result({
  "duration": 167841500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Koradiya",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iEnterLastNameAs(String)"
});
formatter.result({
  "duration": 199229900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karuna28koradiya@gmail.com",
      "offset": 18
    }
  ],
  "location": "ComputersTestSteps.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 246956400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 40
    }
  ],
  "location": "ComputersTestSteps.iSelectCountryFromCountryFieldAs(String)"
});
formatter.result({
  "duration": 139923200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 17
    }
  ],
  "location": "ComputersTestSteps.iEnterCityAs(String)"
});
formatter.result({
  "duration": 179564500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16, Happy residency",
      "offset": 20
    }
  ],
  "location": "ComputersTestSteps.iEnterAddressAs(String)"
});
formatter.result({
  "duration": 225714900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "390002",
      "offset": 24
    }
  ],
  "location": "ComputersTestSteps.iEnterPostalCodeAs(String)"
});
formatter.result({
  "duration": 176259000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07436252668",
      "offset": 19
    }
  ],
  "location": "ComputersTestSteps.iEnterNumberAs(String)"
});
formatter.result({
  "duration": 214447600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueButtonToShippingMethod()"
});
formatter.result({
  "duration": 1126484900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnNextDayAirShippingMethod()"
});
formatter.result({
  "duration": 907827200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueForPaymentMethod()"
});
formatter.result({
  "duration": 163523200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCreditCardRadioButton()"
});
formatter.result({
  "duration": 423176700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueButtonToPaymentInformation()"
});
formatter.result({
  "duration": 93978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 27
    }
  ],
  "location": "ComputersTestSteps.iSelectCreditCardType(String)"
});
formatter.result({
  "duration": 452141400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss Karunaa Koradiya",
      "offset": 29
    }
  ],
  "location": "ComputersTestSteps.iEnterCardHolderNameAs(String)"
});
formatter.result({
  "duration": 229404600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5425233430109903",
      "offset": 24
    }
  ],
  "location": "ComputersTestSteps.iEnterCardNumberAs(String)"
});
formatter.result({
  "duration": 163997600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04",
      "offset": 26
    }
  ],
  "location": "ComputersTestSteps.iSelectExpiryMonthAs(String)"
});
formatter.result({
  "duration": 137121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2026",
      "offset": 25
    }
  ],
  "location": "ComputersTestSteps.iSelectExpiryYearAs(String)"
});
formatter.result({
  "duration": 136942100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "676",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iEnterCardCodeAs(String)"
});
formatter.result({
  "duration": 177816000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueToConfirmOrder()"
});
formatter.result({
  "duration": 100645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 28
    }
  ],
  "location": "ComputersTestSteps.iVerifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 659659300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Method: Next Day Air",
      "offset": 29
    }
  ],
  "location": "ComputersTestSteps.iVerifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 50685600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 25
    }
  ],
  "location": "ComputersTestSteps.iVerifyTotalPriceIs(String)"
});
formatter.result({
  "duration": 61706000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnConfirmButton()"
});
formatter.result({
  "duration": 138506700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 15
    }
  ],
  "location": "ComputersTestSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 922530400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 47
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessageOnConfirmOrderPageAs(String)"
});
formatter.result({
  "duration": 41077800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueToStoragePage()"
});
formatter.result({
  "duration": 655646900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 33
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTextPnLoginPage(String)"
});
formatter.result({
  "duration": 89278400,
  "status": "passed"
});
formatter.after({
  "duration": 1705043000,
  "status": "passed"
});
formatter.uri("electronicstest.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Page",
  "description": "As a user I want to check Electronics page functionality",
  "id": "electronics-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6539929600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to cell phones page successfully",
  "description": "",
  "id": "electronics-page;verify-user-should-navigate-to-cell-phones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Electronics\u0027 top menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover and click on \u0027Cell Phones\u0027 option in electronics tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the text on cell phones page as \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 100600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iMouseHoverOnElectronicsTopMenuTab()"
});
formatter.result({
  "duration": 261575900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iMouseHoverAndClickOnCellPhonesOptionInElectronicsTab()"
});
formatter.result({
  "duration": 1079056500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 42
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheTextOnCellPhonesPageAs(String)"
});
formatter.result({
  "duration": 74009700,
  "status": "passed"
});
formatter.after({
  "duration": 972719600,
  "status": "passed"
});
formatter.before({
  "duration": 6190859400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that the product added successfully and placed the order successfully",
  "description": "",
  "id": "electronics-page;verify-that-the-product-added-successfully-and-placed-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \u0027Electronics\u0027 top menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and click on \u0027Cell Phones\u0027 option in electronics tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the text on cell phones page as \"Cell phones\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027List View\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on the product name \u0027Nokia Lumia\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the product name as \"Nokia Lumia 1020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the price of the product as \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I change the quantity to \"2\" on product page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027Add To Cart\u0027 to add Nokia Lumia CellPhone",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the message \"The product has been added to your shopping cart\" on top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on \u0027Shopping Cart\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I mouse hover and click on \u0027Go to Cart\u0027 button button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I verify the total price \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on checkbox \u0027I agree with the terms of service\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on \u0027Checkout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the text as \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on \u0027Register\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I verify the text on Register page as \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I enter first name on register page as \"Karunaa\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter last name on register page as \"Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter email on register page as \"karunaaiiaii28koradiya@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter password on register page as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter confirm password on register page as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Register\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify the message on register page as \"Your registration completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on \u0027Continue\u0027 on register page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I verify the message \"Shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on checkbox \u0027I agree with the terms of service\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click on \u0027Checkout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter first name as \"Karunaa\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter last name as \"Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter email as \"karuna28koradiya@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select country from country field as \"India\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter city as \"Ahmedabad\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter address as \"16, Happy residency\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter postal code as \"390002\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter number as \"07436252668\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on \u0027Continue\u0027 button to shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on Second Day Air Shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on \u0027Continue\u0027 for payment method",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on \u0027Credit card\u0027 radio button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on \u0027Continue\u0027 button to payment information",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select credit card type \"Visa\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter card holder name as \"Miss Karunaa Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter card number as \"5425233430109903\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select expiry month as \"04\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I select expiry year as \"2026\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter card code as \"676\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on \u0027Continue\u0027 to confirm order",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I verify payment method is \"Credit Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I verify shipping method is \"2nd Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify total price is \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on \u0027Confirm\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I verify text \"Thank you\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I verify the message on confirm order page as \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on \u0027Continue\u0027 to storage page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I verify the text pn login page \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I click on \u0027Logout\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I verify the URL \"https://demo.nopcommerce.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iMouseHoverOnElectronicsTopMenuTab()"
});
formatter.result({
  "duration": 184630900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iMouseHoverAndClickOnCellPhonesOptionInElectronicsTab()"
});
formatter.result({
  "duration": 1448701000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 42
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheTextOnCellPhonesPageAs(String)"
});
formatter.result({
  "duration": 69427700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 123453100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnTheProductNameNokiaLumiaLink()"
});
formatter.result({
  "duration": 2408622200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 30
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheProductNameAs(String)"
});
formatter.result({
  "duration": 40400800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 38
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyThePriceOfTheProductAs(String)"
});
formatter.result({
  "duration": 53203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ElectronicsTestSteps.iChangeTheQuantityToOnProductPage(String)"
});
formatter.result({
  "duration": 218231400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnAddToCartToAddNokiaLumiaCellPhone()"
});
formatter.result({
  "duration": 136009400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 783756200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iMouseHoverOnShoppingCartLink()"
});
formatter.result({
  "duration": 202794600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iMouseHoverAndClickOnGoToCartButtonButton()"
});
formatter.result({
  "duration": 1923497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 74436500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 26
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTotalPrice(String)"
});
formatter.result({
  "duration": 49320400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 157564300,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 1274969400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTextAs(String)"
});
formatter.result({
  "duration": 46522700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegisterTab()"
});
formatter.result({
  "duration": 664856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 39
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheTextOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 39927400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karunaa",
      "offset": 40
    }
  ],
  "location": "ElectronicsTestSteps.iEnterFirstNameOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 175442300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Koradiya",
      "offset": 39
    }
  ],
  "location": "ElectronicsTestSteps.iEnterLastNameOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 186365400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karunaaiiaii28koradiya@gmail.com",
      "offset": 35
    }
  ],
  "location": "ElectronicsTestSteps.iEnterEmailOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 237559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 38
    }
  ],
  "location": "ElectronicsTestSteps.iEnterPasswordOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 159066700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 46
    }
  ],
  "location": "ElectronicsTestSteps.iEnterConfirmPasswordOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 188386100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 867395900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 42
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheMessageOnRegisterPageAs(String)"
});
formatter.result({
  "duration": 40083500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnContinueOnRegisterPage()"
});
formatter.result({
  "duration": 1729937400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 43616900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 20129039600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#termsofservice\"}\n  (Session info: chrome\u003d113.0.5672.94)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [16a5c6eca3bb8bdb3ebcfc680788e7de, findElement {using\u003did, value\u003dtermsofservice}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.94, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\valan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64343}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64343/devtoo..., se:cdpVersion: 113.0.5672.94, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 16a5c6eca3bb8bdb3ebcfc680788e7de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.clickOnElement(Utility.java:54)\r\n\tat com.nopcommerce.demo.pages.ShoppingCartPage.clickOnAgreeWithTermsOfServiceBox(ShoppingCartPage.java:72)\r\n\tat com.nopcommerce.demo.steps.ComputersTestSteps.iClickOnCheckboxIAgreeWithTheTermsOfService(ComputersTestSteps.java:129)\r\n\tat ✽.When I click on checkbox \u0027I agree with the terms of service\u0027(electronicstest.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Karunaa",
      "offset": 23
    }
  ],
  "location": "ComputersTestSteps.iEnterFirstNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Koradiya",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iEnterLastNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "karuna28koradiya@gmail.com",
      "offset": 18
    }
  ],
  "location": "ComputersTestSteps.iEnterEmailAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 40
    }
  ],
  "location": "ComputersTestSteps.iSelectCountryFromCountryFieldAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmedabad",
      "offset": 17
    }
  ],
  "location": "ComputersTestSteps.iEnterCityAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16, Happy residency",
      "offset": 20
    }
  ],
  "location": "ComputersTestSteps.iEnterAddressAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "390002",
      "offset": 24
    }
  ],
  "location": "ComputersTestSteps.iEnterPostalCodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "07436252668",
      "offset": 19
    }
  ],
  "location": "ComputersTestSteps.iEnterNumberAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueButtonToShippingMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnSecondDayAirShippingMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueForPaymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnCreditCardRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueButtonToPaymentInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Visa",
      "offset": 27
    }
  ],
  "location": "ComputersTestSteps.iSelectCreditCardType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss Karunaa Koradiya",
      "offset": 29
    }
  ],
  "location": "ComputersTestSteps.iEnterCardHolderNameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5425233430109903",
      "offset": 24
    }
  ],
  "location": "ComputersTestSteps.iEnterCardNumberAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "04",
      "offset": 26
    }
  ],
  "location": "ComputersTestSteps.iSelectExpiryMonthAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2026",
      "offset": 25
    }
  ],
  "location": "ComputersTestSteps.iSelectExpiryYearAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "676",
      "offset": 22
    }
  ],
  "location": "ComputersTestSteps.iEnterCardCodeAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueToConfirmOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 28
    }
  ],
  "location": "ComputersTestSteps.iVerifyPaymentMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air",
      "offset": 29
    }
  ],
  "location": "ComputersTestSteps.iVerifyShippingMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 25
    }
  ],
  "location": "ComputersTestSteps.iVerifyTotalPriceIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnConfirmButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 15
    }
  ],
  "location": "ComputersTestSteps.iVerifyText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 47
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheMessageOnConfirmOrderPageAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputersTestSteps.iClickOnContinueToStoragePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 33
    }
  ],
  "location": "ComputersTestSteps.iVerifyTheTextPnLoginPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsTestSteps.iClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/",
      "offset": 18
    }
  ],
  "location": "ElectronicsTestSteps.iVerifyTheURL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1300856200,
  "status": "passed"
});
formatter.uri("topmenutest.feature");
formatter.feature({
  "line": 2,
  "name": "Top menu tabs functionality",
  "description": "As a user I want to check page navigation of all top menu tabs",
  "id": "top-menu-tabs-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5886633400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify text of Computers top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-computers-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select top menu as \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the expected title on Computers page as \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1093499400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 50
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnComputersPageAs(String)"
});
formatter.result({
  "duration": 41097600,
  "status": "passed"
});
formatter.after({
  "duration": 874457300,
  "status": "passed"
});
formatter.before({
  "duration": 7312119700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify text of Electronics top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-electronics-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select top menu as \"Electronics\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify the expected title on Electronics page as \"Electronics\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1152074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 52
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnElectronicsPageAs(String)"
});
formatter.result({
  "duration": 52803700,
  "status": "passed"
});
formatter.after({
  "duration": 833713600,
  "status": "passed"
});
formatter.before({
  "duration": 5365195000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify text of Apparel top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-apparel-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select top menu as \"Apparel\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the expected title on Apparel page as \"Apparel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 995249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 48
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnApparelPageAs(String)"
});
formatter.result({
  "duration": 38107500,
  "status": "passed"
});
formatter.after({
  "duration": 915678300,
  "status": "passed"
});
formatter.before({
  "duration": 5539901200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify text of Computers top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-computers-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I select top menu as \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I verify the expected title on Computers page as \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1357139700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 50
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnComputersPageAs(String)"
});
formatter.result({
  "duration": 39108200,
  "status": "passed"
});
formatter.after({
  "duration": 1212521700,
  "status": "passed"
});
formatter.before({
  "duration": 6158967500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify text of Digital downloads top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-digital-downloads-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I select top menu as \"Digital downloads\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I verify the expected title on Digital downloads page as \"Digital downloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1014930900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 58
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnDigitalDownloadsPageAs(String)"
});
formatter.result({
  "duration": 36710300,
  "status": "passed"
});
formatter.after({
  "duration": 852417100,
  "status": "passed"
});
formatter.before({
  "duration": 4944692400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify text of Computers top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-computers-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I select top menu as \"Books\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I verify the expected title on Books page as \"Books\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1298581500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 46
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnBooksPageAs(String)"
});
formatter.result({
  "duration": 39120400,
  "status": "passed"
});
formatter.after({
  "duration": 842121700,
  "status": "passed"
});
formatter.before({
  "duration": 4806118400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify text of Computers top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-computers-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I select top menu as \"Jewelry\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I verify the expected title on Jewelry page as \"Jewelry\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1327496900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 48
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnJewelryPageAs(String)"
});
formatter.result({
  "duration": 43095500,
  "status": "passed"
});
formatter.after({
  "duration": 990597300,
  "status": "passed"
});
formatter.before({
  "duration": 4922013000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify text of Computers top menu page successfully",
  "description": "",
  "id": "top-menu-tabs-functionality;verify-text-of-computers-top-menu-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I select top menu as \"Gift cards\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I verify the expected title on Gift cards page as \"Gift Cards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersTestSteps.iIsOnHomePage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift cards",
      "offset": 22
    }
  ],
  "location": "TopMenuTests.iSelectTopMenuAs(String)"
});
formatter.result({
  "duration": 1545725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 51
    }
  ],
  "location": "TopMenuTests.iVerifyTheExpectedTitleOnGiftCardsPageAs(String)"
});
formatter.result({
  "duration": 92893400,
  "status": "passed"
});
formatter.after({
  "duration": 939358000,
  "status": "passed"
});
});