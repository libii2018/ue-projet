const allDropdown = document.querySelectorAll('.dash__sidebar .dash__side-dropdown')

allDropdown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child')
    a.addEventListener('click', function(e) {
        e.preventDefault()

        if(!this.classList.contains('active')) {
            allDropdown.forEach( i=> {
                const aLink = i.parentElement.querySelector('a:first-child')
                aLink.classList.remove('active')
                i.classList.remove('show')
            })
        }

        this.classList.toggle('active')
        item.classList.toggle('show')
    })
})


const profile = document.querySelector('nav .dash__profile')
const imgProfile = profile.querySelector('img')
const dropdownProfile = profile.querySelector('.dash__profile-link')

imgProfile.addEventListener('click', function() {
    dropdownProfile.classList.toggle('show')
})

window.addEventListener('click', function(e) {
    if(e.target !== imgProfile) {
        if(e.target !== dropdownProfile) {
            if(dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show')
            }
        }
    }
})