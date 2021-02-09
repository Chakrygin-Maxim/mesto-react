const BASE_URL = "https://auth.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      try {
        if (res.status === 201) {
          return res.json();
        } else if (res.status === 400) {
          throw new Error(res.error);
        } else if (res.status === 401) {
          throw new Error("некорректно заполнено одно из полей");
        }
      } catch (err) {
        return { err };
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return { error: err.message };
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 400) {
          throw new Error("не передано одно из полей");
        } else if (res.status === 401) {
          throw new Error("пользователь с email не найден");
        }
      } catch (err) {
        return { err };
      }
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
      }
      return data;
    })
    .catch((err) => {
      return { error: err.message };
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 400) {
          throw new Error("Токен не передан или передан не в том формате");
        } else if (res.status === 401) {
          throw new Error("Переданный токен некорректен");
        }
      } catch (err) {
        return { err };
      }
    })
    .then((data) => data)
    .catch((err) => {
      err;
    });
};
