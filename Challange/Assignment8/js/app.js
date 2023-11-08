const dDay = new Date('2023-12-25 00:00:00');
const currentTime = new Date();

const timeLeft = dDay - currentTime;

const year = currentTime.getFullYear();
const month = currentTime.getMonth();
const day = currentTime.getDay();
const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();

const testTime1 = new Date('2023-12-25 00:00:00');
const testTime2 = new Date('2023-12-26 00:00:00');

const now = Date.now();

console.log(testTime2-testTime1);




