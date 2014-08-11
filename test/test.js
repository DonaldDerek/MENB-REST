var request = require('request');

console.log("PeerSpace REST API simulation");
console.log("*****************************\n");



request.post('http://localhost:3000/api/spaces', function(err, resp, body){
    console.log("POST: create new Space");
    if (!err && resp.statusCode == 200) console.log(body)
}).form(
    {
        name: 'Chalex',
        private: false,
        meta: {
            rooms: 3,
            desks: 6
        }
});

request.get("http://localhost:3000/api/spaces/", function(err, resp, body){
    console.log("GET: get all Spaces");
    if(!err && resp.statusCode == 200) console.log(body);
});


/*request.put('http://localhost:3000/api/spaces/53e8ae391b4cbb4b922b5ee0', function(err, resp, body){
    console.log("PUT: update Space");
    if (!err && resp.statusCode == 200) console.log(body)
}).form(
    {
        name: 'Besha',
        private: false,
        meta: {
            rooms: 1,
            desks: 2
        }
});
*/
