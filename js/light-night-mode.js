// Hàm chuyển chế độ
function toggleMode() {
    document.body.classList.toggle('light-mode');
    const toggleButton = document.getElementById('mode-toggle');
    console.log(document.body.classList.contains('light-mode'));  // Kiểm tra trạng thái
    if (document.body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Chế độ sáng';
        localStorage.setItem('mode', 'light');
    } else {
        toggleButton.textContent = 'Chế độ tối';
        localStorage.setItem('mode', 'dark');
    }
}


// Kiểm tra chế độ người dùng đã chọn trước đó
window.onload = function() {
    const savedMode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('mode-toggle');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        toggleButton.textContent = 'Chế độ tối';
    } else {
        document.body.classList.remove('light-mode');
        toggleButton.textContent = 'Chế độ sáng';
    }
}
