import BasePage from "./BasePage";
import {SignUpModal} from "./SignUpModal";
import {SignInModal} from "./SignInModal";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}));
        this.signUpBtn = page.locator('button:text("Sign up")');
        this.signInBtn = page.locator('button:text("Sign In")');
        this.modal = page.locator('.modal-open');
    }
    async openSignUpModal(){
        await this.signUpBtn.click();
        await this.modal.waitFor('visible');
        return new SignUpModal(this._page)
    }

    async openSignInModal(){
        await this.signInBtn.click();
        return new SignInModal(this._page);
    }

}