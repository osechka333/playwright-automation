import BaseComponent from "./BaseComponent";

export class SignInModal extends BaseComponent {
    constructor(page) {
        super(page, page.locator('app-signin-modal'));
        this.userEmailInput = this._page.locator('#signinEmail');
        this.userPasswordInput = this._page.locator('#signinPassword');
        this.loginButton = this._page.locator('button:text("Login")')
    }

    async fillSignInModal(email, password) {
        await this.userEmailInput.fill(email);
        await this.userPasswordInput.fill(password);
    }

    async login() {
        await this.loginButton.click();
    }

}