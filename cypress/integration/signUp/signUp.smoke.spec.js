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
