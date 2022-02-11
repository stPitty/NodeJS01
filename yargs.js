const yargs = require('yargs')
  .alias('d', 'date')
  .alias('m', 'month')
  .alias('y', 'year');

function currentDate (object) {
  const date = new Date();
  const output = [];

  if (object._.includes('add') || object._.includes('sub')) {
    const index = object._.includes('sub') ? -1 : 1;
    date.setDate(date.getDate() + (object.date ? object.date : null) * index);
    date.setMonth(date.getMonth() + (object.month ? object.month : null)  * index);
    date.setFullYear(date.getFullYear() + (object.year ? object.year : null)  * index);
    return date
  }

  object.date ? output.push(date.getDate()) : null;
  object.month ? output.push(date.getMonth()) : null;
  object.year ? output.push(date.getFullYear()): null;

  return output.length ? output.join(' ') : date;
}


const argv = yargs.argv;
if (argv._.includes('current')) {
  console.log(currentDate(argv));
}
