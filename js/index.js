let menu_items = document.querySelectorAll(".menu_item");
let filter_btns = document.querySelectorAll("button")

filter_btns.forEach(btn => {

    btn.addEventListener("click", (e) => {
        let target = e.target.dataset.filter

        menu_items.forEach(item => {

            if (target == "all") { item.style.display = "block" }
            else {
                if (item.classList.contains(target)) {

                    item.style.display = "block "
                }
                else { item.style.display = "none " }
            }
        })
    })








})