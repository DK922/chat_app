import { names, surnames } from "./Users";

export const generateRandomName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  return name + " " + surname;
};
