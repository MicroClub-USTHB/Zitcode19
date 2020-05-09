import { API_ROOT_URL } from "../utils/const";

export async function fetchSignUp(firstName, lastName, sex, date_of_birth, location, phone, password) {
  const response = await fetch(API_ROOT_URL + "/auth/signup", {
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
  if (response.ok) {
    return await response.json();
  } else {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      throw new Error((await response.json()).error.message);
    } else {
      throw new Error(await response.text());
    }
  }
}
