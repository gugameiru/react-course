"use strict";

const employers = [
    "АртеМ",
    "максим",
    "Владимир",
    "сергей",
    "НикиТа",
    "евГений",
    " Дарья",
    " ",
    "виктория ",
    "ЕкаТерина",
    "",
    " Андрей ",
    "КИРИЛЛ",
  ],
  nameCourse = "Базовый React";
let command = [];

employers.forEach((entry) => {
  if (entry.length > 0 && entry.trim() != "") {
    command.push(entry);
  }
});
command = command.map((entry) => {
  entry = entry.toLowerCase().trim();
  entry = ` ${entry[0].toUpperCase()}${entry.slice(1)}`;
  return entry;
});

const data = {
  cash: [3, 8, 3],
  react: ["JSX", "components", "props", "state", "hooks"],
  add: ["styled-components", "firebase"],
};

const { cash, react, add } = data;

const calcCash = (own = 0) => {
  return own.reduce((sum, entry) => sum + entry);
};

const lesson = calcCash(cash);

const makeBusiness = (
  director,
  teacher = "Максим",
  allModule,
  gang,
  course
) => {
  let sumTech = `${react},${add} и другие`;
  console.log(
    `Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}\nКоманда Академии:${gang}`
  );
  console.log(`Первое что изучим будет${react[0]}. Он очень похож на HTML!`);
  console.log("Технологии которые мы изучим: ");
  console.log(sumTech);
};

makeBusiness(...["Артем", , lesson, command, nameCourse]);
