let issueId;
let issue;
let assignedIssuesLs = localStorage.getItem('assigned_tasks');
assignedIssuesLs = JSON.parse(assignedIssuesLs);
let unassignedIssuesLs = localStorage.getItem('unassigned_tasks');
unassignedIssuesLs = JSON.parse(unassignedIssuesLs);
const issueTypeArr = ['feature', 'bug'];
const issueStatusArr = [{
    id: 1,
    name: 'New'
}, {
    id: 2,
    name: 'In progress'
}, {
    id: 3,
    name: 'Feedback'
}, {
    id: 4,
    name: 'Rework'
}, {
    id: 5,
    name: 'Resolved'
}, {
    id: 6,
    name: 'Ready for Testing'
}];

//====== BUILD DATE
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
};
if (mm < 10) {
    mm = '0' + mm;
};


window.onload = () => {
    const body = document.getElementById('body');
    validateId();
    showItem();
    updateItem();

}

const validateId = () => {
    const searchParameter = window.location.search;

    if (searchParameter === null || searchParameter === "" || searchParameter === undefined) {
        body.innerHTML = "There is no ID present in url";
    } else {
        issueId = searchParameter.split('=')[1];
        issueId = parseInt(issueId);
        if (isNaN(issueId)) {
            body.innerHTML = "ID is NaN";
        };
    };
};

const showItem = () => {
    let issuesLs = localStorage.getItem('issues');
    issuesLs = JSON.parse(issuesLs);
    let isIssueFound = false;
    for (let i = 0; i < issuesLs.length; i++) {
        if (issueId === issuesLs[i].id) {
            //====== POPULATE INPUT FIELDS
            const issueType = document.getElementById('issueType');
            let issueName = document.getElementById('issueName');
            let issueSprint = document.getElementById('issueSprint');
            let issueAssignee = document.getElementById('issueAssignee');
            const issueDescription = document.getElementById('issueDescription');
            let issueStatus = document.getElementById('issueStatus');
            const issueComments = document.getElementById('issueComments');
            const issueUpdatedAt = document.getElementById('issueUpdatedAt');

            issue = issuesLs[i];

            issueName.value = issue.name;
            issueDescription.value = issue.description;
            createTypeOptions();
            createSprintOptions();
            createAssigneeOptions();
            createStatusOptions();
            createTaskListItems();

            isIssueFound = true;
        };
    };
    if (isIssueFound === false) {
        body.innerHTML = 'Issue does not exist';
    };
};

const createSprintOptions = () => {
    const sprintsLS = localStorage.getItem('sprints');
    let parsedSprintsLS = JSON.parse(sprintsLS);
    if (parsedSprintsLS === null) {
        parsedSprintsLS = [];
    }

    const sprintInput = document.getElementById

    for (let i = 0; i < parsedSprintsLS.length; i++) {
        const createSprintOption = document.createElement('option');
        createSprintOption.setAttribute('value', parsedSprintsLS[i].id);
        createSprintOption.innerHTML = parsedSprintsLS[i].name;
        issueSprint.append(createSprintOption);
    };
};

const createAssigneeOptions = () => {
    let users = localStorage.getItem('users');
    users = JSON.parse(users);
    for (let i = 0; i < users.length; i++) {
        const createAssigneeOption = document.createElement('option');
        createAssigneeOption.innerHTML = users[i].name;
        issueAssignee.append(createAssigneeOption);
    };
};

const createTypeOptions = () => {
    const issueType = document.getElementById('issueType');
    for (let i = 0; i < issueTypeArr.length; i++) {
        const createTypeOption = document.createElement('option');
        createTypeOption.setAttribute('value', issueTypeArr[i]);
        createTypeOption.innerHTML = issueTypeArr[i];
        issueType.appendChild(createTypeOption);
    };
};

const createStatusOptions = () => {
    const issueStatus = document.getElementById('issueStatus');
    for (let i = 0; i < issueStatusArr.length; i++) {
        const createStatusOption = document.createElement('option');
        createStatusOption.setAttribute('value', issueStatusArr[i].name);
        createStatusOption.innerHTML = issueStatusArr[i].name;
        issueStatus.appendChild(createStatusOption);
    };
};

const createTaskListItems = () => {
    createCheckboxList(assignedIssuesLs, true);
    createCheckboxList(unassignedIssuesLs, false);
};

const createCheckboxList = (list, isChecked) => {
    const issueTaskContainer = document.getElementById('issueTask');
    for (let i = 0; i < list.length; i++) {
        if (assignedIssuesLs === list) {
            console.log(issue.task.length);
            for (let j = 0; j < issue.task.length; j++) {
                if (list[i].id == issue.task[j]) {
                    const createCheckboxItem = document.createElement('input');
                    createCheckboxItem.setAttribute('type', 'checkbox');
                    const checkBoxName = list[i].name;
                    const checkBoxId = list[i].id;
                    createCheckboxItem.setAttribute('value', checkBoxId);
                    createCheckboxItem.setAttribute('name', 'task');
                    createCheckboxItem.setAttribute('class', 'taskCheckbox');
                    if (isChecked === true) {
                        createCheckboxItem.setAttribute('checked', true);
                    };
                    createCheckboxItem.innerHTML = checkBoxName;
                    issueTaskContainer.appendChild(createCheckboxItem);
                    const createSpan = document.createElement('span');
                    createSpan.setAttribute('class', 'taskSpan');
                    createSpan.innerHTML = checkBoxName;
                    issueTaskContainer.appendChild(createSpan);
                };
            };
        } else if (unassignedIssuesLs === list) {
            const createCheckboxItem = document.createElement('input');
            createCheckboxItem.setAttribute('type', 'checkbox');
            const checkBoxName = list[i].name;
            const checkBoxId = list[i].id;
            createCheckboxItem.setAttribute('value', checkBoxId);
            createCheckboxItem.setAttribute('name', 'task');
            createCheckboxItem.setAttribute('class', 'taskCheckbox');
            if (isChecked === true) {
                createCheckboxItem.setAttribute('checked', true);
            }
            createCheckboxItem.innerHTML = checkBoxName;

            issueTaskContainer.appendChild(createCheckboxItem);

            const createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'taskSpan');
            createSpan.innerHTML = checkBoxName;
            issueTaskContainer.appendChild(createSpan);
        };
    };

};

