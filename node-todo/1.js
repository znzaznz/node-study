const baojian1 = (money)=>{
    return money > 200 ? '至尊享受' : '基本按摩'
}

const baojian2 = (money)=>{
    return money > 1000 ? '上头' : '滚'
}

export {baojian1, baojian2}