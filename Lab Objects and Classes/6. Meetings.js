function createMeetings(array) {

    let schedule = {};

    for (const line of array) {

        let [key, value] = line.split(" ");

        if (!schedule.hasOwnProperty(key)) {
            schedule[key] = value;
            console.log(`Scheduled for ${key}`);
        } else {
            console.log(`Conflict on ${key}!`);
        }

    }
    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }

}

createMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)