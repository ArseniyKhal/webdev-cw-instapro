import { loginUser, registerUser } from "../api.js";
import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAuthPageComponent({ appEl, setUser }) {
	let isLoginMode = true;
	let imageUrl = "";

	const renderForm = () => {
		const appHtml = `
      <div class="page-container">
			<div class="header-container"></div>
			<div class="form">
				<h3 class="form-title">
					${isLoginMode
				? "Вход в&nbsp;Instapro"
				: "Регистрация в&nbsp;Instapro"
			}
				</h3>

				<div class="form-inputs">
					${!isLoginMode
				? `<div class="upload-image-container"></div>
							<input type="text" id="name-input" class="input" placeholder="Имя" />`
				: ""
			}
					<input type="text" id="login-input" class="input" placeholder="Логин" />
					<input type="password" id="password-input" class="input" placeholder="Пароль" />
					<div class="form-error"></div>
					<button class="button" id="login-button">
						${isLoginMode ? "Войти" : "Зарегистрироваться"
			}</button>
				</div>

				<div class="form-footer">
					<p class="form-footer-title">
						${isLoginMode ? "Нет аккаунта?" : "Уже есть аккаунт?"}
						<button class="link-button" id="toggle-button">
							${isLoginMode ? "Зарегистрироваться." : "Войти."}
						</button>
					</p> 
				</div>
			</div>
		</div>`;

		appEl.innerHTML = appHtml;

		// Не вызываем перерендер, чтобы не сбрасывалась заполненная форма
		// Точечно обновляем кусочек дом дерева
		const setError = (message) => {
			appEl.querySelector(".form-error").textContent = message;
		};

		renderHeaderComponent({
			element: document.querySelector(".header-container"),
		});

		const uploadImageContainer = appEl.querySelector(".upload-image-container");

		if (uploadImageContainer) {
			renderUploadImageComponent({
				element: uploadImageContainer,
				onImageUrlChange(newImageUrl) {
					imageUrl = newImageUrl;
				},
			});
		}

		document.getElementById("login-button").addEventListener("click", () => {
			setError("");

			if (isLoginMode) {
				const login = document.getElementById("login-input");
				const password = document.getElementById("password-input");

				if (!login.value) {
					login.classList.add("error");
					alert("Введите логин");
					return;
				} else { login.classList.remove("error") }

				if (!password.value) {
					password.classList.add("error");
					alert("Введите пароль");
					return;
				} else { password.classList.remove("error") }

				loginUser({
					login: login.value,
					password: password.value,
				})
					.then((user) => {
						setUser(user.user);
					})
					.catch((error) => {
						console.warn(error);
						setError(error.message);
					});
			} else {
				const login = document.getElementById("login-input");
				const name = document.getElementById("name-input");
				const password = document.getElementById("password-input");
				if (!name.value) {
					name.classList.add("error");
					alert("Введите имя");
					return;
				} else { name.classList.remove("error") }

				if (!login.value) {
					login.classList.add("error");
					alert("Введите логин");
					return;
				} else { login.classList.remove("error") }

				if (!password.value) {
					password.classList.add("error");
					alert("Введите пароль");
					return;
				} else { password.classList.remove("error") }

				if (!imageUrl) {
					alert("Не выбрана фотография");
					return;
				}

				registerUser({
					login: login.value,
					password: password.value,
					name: name.value,
					imageUrl,
				})
					.then((user) => {
						setUser(user.user);
					})
					.catch((error) => {
						console.warn(error);
						setError(error.message);
					});
			}
		});

		document.getElementById("toggle-button").addEventListener("click", () => {
			isLoginMode = !isLoginMode;
			renderForm();
		});
	};

	renderForm();
}
