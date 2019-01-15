window.onload = ()=> {
    //======= ARRAYS
const users = [{id:1, name:'John'}, {id:2, name:'Michael'}, {id:3, name:'Tom'}, {id:4, name:'Julia'}];
    
const project = {id:1, name:'Project X'};
    
const issueStatusArr = [{id:1, name:'New'}, {id:2, name:'In progress'}, {id:3, name:'Feedback'}, {id:4, name:'Rework'}, {id:5, name:'Resolved'}, {id:6, name:'Ready for Testing'}];
    
const issueType = ['feature', 'bug', 'task'];
    
const issues = [];
    
const unasignedTasks = [];
    
const assignedTasks = [];
    
const sprints = [{id:1, name:'Abracadabra'}, {id:2, name:'Bulangiu'}, {id:3, name:'Cernobal'}];
    
const comments = [];


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
    const liText = document.createTextNode(sprintName.value);
    console.log(liText);
    const sprintLi = document.createElement('li');
    sprintLi.innerHTML = sprintName.value;
//    sprintLi.appendTe(liText);
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
    for(let i=0; i<Object.values(sprints).length; i++) {
        console.log(sprints[i]);
        const createSprintOption = document.createElement('option');
        createSprintOption.innerHTML = sprints[i].name;
        console.log(createSprintOption);
        console.log(issueSprintSelect);
        issueSprintSelect.append(createSprintOption);
    };
};
createSprintOptions()
    

    //========== CREATE ISSUE
const createIsuse = document.getElementById('createIssue').addEventListener('click', ()=>{
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






    //====== ISSUE ASIGNEE CREAT OPTIONS



//        const issueAsigneeID = 

    const newIssue = new Issue(issueId, issueType, issueName, issueSprint, issueCreatedBy, issueAsignee, issueDescription, issueStatus, issueTask, issueComments, issueUpdatedAt, issueCreatedAt);
    console.log(newIssue);

})
    
    

//const newSprint = new Sprint(1, "M");
//    console.log(newSprint);
    
    
    
    
};