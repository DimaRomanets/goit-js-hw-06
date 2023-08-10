/*
Написати скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводити alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використати властивість elements.
Вивести об'єкт із введеними даними в консоль і очистити значення полів форми методом reset.
*/

document.body.style.backgroundColor = "#808080";
document.body.style.color = "#32CD32";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
