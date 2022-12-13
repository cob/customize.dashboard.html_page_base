module.exports = {
  version: "1.0.1",

  questions: [{
    type: 'input',
    name: 'name',
    message: 'What name for the dashboard?',
    description: 'a valid name consist of one Word composed of letters and numbers',
    validate: function (value) {
        var pass = value.match( /^[-0-9a-bA-Z]+$/i );
        return pass ? true : 'Only letters and numbers name, at least one';
    }
  },
  {
    type: 'input',
    name: 'domainId',
    message: 'What domainId to query?',
    validate: function (value) {
        var pass = value.match( /^[-0-9]+$/i );
        return pass ? true : 'Only numbers, at least one';
    }
  }]
}