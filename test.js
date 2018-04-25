const PersonNameFilter = require('./index');
const filter = new PersonNameFilter('すずきは琢磨のことがきらいだ');

if (filter.hasNouns) {
    const personName = filter.extractPersonName();
    console.log(personName);
} else {
    console.log('no names')
}