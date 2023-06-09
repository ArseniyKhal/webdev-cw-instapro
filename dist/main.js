/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deletePosts: () => (/* binding */ deletePosts),\n/* harmony export */   dislikePosts: () => (/* binding */ dislikePosts),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   getUserPosts: () => (/* binding */ getUserPosts),\n/* harmony export */   likePosts: () => (/* binding */ likePosts),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   postPosts: () => (/* binding */ postPosts),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n// Замени на свой, чтобы получить независимый от других набор данных.\r\n// \"боевая\" версия инстапро лежит в ключе prod\r\nconst personalKey = \"ArsHal\";\r\nconst baseHost = \"https://webdev-hw-api.vercel.app\";\r\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\r\n\r\n// Получение списка постов\r\nfunction getPosts({ token }) {\r\n\treturn fetch(postsHost, {\r\n\t\tmethod: \"GET\",\r\n\t\theaders: {\r\n\t\t\tAuthorization: token,\r\n\t\t},\r\n\t})\r\n\t\t.then((response) => {\r\n\t\t\tif (response.status === 401) {\r\n\t\t\t\tthrow new Error(\"Нет авторизации\");\r\n\t\t\t}\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\treturn data.posts;\r\n\t\t});\r\n}\r\n\r\n// Получение списка постов конкретного пользователя\r\nfunction getUserPosts({ id }) {\r\n\treturn fetch(postsHost + \"/user-posts/\" + id, {\r\n\t\tmethod: \"GET\",\r\n\t})\r\n\t\t.then((response) => {\r\n\t\t\tif (response.status === 401) {\r\n\t\t\t\tthrow new Error(\"Нет авторизации\");\r\n\t\t\t}\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\treturn data.posts;\r\n\t\t});\r\n}\r\n\r\n// Написание(отправка) поста\r\nfunction postPosts({ token, description, imageUrl }) {\r\n\treturn fetch(postsHost, {\r\n\t\tmethod: \"POST\",\r\n\t\tbody: JSON.stringify({\r\n\t\t\tdescription,\r\n\t\t\timageUrl,\r\n\t\t}),\r\n\t\theaders: {\r\n\t\t\tAuthorization: token,\r\n\t\t},\r\n\t})\r\n\t// сделать выпадашку об удачной отправке поста\r\n\t// .then((response) => {\r\n\t// \tconsole.log(response);\r\n\t// \treturn response.json();\r\n\t// })\r\n}\r\n\r\n// Поставить лайк\r\nfunction likePosts({ token, id }) {\r\n\treturn fetch(postsHost + \"/\" + id + \"/like\", {\r\n\t\tmethod: \"POST\",\r\n\t\theaders: {\r\n\t\t\tAuthorization: token,\r\n\t\t},\r\n\t})\r\n}\r\n\r\n// Убрать лайк\r\nfunction dislikePosts({ token, id }) {\r\n\treturn fetch(postsHost + \"/\" + id + \"/dislike\", {\r\n\t\tmethod: \"POST\",\r\n\t\theaders: {\r\n\t\t\tAuthorization: token,\r\n\t\t},\r\n\t})\r\n}\r\n\r\n// Удаление поста\r\nfunction deletePosts({ token, id }) {\r\n\treturn fetch(postsHost + \"/\" + id, {\r\n\t\tmethod: \"DELETE\",\r\n\t\theaders: {\r\n\t\t\tAuthorization: token,\r\n\t\t},\r\n\t})\r\n}\r\n\r\n// Регистрация usera\r\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\r\nfunction registerUser({ login, password, name, imageUrl }) {\r\n\treturn fetch(baseHost + \"/api/user\", {\r\n\t\tmethod: \"POST\",\r\n\t\tbody: JSON.stringify({\r\n\t\t\tlogin,\r\n\t\t\tpassword,\r\n\t\t\tname,\r\n\t\t\timageUrl,\r\n\t\t}),\r\n\t}).then((response) => {\r\n\t\tif (response.status === 400) {\r\n\t\t\tthrow new Error(\"Такой пользователь уже существует\");\r\n\t\t}\r\n\t\treturn response.json();\r\n\t});\r\n}\r\n\r\n// Авторизация usera\r\nfunction loginUser({ login, password }) {\r\n\treturn fetch(baseHost + \"/api/user/login\", {\r\n\t\tmethod: \"POST\",\r\n\t\tbody: JSON.stringify({\r\n\t\t\tlogin,\r\n\t\t\tpassword,\r\n\t\t}),\r\n\t}).then((response) => {\r\n\t\tif (response.status === 400) {\r\n\t\t\tthrow new Error(\"Неверный логин или пароль\");\r\n\t\t}\r\n\t\treturn response.json();\r\n\t});\r\n}\r\n\r\n// Загружает картинку в облако, возвращает url загруженной картинки\r\nfunction uploadImage({ file }) {\r\n\tconst data = new FormData();\r\n\tdata.append(\"file\", file);\r\n\r\n\treturn fetch(baseHost + \"/api/upload/image\", {\r\n\t\tmethod: \"POST\",\r\n\t\tbody: data,\r\n\t}).then((response) => {\r\n\t\treturn response.json();\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./api.js?");

