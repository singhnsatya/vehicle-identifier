var should = require('should');
var supertest = require("supertest");
var dummy = require('./data.json')

var server = supertest.agent("http://localhost:3000");
var cdate = new Date().toISOString();

describe('Testcases for File Operations', () => {
	it('1-Should save uploaded data', (done) => {
		server
		.post("/upload")
		.send({date: cdate, data: dummy.postdata.data})
		.expect(200)
		.end((err, res) => {
			res.status.should.be.equal(200);
			res.body.should.be.Object();
			res.body.should.be.instanceOf(Object).and.have.properties(['success', "data"]);
			res.body.success.should.be.equal(true);
			res.body.data.should.be.Object();
		done()
		})
	})
	it('2-Should return all dates', (done) => {
		server
		.get("/alldates")
		.expect(200)
		.end((err, res) => {
			res.status.should.be.equal(200);
			res.body.should.be.Object();
			res.body.should.be.instanceOf(Object).and.have.properties(['success', "data"]);
			res.body.success.should.be.equal(true);
			res.body.data.should.be.Array();
		done()
		})
	})
	it('3-Should return all tables according to date', (done) => {
		server
		.get("/date")
		.query({search: cdate})
		.expect(200)
		.end((err, res) => {
			res.status.should.be.equal(200);
			res.body.should.be.Object();
			res.body.should.be.instanceOf(Object).and.have.properties(['success', "data"]);
			res.body.success.should.be.equal(true);
			res.body.data.should.be.Object();
		done()
		})
	})
})