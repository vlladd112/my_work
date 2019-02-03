function Sprint(id, name){
    this.id = id;
    this.name = name;
};

function Issue(id, type, name, sprint, createdBy, assignee, description, status, task, comments, updatedAt, createdAt){
    this.id = id;
    this.type = type;
    this.name = name;
    this.sprint = sprint;
    this.createdBy = createdBy;
    this.assignee = assignee;
    this.description = description;
    this.status = status;
    this.task = task;
    this.comments = comments;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
};