/***/ }),

/***/ "./components/add-post-page-component.js":
/*!***********************************************!*\
  !*** ./components/add-post-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image-component.js */ \"./components/upload-image-component.js\");\n\r\n\r\n\r\nfunction renderAddPostPageComponent({ appEl, onAddPostClick }) {\r\n\tlet imageUrl = \"\";\r\n\r\n\tconst render = () => {\r\n\t\tconst appHtml = `\r\n   <div class=\"page-container\">\r\n\t\t<div class=\"header-container\"></div>\r\n\t\t<div class=\"form\">\r\n\t\t\t<h3 class=\"form-title\">Добавить пост</h3>\r\n\t\t\t<div class=\"form-inputs\">\r\n\t\t\t\t<div class=\"upload-image-container\"></div>\r\n\t\t\t\t<p>Опишите фотографию:</p>\r\n\t\t\t\t<textarea id=\"text-input\" class=\"input text-input\" required/></textarea>\r\n\t\t\t\t<button class=\"button\" id=\"add-button\">Добавить</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n   </div>`;\r\n\r\n\t\tappEl.innerHTML = appHtml;\r\n\r\n\t\tconst uploadImageContainer = appEl.querySelector(\".upload-image-container\");\r\n\t\tif (uploadImageContainer) {\r\n\t\t\t(0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__.renderUploadImageComponent)({\r\n\t\t\t\telement: uploadImageContainer,\r\n\t\t\t\tonImageUrlChange(newImageUrl) {\r\n\t\t\t\t\timageUrl = newImageUrl;\r\n\t\t\t\t},\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\t(0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\r\n\t\t\telement: document.querySelector(\".header-container\"),\r\n\t\t});\r\n\r\n\t\tdocument.getElementById(\"add-button\").addEventListener(\"click\", () => {\r\n\t\t\tconst text = document.getElementById(\"text-input\").value;\r\n\r\n\t\t\tif (!imageUrl) {\r\n\t\t\t\talert(\"Не выбрана фотография\");\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tif (!text) {\r\n\t\t\t\talert(\"Опишите фотографию\");\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tonAddPostClick({\r\n\t\t\t\tdescription: text,\r\n\t\t\t\timageUrl,\r\n\t\t\t});\r\n\t\t});\r\n\t};\r\n\r\n\trender();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/add-post-page-component.js?");

/***/ }),

