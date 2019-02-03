window.onload = () => {

    //======= ARRAYS
    const users = [{
        id: 1,
        name: 'John'
    }, {
        id: 2,
        name: 'Michael'
    }, {
        id: 3,
        name: 'Tom'
    }, {
        id: 4,
        name: 'Julia'
    }];

    const project = {
        id: 1,
        name: 'Project X'
    };

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

    const issueType = ['feature', 'bug', 'task'];

    let issues = [];

    let issueIds = [];

    let unassignedTasks = [];

    let assignedTasks = [];

    let sprints = [];

    let comments = [];

    //=========== ADD TO LOCAL STORAGE
    const usersStr = JSON.stringify(users);
    localStorage.setItem('users', usersStr);
    
    const issueStatusArrStr = JSON.stringify(issueStatusArr);
    localStorage.setItem('issue_status', issueStatusArrStr);
    
    const projectStr = JSON.stringify(project);
    localStorage.setItem('project', projectStr); 

    const issueTypeStr = JSON.stringify(issueType);
    localStorage.setItem('issue_type', issueTypeStr);

    const issueIdsStr = JSON.stringify(issueIds);
    localStorage.setItem('issue_ids', issueIdsStr);

    //====== Project name display in DOM
    const projectName = document.getElementById('projectName').innerHTML = project.name;

    //======== ISSUE
    const typeFeature = document.getElementById('typeFeature').innerHTML = issueType[0];
    const typeBug = document.getElementById('typeBug').innerHTML = issueType[1];
    const typeTask = document.getElementById('typeTask').innerHTML = issueType[2];
    const issuesContainer = document.getElementById('issuesContainer');
    const issueAssigneeSelect = document.getElementById('issueAssignee');
    const uncheckedTasksDiv = document.getElementById('uncheckedTasks');
    //const checkedTasks = document.getElementById('checkedTasks');

    //===== STATUS
    const statusNew = document.getElementById('statusNew').innerHTML = issueStatusArr[0].name;

    //======== SPRINT
    const sprintName = document.getElementById('sprintName');
    const createSprint = document.getElementById('createSprint');
    const sprintsContainer = document.getElementById('sprintsContainer');
    const issueSprintSelect = document.getElementById('issueSprint');

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

    //========= GET LS VALUES
    const getValuesLS = () => {
        if (localStorage.getItem('sprints') != null && localStorage.getItem('sprints').length > 0) {
            sprints = JSON.parse(localStorage.getItem('sprints'));
        };
        if (localStorage.getItem('issues') != null && localStorage.getItem('issues').length > 0) {
            issues = JSON.parse(localStorage.getItem('issues'));
        };
        if (localStorage.getItem('comments') != null && localStorage.getItem('comments').length > 0) {
            comments = JSON.parse(localStorage.getItem('comments'));
        };
        if (localStorage.getItem('assigned_tasks') != null && localStorage.getItem('assigned_tasks').length > 0) {
            assignedTasks = JSON.parse(localStorage.getItem('assigned_tasks'));
        };
        if (localStorage.getItem('unassigned_tasks') != null && localStorage.getItem('unassigned_tasks').length > 0) {
            unassignedTasks = JSON.parse(localStorage.getItem('unassigned_tasks'));
        };
    };
    getValuesLS();


    //====== POPULATE DOM on load

    const populateDomOnLoad = () => {
        for (i = 0; i < sprints.length; i++) {
            let sprintLi = document.createElement('li')
            sprintLi.innerHTML = sprints[i].name;
            sprintsContainer.append(sprintLi);
        }
        for (let i = 0; i < issues.length; i++) {
            let issuesLi = document.createElement('a');
            issuesLi.setAttribute('href', 'editItem.html?id=' + issues[i].id);
            issuesLi.innerHTML = issues[i].name;
            issuesContainer.append(issuesLi);
        };
    };
    populateDomOnLoad();

    //========== CREATE SPRINT
    createSprint.addEventListener('click', () => {
        if (sprintName.value === "") {
            sprintName.value = 'undefined';
        };
        const newSprint = new Sprint(sprints.length + 1, sprintName.value);
        sprints.push(newSprint);

        //=== ADD TO LOCAL STORAGE
        const sprintsStr = JSON.stringify(sprints);
        localStorage.setItem('sprints', sprintsStr);

        const issueSprintInput = document.getElementById('issueSprint');
        const newSprintOption = document.createElement('option');
        newSprintOption.innerHTML = newSprint.name;
        newSprintOption.setAttribute('value', newSprint.id);
        issueSprintInput.appendChild(newSprintOption);

        const liText = document.createTextNode(sprintName.value);
        const sprintLi = document.createElement('li');
        sprintLi.innerHTML = sprintName.value;
        sprintsContainer.append(sprintLi);
    });

    //======= CREATE ASIGNEE OPTIONS
    const createAssigneeOptions = () => {
        for (let i = 0; i < Object.values(users).length; i++) {
            const createAssigOption = document.createElement('option');
            createAssigOption.innerHTML = users[i].name;
            issueAssigneeSelect.append(createAssigOption);
        };
    };
    createAssigneeOptions();

    //======= CREATE SPRINT OPTIONS
    const createSprintOptions = () => {
        const sprintsLS = localStorage.getItem('sprints');
        let parsedSprintsLS = JSON.parse(sprintsLS);
        if (parsedSprintsLS === null) {
            parsedSprintsLS = [];
        };

        for (let i = 0; i < parsedSprintsLS.length; i++) {
            const createSprintOption = document.createElement('option');
            createSprintOption.setAttribute('value', parsedSprintsLS[i].id);
            createSprintOption.innerHTML = parsedSprintsLS[i].name;
            issueSprintSelect.append(createSprintOption);
        };
    };
    createSprintOptions()

    //MANAGE CHECKLIST DISPLAY ACCORDING TO ISSUE.type ON CHANGE ISSUE TYPE
    const showCheckList = () => {
        const issueTypeInput = document.getElementById('issueType');
        issueTypeInput.addEventListener('change', () => {
            const checkedTasks = document.getElementById('checkedTasks');
            const uncheckedTasks = document.getElementById('uncheckedTasks');
            const taskLabel = document.getElementById('taskLabel');
            if (issueTypeInput.value === 'bug' || issueTypeInput.value === 'feature') {
                checkedTasks.style.display = 'block';
                uncheckedTasks.style.display = 'block';
                taskLabel.style.color = 'black';
            } else {
                checkedTasks.style.display = 'none';
                uncheckedTasks.style.display = 'none';
                taskLabel.style.color = 'gray';
            };
        });
    };
    showCheckList()

    //======= CREATE TASK CHECKLIST
    const createTaskChecklist = () => {
        const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
        let parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
        if (parsedUnassignedTasksLs === null) {
            parsedUnassignedTasksLs = [];
        };
        for (let i = 0; i < parsedUnassignedTasksLs.length; i++) {
            const createCheckboxItem = document.createElement('input');
            //==== CREATE CHECKBOX
            createCheckboxItem.setAttribute('type', 'checkbox');
            const checkBoxName = parsedUnassignedTasksLs[i].name;
            const checkBoxId = parsedUnassignedTasksLs[i].id;
            createCheckboxItem.setAttribute('value', checkBoxId);
            createCheckboxItem.setAttribute('name', 'task');
            createCheckboxItem.setAttribute('class', 'taskCheckbox');
            createCheckboxItem.innerHTML = checkBoxName;
            uncheckedTasksDiv.appendChild(createCheckboxItem);
            //====CREATE SPAN
            const createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'taskSpan');
            createSpan.innerHTML = checkBoxName;
            uncheckedTasksDiv.appendChild(createSpan);
        };
    }
    createTaskChecklist();

    //========== CREATE ISSUE
    const createIsuse = document.getElementById('createIssue').addEventListener('click', (e) => {
        e.preventDefault();
        const issueId = issues.length + 1;
        const issueType = document.getElementById('issueType').value;
        let issueName = document.getElementById('issueName').value;
        let issueSprint = document.getElementById('issueSprint').value;
        const issueCreatedBy = users[0].id;
        let issueAssignee = document.getElementById('issueAssignee').value;
        const issueDescription = document.getElementById('issueDescription').value;
        let issueStatus = document.getElementById('issueStatus').value;
        const issueComments = document.getElementById('issueComments').value;
        const issueUpdatedAt = document.getElementById('issueUpdatedAt').value;
        const issueCreatedAt = dd + "-" + mm + "-" + yyyy;
        
        // ====== RESET INPUT FIELDS
        const resetInputFields = ()=> {
            const issueNameReset = document.getElementById('issueName');
            issueNameReset.value = "";
            const issueDescriptionReset = document.getElementById('issueDescription');
            issueDescriptionReset.value = "";
            const issueTypeReset = document.getElementById('issueType');
            issueTypeReset.value = "";
            const issueSprintReset = document.getElementById('issueSprint');
            issueSprintReset.value = "";
            const issueAssigneeReset = document.getElementById('issueAssignee');
            issueAssigneeReset.value = "";
        }
        
        //===== GET issueStatus.id
        const issueStatusId = () => {
            for (let i = 0; i < Object.values(issueStatusArr).length; i++) {
                if (issueStatusArr[i].name === issueStatus) {
                    issueStatus = issueStatusArr[i].id;
                    return issueStatus;
                };
            };
        };
        issueStatusId();
        
        //======= GET issueAssignee.id
        const issueAssigneeId = () => {
            for (let i = 0; i < Object.values(users).length; i++) {
                if (users[i].name === issueAssignee) {
                    issueAssignee = users[i].id;
                    return issueAssignee;
                };
            };
        };
        issueAssigneeId();

        //======= GET issueSprint.id
        const issueSprintId = () => {
            for (let i = 0; i < Object.values(sprints).length; i++) {
                if (sprints[i].name === issueSprint) {
                    issueSprint = sprints[i].id;
                    issueSprint = parseInt(issueSprint);
                    return issueSprint;
                };
            };
        };
        issueSprintId();

        //============== CHECK TASK CHECKBOXES
        const taskChecker = () => {
            const checkboxList = document.getElementsByClassName('taskCheckbox');
            const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
            const parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
            for (let i = 0; i < checkboxList.length; i++) {
                if (checkboxList[i].checked === true) {
                    for (let j = 0; j < parsedUnassignedTasksLs.length; j++) {
                        if (checkboxList[i].value == parsedUnassignedTasksLs[j].id) {
                            assignedTasks.push(parsedUnassignedTasksLs[j]);
                            parsedUnassignedTasksLs.splice(j, 1);
                            //===== ADD TASKS TO LS
                            const stringParsedUnassignedTasksLS = JSON.stringify(parsedUnassignedTasksLs);
                            localStorage.setItem('unassigned_tasks', stringParsedUnassignedTasksLS);
                            const stringAssignedTasks = JSON.stringify(assignedTasks);
                            localStorage.setItem('assigned_tasks', stringAssignedTasks);
                        };
                    };
                };
            };
        };
        const taskCheckerAddTask = () => {
            if (issueName === "") {
                issueName = 'undefined';
            };
            let checkboxList = document.getElementsByClassName('taskCheckbox');
            const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
            const parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
            for (let i = 0; i < checkboxList.length; i++) {
                if (checkboxList[i].checked === true) {
                    for (let j = 0; j < parsedUnassignedTasksLs.length; j++) {
                        if (checkboxList[i].value == parsedUnassignedTasksLs[j].id) {
                            //============ GET TASKS IDs
                            let issueTask = Number(checkboxList[i].value);
                            issueIds.push(issueTask);
                            let stringIssueIds = JSON.stringify(issueIds);
                            localStorage.setItem('issue_ids', stringIssueIds);
                        };
                    };
                };
            };
        };
        taskCheckerAddTask();
        //===== DISPLAY ISSUE LIST IN DOM
        let issuesLi = document.createElement('a');
        issuesLi.setAttribute('href', 'editItem.html?id=' + issueId);
        issuesLi.innerHTML = issueName;
        issuesContainer.append(issuesLi);
        //===== GET ISSUE IDs FROM LS
        const issueIdsLs = localStorage.getItem('issue_ids');
        let parsedIssueIds;
        if (issueIdsLs !== "") {
            parsedIssueIds = JSON.parse(issueIdsLs);
        } else {
            parsedIssueIds = "";
        }
        //========= CREATE ISSUE OBJECT
        issueTask = parsedIssueIds;
        const newIssue = new Issue(issueId, issueType, issueName, issueSprint, issueCreatedBy, issueAssignee, issueDescription, issueStatus, issueTask, issueComments, issueUpdatedAt, issueCreatedAt);
        // SET ISSUE IDs ARRAY TO []
        localStorage.setItem('issue_ids', []);
        issueIds = [];

        //==== ADD ISSUE TO LOCAL STORAGE
        issues.push(newIssue);
        const issuesStr = JSON.stringify(issues);
        localStorage.setItem('issues', issuesStr);
        //==== ADD UNASSIGNED TASK TO LS
        if (newIssue.type === 'task') {
            unassignedTasks = JSON.parse(localStorage.getItem('unassigned_tasks'));
            if (unassignedTasks === null) {
                unassignedTasks = [];
            };
            unassignedTasks.push(newIssue);
            const unassignedTasksStr = JSON.stringify(unassignedTasks);
            localStorage.setItem('unassigned_tasks', unassignedTasksStr);
        };
        taskChecker();

        //======= REPOPULATE TASK CONTAINER ON EVERY CREATED ISSUE FROM LS
        const repopTaskContainer = () => {
            const issueTask = document.getElementById('issueTask');
            const checkedTasks = document.getElementById('checkedTasks');
            const uncheckedTasks = document.getElementById('uncheckedTasks');
            //===== DELET CHECKLIST CONTAINER
            issueTask.removeChild(uncheckedTasks);
            //===== CREATE CHECKLIST CONTAINER
            const createUncheckedTasks = document.createElement('div');
            createUncheckedTasks.setAttribute('id', 'uncheckedTasks');
            issueTask.appendChild(createUncheckedTasks);
            //===== MAKE TASKLIST INACTIV IF ISSUE.type.value = task
            const newUncheckedTasksDiv = document.getElementById('uncheckedTasks');
            const taskLabel = document.getElementById('taskLabel');
            const issueTypeInput = document.getElementById('issueType');
            if (issueTypeInput.value === 'bug' || issueTypeInput.value === 'feature') {
                checkedTasks.style.display = 'block';
                newUncheckedTasksDiv.style.display = 'block';
                taskLabel.style.color = 'black';
            } else {
                checkedTasks.style.display = 'none';
                newUncheckedTasksDiv.style.display = 'none';
                taskLabel.style.color = 'gray';
            };
            //===== ADD UNASSIGNED TASKS TO LS
            const unassignedTasksLs = localStorage.getItem('unassigned_tasks');
            let parsedUnassignedTasksLs = JSON.parse(unassignedTasksLs);
            //====== REPOPULATE LIST WITH UNASSIGNED TASKS
            if (parsedUnassignedTasksLs === null) {
                parsedUnassignedTasksLs = [];
            }
            for (let i = 0; i < parsedUnassignedTasksLs.length; i++) {
                //===== CREATE CHECKBOX
                const createCheckboxItem = document.createElement('input');
                createCheckboxItem.setAttribute('type', 'checkbox');
                const checkBoxName = parsedUnassignedTasksLs[i].name;
                const checkBoxId = parsedUnassignedTasksLs[i].id;
                createCheckboxItem.setAttribute('value', checkBoxId);
                createCheckboxItem.setAttribute('name', 'task');
                createCheckboxItem.setAttribute('class', 'taskCheckbox');
                createCheckboxItem.innerHTML = checkBoxName;
                newUncheckedTasksDiv.appendChild(createCheckboxItem);
                //===== CREATE SPAN
                const createSpan = document.createElement('span');
                createSpan.setAttribute('class', 'taskSpan');
                createSpan.innerHTML = checkBoxName;
                newUncheckedTasksDiv.appendChild(createSpan);
            };
        };
        repopTaskContainer();
        resetInputFields();
    });
    const overviewButton = document.getElementById('overviewBtn');
    overviewButton.addEventListener('click', () => {
        window.location = "overview.html";
    })
};