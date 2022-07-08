export default class SignUp {
  signUpBtnHM = () => cy.get('[href="/signup"]');
  headerSignUp = () => cy.get('[data-msgid="Sign Up"]');
  paragraphTextUnderHeader = () => cy.get('div[class*="body-2 text-center"]');

  loginLink = () => cy.get('a[data-msgid="Log in"]');
  headerLoginPage = () => cy.get('h1[data-msgid="Log In"]');
  emailField = () => cy.get('input[type="email"]');
  emailLabel = () => cy.get('label[for="input-49"]');
  messageUnderEmailField = () => cy.get('div[class="v-messages__message"]');

  passwordField = () => cy.get('input[id="input-55"]');
  passwordLabel = () => cy.get('label[for="input-55"]');
  eyeIcon = () => cy.get("button[class*=mdi-eye]");

  signUpBtn = () => cy.get('button[type="submit"]');
  headerAfterSignUp = () => cy.get("h2");
  profileMenu = () => cy.get('button[aria-label="menu"]'); //button[aria-label="menu"]
  logOutBtn = () => cy.get('[href="/logout"]');
  messageUnderEmail = () => cy.get('label[for="input-49"]').parent().parent().next("div").children("div").children("div").children("div").children("span");
  messageUnderPassword = () => cy.get('label[for="input-55"]').parent().parent().next("div").children("div").children("div").children("div").children("span");

  // colorCheckOfMessage = cy.get('label[for="input-49"]').parent().parent().children("div").last().children("div").should("have.attr", "class", "v-messages theme--light success--text").should("have.attr", "class", "v-messages theme--light error--text");

  goToTheRegesterPage = () => {
    cy.visit("/");
    this.signUpBtnHM().click();
  };

  generateEmail = () => `itit${Math.floor(Math.random() * 100)}@gmail.com`;

  logOut = () => {
    this.profileMenu().click();
    this.logOutBtn().click();
  };
}