/***/ "./components/auth-page-component.js":
/*!*******************************************!*\
  !*** ./components/auth-page-component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthPageComponent: () => (/* binding */ renderAuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-component.js */ \"./components/upload-image-component.js\");\n\r\n\r\n\r\n\r\nfunction renderAuthPageComponent({ appEl, setUser }) {\r\n\tlet isLoginMode = true;\r\n\tlet imageUrl = \"\";\r\n\r\n\tconst renderForm = () => {\r\n\t\tconst appHtml = `\r\n      <div class=\"page-container\">\r\n\t\t\t<div class=\"header-container\"></div>\r\n\t\t\t<div class=\"form\">\r\n\t\t\t\t<h3 class=\"form-title\">\r\n\t\t\t\t\t${isLoginMode\r\n\t\t\t\t? \"Вход в&nbsp;Instapro\"\r\n\t\t\t\t: \"Регистрация в&nbsp;Instapro\"\r\n\t\t\t}\r\n\t\t\t\t</h3>\r\n\r\n\t\t\t\t<div class=\"form-inputs\">\r\n\t\t\t\t\t${!isLoginMode\r\n\t\t\t\t? `<div class=\"upload-image-container\"></div>\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"name-input\" class=\"input\" placeholder=\"Имя\" />`\r\n\t\t\t\t: \"\"\r\n\t\t\t}\r\n\t\t\t\t\t<input type=\"text\" id=\"login-input\" class=\"input\" placeholder=\"Логин\" />\r\n\t\t\t\t\t<input type=\"password\" id=\"password-input\" class=\"input\" placeholder=\"Пароль\" />\r\n\t\t\t\t\t<div class=\"form-error\"></div>\r\n\t\t\t\t\t<button class=\"button\" id=\"login-button\">\r\n\t\t\t\t\t\t${isLoginMode ? \"Войти\" : \"Зарегистрироваться\"\r\n\t\t\t}</button>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-footer\">\r\n\t\t\t\t\t<p class=\"form-footer-title\">\r\n\t\t\t\t\t\t${isLoginMode ? \"Нет аккаунта?\" : \"Уже есть аккаунт?\"}\r\n\t\t\t\t\t\t<button class=\"link-button\" id=\"toggle-button\">\r\n\t\t\t\t\t\t\t${isLoginMode ? \"Зарегистрироваться.\" : \"Войти.\"}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</p> \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>`;\r\n\r\n\t\tappEl.innerHTML = appHtml;\r\n\r\n\t\t// Не вызываем перерендер, чтобы не сбрасывалась заполненная форма\r\n\t\t// Точечно обновляем кусочек дом дерева\r\n\t\tconst setError = (message) => {\r\n\t\t\tappEl.querySelector(\".form-error\").textContent = message;\r\n\t\t};\r\n\r\n\t\t(0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n\t\t\telement: document.querySelector(\".header-container\"),\r\n\t\t});\r\n\r\n\t\tconst uploadImageContainer = appEl.querySelector(\".upload-image-container\");\r\n\r\n\t\tif (uploadImageContainer) {\r\n\t\t\t(0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__.renderUploadImageComponent)({\r\n\t\t\t\telement: uploadImageContainer,\r\n\t\t\t\tonImageUrlChange(newImageUrl) {\r\n\t\t\t\t\timageUrl = newImageUrl;\r\n\t\t\t\t},\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tdocument.getElementById(\"login-button\").addEventListener(\"click\", () => {\r\n\t\t\tsetError(\"\");\r\n\r\n\t\t\tif (isLoginMode) {\r\n\t\t\t\tconst login = document.getElementById(\"login-input\").value;\r\n\t\t\t\tconst password = document.getElementById(\"password-input\").value;\r\n\r\n\t\t\t\tif (!login) {\r\n\t\t\t\t\talert(\"Введите логин\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (!password) {\r\n\t\t\t\t\talert(\"Введите пароль\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n\t\t\t\t\tlogin: login,\r\n\t\t\t\t\tpassword: password,\r\n\t\t\t\t})\r\n\t\t\t\t\t.then((user) => {\r\n\t\t\t\t\t\tsetUser(user.user);\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch((error) => {\r\n\t\t\t\t\t\tconsole.warn(error);\r\n\t\t\t\t\t\tsetError(error.message);\r\n\t\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tconst login = document.getElementById(\"login-input\").value;\r\n\t\t\t\tconst name = document.getElementById(\"name-input\").value;\r\n\t\t\t\tconst password = document.getElementById(\"password-input\").value;\r\n\t\t\t\tif (!name) {\r\n\t\t\t\t\talert(\"Введите имя\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tif (!login) {\r\n\t\t\t\t\talert(\"Введите логин\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (!password) {\r\n\t\t\t\t\talert(\"Введите пароль\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (!imageUrl) {\r\n\t\t\t\t\talert(\"Не выбрана фотография\");\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n\t\t\t\t\tlogin: login,\r\n\t\t\t\t\tpassword: password,\r\n\t\t\t\t\tname: name,\r\n\t\t\t\t\timageUrl,\r\n\t\t\t\t})\r\n\t\t\t\t\t.then((user) => {\r\n\t\t\t\t\t\tsetUser(user.user);\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch((error) => {\r\n\t\t\t\t\t\tconsole.warn(error);\r\n\t\t\t\t\t\tsetError(error.message);\r\n\t\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tdocument.getElementById(\"toggle-button\").addEventListener(\"click\", () => {\r\n\t\t\tisLoginMode = !isLoginMode;\r\n\t\t\trenderForm();\r\n\t\t});\r\n\t};\r\n\r\n\trenderForm();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/auth-page-component.js?");

