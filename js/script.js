let $ = document
let btn = $.getElementById ('btn')
let lyric = $.querySelector ('.modal-parent')
let section = $.getElementById ('section')
let exitX = $.querySelector ('.X')
btn.addEventListener ('click', function () {
    lyric.style.display = 'block'
    section.style.filter = 'blur(10px)'
})
exitX.addEventListener ('click', function () {
    lyric.style.display = 'none'
    section.style.filter = 'none'
})
