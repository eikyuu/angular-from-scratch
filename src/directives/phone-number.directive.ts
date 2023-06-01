export class PhoneNumberDirective {
    constructor(public element: HTMLElement) {}

    static selector = '[phone-number]';

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