/***/ }),

/***/ "./components/header-component.js":
/*!****************************************!*\
  !*** ./components/header-component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeaderComponent: () => (/* binding */ renderHeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n\r\n\r\n\r\nfunction renderHeaderComponent({ element }) {\r\n\telement.innerHTML = `\r\n<div class=\"page-header\">\r\n      <h1 class=\"logo\">instapro</h1>\r\n      <button class=\"header-button add-or-login-button\">\r\n      ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ?\r\n\t\t\t`<div title=\"Добавить пост\" class=\"add-post-sign\"></div>`\r\n\t\t\t: \"Войти\"\r\n\t\t}\r\n\t\t</button>\r\n      ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ?\r\n\t\t\t`<button title=\"${_index_js__WEBPACK_IMPORTED_MODULE_0__.user.name}\" class=\"header-button logout-button\">Выйти</button>`\r\n\t\t\t: \"\"\r\n\t\t}\r\n\t\t</button>\r\n</div>`;\r\n\r\n\telement\r\n\t\t.querySelector(\".add-or-login-button\")\r\n\t\t.addEventListener(\"click\", () => {\r\n\t\t\tif (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.ADD_POSTS_PAGE);\r\n\t\t\t} else {\r\n\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.AUTH_PAGE);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\telement.querySelector(\".logo\").addEventListener(\"click\", () => {\r\n\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.POSTS_PAGE);\r\n\t});\r\n\r\n\telement.querySelector(\".logout-button\")?.addEventListener(\"click\", _index_js__WEBPACK_IMPORTED_MODULE_0__.logout);\r\n\r\n\treturn element;\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/header-component.js?");

/***/ }),

/***/ "./components/loading-page-component.js":
/*!**********************************************!*\
  !*** ./components/loading-page-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoadingPageComponent: () => (/* binding */ renderLoadingPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n\r\n\r\nfunction renderLoadingPageComponent({ appEl, user, goToPage }) {\r\n\tconst appHtml = `\r\n\t<div class=\"page-container\">\r\n\t\t<div class=\"header-container\"></div>\r\n\t\t<div class=\"loading-page\">\r\n\t\t<div class=\"loader\"><div></div><div></div><div></div></div>\r\n\t\t</div>\r\n\t</div>`;\r\n\r\n\tappEl.innerHTML = appHtml;\r\n\r\n\t(0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\r\n\t\tuser,\r\n\t\telement: document.querySelector(\".header-container\"),\r\n\t\tgoToPage,\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/loading-page-component.js?");

/***/ }),

