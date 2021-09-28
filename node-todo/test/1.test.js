import {baojian1,baojian2} from '../1'

test('保健1fangfa 1000',()=>{
    expect(baojian1(1000)).toBe('至尊享受')
    expect(baojian1(100)).toBe('基本按摩')
})

test('保健2 方法 20000',()=>{
    expect(baojian2(2000)).toBe('上头')
    expect(baojian2(100)).toBe('滚')
})

//unit testing 单元测试
//集成测试 (组装测试) 将所有模块按照设计要求组装成测试代码

//匹配器
//toBe 这个就是匹配器
//matchers.test.js
test('测试007号技师的匹配',()=>{
    //toBe 绝对相等
    expect('007号技师').toBe('007号技师')
    //toEqual 内容结果的匹配
    const app = {name:'大毛'}
    expect(app).toEqual({name:'大毛'})
    //toBeNull
    //toBeDefined 只要定义了，就能通过测试
})

test('toBeGreaterThan匹配器',()=>{
    const count = 10
    //toBeGreaterThanOrEqual
    //toBeCloseTo 近似
    expect(count).toBeGreaterThan(8)
    expect(count).toBeGreaterThanOrEqual(10)
    expect(0.1 + 0.2).toBeCloseTo(0.3)
})


test('toMatch匹配器',()=>{
    //只要数组中包含就能成功
    const str = '谢大脚,刘能'
    expect(str).toMatch('刘能')
})

test('toContain匹配器',()=>{
    //数组中匹配器
    expect(['谢大脚','刘能']).toContain('谢大脚')
})

//jest引入import
//此时需要加入babel转换器
//此时jest会先去监测是否有babel，如果安装了babel，那么就能进行执行了
