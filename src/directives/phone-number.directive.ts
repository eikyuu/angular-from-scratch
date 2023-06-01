export class PhoneNumberDirective {
    constructor(public element: HTMLElement) {}

    static selector = '[phone-number]';

    willHavesSpaces = true;

    private formatNumber(element: HTMLInputElement) {
        const value = element.value.replace(/[^\d]/g, '').substring(0, 10);

        const groups: string[] = [];

        for (let i = 0; i < value.length; i += 2) {
            groups.push(value.substring(i, i + 2));
        }

        element.value = groups.join(this.willHavesSpaces ? ' ' : '');
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