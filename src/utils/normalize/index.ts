export const onlyNumbers = (value?: string): number | undefined => {
    const numberString = (value || '').replace(/[^\d]/g, '');
    return numberString.length ? Number(numberString) : undefined;
};
