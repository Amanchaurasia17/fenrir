
// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const { randomInt } = require('d3-random'); // ✅ Correct import
// const simpleGit = require('simple-git');
// const FILE_PATH = './data.json';

// const makeCommit = async n => {
//     if (n === 0) return simpleGit().push();

//     const x = randomInt(0, 53)(); // ✅ d3-random requires calling the function
//     const y = randomInt(0, 6)();

//     const DATE = moment()
//         .subtract(1, 'y')
//         .add(1, 'd')
//         .add(x, 'w')
//         .add(y, 'd')
//         .format();

//     const data = { date: DATE };
//     console.log(DATE);

//     jsonfile.writeFile(FILE_PATH, data, async () => {
//         try {
//             await simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });
//             makeCommit(n - 1);
//         } catch (err) {
//             console.error(err);
//         }
//     });
// };

// makeCommit(10); // Start committing




const jsonfile = require('jsonfile');
const moment = require('moment');
const { randomInt } = require('d3-random'); // ✅ Correct import for d3-random
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const makeCommit = async n => {
    if (n === 0) return simpleGit().push();

    // Generate a random date between June 1, 2024, and July 31, 2024
    const startDate = moment('2025-03-20'); // June 1, 2024
    const endDate = moment('2025-03-30'); // July 31, 2024
    const daysRange = endDate.diff(startDate, 'days'); // Total days in range

    const randomDays = randomInt(0, daysRange)(); // Random number of days to add
    const DATE = startDate.add(randomDays, 'days').format(); // Generate random date

    const data = { date: DATE };
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, async () => {
        try {
            await simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });
            makeCommit(n - 1);
        } catch (err) {
            console.error(err);
        }
    });
};

makeCommit(12); // Start committing
