window.onload = ()=> {

    //======= ARRAYS
const users = [{id:1, name:'John'}, {id:2, name:'Michael'}, {id:3, name:'Tom'}, {id:4, name:'Julia'}];
    
const project = {id:1, name:'Project X'};
    
const issueStatusArr = [{id:1, name:'New'}, {id:2, name:'In progress'}, {id:3, name:'Feedback'}, {id:4, name:'Rework'}, {id:5, name:'Resolved'}, {id:6, name:'Ready for Testing'}];
    
const issueType = ['feature', 'bug', 'task'];
    
const issues = [];
    
const unasignedTasks = [];
    
const assignedTasks = [];
    
const sprints = [];
    
const comments = [];
    
    //=========== ADD TO LOCAL STORAGE
const usersStr = JSON.stringify(users);
localStorage.setItem('users', usersStr);
    
const projectStr = JSON.stringify(project);
localStorage.setItem('project', projectStr);
    
const issueStatusArrStr = JSON.stringify(issueStatusArr);
localStorage.setItem('issue_status', issueStatusArrStr);
    
const issueTypeStr = JSON.stringify(issueType);
localStorage.setItem('issue_type', issueTypeStr);

    //====== Project name display in DOM
const projectName = document.getElementById('projectName').innerHTML = project.name;

    //======== ISSUE
const typeFeature = document.getElementById('typeFeature').innerHTML = issueType[0];
const typeBug = document.getElementById('typeBug').innerHTML = issueType[1];
const typeTask = document.getElementById('typeTask').innerHTML = issueType[2];
    
const issueAsigneeSelect = document.getElementById('issueAsignee');
    console.log(issueAsigneeSelect);
 

    //===== STATUS
const statusNew = document.getElementById('statusNew').innerHTML = issueStatusArr[0].name;
const statusInProgress = document.getElementById('statusInProgress').innerHTML = issueStatusArr[1].name;
const statusFeedback = document.getElementById('statusFeedback').innerHTML = issueStatusArr[2].name;
const statusRework = document.getElementById('statusRework').innerHTML = issueStatusArr[3].name;
const statusResolved = document.getElementById('statusResolved').innerHTML = issueStatusArr[4].name;
const statusReadyForTesting = document.getElementById('statusReadyForTesting').innerHTML = issueStatusArr[5].name;
    
    //======== SPRINT
const sprintName = document.getElementById('sprintName');
const createSprit = document.getElementById('createSprit');
const olSprints = document.getElementById('olSprints');
    
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
    
    
    //========== CREATE SPRINT
createSprit.addEventListener('click', ()=> {
    // first create class Sprit in Model foler.file then create object sprit and populate sprits[] and DOM
    const olSprints = document.getElementById('olSprints');
    const newSprint = new Sprint(sprints.length+1, sprintName.value);
    console.log(newSprint);
    sprints.push(newSprint);
    
                //=== ADD TO LOCAL STORAGE
    const sprintsStr = JSON.stringify(sprints);
    localStorage.setItem('sprints', sprintsStr);
    
    
    const liText = document.createTextNode(sprintName.value);
    console.log(liText);
    const sprintLi = document.createElement('li');
    sprintLi.innerHTML = sprintName.value;
    console.log(olSprints, sprintLi);
    olSprints.append(sprintLi);
});

    //======= CREATE ASIGNEE OPTIONS
const createAsigneeOptions = ()=> {
    for(let i=0; i<Object.values(users).length; i++) {
        console.log(users[i]);
        const createAssigOption = document.createElement('option');
        createAssigOption.innerHTML = users[i].name;
        console.log(createAssigOption);
        console.log(issueAsigneeSelect);
        issueAsigneeSelect.append(createAssigOption);
    };
};
createAsigneeOptions();
    
    
    //======= CREATE SPRINT OPTIONS
const createSprintOptions = ()=> {
    const sprintsLS = localStorage.getItem('sprints');
    const parsedSprintsLS = JSON.parse(sprintsLS);
    for(let i=0; i<Object.values(parsedSprintsLS).length; i++) {
        console.log(parsedSprintsLS[i]);
        const createSprintOption = document.createElement('option');
        createSprintOption.innerHTML = parsedSprintsLS[i].name;
        console.log(createSprintOption);
        console.log(issueSprintSelect);
        issueSprintSelect.append(createSprintOption);
    };
};
createSprintOptions()
    


    //MANAGE CHECKLIST DISPLAY ACCORDING TO ISSUE.type
const showCheclList = ()=> {
    const issueTypeInput = document.getElementById('issueType');
    console.log('ISSUETYPELIST', issueTypeInput)
    issueTypeInput.addEventListener('change', ()=> {
        const checkedTasks = document.getElementById('checkedTasks');
        const uncheckedTasks = document.getElementById('uncheckedTasks');
        const taskLabel = document.getElementById('taskLabel');
        if(issueTypeInput.value === 'bug' || issueTypeInput.value === 'feature') {
            alert(issueTypeInput.value);
            
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
showCheclList()

    //======= CREATE TASK CHECKBOX
const createTaskChecklist = ()=> {
    const unasignedTasksLS = localStorage.getItem('unasigned_tasks');
    console.log("TASKS LSSSSSS", unasignedTasksLS);
    let parsedUnasignedTasksLS = JSON.parse(unasignedTasksLS);
    console.log("PATSED TASKS LS:", parsedUnasignedTasksLS);
    if(parsedUnasignedTasksLS === null) {
        parsedTasksLS = [];
    }
    for(let i=0; i<parsedUnasignedTasksLS.length; i++) {
        const uncheckedTasksDiv = document.getElementById('uncheckedTasks');
        console.log(parsedUnasignedTasksLS[i]);
        const createCheckboxItem = document.createElement('input');
        createCheckboxItem.setAttribute('type', 'checkbox');
        const checkBoxName = parsedUnasignedTasksLS[i].name;
        createCheckboxItem.setAttribute('value', checkBoxName);
        createCheckboxItem.setAttribute('name', 'task');
        createCheckboxItem.setAttribute('class', 'task');
        createCheckboxItem.innerHTML = checkBoxName;
        console.log(createCheckboxItem);
        
        uncheckedTasksDiv.appendChild(createCheckboxItem);
        
        const createSpan = document.createElement('span');
        createSpan.innerHTML = checkBoxName;
        uncheckedTasksDiv.appendChild(createSpan);
//        const createCleclistItem = document
        
    };
    const assignedTasksLS = localStorage.getItem('assigned_tasks');
    
    const parsedAssignedTasksLS = JSON.parse(assignedTasksLS);
    console.log(parsedAssignedTasksLS);
    
    for(let i=0; i<parsedAssignedTasksLS.length; i++) {
        const issueTypeForm = document.getElementById('uncheckedTasks');
        console.log(parsedTasksLS[i]);
        const createCheckboxItem = document.createElement('input');
        createCheckboxItem.setAttribute('type', 'checkbox');
        const checkBoxName = parsedTasksLS[i].name;
        createCheckboxItem.setAttribute('value', checkBoxName);
        createCheckboxItem.setAttribute('name', 'task');
        createCheckboxItem.setAttribute('class', 'task');
        createCheckboxItem.innerHTML = checkBoxName;
        console.log(createCheckboxItem);
        
        issueTypeForm.appendChild(createCheckboxItem);
        
        const createSpan = document.createElement('span');
        createSpan.innerHTML = checkBoxName;
        issueTypeForm.appendChild(createSpan);
//        const createCleclistItem = document
        
    };
}
createTaskChecklist();


    //========== CREATE ISSUE
const createIsuse = document.getElementById('createIssue').addEventListener('click', (e)=>{
    e.preventDefault();
    const issueId = issues.length+1;
    const issueType = document.getElementById('issueType').value;
    const issueName = document.getElementById('issueName').value;
    let issueSprint = document.getElementById('issueSprint').value;
    const issueCreatedBy = users[0].id;
    let issueAsignee = document.getElementById('issueAsignee').value;
    const issueDescription = document.getElementById('issueDescription').value;
    let issueStatus = document.getElementById('issueStatus').value;
    const issueTask = document.getElementById('issueTask').value;
    const issueComments = document.getElementById('issueComments').value;
    const issueUpdatedAt = document.getElementById('issueUpdatedAt').value;
    const issueCreatedAt = dd + "-" + mm + "-" +yyyy;

    //===== GET issueStatus.id

    const issueStatusId = ()=> {
        for(let i=0; i<Object.values(issueStatusArr).length; i++) {
            console.log()
            console.log(issueStatusArr[i]);
            if(issueStatusArr[i].name === issueStatus) {
                console.log("YES");
                issueStatus = issueStatusArr[i].id;
                console.log("ISSUE STATUS:", issueStatus);
                return issueStatus;
            };
        };
    };
    issueStatusId();


    //======= GET issueAsignee.id
    const issueAsigneeId = ()=> {
        for(let i=0; i<Object.values(users).length; i++) {
//                console.log()
            console.log(users[i]);
            if(users[i].name === issueAsignee) {
                console.log("YES");
                issueAsignee = users[i].id;
                console.log("ISSUE ASIGNEE:", issueAsignee);
                return issueAsignee;
            };
        };
    };
    issueAsigneeId();


    //======= GET issueSprint.id
    const issueSprintId = ()=> {
        for(let i=0; i<Object.values(sprints).length; i++) {
//                console.log()
            console.log(sprints[i]);
            if(sprints[i].name === issueSprint) {
                console.log("YES");
                issueSprint = sprints[i].id;
                console.log("ISSUE SPRINT:", issueSprint);
                return issueSprint;
            };
        };
    };
    issueSprintId();
 
    
    const newIssue = new Issue(issueId, issueType, issueName, issueSprint, issueCreatedBy, issueAsignee, issueDescription, issueStatus, issueTask, issueComments, issueUpdatedAt, issueCreatedAt);
    console.log(newIssue);
    
    issues.push(newIssue);
    
    console.log("ISSUES", issues);
    console.log("Issue NAME", issues[0].name);
    
                    //==== ADD TO LOCAL STORAGE
    const issuesStr = JSON.stringify(issues);
    console.log(issues);
    localStorage.setItem('issues', issuesStr);
    
    
    if(newIssue.type === 'task') {
        console.log("TASKKKK");
        unasignedTasks.push(newIssue);
        
                    //===== ADD TO LOCAL STORAGE
        const unasignedTasksStr = JSON.stringify(issues);
        localStorage.setItem('unasigned_tasks', unasignedTasksStr);
        
        console.log('Unasigned TASKSS', unasignedTasks);
    }
    console.log("ISSUES", issues);
    
    
    //========= MANAGE TASK CHECKLIST
    
//    ppush();
    const taskChecker = ()=> {
        const checkboxList = document.getElementsByClassName('task');
        console.log('CHECKBOX LIST', checkboxList);
        const unasignedTasksLS = localStorage.getItem('unasigned_tasks');
        const parsedUnasignedTasksLS = JSON.parse(unasignedTasksLS);
        for (let i=0; i<checkboxList.length; i++) {
            if(checkboxList[i].checked === true) {
                console.log("CHECK IS TRUE", checkboxList[i]);
                for (let j=0; j<parsedUnasignedTasksLS.length; j++) {
                    if(checkboxList[i].value === parsedUnasignedTasksLS[j].name) {
                        console.log('POPOPOPOPOPOPOOPOPOPOP', j, parsedUnasignedTasksLS[j]);
                        assignedTasks.push(parsedUnasignedTasksLS[j]);
                        parsedUnasignedTasksLS.splice(j, 1);
                        const stringParsedUnasignedTasksLS = JSON.stringify(parsedUnasignedTasksLS);
                        localStorage.setItem('unasigned_tasks', stringParsedUnasignedTasksLS);
                        const stringAssignedTasks = JSON.stringify(assignedTasks);
                        localStorage.setItem('asigned_tasks', stringAssignedTasks);
                    };
                    console.log(parsedUnasignedTasksLS);
                };
   
            };
        };
        console.log(assignedTasks);
        console.log(parsedUnasignedTasksLS);
    };
    taskChecker();
    

});
    
    

//const newSprint = new Sprint(1, "M");
//    console.log(newSprint);
    
    
    
    
};