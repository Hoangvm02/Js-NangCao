import { list } from "../../api/books";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListBooks from "../../components/ListBooks";

const ProductPage = {
    async render() {
        const response = await list()
        return `
        ${Header.render()}
        ${await ListBooks.render()}
        ${Footer.render()}
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};
export default ProductPage;