window.onload = ()=> {

    //======= ARRAYS
const users = [{id:1, name:'John'}, {id:2, name:'Michael'}, {id:3, name:'Tom'}, {id:4, name:'Julia'}];
    
const project = {id:1, name:'Project X'};
    
const issueStatusArr = [{id:1, name:'New'}, {id:2, name:'In progress'}, {id:3, name:'Feedback'}, {id:4, name:'Rework'}, {id:5, name:'Resolved'}, {id:6, name:'Ready for Testing'}];
    
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
    
const projectStr = JSON.stringify(project);
localStorage.setItem('project', projectStr);
    
const issueStatusArrStr = JSON.stringify(issueStatusArr);
localStorage.setItem('issue_status', issueStatusArrStr);
    
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
const statusInProgress = document.getElementById('statusInProgress').innerHTML = issueStatusArr[1].name;
const statusFeedback = document.getElementById('statusFeedback').innerHTML = issueStatusArr[2].name;
const statusRework = document.getElementById('statusRework').innerHTML = issueStatusArr[3].name;
const statusResolved = document.getElementById('statusResolved').innerHTML = issueStatusArr[4].name;
const statusReadyForTesting = document.getElementById('statusReadyForTesting').innerHTML = issueStatusArr[5].name;
    
    //======== SPRINT
const sprintName = document.getElementById('sprintName');
const createSprint = document.getElementById('createSprint');
const sprintsContainer = document.getElementById('sprintsContainer');
const issueSprintSelect = document.getElementById('issueSprint');
    

//====== BUILD DATE
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear(); 
if(dd<10) {
    dd='0'+dd;
} ;

if(mm<10) {
    mm='0'+mm;
};
    
    
    //========= GET LS VALUES
const getValuesLS = ()=> {
    if(localStorage.getItem('sprints')!= null && localStorage.getItem('sprints').length>0) {
        sprints = JSON.parse(localStorage.getItem('sprints'));
    };
    if(localStorage.getItem('issues')!= null && localStorage.getItem('issues').length>0) {
        issues = JSON.parse(localStorage.getItem('issues'));
    };
    if(localStorage.getItem('comments')!= null && localStorage.getItem('comments').length>0) {
        comments = JSON.parse(localStorage.getItem('comments'));
    };
    if(localStorage.getItem('assigned_tasks')!= null && localStorage.getItem('assigned_tasks').length>0) {
        assignedTasks = JSON.parse(localStorage.getItem('assigned_tasks'));
    };
    if(localStorage.getItem('unassigned_tasks')!= null && localStorage.getItem('unassigned_tasks').length>0) {
        unassignedTasks = JSON.parse(localStorage.getItem('unassigned_tasks'));
    };
}
getValuesLS();
    
    
    //====== POPULATE DOM on load

const populateDomOnLoad = ()=> {
    for (i=0; i<sprints.length; i++) {
        let sprintLi = document.createElement('li')
        sprintLi.innerHTML = sprints[i].name;
        sprintsContainer.append(sprintLi);
    }
    for (let i=0; i<issues.length; i++) {
        let issuesLi = document.createElement('a');
        issuesLi.setAttribute('href', '/editItem.html?id=' + issues[i].id);
        issuesLi.innerHTML = issues[i].name;
        issuesContainer.append(issuesLi);
    }

}
populateDomOnLoad();
    
    //========== CREATE SPRINT
createSprint.addEventListener('click', ()=> {
    
    const newSprint = new Sprint(sprints.length+1, sprintName.value);
    console.log(newSprint);
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
//    console.log(liText);
    const sprintLi = document.createElement('li');
    sprintLi.innerHTML = sprintName.value;
//    console.log(sprintsContainer, sprintLi);
    sprintsContainer.append(sprintLi);
});

    //======= CREATE ASIGNEE OPTIONS
const createAssigneeOptions = ()=> {
    for(let i=0; i<Object.values(users).length; i++) {
        console.log(users[i]);
        const createAssigOption = document.createElement('option');
        createAssigOption.innerHTML = users[i].name;
        console.log(createAssigOption);
        console.log(issueAssigneeSelect);
        issueAssigneeSelect.append(createAssigOption);
    };
};
createAssigneeOptions();
    
    
    //======= CREATE SPRINT OPTIONS
const createSprintOptions = ()=> {
    const sprintsLS = localStorage.getItem('sprints');
    let parsedSprintsLS = JSON.parse(sprintsLS);
    if(parsedSprintsLS === null) {
        parsedSprintsLS = [];
    }
    
    const sprintInput = document.getElementById
    
    for(let i=0; i<parsedSprintsLS.length; i++) {
        console.log(parsedSprintsLS[i]);
        const createSprintOption = document.createElement('option');
        createSprintOption.setAttribute('value', parsedSprintsLS[i].id);
        createSprintOption.innerHTML = parsedSprintsLS[i].name;
        console.log(createSprintOption);
        console.log(issueSprintSelect);
        issueSprintSelect.append(createSprintOption);
    };
};
createSprintOptions()
    


    //MANAGE CHECKLIST DISPLAY ACCORDING TO ISSUE.type
const showCheckList = ()=> {
    const issueTypeInput = document.getElementById('issueType');
//    console.log('ISSUETYPELIST', issueTypeInput)
    issueTypeInput.addEventListener('change', ()=> {
        const checkedTasks = document.getElementById('checkedTasks');
        const uncheckedTasks = document.getElementById('uncheckedTasks');
        const taskLabel = document.getElementById('taskLabel');
        if(issueTypeInput.value === 'bug' || issueTypeInput.value === 'feature') {
            
            checkedTasks.style.display = 'block';
            uncheckedTasks.style.display = 'block';
            taskLabel.style.color = 'black';
        } else {
            checkedTasks.style.display = 'none';
            uncheckedTasks.style.display = 'none';
            taskLabel.style.color = 'gray';
        }
    })
}
showCheckList()

    //======= CREATE TASK CHECKBOX
const createTaskChecklist = ()=> {
    const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
//    console.log("TASKS LSSSSSS", unassignedTasksLS);
    let parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
//    console.log("PATSED TASKS LS:", parsedUnassignedTasksLs);
    if(parsedUnassignedTasksLs === null) {
        parsedUnassignedTasksLs = [];
    }
    for(let i=0; i<parsedUnassignedTasksLs.length; i++) {
//        console.log(parsedUnassignedTasksLs[i]);
        const createCheckboxItem = document.createElement('input');
        createCheckboxItem.setAttribute('type', 'checkbox');
        const checkBoxName = parsedUnassignedTasksLs[i].name;
        const checkBoxId = parsedUnassignedTasksLs[i].id;
        createCheckboxItem.setAttribute('value', checkBoxId);
        createCheckboxItem.setAttribute('name', 'task');
        createCheckboxItem.setAttribute('class', 'taskCheckbox');
        createCheckboxItem.innerHTML = checkBoxName;
//        console.log(createCheckboxItem);
        
        uncheckedTasksDiv.appendChild(createCheckboxItem);
        
        const createSpan = document.createElement('span');
        createSpan.setAttribute('class', 'taskSpan');
        createSpan.innerHTML = checkBoxName;
        uncheckedTasksDiv.appendChild(createSpan);
    };
//    const assignedTasksLS = localStorage.getItem('assigned_tasks');
//    
//    let parsedAssignedTasksLS = JSON.parse(assignedTasksLS);
//    console.log(parsedAssignedTasksLS);
//    if(parsedAssignedTasksLS === null) {
//        parsedAssignedTasksLS = [];
//    }
//    for(let i=0; i<parsedAssignedTasksLS.length; i++) {
//        const issueTypeForm = document.getElementById('uncheckedTasks');
////        console.log(parsedTasksLS[i]);
//        const createCheckboxItem = document.createElement('input');
//        createCheckboxItem.setAttribute('type', 'checkbox');
//        const checkBoxName = parsedAssignedTasksLS[i].name;
//        createCheckboxItem.setAttribute('value', checkBoxName);
//        createCheckboxItem.setAttribute('name', 'task');
//        createCheckboxItem.setAttribute('class', 'task');
//        createCheckboxItem.innerHTML = checkBoxName;
//        console.log(createCheckboxItem);
//        
//        issueTypeForm.appendChild(createCheckboxItem);
//        
//        const createSpan = document.createElement('span');
//        createSpan.innerHTML = checkBoxName;
//        issueTypeForm.appendChild(createSpan);
////        const createCleclistItem = document
//        
//    };
}
createTaskChecklist();


    //========== CREATE ISSUE
const createIsuse = document.getElementById('createIssue').addEventListener('click', (e)=>{
    e.preventDefault();
    const issueId = issues.length+1;
    const issueType = document.getElementById('issueType').value;
    let issueName = document.getElementById('issueName').value;
    let issueSprint = document.getElementById('issueSprint').value;
    const issueCreatedBy = users[0].id;
    let issueAssignee = document.getElementById('issueAssignee').value;
    const issueDescription = document.getElementById('issueDescription').value;
    let issueStatus = document.getElementById('issueStatus').value;
//    const isssueTask = document.getElementById('isssueTask').value;
    const issueComments = document.getElementById('issueComments').value;
    const issueUpdatedAt = document.getElementById('issueUpdatedAt').value;
    const issueCreatedAt = dd + "-" + mm + "-" +yyyy;

    //===== GET issueStatus.id

    const issueStatusId = ()=> {
        for(let i=0; i<Object.values(issueStatusArr).length; i++) {
//            console.log()
//            console.log(issueStatusArr[i]);
            if(issueStatusArr[i].name === issueStatus) {
//                console.log("YES");
                issueStatus = issueStatusArr[i].id;
//                console.log("ISSUE STATUS:", issueStatus);
                return issueStatus;
            };
        };
    };
    issueStatusId();


    //======= GET issueAssignee.id
    const issueAssigneeId = ()=> {
        for(let i=0; i<Object.values(users).length; i++) {
//                console.log()
            console.log(users[i]);
            if(users[i].name === issueAssignee) {
                console.log("YES");
                issueAssignee = users[i].id;
                console.log("ISSUE ASIGNEE:", issueAssignee);
                return issueAssignee;
            };
        };
    };
    issueAssigneeId();


    //======= GET issueSprint.id
    const issueSprintId = ()=> {
        for(let i=0; i<Object.values(sprints).length; i++) {
//                console.log()
//            console.log(sprints[i]);
            if(sprints[i].name === issueSprint) {
//                console.log("YES");
                issueSprint = sprints[i].id;
//                console.log("ISSUE SPRINT:", issueSprint);
                return issueSprint;
            };
        };
    };
    issueSprintId();
 
    
//    ====================
//        const newIssue = new Issue(issueId, issueType, issueName, issueSprint, issueCreatedBy, issueAssignee, issueDescription, issueStatus, isssueTask, issueComments, issueUpdatedAt, issueCreatedAt);
//        =======================================
//    console.log(newIssue);
    
    
        
//        console.log('Unasigned TASKSS', unassignedTasks);
  
//    console.log("ISSUES", issues);
    
    
    //========= MANAGE TASK CHECKLIST
    
//    ppush();
    const taskChecker = ()=> {
        const checkboxList = document.getElementsByClassName('taskCheckbox');
//        console.log('CHECKBOX LIST', checkboxList);
        const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
        const parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
        for (let i=0; i<checkboxList.length; i++) {
            if(checkboxList[i].checked === true) {
                console.log("CHECK IS TRUE", checkboxList[i]);
                for (let j=0; j<parsedUnassignedTasksLs.length; j++) {
                    console.log('VEZI DE CE NU MERGE:', checkboxList[i].value, parsedUnassignedTasksLs[j].id);
                    if(checkboxList[i].value == parsedUnassignedTasksLs[j].id) {
                        console.log('POPOPOPOPOPOPOOPOPOPOP', j, parsedUnassignedTasksLs[j]);
                        //============ GET TASKS IDs
//                        issueTask = Number(checkboxList[i].value);
//                        console.log('issueTASK:::::::', issueTask, '::::::::', checkboxList[i].value, '::::::::::::');
//                        console.log('ISSUE TASK 1:::::::', issueTask);
                        
                        //==========================
                        assignedTasks.push(parsedUnassignedTasksLs[j]);
                        parsedUnassignedTasksLs.splice(j, 1);
                        const stringParsedUnassignedTasksLS = JSON.stringify(parsedUnassignedTasksLs);
                        localStorage.setItem('unassigned_tasks', stringParsedUnassignedTasksLS);
                        const stringAssignedTasks = JSON.stringify(assignedTasks);
                        localStorage.setItem('assigned_tasks', stringAssignedTasks);
                    };
//                    console.log(parsedUnassignedTasksLs);
                };
            };
        };
        console.log(assignedTasks);
        console.log(parsedUnassignedTasksLs);
    };
    const taskCheckerAddTask = ()=> {
        if(issueName === "") {
            issueName = 'undefined';
        }
        const checkboxList = document.getElementsByClassName('taskCheckbox');
//        console.log('CHECKBOX LIST', checkboxList);
        const unassignedTasksLS = localStorage.getItem('unassigned_tasks');
        const parsedUnassignedTasksLs = JSON.parse(unassignedTasksLS);
        for (let i=0; i<checkboxList.length; i++) {
            if(checkboxList[i].checked === true) {
                console.log("CHECK IS TRUE", checkboxList[i]);
                for (let j=0; j<parsedUnassignedTasksLs.length; j++) {
                    console.log('VEZI DE CE NU MERGE:', checkboxList[i].value, parsedUnassignedTasksLs[j].id);
                    if(checkboxList[i].value == parsedUnassignedTasksLs[j].id) {
                        console.log('POPOPOPOPOPOPOOPOPOPOP', j, parsedUnassignedTasksLs[j]);
                        //============ GET TASKS IDs
                      let issueTask = Number(checkboxList[i].value);
                        console.log('issueTASK:::::::', issueTask, '::::::::', checkboxList[i].value, '::::::::::::');
                        console.log('ISSUE TASK 1:::::::', issueTask);
                        issueIds.push(issueTask);
                        console.log('ISSUE IDS::::::::', issueIds);
                        const stringIssueIds = JSON.stringify(issueIds);
                        localStorage.setItem('issue_ids', stringIssueIds);
                        
                        //==========================
//                        assignedTasks.push(parsedUnassignedTasksLs[j]);
//                        parsedUnassignedTasksLs.splice(j, 1);
//                        const stringParsedUnassignedTasksLS = JSON.stringify(parsedUnassignedTasksLs);
//                        localStorage.setItem('unassigned_tasks', stringParsedUnassignedTasksLS);
//                        const stringAssignedTasks = JSON.stringify(assignedTasks);
//                        localStorage.setItem('assigned_tasks', stringAssignedTasks);
                        
//                        return issueTask;
                    };
                    console.log('ISSUE TASK 2:::::::', issueTask);
//                    console.log(parsedUnassignedTasksLs);
//                    return issueTask;
                };
//                return issueTask;
            };
//            return issueTask;
        };
        console.log(assignedTasks);
        console.log(parsedUnassignedTasksLs);
//        return issueTask;
    };
    taskCheckerAddTask();
    
    let issuesLi = document.createElement('a');
    issuesLi.setAttribute('href', '/editItem.html?id=' + issueId);
    console.log(issueName);
    issuesLi.innerHTML = issueName;
    issuesContainer.append(issuesLi);

    const issueIdsLs = localStorage.getItem('issue_ids');
    const parsedIssueIds = JSON.parse(issueIdsLs);
    console.log('PIIIIIIIIIII', parsedIssueIds);
    
    issueTask = parsedIssueIds;
    const newIssue = new Issue(issueId, issueType, issueName, issueSprint, issueCreatedBy, issueAssignee, issueDescription, issueStatus, issueTask, issueComments, issueUpdatedAt, issueCreatedAt);
    
//    localStorage.setItem('issue_ids', []);
    
    console.log('NEW ISSUE::::', newIssue);
    
    issues.push(newIssue);
    
    console.log("ISSUES", issues);
    console.log("Issue NAME", issues[0].name);
    
                    //==== ADD TO LOCAL STORAGE
    const issuesStr = JSON.stringify(issues);
    console.log(issues);
    localStorage.setItem('issues', issuesStr);
    
    
    if(newIssue.type === 'task') {
        unassignedTasks = JSON.parse(localStorage.getItem('unassigned_tasks'));
        if (unassignedTasks === null) {
            unassignedTasks = [];
        }
        unassignedTasks.push(newIssue);
                    //===== ADD TO LOCAL STORAGE
        const unassignedTasksStr = JSON.stringify(unassignedTasks);
        localStorage.setItem('unassigned_tasks', unassignedTasksStr);
    };
    taskChecker();
    
    //======= REPOPULATE TASK COTAINER ON EVERY CREATED ISSUE FROM LS
    const repopTaskContainer = ()=> {
//        const checkedTasks = document.getElementById('uncheckedTasks');
//        const getCheckoxList = document.getElementsByClassName('taskCheckbox');
//        const getSpanList = document.getElementsByClassName('taskSpan');
//        const getCheckboxLength = getCheckoxList.length;
//        const getSpanLength = getSpanList.length;
//        
//        for (let i=0; i<getSpanLength; i++) {
//            checkedTasks.removeChild(getCheckoxList[getCheckoxList.length - i]);
//        }
//        for (let i=0; i<getCheckboxLength; i++) {
//            checkedTasks.removeChild(getSpanList[i]);
//        }
        
        
        const issueTask = document.getElementById('issueTask');
        const checkedTasks = document.getElementById('checkedTasks');
        const uncheckedTasks = document.getElementById('uncheckedTasks');
        issueTask.removeChild(uncheckedTasks);
        
        const createUncheckedTasks = document.createElement('div');
        createUncheckedTasks.setAttribute('id', 'uncheckedTasks');
        issueTask.appendChild(createUncheckedTasks);
        
        const newUncheckedTasksDiv = document.getElementById('uncheckedTasks');
//        const uncheckedTasks = document.getElementById('uncheckedTasks');
        const taskLabel = document.getElementById('taskLabel');
        const issueTypeInput = document.getElementById('issueType');
        if(issueTypeInput.value === 'bug' || issueTypeInput.value === 'feature') {
            
            checkedTasks.style.display = 'block';
            newUncheckedTasksDiv.style.display = 'block';
            taskLabel.style.color = 'black';
        } else {
            checkedTasks.style.display = 'none';
            newUncheckedTasksDiv.style.display = 'none';
            taskLabel.style.color = 'gray';
        }
        
        const unassignedTasksLs = localStorage.getItem('unassigned_tasks');
        const parsedUnassignedTasksLs = JSON.parse(unassignedTasksLs);
        
        for (let i=0; i<parsedUnassignedTasksLs.length; i++) {
            const createCheckboxItem = document.createElement('input');
            createCheckboxItem.setAttribute('type', 'checkbox');
            const checkBoxName = parsedUnassignedTasksLs[i].name;
            const checkBoxId = parsedUnassignedTasksLs[i].id;
            createCheckboxItem.setAttribute('value', checkBoxId);
            createCheckboxItem.setAttribute('name', 'task');
            createCheckboxItem.setAttribute('class', 'taskCheckbox');
            createCheckboxItem.innerHTML = checkBoxName;

            newUncheckedTasksDiv.appendChild(createCheckboxItem);

            const createSpan = document.createElement('span');
            createSpan.setAttribute('class', 'taskSpan');
            createSpan.innerHTML = checkBoxName;
            
            newUncheckedTasksDiv.appendChild(createSpan); 
        }
        
    }
    repopTaskContainer();
});
    
    

//const newSprint = new Sprint(1, "M");
//    console.log(newSprint);
    
    
    
    
};