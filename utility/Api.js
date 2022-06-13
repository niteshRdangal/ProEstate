import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const Api = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3cbc756db0mshaf570efb9b89e4ap172d75jsnf2f04d4a4092',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}