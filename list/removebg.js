const fs = require("fs")
const axios = require("axios")
const FormData = require('form-data');

function remove_bg(Url) {
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', `${Url}`);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'JPrUhazLmnrPbDbZBJgK22m6',
  },
  encoding: null
})
}
module.exports = { remove_bg }
