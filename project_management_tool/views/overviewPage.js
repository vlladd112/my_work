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
    for (let i = 0; i < issues.length; i++) {
        let newStatus = issue.status;
        let newStatusArr = []
        newStatusArr.push(newStatus);
    }
}
