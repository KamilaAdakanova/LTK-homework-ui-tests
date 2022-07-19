import SignUp from "../../support/page_object/signUpPage";

const signUp = new SignUp();
const testEmail = signUp.generateEmail();

describe("SignUp Smoke Tests", () => {
  describe("Sign Up a new user - Positive test", () => {
    it("Sign up with valid credentials", () => {
      signUp.goToTheRegesterPage();
      signUp.headerSignUp().should("be.visible").should("have.text", "Sign Up");
      signUp.emailField().type(testEmail, {delay: 15}).should("have.value", testEmail);
      signUp.passwordField().type("123123zzz!!!", {delay: 15}).should("have.value", "123123zzz!!!");
      signUp.signUpBtn().click().wait(200);
      signUp.spanForYou().should("have.text", '\n    For You\n  ');
    });
    it("LogOut", () => {
      signUp.logOut();
    });
  });
  describe("Sign Up a new user - Negative test with already registered email", () => {
    it("Preconditions - go to the home page and click to Signp button", () => {
      signUp.goToTheRegesterPage();});
      it("Check header on SignUp page", () => {
      signUp.headerSignUp().should("be.visible").should("have.text", "Sign Up")});
      it("Input already existing email", () => {
      signUp.emailField().type(testEmail).should("have.value", testEmail);});
      it("Input any valid password", () => {
      signUp.passwordField().type("123123zzz").should("have.value", "123123zzz");});
      it("Click Submit button", () => {
      signUp.signUpBtn().click();});
      it("Check if message appear", () => {
      signUp.messageOfExistingEmail().should("have.text", `Oops! The email you've entered is already associated with an LTK account.`);
    });
  });
});
