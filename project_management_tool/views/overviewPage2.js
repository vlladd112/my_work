let sprints = localStorage.getItem('sprints');
sprints = JSON.parse(sprints);
let issues = localStorage.getItem('issues');
issues = JSON.parse(issues);

//const sprintSelect = document.getElementById('sprintSelect');


window.onload = () => {
    const sprintSelect = document.getElementById('sprintSelect');
    const issueSelect = document.getElementById('issueSelect');
    createSprintOptions();
    sprintOnChange();
};

// CREATE SPRINT OTIONS
const createSprintOptions = () => {
    const sprintsLS = localStorage.getItem('sprints');
    let parsedSprintsLS = JSON.parse(sprintsLS);
    if (parsedSprintsLS === null) {
        parsedSprintsLS = [];
    };

    for (let i = 0; i < parsedSprintsLS.length; i++) {
        const createSprintOption = document.createElement('option');
        createSprintOption.setAttribute('class', 'sprintOption');
        createSprintOption.setAttribute('value', parsedSprintsLS[i].id);
        createSprintOption.innerHTML = parsedSprintsLS[i].name;
        sprintSelect.append(createSprintOption);
    };
};

// ON CHANGE EVENT  - GET SPRINT ISSUES
const sprintOnChange = () => {
    sprintSelect.addEventListener('change', () => {
        for (let i = 0; i < sprints.length; i++) {
            if (sprintSelect.value == sprints[i].id) {
                for (let j = 0; j < issues.length; j++) {
                    if (sprints[i].id == issues[j].sprint) {
                        console.log(issues[j].name);
//                        issueOnChange();
                        const issueSelect = document.getElementById('issueSelect');
                        let createIssueOption = document.createElement('option');
                        createIssueOption.innerHTML = issues[j].name;
                        createIssueOption.setAttribute('value', issues[j].id);
                        issueSelect.appendChild(createIssueOption);
                    };
                };
            };
        };
    });
};

const issueOnChange = () => {
    issueSelect.addEventListener('change', () => {
        const newSpan = document.getElementById('newSpan');
        const newFeatureSpan = document.getElementById('newFeatureSpan');
        const newBugSpan = document.getElementById('newBugSpan');
        const newTaskSpan = document.getElementById('newTaskSpan');
        let newStatusCount = 0;
        let newFeatureCount = 0;
        let newBugCount = 0;
        let newTaskCount = 0;
        for (let i = 0; i < issues.length; i++) {
            if (issueSelect.value == issues[i].id) {
                if (issues[i].status == 1) {
                    //count statuses
                    newStatusCount++;
                    if (issues[i].type === "feature") {
                        newFeatureCount++;
                    } else if (issues[i].type === "bug") {
                        newBugCount++;
                    } else if (issues[i].type === "task") {
                        newTaskCount++;
                    };
                };
            };
        };
        newSpan.innerHTML = newStatusCount;
        newFeatureSpan.innerHTML = newFeatureCount;
        newBugSpan.innerHTML = newBugCount;
        newTaskSpan.innerHTML = newTaskCount;
    });
};
