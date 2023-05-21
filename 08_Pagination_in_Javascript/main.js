let pagination = document.querySelector('ul');

let pageNumber = 10;
let totalPage = 20;

pagination.innerHTML = paginationFunction(totalPage, pageNumber);

function paginationFunction(totalPage, pageNumber) {
    // console.log(totalPage)
    let beforePage = pageNumber - 1, afterPage = pageNumber + 1;
    let listTag = "";

    if (pageNumber > 1) {
        listTag += `<li class="prev btn" onclick="paginationFunction(totalPage, ${pageNumber - 1})"><span>Prev</span></li>`
    }

    if (pageNumber > 2) {
        listTag += `<li class="prev btn" onclick="paginationFunction(totalPage, 1)"><span>1</span></li>`
    }

    if (pageNumber > 3) {
        listTag += `<li class="dots"><span>...</span></li>`
    }

    if (pageNumber === totalPage) {
        beforePage = beforePage - 2;
    } else if (pageNumber === totalPage - 1) {
        beforePage = beforePage - 1;
    }

    if (pageNumber === 1) {
        afterPage = afterPage + 2;
    } else if (pageNumber === 2) {
        afterPage = afterPage + 1;
    }

    for (let i = beforePage; i <= afterPage; i++) {

        if (totalPage < i) {
            break;
        }

        if (i == 0) {
            i = i + 1;
        }

        if (pageNumber === i) {
            active = "active"
        } else {
            active = ""
        }

        listTag += `<li class="btn ${active}" onclick="paginationFunction(totalPage, ${i})"><span>${i}</span></li>`
    }

    if (pageNumber < totalPage - 2) {
        listTag += `<li class="dots"><span>...</span></li>`
    }

    if (pageNumber < totalPage - 1) {
        listTag += `<li class="prev btn" onclick="paginationFunction(totalPage, ${totalPage})"><span>${totalPage}</span></li>`
    }

    if (pageNumber < totalPage) {
        listTag += `<li class="prev btn" onclick="paginationFunction(totalPage, ${pageNumber + 1})"><span>Next</span></li>`
    }

    pagination.innerHTML = listTag;
    return listTag;
}

