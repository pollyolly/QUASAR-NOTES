export function currency(amount){
    
    let symbol = '';
    if(amount > 0) symbol = '+'
    else if (amount < 0) symbol = '-'

    const amountPos = Math.abs(amount);
    const currency = 'P';
    const amountFormatted = amountPos.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return `${symbol} ${currency}${amountFormatted}`;
}