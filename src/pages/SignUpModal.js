import BasePage from "./BasePage";

export class SignUpModal extends BasePage {
    constructor(page) {
        super(page, page.locator('app-signup-modal'));
        this.userNameInput = this._container.locator('#signupName');
        this.userLastNameInput = this._container.locator('#signupLastName');
        this.userEmailInput = this._container.locator('#signupEmail');
        this.userPasswordInput = this._container.locator('#signupPassword');
        this.userReEnterPasswordInput = this._container.locator('#signupRepeatPassword');
        this.signUpButton = this._container.locator('button:text("Sign up")');

        this.registrationButton = this._container.locator('.modal-footer .btn-primary');
        this.closeButton = this._container.locator('button.close');

        this.formTitle = this._container.locator('.modal-title');

        // warning panel
        this.nameWarningsPanel = this._container.locator('div.invalid-feedback');

        this.alertMessage = this._container.locator(".alert-danger")
    }

    async fillInput(locator, text) {
        await locator.click();
        await locator.fill(text);
    }

    async focusOutFromField() {
        await this.formTitle.click();
    }

    getRandomNumber() {
        return Math.round(Math.random() * 400);
    }

    async openSignUpWindow() {
        await this.signUpButton.waitFor("visible");
        await this.signUpButton.click();
    }

    async closeSignUpWindow() {
        await this.closeButton.click();
    }

    async getFieldBorderColor(field) {
        const color = field.evaluate((el) => {
            const style = window.getComputedStyle(el);
            return style.getPropertyValue("color");
        });
        return color;
    }

    async getWarningNotification(index) {
        await this.nameWarningsPanel.waitFor("visible");

        return await this._page.locator('div.invalid-feedback p')
            .nth(index).innerText();
    }
}

