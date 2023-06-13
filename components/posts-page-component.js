import { USER_POSTS_PAGE, POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken, user } from "../index.js";
import { deletePosts, likePosts, dislikePosts } from "../api.js";
import { formatDistanceToNow } from "date-fns";

export function renderPostsPageComponent({ appEl, userPosts }) {
	const postHtml = posts.map((post, index) => {
		const postLikesListHtml = post.likes.map((like) => {
			return ` ${like.name} `
		})

		return `
		<li class="post" data-index="${index}">
		<div class="post-header" ${userPosts ? 'style="display: none"' : ''} data-user-id="${post.user.id}">
			<img src="${post.user.imageUrl}" class="post-header__user-image">
			<p class="post-header__user-name">${post.user.name}</p>
		</div>
		<div class="post-image-container">
			<img class="post-image" src="${post.imageUrl}">
		</div>
		<div class="post-likes">
			<div class="post-likes-body">
				<button data-post-id="${post.id}" data-index="${index}" class="like-button">
				${post.isLiked ?
				'<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4677 3.82098C21.1264 3.07326 20.6342 2.39568 20.0187 1.82618C19.4028 1.25497 18.6766 0.801048 17.8796 0.489081C17.0532 0.164306 16.1668 -0.00193165 15.2719 1.69339e-05C14.0164 1.69339e-05 12.7915 0.325256 11.727 0.939598C11.4724 1.08656 11.2305 1.24797 11.0013 1.42384C10.7721 1.24797 10.5301 1.08656 10.2755 0.939598C9.21101 0.325256 7.9861 1.69339e-05 6.73063 1.69339e-05C5.82659 1.69339e-05 4.95057 0.163841 4.12293 0.489081C3.3233 0.802275 2.60261 1.25279 1.98379 1.82618C1.36751 2.39504 0.875206 3.07278 0.534783 3.82098C0.180808 4.59914 0 5.42549 0 6.27594C0 7.07819 0.173168 7.91418 0.516957 8.76462C0.804722 9.47533 1.21727 10.2125 1.74441 10.957C2.57969 12.1351 3.7282 13.3637 5.15429 14.6093C7.51753 16.674 9.85784 18.1002 9.95716 18.158L10.5607 18.5242C10.8281 18.6856 11.1719 18.6856 11.4393 18.5242L12.0428 18.158C12.1421 18.0978 14.4799 16.674 16.8457 14.6093C18.2718 13.3637 19.4203 12.1351 20.2556 10.957C20.7827 10.2125 21.1978 9.47533 21.483 8.76462C21.8268 7.91418 22 7.07819 22 6.27594C22.0025 5.42549 21.8217 4.59914 21.4677 3.82098ZM11.0013 16.6186C11.0013 16.6186 1.93541 11.1232 1.93541 6.27594C1.93541 3.82098 4.08218 1.831 6.73063 1.831C8.59219 1.831 10.2067 2.81394 11.0013 4.24981C11.7958 2.81394 13.4103 1.831 15.2719 1.831C17.9203 1.831 20.0671 3.82098 20.0671 6.27594C20.0671 11.1232 11.0013 16.6186 11.0013 16.6186Z" fill="#FF0000"/></svg>'
				:
				'<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4677 3.82098C21.1264 3.07326 20.6342 2.39568 20.0187 1.82618C19.4028 1.25497 18.6766 0.801048 17.8796 0.489081C17.0532 0.164306 16.1668 -0.00193165 15.2719 1.69339e-05C14.0164 1.69339e-05 12.7915 0.325256 11.727 0.939598C11.4724 1.08656 11.2305 1.24797 11.0013 1.42384C10.7721 1.24797 10.5301 1.08656 10.2755 0.939598C9.21101 0.325256 7.9861 1.69339e-05 6.73063 1.69339e-05C5.82659 1.69339e-05 4.95057 0.163841 4.12293 0.489081C3.3233 0.802275 2.60261 1.25279 1.98379 1.82618C1.36751 2.39504 0.875206 3.07278 0.534783 3.82098C0.180808 4.59914 0 5.42549 0 6.27594C0 7.07819 0.173168 7.91418 0.516957 8.76462C0.804722 9.47533 1.21727 10.2125 1.74441 10.957C2.57969 12.1351 3.7282 13.3637 5.15429 14.6093C7.51753 16.674 9.85784 18.1002 9.95716 18.158L10.5607 18.5242C10.8281 18.6856 11.1719 18.6856 11.4393 18.5242L12.0428 18.158C12.1421 18.0978 14.4799 16.674 16.8457 14.6093C18.2718 13.3637 19.4203 12.1351 20.2556 10.957C20.7827 10.2125 21.1978 9.47533 21.483 8.76462C21.8268 7.91418 22 7.07819 22 6.27594C22.0025 5.42549 21.8217 4.59914 21.4677 3.82098ZM11.0013 16.6186C11.0013 16.6186 1.93541 11.1232 1.93541 6.27594C1.93541 3.82098 4.08218 1.831 6.73063 1.831C8.59219 1.831 10.2067 2.81394 11.0013 4.24981C11.7958 2.81394 13.4103 1.831 15.2719 1.831C17.9203 1.831 20.0671 3.82098 20.0671 6.27594C20.0671 11.1232 11.0013 16.6186 11.0013 16.6186Z" fill="#696969"/></svg>'}
					</button>
				<p class="post-likes-text">Нравится <strong>${post.likes.length}${postLikesListHtml.length !== 0 ? ':' : ''}</strong>${postLikesListHtml}</p>
			</div>
			${user && post.user.id === user._id ? `<button data-post-id="${post.id}" class="delete-button">Удалить</button>`
				: ''}
		</div>
		<p class="post-text"><span class="user-name">${post.user.name} </span>${post.description}</p>
		<p class="post-date">${formatDistanceToNow(new Date(post.createdAt))}</p>
	</li>`
	}).join("");

	const appHtml = `
	<div div class="page-container">
		<div class="header-container"></div>
		<div class="posts-container">
			<div class="post-header" ${userPosts ? '' : 'style="display: none"'}" >
				<img src="${posts[0].user.imageUrl}" class="post-header__user-image">
				<p class="post-header__user-name"  style="font-size: 24px;">${posts[0].user.name}</p>
			</div >
			<ul class="posts">
				${postHtml}
			</ul>
		</div>
	</div> `;
	appEl.innerHTML = appHtml;

	renderHeaderComponent({
		element: document.querySelector(".header-container"),
	});

	// клик для перехода в посты юзера
	for (let userEl of appEl.querySelectorAll(".post-header")) {
		userEl.addEventListener("click", () => {
			goToPage(USER_POSTS_PAGE, {
				userId: userEl.dataset.userId,
			});
		});
	}

	// клик для лайка/дизлайка
	for (let likeEl of appEl.querySelectorAll(".like-button")) {
		likeEl.addEventListener("click", (event) => {
			event.stopPropagation();
			if (posts[likeEl.dataset.index].isLiked) {
				dislikePosts({ token: getToken(), id: likeEl.dataset.postId })
					.then(() => {
						return goToPage(POSTS_PAGE);
					})
					.catch(() => {
						alert("Пожалуйста, авторизуйтесь");
					});
			} else {
				likePosts({ token: getToken(), id: likeEl.dataset.postId })
					.then(() => {
						return goToPage(POSTS_PAGE);
					})
					.catch(() => {
						alert("Пожалуйста, авторизуйтесь");
					});
			}
		});
	}

	// Удаление поста
	const deleteButtonsElements = document.querySelectorAll(".delete-button");
	for (const deleteButtonElement of deleteButtonsElements) {
		deleteButtonElement.addEventListener('click', (event) => {
			event.stopPropagation();
			const id = deleteButtonElement.dataset.postId;
			deletePosts({ token: getToken(), id })
				.then(() => {
					return goToPage(POSTS_PAGE);
				})
		})
	}

}
