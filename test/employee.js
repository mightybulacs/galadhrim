
var request = require('supertest'),
	should = require('should-http');


describe('employee',function(){

	var url = 'localhost:5000'; // not sure about this url

	describe('delete_employee',function(){
		it('should delete one existing employee record', function(done){
			request(url)
				.get('/api/employees/123456789')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(202);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
		});
	});

});