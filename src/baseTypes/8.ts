/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = {
  gender: "male" | "female";
}

const myGender: Gender = {
  gender: 'female',
}

export {};
