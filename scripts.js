function addComment(event) {
    event.preventDefault(); 

    const commentText = document.getElementById('comment-text').value.trim();

    if (commentText) {
        const commentsContainer = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <p><strong>You:</strong> ${commentText}</p>
        `;
        commentsContainer.appendChild(newComment);
        document.getElementById('comment-text').value = '';
        console.log('Comment added successfully!');
    } else {
        alert('Please enter a comment before submitting.');
    }
}

document.querySelector('.comment-form').addEventListener('submit', addComment);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('ques').value;

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
        alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill out all the fields.");
    }
});