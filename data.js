const axios = require('axios');
const List = require('./models/crypto_list');

let data;
let flag;


const cpy_data = async (data, keys, flag) => {
    const list = await List.updateMany({ id: flag }, {
        $set:
        {
            "id": flag,
            "name": data[keys[flag]]["name"],
            "last": data[keys[flag]]["last"],
            "buy": data[keys[flag]]["buy"],
            "sell": data[keys[flag]]["sell"],
            "volume": data[keys[flag]]["volume"],
            "base_unit": data[keys[flag]]["base_unit"]
        }
    }
        , { upsert: true }
    )
}

const d = async () => {
    const keys = [];
    axios.get('https://api.wazirx.com/api/v2/tickers')
        .then((response) => {
            data = response.data;// the whole JSON fetched from the API
            flag = 0;
            for (let key in data) {
                keys.push(key);
            }
            try {
                while (flag < 10) {
                    cpy_data(data, keys, flag);
                    flag++;
                }
            }
            catch (error) {
                console.log(error.message)
                return;
            }

        })
        .catch((error) => {
            console.log(error);
        })
}


module.exports = d;


