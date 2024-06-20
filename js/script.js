const arrBtnPopup = document.querySelectorAll('[data-popup]')
arrBtnPopup.forEach(btn => {
    let popup = document.getElementById(btn.dataset.popup.substring(1))
    if (popup) {
        btn.addEventListener('click', e=> {
            e.preventDefault();
            popup.style.display = 'flex'
        })
    }
})
const arrPopupClose  = document.querySelectorAll('[data-popup-close]')
arrPopupClose.forEach(btn => {
    btn.addEventListener('click', e=> {
        e.preventDefault();
        btn.closest('.popup').style.display = 'flex'
    })
})
