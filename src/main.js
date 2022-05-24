import Navigo from "navigo"
import Header from "./components/Header";
import Footer from "./components/Footer";
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";

// Khởi tạo đối tượng navigo
const router = new Navigo('/', {linksSelector: "a"})
function render (content) {
    // test boostrap button
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

router.on({
    "/": () => render(Home.render()),
    "/about": () => render(About.render()),
    "/news": () => render()
});



router.resolve();


    // arrow function : const tên Hàm = () => {};

// const arrowRender = () =>{
//     document.querySelector('#header').innerHTML = '<div>HEADER</div>';
//     document.querySelector('#content').innerHTML = '<div>CONTENT</div>';
//     document.querySelector('#footer').innerHTML = '<div>FOOTER</div>';
// }


// function sum(a,b){
//     return a+b
// } // cú pháp thông thường
// const sum1 = ( a, b ) => {
//     return a+b;
// } //arrow function có return
// const sum2 = ( a, b ) => a + b //Nếu chỉ có return

// const display = a => console.log(a); //Nếu chỉ có 1 tham số 

// render();