var logger = require(__dirname + '/../../../lib/logger'),
    db = require(__dirname + '/../../lib/mysql');

exports.find = function(req, res, next) {
	db.query("SELECT * FROM curriculum", function(err, rows) {
		if (err) return next(err);
			res.status(200);
			res.send(rows);
	});
};
