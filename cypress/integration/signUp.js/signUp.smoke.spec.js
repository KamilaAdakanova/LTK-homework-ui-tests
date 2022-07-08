import SignUp from "../../support/page_object/signUpPage";

const signUp = new SignUp();
const testEmail = signUp.generateEmail();

describe("Main test suit for SignUp", () => {
  describe("Sign Up a new user - Positive test", () => {
    it("SignUp a new user with valid credentials", () => {
      signUp.goToTheRegesterPage();
      signUp.headerSignUp().should("be.visible").should("have.text", "Sign Up");
      signUp.emailField().type(testEmail).should("have.value", testEmail);
      signUp.passwordField().type("123123zzz").should("have.value", "123123zzz");
      signUp.signUpBtn().click();
      signUp.headerAfterSignUp().should("have.text", "Discover");
    });
    it("LogOut", () => {
      signUp.logOut();
    });
  });
  describe("Sign Up a new user - Negative test", () => {
    it("Attemp to SignUp a new user with existing credentials", () => {
      signUp.goToTheRegesterPage();
      signUp.headerSignUp().should("be.visible").should("have.text", "Sign Up");
      signUp.emailField().type(testEmail).should("have.value", testEmail);
      signUp.passwordField().type("123123zzz").should("have.value", "123123zzz");
      signUp.signUpBtn().click();
      signUp.messageOfExistingEmail().should("have.text", `Oops! The email you've entered is already associated with an LTK account.`);
    });
  });
});

// describe("Login Page - Main Page Elements and their base functionality Main Test Case", () => {
//   const registerTitleText = authPagesPOM.testData.AuthPages.pageTitle.textRegister;
//   const loginTitleText = authPagesPOM.testData.AuthPages.pageTitle.textLogin;
//   const registerTextText = authPagesPOM.testData.AuthPages.pageText.registerText;
//   const paragraphText = authPagesPOM.testData.AuthPages.paragraph.registerText;
//   describe("PRECONDITIONS: Load Home Page", () => {
//     it("Visit Home Page and check that the page was loaded", () => {
//       homePagePOM.load();
//     });
//     it("Click Log In button", () => {
//       homePagePOM.signUpBtn().click();
//     });
//   });
//   describe("Checking Page Title", () => {
//     it("Page Title should exist and be visible", () => {
//       authPagesPOM.authPagesTitle().should("be.visible");
//     });
//     it(`Page Title should have text "${registerTitleText}"`, () => {
//       authPagesPOM.authPagesTitle().should("have.text", registerTitleText);
//     });
//   });
//   describe("Checking Page Text", () => {
//     it("Page Text should exist and be visible", () => {
//       authPagesPOM.authPagesText().next().should("be.visible");
//     });
//     it(`Page Text should have text "${registerTextText}"`, () => {
//       authPagesPOM.authPagesText().should("have.text", registerTextText);
//     });
//   });
//   describe("Checking Paragraph", () => {
//     it("Page Paragraph should exist and be visible", () => {
//       authPagesPOM.authPagesText().next().should("be.visible");
//     });
//     it(`Page Text should have text "${paragraphText} ${authPagesPOM.testData.AuthPages.logInLink.text}"`, () => {
//       authPagesPOM.authPagesParagraph().should("have.text", paragraphText + " " + authPagesPOM.testData.AuthPages.logInLink.text);
//     });
//   });
//   describe("Checking Log In link", () => {
//     it("Log In link should exist and be visible", () => {
//       authPagesPOM.logInLink().should("be.visible");
//     });
//     it(`Log In link should have text "${authPagesPOM.testData.AuthPages.logInLink.text}"`, () => {
//       authPagesPOM.logInLink().should("have.text", authPagesPOM.testData.AuthPages.logInLink.text);
//     });
//     it(`Log In link should redirects user to the Register Page`, () => {
//       authPagesPOM.logInLink().click();
//       authPagesPOM.authPagesTitle().should("have.text", loginTitleText).should("be.visible").go("back");
//     });
//   });
//   describe("Checking Input Fields", () => {
//     it("Checking Email Input Field", () => {
//       authPagesPOM.checkInputField(49, "email");
//     });
//     it("Checking Password Input Field", () => {
//       authPagesPOM.checkInputField(55);
//     });
//   });
//   describe("Checking Submit Button", () => {
//     it("Checking that Submit Button exists", () => {
//       authPagesPOM.submitButton();
//     });
//     it(`Checking that Submit Button has text "${authPagesPOM.testData.AuthPages.submitBtn.registerText}"`, () => {
//       authPagesPOM.submitButton().should("have.text", authPagesPOM.testData.AuthPages.submitBtn.registerText);
//     });
//     it("Checking that Submit Button is clickable", () => {
//       authPagesPOM.submitButton().click();
//     });
//   });
//