/***/ "./components/posts-page-component.js":
/*!********************************************!*\
  !*** ./components/posts-page-component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderPostsPageComponent({ appEl, userPosts }) {\r\n\t/**\r\n\t * TODO: чтобы отформатировать дату создания поста в виде \"19 минут назад\"\r\n\t * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow\r\n\t */\r\n\tconst postHtml = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, index) => {\r\n\t\tconst postLikesListHtml = post.likes.map((like) => {\r\n\t\t\treturn ` ${like.name} `\r\n\t\t})\r\n\r\n\t\treturn `\r\n\t\t<li class=\"post\" data-index=\"${index}\">\r\n\t\t<div class=\"post-header\" ${userPosts ? 'style=\"display: none\"' : ''} data-user-id=\"${post.user.id}\">\r\n\t\t\t<img src=\"${post.user.imageUrl}\" class=\"post-header__user-image\">\r\n\t\t\t<p class=\"post-header__user-name\">${post.user.name}</p>\r\n\t\t</div>\r\n\t\t<div class=\"post-image-container\">\r\n\t\t\t<img class=\"post-image\" src=\"${post.imageUrl}\">\r\n\t\t</div>\r\n\t\t<div class=\"post-likes\">\r\n\t\t\t<div class=\"post-likes-body\">\r\n\t\t\t\t<button data-post-id=\"${post.id}\" data-index=\"${index}\" class=\"like-button\">\r\n\t\t\t\t${post.isLiked ?\r\n\t\t\t\t'<svg width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.4677 3.82098C21.1264 3.07326 20.6342 2.39568 20.0187 1.82618C19.4028 1.25497 18.6766 0.801048 17.8796 0.489081C17.0532 0.164306 16.1668 -0.00193165 15.2719 1.69339e-05C14.0164 1.69339e-05 12.7915 0.325256 11.727 0.939598C11.4724 1.08656 11.2305 1.24797 11.0013 1.42384C10.7721 1.24797 10.5301 1.08656 10.2755 0.939598C9.21101 0.325256 7.9861 1.69339e-05 6.73063 1.69339e-05C5.82659 1.69339e-05 4.95057 0.163841 4.12293 0.489081C3.3233 0.802275 2.60261 1.25279 1.98379 1.82618C1.36751 2.39504 0.875206 3.07278 0.534783 3.82098C0.180808 4.59914 0 5.42549 0 6.27594C0 7.07819 0.173168 7.91418 0.516957 8.76462C0.804722 9.47533 1.21727 10.2125 1.74441 10.957C2.57969 12.1351 3.7282 13.3637 5.15429 14.6093C7.51753 16.674 9.85784 18.1002 9.95716 18.158L10.5607 18.5242C10.8281 18.6856 11.1719 18.6856 11.4393 18.5242L12.0428 18.158C12.1421 18.0978 14.4799 16.674 16.8457 14.6093C18.2718 13.3637 19.4203 12.1351 20.2556 10.957C20.7827 10.2125 21.1978 9.47533 21.483 8.76462C21.8268 7.91418 22 7.07819 22 6.27594C22.0025 5.42549 21.8217 4.59914 21.4677 3.82098ZM11.0013 16.6186C11.0013 16.6186 1.93541 11.1232 1.93541 6.27594C1.93541 3.82098 4.08218 1.831 6.73063 1.831C8.59219 1.831 10.2067 2.81394 11.0013 4.24981C11.7958 2.81394 13.4103 1.831 15.2719 1.831C17.9203 1.831 20.0671 3.82098 20.0671 6.27594C20.0671 11.1232 11.0013 16.6186 11.0013 16.6186Z\" fill=\"#FF0000\"/></svg>'\r\n\t\t\t\t:\r\n\t\t\t\t'<svg width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.4677 3.82098C21.1264 3.07326 20.6342 2.39568 20.0187 1.82618C19.4028 1.25497 18.6766 0.801048 17.8796 0.489081C17.0532 0.164306 16.1668 -0.00193165 15.2719 1.69339e-05C14.0164 1.69339e-05 12.7915 0.325256 11.727 0.939598C11.4724 1.08656 11.2305 1.24797 11.0013 1.42384C10.7721 1.24797 10.5301 1.08656 10.2755 0.939598C9.21101 0.325256 7.9861 1.69339e-05 6.73063 1.69339e-05C5.82659 1.69339e-05 4.95057 0.163841 4.12293 0.489081C3.3233 0.802275 2.60261 1.25279 1.98379 1.82618C1.36751 2.39504 0.875206 3.07278 0.534783 3.82098C0.180808 4.59914 0 5.42549 0 6.27594C0 7.07819 0.173168 7.91418 0.516957 8.76462C0.804722 9.47533 1.21727 10.2125 1.74441 10.957C2.57969 12.1351 3.7282 13.3637 5.15429 14.6093C7.51753 16.674 9.85784 18.1002 9.95716 18.158L10.5607 18.5242C10.8281 18.6856 11.1719 18.6856 11.4393 18.5242L12.0428 18.158C12.1421 18.0978 14.4799 16.674 16.8457 14.6093C18.2718 13.3637 19.4203 12.1351 20.2556 10.957C20.7827 10.2125 21.1978 9.47533 21.483 8.76462C21.8268 7.91418 22 7.07819 22 6.27594C22.0025 5.42549 21.8217 4.59914 21.4677 3.82098ZM11.0013 16.6186C11.0013 16.6186 1.93541 11.1232 1.93541 6.27594C1.93541 3.82098 4.08218 1.831 6.73063 1.831C8.59219 1.831 10.2067 2.81394 11.0013 4.24981C11.7958 2.81394 13.4103 1.831 15.2719 1.831C17.9203 1.831 20.0671 3.82098 20.0671 6.27594C20.0671 11.1232 11.0013 16.6186 11.0013 16.6186Z\" fill=\"#696969\"/></svg>'}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t<p class=\"post-likes-text\">Нравится <strong>${post.likes.length}${postLikesListHtml.length !== 0 ? ':' : ''}</strong>${postLikesListHtml}</p>\r\n\t\t\t</div>\r\n\t\t\t${_index_js__WEBPACK_IMPORTED_MODULE_2__.user && post.user.id === _index_js__WEBPACK_IMPORTED_MODULE_2__.user._id ? '<button data-post-id=\"${post.id}\" class=\"delete-button\">Удалить</button>' : ''}\r\n\t\t</div>\r\n\t\t<p class=\"post-text\"><span class=\"user-name\">${post.user.name} </span>${post.description}</p>\r\n\t\t<p class=\"post-date\">19 минут назад</p>\r\n\t</li>`\r\n\t}).join(\"\");\r\n\r\n\tconst appHtml = `\r\n\t<div div class=\"page-container\">\r\n\t\t<div class=\"header-container\"></div>\r\n\t\t<div class=\"post-header\" ${userPosts ? '' : 'style=\"display: none\"'}\" >\r\n\t\t\t<img src=\"${_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[0].user.imageUrl}\" class=\"post-header__user-image\">\r\n\t\t\t<p class=\"post-header__user-name\"  style=\"font-size: 24px;\">${_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[0].user.name}</p>\r\n\t\t</div >\r\n\t\t<ul class=\"posts\">\r\n\t\t\t${postHtml}\r\n\t\t</ul>\r\n\t</div> `;\r\n\tappEl.innerHTML = appHtml;\r\n\r\n\t(0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n\t\telement: document.querySelector(\".header-container\"),\r\n\t});\r\n\r\n\t// клик для перехода в посты юзера\r\n\tfor (let userEl of document.querySelectorAll(\".post-header\")) {\r\n\t\tuserEl.addEventListener(\"click\", () => {\r\n\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\r\n\t\t\t\tuserId: userEl.dataset.userId,\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\t// клик для лайка/дизлайка\r\n\tfor (let likeEl of document.querySelectorAll(\".like-button\")) {\r\n\t\tlikeEl.addEventListener(\"click\", (event) => {\r\n\t\t\tevent.stopPropagation();\r\n\t\t\tif (_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[likeEl.dataset.index].isLiked) {\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.dislikePosts)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), id: likeEl.dataset.postId })\r\n\t\t\t\t\t.then(() => {\r\n\t\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.POSTS_PAGE);\r\n\t\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.likePosts)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), id: likeEl.dataset.postId })\r\n\t\t\t\t\t.then(() => {\r\n\t\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.POSTS_PAGE);\r\n\t\t\t\t\t})\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\t// Удаление поста\r\n\tconst deleteButtonsElements = appEl.querySelectorAll(\".delete-button\");\r\n\tfor (const deleteButtonElement of deleteButtonsElements) {\r\n\t\tdeleteButtonElement.addEventListener('click', (event) => {\r\n\t\t\tevent.stopPropagation();\r\n\t\t\tconst id = deleteButtonElement.dataset.postId;\r\n\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.deletePosts)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), id })\r\n\t\t\t\t.then(() => {\r\n\t\t\t\t\treturn (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.POSTS_PAGE);\r\n\t\t\t\t})\r\n\t\t})\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/posts-page-component.js?");

