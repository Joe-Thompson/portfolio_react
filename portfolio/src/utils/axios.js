import axios from 'axios';

async function Axios(data) {
    try {
        await axios.post('https://portfolio-thompson.herokuapp.com/message', data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    } catch (e) {
        return e
    }
}

export default Axios;