class CreditCardDirective {
    constructor(public element: HTMLElement) {}

    private formatCreditCard(element: HTMLInputElement) {
        const value = element.value.replace(/[^\d]/g, '').substring(0, 16);

        const groups: string[] = [];

        for (let i = 0; i < value.length; i += 4) {
            groups.push(value.substring(i, i + 4));
        }

        element.value = groups.join(' ');
    }

   public init() {
        this.element.addEventListener('input', (event) => {
           this.formatCreditCard(event.target as HTMLInputElement);
        });
    }
}

class PhoneNumberDirective {
    constructor(public element: HTMLElement) {}

    private formatNumber(element: HTMLInputElement) {
        const value = element.value.replace(/[^\d]/g, '').substring(0, 10);

        const groups: string[] = [];

        for (let i = 0; i < value.length; i += 2) {
            groups.push(value.substring(i, i + 2));
        }

        element.value = groups.join(' ');
    }

   public init() {
        this.element.addEventListener('input', (event) => {
           this.formatNumber(event.target as HTMLInputElement);
        });
    }

}

const phonesElement = document.querySelectorAll<HTMLElement>('[phone-number]');

phonesElement.forEach((element) => {
    const directive = new PhoneNumberDirective(element);
    directive.init();
});


const creditCardElement = document.querySelectorAll<HTMLElement>('[card-number]');

creditCardElement.forEach((element) => {
    const directive = new CreditCardDirective(element);
    directive.init();
});
