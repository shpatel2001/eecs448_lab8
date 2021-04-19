document.addEventListener("DOMContentLoaded", () => {
    current = 0
    image_arr = new Array
    image_arr[0] = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Kansas_Jayhawks_logo.svg/1200px-Kansas_Jayhawks_logo.svg.png"
    image_arr[1] = "https://www.tvinsider.com/wp-content/uploads/2020/12/the-office-key-art-nbc-peacock.jpg"
    image_arr[2] = "https://admincms.carlhansen.com/globalassets/products/coffee-tables/e021-800/e021-eg-olie-sort.png?aspect=16:9&device=desktop&size=medium&display=standard"
    image_arr[3] = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
    image_arr[4] = "https://careersforimpact.com/wp-content/uploads/2016/06/summer-01.jpg"
    
    document.querySelector("#image").src = image_arr[current]
    document.querySelector("#pre").addEventListener("click", () => {
        console.log("pre clicked")
        if (current == 0) {
            current = 4
        }
        else
            current -= 1
        document.querySelector("#image").src = image_arr[current]
    })
    document.querySelector("#next").addEventListener("click", () => {
        console.log("next clicked")
        if (current == 4) {
            current = 0
        }
        else
            current += 1
        document.querySelector("#image").src = image_arr[current]
    })
})
