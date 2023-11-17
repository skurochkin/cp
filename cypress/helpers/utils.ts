export function getDaysFromNow(days: number): string{
    const currentDate = new Date();

    currentDate.setUTCHours(0, 0, 0, 0);

    const utcTimestampForStartOfDay = currentDate.getTime();

    const daysInMilliseconds = days * 24 * 60 * 60 * 1000;
    const futureUTCTimestamp = utcTimestampForStartOfDay + daysInMilliseconds;

    return futureUTCTimestamp.toString();
}

export function getFormatedDaysFromNow(days: number): Object{
    let futureDate = parseInt(getDaysFromNow(days))

    const optionsLong: Object = { day: 'numeric', month: 'long', year: 'numeric' };
    const optionsShort: Object = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const dateFormatterLong = new Intl.DateTimeFormat('en-GB', optionsLong);
    const dateFormatterShort = new Intl.DateTimeFormat('en-US', optionsShort);
    
    const formattedDateLong = dateFormatterLong.format(futureDate);
    const formattedDateShort = new Date(futureDate).toISOString().slice(0, 10);
    

    return {formattedDateLong, formattedDateShort };
}