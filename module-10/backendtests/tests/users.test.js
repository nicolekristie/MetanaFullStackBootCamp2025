import request from 'supertest';
import app from '../app.js';

let token;

beforeAll(async () => {
  const res = await request(app)
    .post('/api/auth/login')
    .send({ username: 'testuser', password: 'testpass' });
  token = res.body.token;
});

describe('Protected User Routes', () => {
  it('should get users when authenticated', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Bob' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Bob');
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/api/users/1')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Updated Alice' });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated Alice');
  });

  it('should delete a user', async () => {
    const res = await request(app)
      .delete('/api/users/1')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(204);
  });

  it('should return 401 without token', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(401);
  });
});