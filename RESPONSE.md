# Cloud TP Note API

The Cloud TP Note API is a RESTful API designed to manage tasks and tags for personal note-taking. It allows users to create, read, update, and delete tasks and tags through various endpoints.

## Endpoints

### Tasks

- **GET** `/api/tasks`: Retrieve all tasks
- **GET** `/api/tasks/{id}`: Retrieve a specific task by ID
- **POST** `/api/tasks`: Create a new task
- **PUT** `/api/tasks/{id}`: Update an existing task by ID
- **DELETE** `/api/tasks/{id}`: Delete a task by ID

### Tags

- **GET** `/api/tags`: Retrieve all tags
- **POST** `/api/tags`: Create a new tag

### Example Requests

#### Create a Task

```json
POST /api/tasks
{
  "title": "Buy groceries",
  "description": "Buy milk, eggs, and bread",
  "due_date": "2023-04-25",
  "tags": [{
    "id" : "sikdfhasdkofhnv"
}
  ]
}
```
#### Create a tag

```json
PUT /api/tags/
{
  "title": "important"
}
```

## Task Filtering

```json
POST /api/tasks?sorted=1&page=1
```

## Explication 
on a cree ce type de modal : 
model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  priorite    Int
  tags        Tag[]    @relation("TaskTag")
  taskTags    TaskTag[]
}

model Tag {
  id       String   @id @default(uuid())
  title    String
  tasks    Task[]   @relation("TaskTag")
  taskTags TaskTag[]
}

model TaskTag {
  id     String @id @default(uuid())
  taskId String
  task   Task   @relation(fields: [taskId], references: [id])
  tagId  String
  tag    Tag    @relation(fields: [tagId], references: [id])
}

Afin de facilite la filtration des donnees , graces cette structure on peu facilement afficher toutes les tags avec tout les tasks dans chaque tag, et de meme inversement toutes les tasks avec tous les tags dedant,
Cela ma donc permits d ajouter les tags dans chaque task. 
pour suprimer un tag d'un task il suffit de patch le task sans le id du tag et cela fonctionne parfaitement.




