
    document.addEventListener("DOMContentLoaded", function () {
        var chatBox = document.getElementById('chatBox');
        var chatButton = document.getElementById('chatButton');
        var maximizeButton = document.getElementById('maximizeChat');

        // Function to toggle chat box visibility
        function toggleChatBox() {
            if (chatBox.style.display === 'none') {
                chatBox.style.display = 'block';
                chatButton.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                chatBox.style.display = 'none';
                chatButton.innerHTML = '<i class="fa-solid fa-comments fas fa-2x"></i>';
            }
        }

        // Call toggleChatBox() initially to ensure the chat box is displayed
        toggleChatBox();

        // Event listener for chat button
        document.getElementById('chatButton').addEventListener('click', function () {
            toggleChatBox();
        });

        // Event listener for maximize button
        document.getElementById('maximizeChat').addEventListener('click', function () {
            var isMaximized = chatBox.classList.toggle('maximized');
            maximizeButton.innerHTML = isMaximized ? '<i class="fas fa-compress-alt"></i>' : '<i class="fas fa-expand-alt"></i>';
        });
    }); 