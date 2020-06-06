## Firebase Authで実装されるからいらない???
- /users - collection
  - [userId] - document
    - id - data
    - name - data
    - groupid - data

## 以下collection
- /groups - collection
  - [groupId] - document
    - group_name - data
    - group_id - data
    - group_owner - data
    - group_member - data

- messages - collection
  - [messageID] - document
    - name
    - profilePicUrl
    - text
    - timestamp

- tasks - colletion
  - [taskID] - document
    - taskname
    - comment
    - taskuser
    - deadline
