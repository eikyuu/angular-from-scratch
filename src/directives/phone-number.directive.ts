import { Formatter } from '../services/formatter';

export class PhoneNumberDirective {

    constructor(public element: HTMLElement, private formatter: Formatter) {
        console.log('PhoneNumberDirective constructor', Math.random());
    }

    static selector = '[phone-number]';

    willHavesSpaces = true;

    private formatNumber(element: HTMLInputElement) {

        element.value = this.formatter.formatNumber(
            element.value,
            this.willHavesSpaces,
            10,
            2
        );
    }

   public init() {

        if (this.element.hasAttribute('with-spaces')) {
            this.willHavesSpaces = this.element.getAttribute('with-spaces') === 'true';
        }

        this.element.addEventListener('input', (event) => {
           this.formatNumber(event.target as HTMLInputElement);
        });
    }

}