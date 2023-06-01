import { Formatter } from '../services/formatter';

export class CreditCardDirective {

    constructor(public element: HTMLElement, private formatter: Formatter) {
        console.log('CreditCardDirective constructor', Math.random());
    }
    static selector = '[card-number]';    

    private formatCreditCard(element: HTMLInputElement) {
        element.value = this.formatter.formatNumber(
            element.value,
            true,
            16,
            4
        );
    }

   public init() {
        this.element.addEventListener('input', (event) => {
           this.formatCreditCard(event.target as HTMLInputElement);
        });
    }
}