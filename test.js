function getDaysFromNow(days){
    // Get the current date in UTC
    const currentDate = new Date();

    // Set the time to 00:00:00
    currentDate.setUTCHours(0, 0, 0, 0);

    // Get the UTC timestamp in milliseconds
    const utcTimestampForStartOfDay = currentDate.getTime();

    // Add 3 days in milliseconds (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const threeDaysInMilliseconds = days * 24 * 60 * 60 * 1000;
    const futureUTCTimestamp = utcTimestampForStartOfDay + threeDaysInMilliseconds;
    console.log(new Date(futureUTCTimestamp).toISOString().slice(0, 10));


    return futureUTCTimestamp;
}

console.log(getDaysFromNow(3))
