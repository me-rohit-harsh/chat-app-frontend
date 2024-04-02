document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const chatList = document.getElementById('chatList');
    const chats = chatList.getElementsByClassName('list-group-item');

    // Function to filter chat list based on search input
    function filterChats() {
        const searchText = searchInput.value.trim().toLowerCase();

        Array.from(chats).forEach(chat => {
            const userName = chat.querySelector('h6').textContent.toLowerCase();
            if (userName.includes(searchText)) {
                chat.style.display = 'block';
            } else {
                chat.style.display = 'none';
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener('input', filterChats);
});
