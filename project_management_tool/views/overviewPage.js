let sprints = localStorage.getItem('sprints');
sprints = JSON.parse(sprints);
let issues = localStorage.getItem('issues');
issues = JSON.parse(issues);

window.onload = () => {
    getSprints();
    getIssues();
}

const getSprints = () => {
    sprints = sprints.length;
    let sprintsSpan = document.getElementById('sprintsSpan');
    sprintsSpan.innerHTML = sprints;
}

const getIssues = () => {
    const newSpan = document.getElementById('newSpan');
    const newFeatureSpan = document.getElementById('newFeatureSpan');
    const newBugSpan = document.getElementById('newBugSpan');
    const newTaskSpan = document.getElementById('newTaskSpan');
    let newStatusCount = 0;
    let newFeatureCount = 0;
    let newBugCount = 0;
    let newTaskCount = 0;
    for (let i = 0; i < issues.length; i++) {
        let newStatus = issues[i].status;
        if(issues[i].status === undefined) {
            issues[i].status = 0;
        }
        //==== GET ~~NEW~~ ISSUE STATUS
        else if (issues[i].status == 1) {
            newStatusCount++;
            if (issues[i].type === "feature") {
                newFeatureCount++;
            }
            else if (issues[i].type === "bug") {
                newBugCount++;
            }
            else if (issues[i].type === "task") {
                newTaskCount++;
            };
        };
    };
    newSpan.innerHTML = newStatusCount;
    newFeatureSpan.innerHTML = newFeatureCount;
    newBugSpan.innerHTML = newBugCount;
    newTaskSpan.innerHTML = newTaskCount;
};
