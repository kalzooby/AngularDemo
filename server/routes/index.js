module.exports = function(app) {
    var api = '/api';
    var data = '/../../data/';
    var jsonfileservice = require('./utils/jsonfileservice')();

    app.get(api + '/message/:id', getMessage);
    app.get(api + '/messages', getMessages);

    function getMessage(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'messages.json');
        var Message = json.filter(function(c) {
            return c.id === parseInt(req.params.id);
        });
        res.send(Message[0]);
    }

    function getMessages(req, res, next) {
        var json = jsonfileservice.getJsonFromFile(data + 'messages.json');
        res.send(json);
    }
};
