import request from 'supertest';
import app from "../../../src/app";

describe('Home', () => {

    function callHome() {
        return request(app)
            .get('/');
    }

    it('returns welcome greeting', async () => {
        const received = await callHome();
        expect(received.status).toEqual(200);
        expect(received.text).toEqual("Welcome home!");
    });
});