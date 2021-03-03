export const unixConverter = unixTimestamp => {
    const date = new Date(unixTimestamp*1000);
    return ("0" + date.getHours()).substr(-2) + ':'
         + ("0" + date.getMinutes()).substr(-2) + ':'
         + ("0" + date.getSeconds()).substr(-2);
  }
  
const currentdate = new Date();
const timeOffset = currentdate.getTimezoneOffset()/60;
export const datetime = timezone => (
    currentdate.getHours()+timeOffset+timezone/3600 
    + ":" 
    + ("0" + currentdate.getMinutes()).substr(-2) 
    + ":" 
    + ("0" + currentdate.getSeconds()).substr(-2)
);