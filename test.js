const Mecab = require('mecab-async'),
    mecab = new Mecab();
const words = mecab.parseSync('こういちは村澤のことがすきです', function (err, result) {
    if (err) throw err;
});

const PersonNameFilter = require('./index');
const filter = new PersonNameFilter(words);

if (filter.hasNouns) {
    const personName = filter.extractPersonName();
    console.log(personName);
} else {
    console.log('no names')
}