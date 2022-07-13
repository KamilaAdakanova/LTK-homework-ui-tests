import SignUp from "../../support/page_object/signUpPage";

const signUp = new SignUp();
const testEmail = signUp.generateEmail();

describe("SingUp Page Elements", () => {
  const headerText = "Sign Up";
  const paragraphText = "Discover the new way to shop fashion, home, beauty, and more from trusted LTK Creators.";
  const haveAnAccount = "Have an account?";
  const loginText = "Log in";
  const signUpBtnText = "sign up to begin shopping";

  it("Go to the sign Up Page ", () => {
    signUp.goToTheRegesterPage();
  });

  describe("Checking all Texts and link log in", () => {
    it(`Header on Sign Page should be visible and should have text "${headerText}"`, () => {
      signUp.headerSignUp().should("be.visible").should("have.text", headerText);
    });

    it(`Paragraph Text under Header should be visible and should have text "${paragraphText}"`, () => {
      signUp.paragraphTextUnderHeader().should("be.visible").should("have.text", paragraphText);
    });
    it(`Log In link should be visible and should have text ${loginText}`, () => {
      signUp.loginLink().should("be.visible").should("have.text", loginText);
      // + haveAnAccount
    });

    it(`Log In link should redirects user to the Register Page`, () => {
      signUp.loginLink().click();
      signUp.headerLoginPage().should("have.text", "Log In").should("be.visible").go("back");
    });
  });

  describe("Checking Input Fields", () => {
    it("Checking Email Input Field", () => {
      signUp.emailLabel().should("have.text", "Email");
      signUp.emailField().type("Abc").should("have.value", "Abc").clear();
    });

    it("Checking Password Input Field", () => {
      signUp.passwordLabel().should("be.visible").should("have.text", "Password");
      signUp.passwordField().type("Abc123").clear();
    });
    it("Checking Eye Icon in Password  Field and its function", () => {
      signUp.eyeIcon().should("be.visible");
      signUp.passwordField().type("Abc123");
      signUp.eyeIcon().click();
      signUp.passwordField().should("be.visible", "Abc123").clear();
    });
  });

  describe("Checking Sign Up button", () => {
    it("Checking Email Input Field", () => {
      signUp.signUpBtn().should("be.visible").should("have.text", signUpBtnText);
    });
  });

  describe("Checking Messages after enter valid email and password", () => {
    it("Checking message under email", () => {
      signUp.emailField().type(testEmail).should("have.value", testEmail);
      signUp.messageUnderEmail().first().should("have.text", "Enter a valid email");
      signUp.emailField().clear();
    });
    it("Checking Password Input Field", () => {
      signUp.passwordField().type("123123zzz").should("have.value", "123123zzz");
      signUp.messageUnderPassword().last().should("have.text", "Minimum of 8 characters");
      signUp.passwordField().clear();
    });
  });
});
