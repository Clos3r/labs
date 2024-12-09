let activeFilters = [];

function removeTag(button) {
    const tag = button.parentElement;
    const tagText = tag.firstChild.textContent.trim();
    tag.remove();    
    activeFilters = activeFilters.filter(filter => filter !== tagText);
    applyFilters();
}

function clearTags() {
    const tagContainer = document.getElementById('tagContainer');
    const tags = tagContainer.querySelectorAll('.tag');
    tags.forEach(tag => tag.remove());    
    activeFilters = [];
    applyFilters();
}


function applyFilters() {
    const jobListings = document.querySelectorAll('.job-card');
    jobListings.forEach(job => {
        const jobTags = Array.from(job.querySelectorAll('.job-card .tag-container .tag')).map(tag => tag.textContent.trim());       
        const isMatch = activeFilters.every(filter => jobTags.includes(filter));
        if (isMatch || activeFilters.length === 0) {
            job.style.display = 'flex';
        } else {
            job.style.display = 'none';
        }
    });
}


function initializeFilters() {
    applyFilters();
}


function addFilter(tagText) {
    
    if (activeFilters.includes(tagText)) {
        return;
    }

    activeFilters.push(tagText);
    const tagContainer = document.getElementById('tagContainer');
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = tagText + ' ';
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = function() {
        removeTag(removeBtn);
    };

    tag.appendChild(removeBtn);
    tagContainer.insertBefore(tag, tagContainer.querySelector('.clear-btn'));
    applyFilters();
}


function setupJobTagClick() {
    const jobTagElements = document.querySelectorAll('.job-card .tag-container .tag');
    jobTagElements.forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', () => {
            addFilter(tag.textContent.trim());
        });
    });
}


function setupAvailableFiltersClick() {
    const availableFilters = document.querySelectorAll('.available-filters-container .available-filter');
    availableFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            addFilter(filter.textContent.trim());
        });
    });
}


window.onload = function() {
    initializeFilters();
    setupJobTagClick();
    setupAvailableFiltersClick();
};