/***/ }),

/***/ "./components/upload-image-component.js":
/*!**********************************************!*\
  !*** ./components/upload-image-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUploadImageComponent: () => (/* binding */ renderUploadImageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n\r\n\r\nfunction renderUploadImageComponent({ element, onImageUrlChange }) {\r\n\tlet imageUrl = \"\";\r\n\r\n\tconst render = () => {\r\n\t\telement.innerHTML = `\r\n  <div class=\"upload=image\">\r\n      ${imageUrl\r\n\t\t\t\t? `\r\n          <div class=\"file-upload-image-conrainer\">\r\n            <img class=\"file-upload-image\" src=\"${imageUrl}\">\r\n            <button class=\"file-upload-remove-button button\">Заменить фото</button>\r\n          </div>\r\n          `\r\n\t\t\t\t: `\r\n            <label class=\"file-upload-label secondary-button\">\r\n                <input\r\n                  type=\"file\"\r\n                  class=\"file-upload-input\"\r\n                  style=\"display:none\"\r\n\t\t\t\t\t\trequired\r\n                />\r\n                Выберите фото\r\n            </label>\r\n          \r\n      `\r\n\t\t\t}\r\n  </div>\r\n`;\r\n\r\n\t\tconst fileInputElement = element.querySelector(\".file-upload-input\");\r\n\r\n\t\tfileInputElement?.addEventListener(\"change\", () => {\r\n\t\t\tconst file = fileInputElement.files[0];\r\n\t\t\tif (file) {\r\n\t\t\t\tconst lableEl = document.querySelector(\".file-upload-label\");\r\n\t\t\t\tlableEl.setAttribute(\"disabled\", true);\r\n\t\t\t\tlableEl.textContent = \"Загружаю файл...\";\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.uploadImage)({ file }).then(({ fileUrl }) => {\r\n\t\t\t\t\timageUrl = fileUrl;\r\n\t\t\t\t\tonImageUrlChange(imageUrl);\r\n\t\t\t\t\trender();\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\telement\r\n\t\t\t.querySelector(\".file-upload-remove-button\")\r\n\t\t\t?.addEventListener(\"click\", () => {\r\n\t\t\t\timageUrl = \"\";\r\n\t\t\t\tonImageUrlChange(imageUrl);\r\n\t\t\t\trender();\r\n\t\t\t});\r\n\t};\r\n\r\n\trender();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/upload-image-component.js?");

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromLocalStorage: () => (/* binding */ getUserFromLocalStorage),\n/* harmony export */   removeUserFromLocalStorage: () => (/* binding */ removeUserFromLocalStorage),\n/* harmony export */   saveUserToLocalStorage: () => (/* binding */ saveUserToLocalStorage)\n/* harmony export */ });\nfunction saveUserToLocalStorage(user) {\r\n\twindow.localStorage.setItem(\"user\", JSON.stringify(user));\r\n}\r\n\r\nfunction getUserFromLocalStorage(user) {\r\n\ttry {\r\n\t\treturn JSON.parse(window.localStorage.getItem(\"user\"));\r\n\t} catch (error) {\r\n\t\treturn null;\r\n\t}\r\n}\r\n\r\nfunction removeUserFromLocalStorage(user) {\r\n\twindow.localStorage.removeItem(\"user\");\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./helpers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   renderApp: () => (/* binding */ renderApp),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-post-page-component.js */ \"./components/add-post-page-component.js\");\n/* harmony import */ var _components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page-component.js */ \"./components/auth-page-component.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ \"./routes.js\");\n/* harmony import */ var _components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-page-component.js */ \"./components/posts-page-component.js\");\n/* harmony import */ var _components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading-page-component.js */ \"./components/loading-page-component.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ \"./helpers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// СПИСОК БАГОВ:\r\n// При запросе API списка постов конкретного пользователя, не отображается параметр isLiked\r\n// не сделан перерендер только лайка. Обновляется вся страница с переходом на ленту постов\r\n// \r\n\r\nlet user = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.getUserFromLocalStorage)();\r\nlet page = null;\r\nlet posts = [];\r\n\r\nconst getToken = () => {\r\n\tconst token = user ? `Bearer ${user.token}` : undefined;\r\n\treturn token;\r\n};\r\n\r\nconst logout = () => {\r\n\tuser = null;\r\n\t(0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.removeUserFromLocalStorage)();\r\n\tgoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n};\r\n\r\n/**\r\n * Включает страницу приложения\r\n */\r\nconst goToPage = (newPage, data) => {\r\n\tif (\r\n\t\t[\r\n\t\t\t_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE,\r\n\t\t\t_routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE,\r\n\t\t\t_routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE,\r\n\t\t\t_routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE,\r\n\t\t\t_routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE,\r\n\t\t].includes(newPage)\r\n\t) {\r\n\t\tif (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n\t\t\t// Если пользователь не авторизован, то отправляем его на авторизацию перед добавлением поста\r\n\t\t\tpage = user ? _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE : _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE;\r\n\t\t\treturn renderApp();\r\n\t\t}\r\n\r\n\t\tif (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n\t\t\tpage = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\r\n\t\t\trenderApp();\r\n\r\n\t\t\treturn (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\r\n\t\t\t\t.then((newPosts) => {\r\n\t\t\t\t\tpage = _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE;\r\n\t\t\t\t\tposts = newPosts;\r\n\t\t\t\t\trenderApp();\r\n\t\t\t\t})\r\n\t\t\t\t.catch((error) => {\r\n\t\t\t\t\tconsole.error(error);\r\n\t\t\t\t\tgoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\t\t\t\t});\r\n\t\t}\r\n\r\n\t\tif (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n\t\t\tpage = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\r\n\t\t\trenderApp();\r\n\t\t\treturn (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserPosts)({ id: data.userId })\r\n\t\t\t\t.then((newPosts) => {\r\n\t\t\t\t\tpage = _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE;\r\n\t\t\t\t\tposts = newPosts;\r\n\t\t\t\t\trenderApp();\r\n\t\t\t\t})\r\n\t\t\t\t.catch((error) => {\r\n\t\t\t\t\tconsole.error(error);\r\n\t\t\t\t\tgoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\t\t\t\t});\r\n\t\t}\r\n\r\n\t\tpage = newPage;\r\n\t\trenderApp();\r\n\r\n\t\treturn;\r\n\t}\r\n\r\n\tthrow new Error(\"страницы не существует\");\r\n};\r\n\r\nconst renderApp = () => {\r\n\tconst appEl = document.getElementById(\"app\");\r\n\tif (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE) {\r\n\t\treturn (0,_components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__.renderLoadingPageComponent)({\r\n\t\t\tappEl,\r\n\t\t\tuser,\r\n\t\t\tgoToPage,\r\n\t\t});\r\n\t}\r\n\r\n\tif (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE) {\r\n\t\treturn (0,_components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderAuthPageComponent)({\r\n\t\t\tappEl,\r\n\t\t\tsetUser: (newUser) => {\r\n\t\t\t\tuser = newUser;\r\n\t\t\t\t(0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.saveUserToLocalStorage)(user);\r\n\t\t\t\tgoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\t\t\t},\r\n\t\t\tuser,\r\n\t\t\tgoToPage,\r\n\t\t});\r\n\t}\r\n\r\n\tif (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n\t\treturn (0,_components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent)({\r\n\t\t\tappEl,\r\n\t\t\tonAddPostClick({ description, imageUrl }) {\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postPosts)({ token: getToken(), description, imageUrl });\r\n\t\t\t\tgoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\t\t\t},\r\n\t\t});\r\n\t}\r\n\r\n\tif (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n\t\treturn (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\r\n\t\t\tappEl, userPosts: false,\r\n\t\t});\r\n\t}\r\n\r\n\tif (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n\t\t// TODO: реализовать страницу фотографию пользвателя\r\n\t\t// appEl.innerHTML = \"Здесь будет страница фотографий пользователя\";\r\n\t\t// return;\r\n\t\treturn (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\r\n\t\t\tappEl, userPosts: true,\r\n\t\t});\r\n\r\n\t}\r\n};\r\n\r\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./index.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\r\nconst POSTS_PAGE = \"posts\";\r\nconst USER_POSTS_PAGE = \"user-posts\";\r\nconst AUTH_PAGE = \"auth\";\r\nconst ADD_POSTS_PAGE = \"add-post\";\r\nconst LOADING_PAGE = \"loading\";\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;