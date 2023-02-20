//const axios = require("express-session/session/memory");
const axios = require("axios");

let empl= {
    fetchUser: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get('http://localhost:4000/api/v1/Employee/1124')
                    .then(res => res.data)
                    .catch(err => `error`))
            }, 3000);
        });
    }
};
const calling = async ()=>{
    let variable3 = await empl.fetchUser();
    console.log(variable3);
}
calling();
module.exports = empl;