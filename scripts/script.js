function manualScroll(id, direction) {
    const track = document.getElementById(id);
    const card = track.querySelector('.card');
    if (!card) return;
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(track).gap);
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function openModal(title, desc, imgSrc, tag, url) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerHTML = desc;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTag').innerText = tag;
    
    const modalLink = document.getElementById('modalLink');
    if(url && url.trim() !== '') {
        modalLink.href = url;
        modalLink.style.display = 'inline-flex';
    } else {
        modalLink.style.display = 'none';
    }
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') closeModal(); 
});
