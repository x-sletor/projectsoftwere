const isReachable = require('is-reachable');
const cron = require('node-cron');
const LineAPI = require('line-api');
const notify = new LineAPI.Notify({
        token: "uUHOq7cRqL55KA5z5K9ZaXVPT6sR7PnZAE0g4U3ToQh"
    })
    // Som "PCgs2yAVVZUUcKev9olUT2gmLvwqWSOh2g5mPK77dPX"

// สั่งให้มันทำงานทุกๆ กี่นาที
cron.schedule('*/1 * * * *', function() {

    let d = new Date(Date.now()).toLocaleString(); //แสดงวันที่และเวลา ณ เวลานี้
    console.log("---------------------");
    console.log(`Running Cron Job ${d}`);;

    isReachable('127.0.0.1').then(reachable => {
        if (!reachable) { // => false
            let msg = `จะสอบในอีก 1 วัน ด้วยความหวังดีจาก Staporn Group`
            notify.send({
                message: msg
            })
        }
    })
});