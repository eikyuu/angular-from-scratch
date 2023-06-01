export class CreditCardDirective {
    constructor(public element: HTMLElement) {}

    static selector = '[card-number]';

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