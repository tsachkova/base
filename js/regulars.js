let phone;
let phoneRegular = /\d{2}[(]\d{3}[)]\d{3}[-]\d\d[-]\d\d/;
let isPhone = phoneRegular.test(phone)

let email;
let emailRegular = /^[a-z][a-z0-9'_+-]{1,32}@[a-z0-9.]{1,29}\.[a-z]{2,3}/;
let isEmail = emailRegular.test(email);

let website;
let websiteRegular = /http:\/\/test\.dev/;
let isWebsite = websiteRegular.test(website);

let password;
let passwordRegular = /[a-zA-z0-9_]{6,25}/;
let isPassword = passwordRegular.test(password);

let ip;
let ipRegular = /((^|\.)1(?=\d\d\.?)\d\d|(^|\.)2(?=\d\d\.)[0-4]\d|(^|\.)2(?=\d\d)5[0-5]|(^|\.)\d?\d){4}/;
let isIp = ipRegular.test(ip);