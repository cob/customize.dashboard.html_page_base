module.exports = {
  version: "1.0.0",

  questions: [{
        type: 'input',
        name: 'name',
        message: 'What name for the url?',
        description: 'a valid name consist of one Word composed of letters and numbers',
        validate: function (value) {
            var pass = value.match(
            /^[-0-9a-bA-Z]+$/i
            );
            if (pass) {
            return true;
            }

            return 'Only letters and numbers name, at least one';
        }
    }],

  actions: async function (repoName, answers, copy, mergeFiles) {
    const path = require("path");
    await copy(path.resolve(repoName), "./");
    
    const  target = "./recordm/customUI/"+answers.name+".html"
    await copy("../../templates/dashboards/cob-dashboard-html/demoDashboard.html",target)
    await mergeFiles(repoName);
  },
};
