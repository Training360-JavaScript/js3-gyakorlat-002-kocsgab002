

const setCookie = (string ='') => document.cookie =
`token=${string}; expires=${new Date((new Date).getTime() + 1000 * 60 * 15) }`
    






 export default setCookie;
