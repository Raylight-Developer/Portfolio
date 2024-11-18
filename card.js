class Project extends HTMLElement {Image
	constructor() {
		super()
	}

	connectedCallback() {
		this.render()

		this.shadowRoot.querySelector('.card').addEventListener('click', () => {
			const link = this.getAttribute("link") || "#";
			window.open(link, "_blank");
		});
	}

	render() {
		const image = this.getAttribute("image") || ""
		const title = this.getAttribute("title") || "Title"
		const desc  = this.getAttribute("desc")  || "Description"
		const language = this.getAttribute("language")  || "C++"

		const imgShiftX = this.getAttribute("img-x") || "center"
		const imgShiftY = this.getAttribute("img-y") || "top"

		const template = `
		<style>
			.card {
				max-height: 20vh;
				display: flex;
				flex: 1;
				margin: 1rem 0;
				max-width: 800px;
				height: fit-contents;
				border-style: solid;
				border-width: 1px;
				border-radius: 10px;
				border-color: rgb(0,0,0);
				overflow: hidden;
				cursor: pointer;

				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				background: rgb(250,250,250);
				transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
			}
			.card:hover {
				transform: scale(1.025);
				background: rgb(250,250,255);
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
			}
			.title {
				display: flex;
				align-contents: top;
			}
			.language {
				height: 30px;
				width: 30px;
				object-fit: contain;
			}
			span {
				margin-left: 10px;
				font-size: 20pt;
				font-weight: 400;
				flex: 1;
			}
			.contents {
				flex: 1;
				padding: 10px;
			}
			.image {
				max-height: 20vh;
				object-position: ${imgShiftX} ${imgShiftY};
				object-fit: cover;
			}
		</style>
		
		<div class="card">
			<div class="contents">
				<div class="title">
					<img class="language" src="${language}.png">
					<span>${title}</span>
				</div>
				<p>${desc}</p>
			</div>
			<img class="image" src="${image}">
		</div>
		`
		this.attachShadow({ mode: "open" }).innerHTML = template
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
customElements.define("project-card", Project)