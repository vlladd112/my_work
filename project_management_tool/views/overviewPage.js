let sprints = localStorage.getItem('sprints');
sprints = JSON.parse(sprints);
let issues = localStorage.getItem('issues');
issues = JSON.parse(issues);
let issueStatusArr = localStorage.getItem('issue_status');
issueStatusArr = JSON.parse(issueStatusArr);

window.onload = () => {
    const sprintSelect = document.getElementById('sprintSelect');

    getSprints();
    createSprintOptions();
    sprintOnChange();
    //    populateIssues();

}

const getSprints = () => {
    sprints = sprints.length;
    let sprintsSpan = document.getElementById('sprintsSpan');
    sprintsSpan.innerHTML = sprints;
}

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

const sprintOnChange = () => {
    sprintSelect.addEventListener('change', () => {
        populateIssues();
    });
};

const populateIssues = () => {
    const issuesContainer = document.getElementById('issuesContainer');
    let statusesContainer = document.getElementById('statusesContainer');
    const issuesSpan = document.getElementById('issuesSpan');
    let issueCount = 0;
    const issuesH2 = document.getElementById('issuesH2');
    issuesH2.style.display = 'block';
    issuesContainer.removeChild(statusesContainer);
    statusesContainer = document.createElement('div')
    statusesContainer.setAttribute('id', 'statusesContainer');
    issuesContainer.appendChild(statusesContainer);
    for (let i = 0; i < issueStatusArr.length; i++) {
        const wrapperDiv = document.createElement('div');
        statusesContainer.appendChild(wrapperDiv);
        const statusDiv = document.createElement('div');
        statusDiv.setAttribute('class', 'statusDiv');
        wrapperDiv.appendChild(statusDiv);
        const statusLabel = document.createElement('label');
        const statusSpan = document.createElement('span');
        statusLabel.innerHTML = issueStatusArr[i].name;
        statusSpan.setAttribute('class', 'statusSpan');
        statusDiv.appendChild(statusLabel);
        statusDiv.appendChild(statusSpan);
        const typeDiv = document.createElement('div');
        wrapperDiv.appendChild(typeDiv);
        const typeList = document.createElement('ul');
        typeDiv.appendChild(typeList);
        const typeItemFeature = document.createElement('li');
        const typeItemBug = document.createElement('li');
        const typeItemTask = document.createElement('li');
        typeItemFeature.innerHTML = "Features:&nbsp;";
        typeItemBug.innerHTML = "Bugs:&nbsp;";
        typeItemTask.innerHTML = "Tasks:&nbsp;";
        typeList.appendChild(typeItemFeature);
        typeList.appendChild(typeItemBug);
        typeList.appendChild(typeItemTask);
        const typeSpanFeature = document.createElement('span');
        const typeSpanBug = document.createElement('span');
        const typeSpanTask = document.createElement('span');
        typeSpanFeature.setAttribute('class', 'typeSpanFeature');
        typeSpanBug.setAttribute('class', 'typeSpanBug');
        typeSpanTask.setAttribute('class', 'typeSpanTask');
        typeItemFeature.appendChild(typeSpanFeature);
        typeItemBug.appendChild(typeSpanBug);
        typeItemTask.appendChild(typeSpanTask);
        
        let statusCount = 0;
        let featureCount = 0;
        let bugCount = 0;
        let taskCount = 0;
        for (let j = 0; j < issues.length; j++) {
            let statusSpan = issues[j].status;
            if (issues[j].sprint == sprintSelect.value) {
                if (issues[j].status === undefined) {
                    issues[j].status = 0;
                } else if (issues[j].status == i + 1) {
                    statusCount++;
                    if (issues[j].type === "feature") {
                        featureCount++;
                    } else if (issues[j].type === "bug") {
                        bugCount++;
                    } else if (issues[j].type === "task") {
                        taskCount++;
                    };
                };

            };

        };
        statusSpan.innerHTML = statusCount;
        typeSpanFeature.innerHTML = featureCount;
        typeSpanBug.innerHTML = bugCount;
        typeSpanTask.innerHTML = taskCount;
    };
    const allStatusSpan = document.getElementsByClassName('statusSpan');
    for (let i=0; i<allStatusSpan.length; i++) {
        issueCount = issueCount + parseInt(allStatusSpan[i].innerHTML);
    };
    issuesSpan.innerHTML = issueCount;
};