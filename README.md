# Workasana Task App


Workasana is a task management and team collaboration tool where users can create projects, assign tasks to teams and owners, set deadlines, and organize work using tags. It supports authentication, dynamic filtering.

---

## Demo Link

[Live Demo](https://workasana-task.vercel.app)

---


## Login
> **Guest** <br>
> Username: `john.doe@example.com` <br>
> Password: `securePassword123`
----



## Quick Start
```
git clone https://github.com/mohdrafi854/Workasana-frontend.git
cd <your-repo>
npm install
npm run dev  # or `npm run start` / `yarn dev`
```

## Technologies
- React JS
- React Router
- Redux
- Node JS
- Express JS
- MongoDB
---

## Demo Video
Watch a walkthrough (5–7 minutes) of all major features of this app: [Loom Video Link]()

## Features
**Dashboard**
- Display projects list
- Display tasks list
- New Projects button onclick show the modal and create project
- New Tasks button onClick show the modal and create tasks

**Project Page**
- Display all the project

**Team Page**
- Display all the team

**Reports Page**
- Under progress

**Setting Page**
- Under progress

## API Refrence

### **GET /projects**<br>
Display all projects<br>
Sample Response:<br>
```
[{_id, name, description}, ....]
```

### **GET /tasks**<br>
Display all tasks<br>
Sample Response:<br>
```
[{_id, name, project, team, owners, tags, timeToComplete, status}, ....]
```

### **GET /tasks**<br>
Display all tasks<br>
Sample Response:<br>
```
[{_id, name, project, team, owners, tags, timeToComplete, status}, ....]
```

### **GET /teams**<br>
Display all teams<br>
Sample Response:<br>
```
[{_id, name, description, members}, ....]
```

### **POST /project**<br>
Create new project<br>
Sample Response:<br>
```
[{_id, name, description}, ....]
```

### **POST /tasks**<br>
Create new task<br>
Sample Response:<br>
```
[{_id, name, project, team, owners, tags, timeToComplete, status}, ....]
```

### **PATCH /tasks/:id**<br>
Update tasks by id<br>
Sample Response:<br>
```
[{_id, name, project, team, owners, tags, timeToComplete, status}, ....]
```

### **DELETE /tasks/:id**<br>
Delete tasks by id<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /teams**<br>
Create new agent<br>
Sample Response:<br>
```
[{_id, name, description, members}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
