## PeerSpace REST API

### Entry Points
Method | Resource | Description
---|---|---|
GET | [api/spaces/:id]() | Returns a single space, specified by the id parameter
GET |[api/spaces/]() | Returns all spaces with optional the parameters skip and limit. default: skip=0 and limit=200
POST |[ api/spaces]() | Add new space
PUT |[ api/spaces/:id]() | Updates single space
DEL |[ api/spaces/:id]() | Delete single space


### Testing
```
cd test/
node test
```
