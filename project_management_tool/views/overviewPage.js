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
    let newStatusArr = [];
    //==== GET NEW STATUS
    for (let i = 0; i < issues.length; i++) {
        let newStatus = issues[i].status;
        if(issues[i].status === undefined) {
            issues[i].status = 0;
        };
        newStatusArr.push(newStatus);
        newStatusNumber = newStatusArr.length;
    };
    newSpan.innerHTML = newStatusNumber;
};
