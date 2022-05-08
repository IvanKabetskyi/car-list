import * as Yup from 'yup';

const validation = Yup.object({
    price: Yup.mixed().test('match', 'Price is Invalid', function (): boolean {
        const {price} = this.parent;
        if (!price) {
            return true;
        }
        const {from, to} = price;

        return !(from > to);
    }),
});

export default validation;
