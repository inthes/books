const index = document.querySelector('.index');
const sort = document.querySelector('.sort');
const car = document.querySelector('.car');
const mine = document.querySelector('.mine');
const tabbar = document.querySelector('.tabbar');
for (let i = 0; i < tabbar.children.length; i++) {
    tabbar.children[i].setAttribute('number', 'i');
}
// let tabbars = document.querySelector('.tabbar');
// // let tabbarLi = tabbars.querySelectorAll('li');
// let tabbarImg = tabbars.querySelectorAll('img');
// for (let i = 0; i < tabbars.children.length; i++) {
//     tabbars.children[i].addEventListener('click', function () {
//         for (let j = 0; j < tabbars.children.length; j++) {
//             tabbarImg.src
//         }
//     })
// }