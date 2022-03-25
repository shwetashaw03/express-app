import fs from 'fs'


const VAR_NAME = 'todo'
const IN_FILE_PATH = `../${VAR_NAME}/data.csv`
const OUT_FILE_PATH = `../${VAR_NAME}.js`


function todoConverter(){
    fs.readFile(IN_FILE_PATH, 'utf8', (err, data)=>{
        var token = tokenizer(data)
        makeFile(token)
    })
}

function tokenizer(data){
    var token=[]
    data = data.split('\n')
    data.forEach(val => {
        val = val.replace('\r','')
        token.push(val) 
    });
    var key = getKey(token[0])
    var val = getVal(token, key)
    return val
}

function getKey(data){
    var key=[]
    data = data.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
    for (let i = 0; i < data.length; i++) {
        let temp = data[i].trim()
        key.push(temp)
    }
    return key
}

function getVal(data, key){
    var val = []
    for (let i = 1; i < data.length; i++) {
        let inner_val = {}
        let temp = data[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
        for (let j = 0; j < key.length; j++){
            try{
                inner_val[key[j]] = temp[j].trim().replace('\"','')
            }
            catch(err){
                console.log(`${err.name}: at line ${i+1}`)
                console.log(err.message)
            }
        }
        val.push(inner_val)
    }
    return val
}

function makeFile(data){
    const file_val = `const ${VAR_NAME} = ${JSON.stringify(data, null, 4)} \n\nexport default ${VAR_NAME}`
    fs.writeFile(OUT_FILE_PATH, file_val, (err)=>{
        if(err) throw err
        console.log('File created.')
    })
}

todoConverter()