//======== UPDATE ITEM
const updateItem = () => {
    createUpdatedIssueObject();
};

const getIssueTaskValidation = () => {
    let newAssignedTasksArr = [];
    let newUnassignedTasksArr = [];
    const taskList = document.getElementsByClassName('taskCheckbox');
    for (let i = 0; i < taskList.length; i++) {
        let taskAttribute = taskList[i].checked === true;
        if (taskAttribute) {
            let idOfTask = taskList[i].value;
            newAssignedTasksArr.push(idOfTask);
        } else if (!taskAttribute) {
            let idOfTask = taskList[i].value;
            newUnassignedTasksArr.push(idOfTask);
        }

    };
    return [newAssignedTasksArr, newUnassignedTasksArr];
};

const createUpdatedIssueObject = () => {
    const updateIssueButton = document.getElementById('updateIssue');
    updateIssueButton.addEventListener('click', (e) => {
        e.preventDefault();

        const updatedIssueType = document.getElementById('issueType').value;
        let updatedIssueName = document.getElementById('issueName').value;
        let updatedIssueSprint = document.getElementById('issueSprint').value;
        let updatedIssueAssignee = document.getElementById('issueAssignee').value;
        const updatedIssueDescription = document.getElementById('issueDescription').value;
        let updatedIssueStatus = document.getElementById('issueStatus').value;
        const updatedIssueComments = document.getElementById('issueComments').value;
        const updatedIssueUpdatedAt = dd + "-" + mm + "-" + yyyy;
        let [checkedTasksForUpdateArr, uncheckedTasksForUpdateArr] = getIssueTaskValidation();
        // CREATE UPDATE OBJECT
        const updatedIssue = new Issue(issue.id, updatedIssueType, updatedIssueName, updatedIssueSprint, issue.createdBy, updatedIssueAssignee, updatedIssueDescription, updatedIssueStatus, checkedTasksForUpdateArr, updatedIssueComments, updatedIssueUpdatedAt, issue.createdAt);
        //====== UPDATE OBJECT IN LS
        let issuesLsArrString = localStorage.getItem('issues');
        let issuesLsArr = JSON.parse(issuesLsArrString);
        for (let i = 0; i < issuesLsArr.length; i++) {
            if (issuesLsArr[i].id === issue.id) {
                issuesLsArr.splice(i, 1);
                issuesLsArr.push(updatedIssue);
                issuesLsArr = JSON.stringify(issuesLsArr);
                localStorage.setItem('issues', issuesLsArr);
            } else {
                //                alert('ISSUE NOT FOUND AT UPDATE IN LS');
            };
        };
        //===== UPDATE TASKS IN LS
        let unassignedTasksLsArr = localStorage.getItem('unassigned_tasks');
        unassignedTasksLsArr = JSON.parse(unassignedTasksLsArr);
        let assignedTasksLsArr = localStorage.getItem('assigned_tasks');
        assignedTasksLsArr = JSON.parse(assignedTasksLsArr);
        for (let i=0; i<checkedTasksForUpdateArr.length; i++) {
            for (let j=0; j<unassignedTasksLsArr.length; j++) {
                if (checkedTasksForUpdateArr[i] == unassignedTasksLsArr[j].id) {
                    assignedTasksLsArr.push(unassignedTasksLsArr[j]);
                    unassignedTasksLsArr.splice(j, 1);
                    j--;
                }
            }
        }
        unassignedTasksLsArr = JSON.stringify(unassignedTasksLsArr);
        localStorage.setItem('unassigned_tasks', unassignedTasksLsArr);
        assignedTasksLsArr = JSON.stringify(assignedTasksLsArr);
        localStorage.setItem('assigned_tasks', assignedTasksLsArr);
        
        unassignedTasksLsArr = localStorage.getItem('unassigned_tasks');
        unassignedTasksLsArr = JSON.parse(unassignedTasksLsArr);
        assignedTasksLsArr = localStorage.getItem('assigned_tasks');
        assignedTasksLsArr = JSON.parse(assignedTasksLsArr);
        
        
        for (let i=0; i<uncheckedTasksForUpdateArr.length; i++) {
            for (let j=0; j<assignedTasksLsArr.length; j++) {
                if (uncheckedTasksForUpdateArr[i] == assignedTasksLsArr[j].id) {
                    unassignedTasksLsArr.push(assignedTasksLsArr[j]);
                    assignedTasksLsArr.splice(j, 1);
                    j--;
                }
            }
        }
        assignedTasksLsArr = JSON.stringify(assignedTasksLsArr);
        localStorage.setItem('assigned_tasks', assignedTasksLsArr);
        unassignedTasksLsArr = JSON.stringify(unassignedTasksLsArr);
        localStorage.setItem('unassigned_tasks', unassignedTasksLsArr);
        
//        window.location = "index.html";
    });
    
};
