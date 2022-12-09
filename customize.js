module.exports = {
  version: "1.0.0",

  questions: [{
    type: 'input',
    name: 'name',
    message: 'What name for the dashboard?',
    description: 'a valid name consist of one Word composed of letters and numbers',
    validate: function (value) {
        var pass = value.match( /^[-0-9a-bA-Z]+$/i );
        return pass ? true : 'Only letters and numbers name, at least one';
    }
  }]
}