import { listD } from "../../api/books";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const BookDetailPage = {
    async render(id) {
        const { data: books } = await listD(id)
        return `
        ${Header.render()}
        <section>
        <div class="mt-2 max-w-7xl m-auto">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Chi tiết sản phẩm</h2>
        </div>
        <div class="my-8 max-w-7xl m-auto md:flex  items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img class="w-full rounded-3xl" alt="image of a girl posing"
                    src="${books.img}" />
            </div>
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <h1
                        class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                        ${books.name}</h1>
                        <br>
                        <h2 class="lg:text-xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"> ${books.price} <u>$</u></h2>
                        
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p class="text-base leading-4 text-gray-800 dark:text-gray-300"><b>Sale</b></p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm leading-none text-gray-600 dark:text-gray-300">${books.priceSale}</p>
                        <div class="w-6 h-6 ml-3 mr-4 cursor-pointer">
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300"><b>Số lượng:</b>
                </p>
                <input type="number" id="inputValue" placeholder="1" class="form-input mt-1 block w-2/6 pl-2 outline-none py-1 rounded-sm"/>
            </div>
                
                <br>
                <button  id="btnAddToCart" class="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    </section>
        ${Footer.render()}
        `;
    }
};
export default BookDetailPage;