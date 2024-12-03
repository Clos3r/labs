function openFolder(folderId) {
    const folder = document.getElementById(folderId);

    const fileLists = document.querySelectorAll('.file-list');
    fileLists.forEach(fileList => {
        fileList.style.display = 'none';
    });

    if (folder) {
        folder.style.display = 'block';
    }
}

function closeFolder(event, folderId) {
    event.stopPropagation(); 
    const folder = document.getElementById(folderId);
    if (folder) {
        folder.style.display = 'none';
    }
}