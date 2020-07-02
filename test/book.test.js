const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');
chai.use(chaiHttp);

let token, bookId;

describe('/api/books tests', () => {
	describe('/POST book', () => {
		it('it should POST a book', (done) => {
			const book = {
				author: 'Albert Camus',
				title: 'Yabancı',
				year: 1950,
			};

			chai
				.request(server)
				.post('/book')
				.send(book)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('title');
					res.body.should.have.property('author');
					res.body.should.have.property('year');
					// bookId = res.body._id;
					done();
				});
		});
	});
});
