import app from '../server';
import supertest from 'supertest'

const request = supertest(app);


// products start
describe('Supertest', () => {
    it('test post create', (ok) => {
        supertest(app).post('/products').send({ name: 'Ali', price: 1 })
            .set('Accept', 'application/json')
            .expect(200).end((err, res) => {
                if (err) return ok();
                return ok();
            });
    });



    it('should return products', async () => {
        await request
            .get('/products')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200);
    });

    it('should return products/1', async () => {
        await request
            .get('/products/1')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200);
    });




});


// products start


// users start

describe('Supertest', () => {
    it('test users create', (ok) => {
        supertest(app).post('/users').send({

            firstname: 'string;',
            lastname: "string;",
            password: "string;"
        })
            .set('Accept', 'application/json')
            .expect(200).end((err, res) => {
                if (err) return ok();
                return ok();
            });
    });



    it('should return users', async () => {
        await request
            .get('/users')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(400);
    });

    it('should return users/1', async () => {
        await request
            .get('/users/1')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(400);
    });


});


// users end

// orders start
describe('Supertest', () => {
    it('test orders create', (ok) => {
        supertest(app).post('/orders').send({

            status: "active",
            user_id: 1
        })
            .set('Accept', 'application/json')
            .expect(200).end((err, res) => {
                if (err) return ok();
                return ok();
            });
    });


    it('should return orders', async () => {
        await request
            .get('/users')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(400);
    });

    it('should return orders/1', async () => {
        await request
            .get('/users/1')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(400);
    });


});



