document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim()
    let elasticItem = document.querySelectorAll('.elastic li')

    if(val != '') {
        elasticItem.forEach(function(elem) {
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
            } else {
                elem.classList.remove('hide')
            }
        })
    }
    else {
        elasticItem.forEach(function(elem) {
            elem.classList.remove('hide')
        })
    }
}