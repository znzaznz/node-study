const fs = require("fs");

const db = {
    read:(dbPath)=>{
        return new Promise((resolve,reject) => {
            fs.readFile(dbPath,{flag:'a+'},(error,data)=>{
                if (error) return  reject(error)
                let list;
                try {
                    list  = JSON.parse(data)
                }catch (e){
                    list  = []
                }
                resolve(list)
            })
        })
    },
    write:(list,dbPath)=>{
        return new Promise((resolve,reject)=>{
            const str = JSON.stringify(list)
            fs.writeFile(dbPath,str,(error)=>{
                if (error) return  reject(error)
                resolve()
            })
        })

    }
}

module.exports = db