import { API_ROOT_URL } from "../utils/const";

export async function fetchSignUp(firstName, lastName, sex, date_of_birth, location, phone, password) {
  const res = await fetch(API_ROOT_URL + "/auth/signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      sex,
      date_of_birth,
      location,
      phone,
      password,
    }),
  });

  return await res.json();
}
