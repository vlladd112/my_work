function Sprint(id, name){
    this.id = id;
    this.name = name;
}

function Issue(id, type, name, sprint, createdBy, asignee, description, status, task, comments, updatedAt, createdAt){
    this.id = id;
    this.type = type;
    this.name = name;
    this.sprint = sprint;
    this.createdBy = createdBy;
    this.asignee = asignee;
    this.description = description;
    this.status = status;
    this.task = task;
    this.comments = comments;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
}

function updateIssue(type, name, sprint, asignee, description, status, task, comments, updatedAt){
    this.type = type;
    this.name = name;
    this.sprint = sprint;
    this.asignee = asignee;
    this.description = description;
    this.status = status;
    this.task = task;
    this.comments = comments;
    this.updatedAt = updatedAt;
}