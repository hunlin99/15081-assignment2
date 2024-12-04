document.addEventListener('DOMContentLoaded', function () {
    const createPostBtn =
        document.getElementById('createPostBtn');
    const createPostModal =
        document.getElementById('createPostModal');
    const closeModal =
        document.getElementById('closeModal');
    const postForm =
        document.getElementById('postForm');
    const postSubmitBtn =
        document.getElementById('postSubmitBtn');
    const postContainer =
        document.querySelector('.post-container');
    const postDetailModal =
        document.getElementById('postDetailModal');
    const closeDetailModal =
        document.getElementById('closeDetailModal');
    const detailTitle =
        document.getElementById('detailTitle');
    const detailDate =
        document.getElementById('detailDate');
    const detailDescription =
        document.getElementById('detailDescription');
    const postImage =
        document.getElementById('postImage');
    const detailImage =
        document.getElementById('detailImage');

    createPostBtn.addEventListener('click', function () {
        createPostModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        // Add fadeOut class
        createPostModal.classList.add('fadeOut');
        setTimeout(() => {
            createPostModal.style.display = 'none';
            // Remove fadeOut class
            createPostModal.classList.remove('fadeOut');
        }, 500);
    });
});