// import Navigo from "navigo"
import Header from "./components/Header";
import Footer from "./components/Footer";
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import DetailStudent from "./pages/detail-sudent";
import dashboard from "./pages/admin/dashboard";
import Signin from "./pages/Signin";
import StudentAdd from "./pages/studentsAdd";
import Products from "./pages/admin/admin-products";
import ProductDetail from "./pages/admin/admin-products/product-detail";
import ProductAdd from "./pages/admin/admin-products/product-add";
import Books from "./pages/client-books/Books";
import BookDetailPage from "./pages/client-books/bookDetail";

// Khởi tạo đối tượng navigo
// const router = new Navigo('/', {linksSelector: "a"})
import router from './helpers/router'
import StudentEdit from "./pages/studentEdit";
// const render = async (content) => {
    // test boostrap button
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

    const render = async (content, id) => {
        document.getElementById("app").innerHTML = await content.render(id);
        // document.querySelector('#content').innerHTML = await content.render(id);
        if (content.afterRender) await content.afterRender(id);
    };

    // document.querySelector('#header').innerHTML = Header.render();
    // document.querySelector('#content').innerHTML = await content;
    // document.querySelector('#footer').innerHTML = Footer.render();
// }

router.on({
    "/": () => render(Home),
    "/about": () => render(About),
    "/admin": () => render(dashboard),
    "/news": () => render(),
    "/signin": () => render(Signin),
    "/students": () => render(Students),
    "/students/:id": (data) => render(DetailStudent, (data.data.id)),
    "/students/edit/:id": (data) => render(StudentEdit, (data.data.id)),
    "/students/add": () => render(StudentAdd),  
    "admin/products": () => render(Products),
    "/admin/products/add": () => render(ProductAdd),
    "/admin/products/:id/edit": (data) => render(ProductDetail, (data.data.id)),
    "books": () => render(Books),
    "/books/:id": (data) => render(BookDetailPage, (data.data.id)),
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
// const display1 = a => alert(a);
// Callback: hàm được truyền vào dưới dạng 1 đối số, và thực thi trong 1 hàm

// const abc = (print) => {
//     const result = sum(2, 3);
//     // có nhiều cách hiển thị khác nhau, và phải nhận kq hiển thị từ result
//     print(result);
//     // display(result);
//     // display1(result);
// };

// // abc(display);
// abc(display1);

// const loadScript = (src, callback) => {
//     const scriptE = document.createElement('script');
//     scriptE.src = src;
//     scriptE.onload = () => callback();
// };

// const khoitaosv = () => {
//     var sinhVien = {};
// }

// loadScript('moment.min.js', () => {
//     var sinhVien = {};
//     loadScript('https://cdn.com', () => {
//         // tinh tuoi sv
//         loadScript('https://cnd1.com', () => {
//             // 123123123
//         })
//     })
// })


// // đếm số chữ cái trong thông tin user
// const countString = (string, callback) => { // mang countString2 truyền vào
//     setTimeout(() => {
//         console.log(string);
//         callback(string);
//     }, 1000); //sau khi kết thúc 1s thì mới chạy lần lượt cả 2 đoạn logic
// };
// const countString2 = (string) => console.log(string);

// const receiveUser = (user, callback, callback2) => {
//     // Lấy ra tên
//     const username = user.name;
//     // nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
//     callback(username, callback2);
//     // countString(username);
// };

// // receiveUser({name: 'tuannda3'}, countString); // gọi trước nhưng chậm 1 giây
// // receiveUser({name: 'tuannda4'}, countString2);



// // Promise
// // let a = []; // 1
// // setTimeout(() => {
// //     a = [1, 2, 3]; // 2
// // }, 1000);
// // // console.log(a); // 3

// // Promise là đối tượng xử lý bất đồng bộ ở es6
// // resolve thực thi khi đúng, và gtrị truyền vào resolve sẽ trả ở then
// // reject thực thi khi sai, và giá trị truyền vào reject sẽ trả ở catch
// const setValueA = () => new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve([1, 2, 3]);
//         } else {
//             reject('bị lỗi');
//         }
//         // a = [1, 2, 3];
//     }, 5000);
// });

// let a = [];

// setValueA()
//     .then((data) => {data.push(4); return data})
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// ;

// async await


// const printA = async () => {
//     const result = await setValueA();
//     console.log( 'Chờ result  nhận kết quả rồi mới ra log này',result);
//     result.push(4);
//     console.log('sau khi thực hiện push eq hq này',result);
// }
// printA();