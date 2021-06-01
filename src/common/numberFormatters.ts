export const RUB_FORMATTER = (number: number) =>
    new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    }).format(number);
