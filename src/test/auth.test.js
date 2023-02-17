const request=require("supertest");
const main=require("../index");


describe('POST /login',()=>{
    test('Debería devolver un 200',async ()=>{
       const response= await  request(main).post('/api/user/register').send({});
       expect(response.statusCode).toBe(400);
    
    })
})


