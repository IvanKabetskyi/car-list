export type Price = {
    from?: number;
    to?: number;
};

export type FilterParams = {
    make?: string;
    model?: string;
    modelYear?: number;
    color?: string;
    price?: Price;
};
