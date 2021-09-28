import {fetchData} from "../fetchData";

describe("FetchData 方法测试",()=>{
    test('test status code',async ()=>{
        const res = await fetchData()
        console.log(res);
        // expect(res.status).toEqual(200)
    })
})