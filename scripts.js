function addComment(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== '') {
        const commentSection = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = <p><strong>You:</strong> ${commentText}</p>;
        commentSection.appendChild(newComment);
        document.getElementById('comment-text').value = '';
    } else {
        alert('Please enter a comment.');
    }
}