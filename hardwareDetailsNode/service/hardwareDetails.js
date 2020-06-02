const si = require('systeminformation');

class HardwareDetails{
    constructor(){}


    getCpuDetails(){
        return new Promise((resolve,reject)=>{
            si.cpu((err,data)=>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(data);
            })

        })
    }  //end of getCpuDetails

    getBatteryDetails(){

        return new Promise((resolve,reject)=>{

            si.battery((err,data)=>{

                if(err){
                    reject(err);
                    return;
                }
                resolve(data);
            })
        })
    }
}


module.exports= HardwareDetails;