import * as helper from "./helpers.js";

let author_id = 1;

const queryString = window.location.search;
if (queryString) {
    author_id = queryString.substring(1);
}

const params = await (helper.getAuthor(author_id));

const elPageTitle = document.querySelector('#page-title');
const elPostList = document.querySelector('#post-list');
const elLoading = document.querySelector('#loading');
const elEmptyPost = document.querySelector('#empty-post');

const createPostElement = (thumbnail, post) => {
    const elCol = document.createElement('div');
    elCol.classList.add('col-12');
    elCol.insertAdjacentHTML(
        'beforeend',
        `<div class="card mb-3 w-100">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${thumbnail}" class="img-fluid rounded-start" alt="skilvul" />
        </div>
        <div class="col-md-8 d-flex justify-between">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
            <a href="/post.html?post_id=${post.id}" class="btn btn-primary w-100 stretched-link">Read More</a>
          </div>
        </div>
      </div>
    </div>`
    );
};

const renderPosts = async() => {
    try {
        //Extract author_id
        const params = new URL("http://localhost/search.php?year=2008").searchParams;
        const author_id = params.get('userId');
        getAuthor(author_id);
    } catch {

        elLoading.classList.add("d-none");

    }

};

renderPosts();