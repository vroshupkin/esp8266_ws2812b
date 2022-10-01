/**
 * 
 */

 const subProcess = require('child_process')
const fs = require('fs')

 subProcess.exec('ls', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      process.exit(1)
    } else {
      console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
      console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
    }
})


function readSysEnv(){
    let sys_env_arr = []


    subProcess.exec('echo $PATH', (err, stdout, stderr) => {
        if(err){
            console.error(err);
            process.exit(1)
            return
        }

        console.log(stdout.toString());
    })
}

readSysEnv()


/**
 * Читает файл и слхраняет каждую строку в массиве data[]
 * @param {string} file 
 * @return {string[]}
 */
function readFileAsArray(file){
    fs.readFile(file, (err, data) => {
        if(err)
            console.error(err)

        return data.toString().trim().split('\n')
    })

}

readFileAsArray('sh/sys_env.sh', (err, data) => {
    console.log(err);
    console.log(data);
})