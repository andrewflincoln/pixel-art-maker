window.addEventListener('DOMContentLoaded', function () {
    
    let curColor = 'black'
    let curPalette = document.getElementById('current')
    let currentPaletteInd = document.getElementById('currentPaletteInd')

    document.addEventListener('click', function(event) {
        if (event.target.matches('.select')) {
            curColor = event.target.id
            curPalette.innerHTML='Current color: ' + curColor
            if (curColor === 'black' || curColor === 'midnightblue' || curColor === 'darkblue' || curColor === 'darkslateblue') {
                curPalette.classList='white-text'
            } else {
                curPalette.classList = ''
            }
            currentPaletteInd.classList = 'select ' + curColor
        }
        if (event.target.classList.contains('pixel')) {
            event.target.classList= 'pixel ' + curColor
        }
    })
    








































})