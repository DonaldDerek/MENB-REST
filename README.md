## PeerSpace REST API

### Entry Points
Resource | Description
---|---
GET api/spaces/:id | Returns a single space, specified by the id parameter
GET api/spaces | Returns all spaces, 200 limit will be added
POST api/spaces | Add new space
PUT api/spaces/:id | Updates single space
DEL api/spaces/:id | Delete single space


### Testing
```
cd test/
node test
```
