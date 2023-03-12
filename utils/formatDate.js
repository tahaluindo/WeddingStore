export const formatDate = (dateParam) => {
    try {
        const date = new Date(dateParam)
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weddingDateElements = {
            clock: `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`,
            day: ("0" + date.getDate()).slice(-2),
            month: ("0" + (date.getMonth() + 1)).slice(-2),
            monthName: monthNames[date.getMonth()],
            year: date.getFullYear(),
            fullDate: `${("0" + date.getDate()).slice(-2)} ${("0" + date.getMonth() + 1).slice(-2)} ${date.getFullYear()}`,
            fullDate2: `${("0" + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${date.getFullYear()}`,
            fullDateStandart: `${date.getFullYear()}-${(date.getMonth() + 1)}-${(date.getDate())}`,
            date: Date.parse(date),
        }

        return weddingDateElements
    } catch (error) {
        const dateTime = new Date()
        return dateTime

    }
}

export const toDateTime = (secs) => {
    const t = new Date()
    t.setSeconds(secs)
    return t
}