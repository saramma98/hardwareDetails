
const hwDetails = require('../service/hardwareDetails')
 const hwDets = new hwDetails();


class HardwareDetailsController{
    constructor(){
       
    }

    getdetails= (req,res) =>{

        const cpu = hwDets.getCpuDetails();
        const battery = hwDets.getBatteryDetails();

        Promise.all(
            [cpu.catch(error=>{return error;}),
            battery.catch(error => {return error ;})
            ]
        )
        .then(values =>{

            const hardwareData={
                'cpuData':values[0],
                'batteryData' : values[1]

            }
            res.json(hardwareData)
        })

        .catch(error =>{
            return res.json(err)
        })
    }


}

module.exports=HardwareDetailsController;