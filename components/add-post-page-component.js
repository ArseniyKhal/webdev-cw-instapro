import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
	let imageUrl = "";

	const render = () => {
		const appHtml = `
   <div class="page-container">
		<div class="header-container"></div>
		<div class="form">
			<h3 class="form-title">Добавить пост</h3>
			<div class="form-inputs">
				<div class="upload-image-container"></div>
				<p>Опишите фотографию:</p>
				<textarea id="text-input" class="input text-input" required/></textarea>
				<button class="button" id="add-button">Добавить</button>
			</div>
		</div>
   </div>`;

		appEl.innerHTML = appHtml;

		const uploadImageContainer = appEl.querySelector(".upload-image-container");
		if (uploadImageContainer) {
			renderUploadImageComponent({
				element: uploadImageContainer,
				onImageUrlChange(newImageUrl) {
					imageUrl = newImageUrl;
				},
			});
		}

		renderHeaderComponent({
			element: document.querySelector(".header-container"),
		});

		document.getElementById("add-button").addEventListener("click", () => {
			const text = document.getElementById("text-input").value;

			if (!imageUrl) {
				alert("Не выбрана фотография");
				return;
			}
			if (!text) {
				alert("Опишите фотографию");
				return;
			}

			onAddPostClick({
				description: text,
				imageUrl,
			});
		});
	};

	render();
}
