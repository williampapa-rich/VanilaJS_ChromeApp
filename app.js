const age = parseInt(prompt("당신의 나이는?"));

if (isNaN(age)) {
  console.log("숫자만 입력 가능");
} else if (age < 18) {
  console.log("미성년자 ㅈㅅ");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age == 100) {
  console.log("You are 100");
} else {
  console.log("노인 ㅈㅅ");
}
