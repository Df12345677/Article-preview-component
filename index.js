const sendButton = document.getElementById('send-button')
const shareImgs = document.getElementById('share-imgs')

sendButton.addEventListener('mousemove', () => {

    shareImgs.style.display = "flex"
})

sendButton.addEventListener('mouseleave', () => {
    shareImgs.style.display = "none"
})

sendButton.addEventListener('click', () => {
    shareImgs.style.display = "none"
})

shareImgs.addEventListener('mousemove', () => {
    if (window.innerWidth >= 900) {
        shareImgs.style.display = "flex"

    }
})

