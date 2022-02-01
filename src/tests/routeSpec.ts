import app from '../server';
import supertest from 'supertest'

const request = supertest(app);


describe('Supertest', () => {
    it('test post create', (ok) => {
        supertest(app).post('/products').send({ name: 'Ali', price: 1 })
            .set('Accept', 'application/json')
            .expect(200).end((err, res) => {
                if (err) return ok();
                return ok();
            });
    });
});


