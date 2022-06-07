import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Books from "./client-books/Books";

const Home = {
  async render () {
      return `
      <div class="banner">
      ${ Header.render()}
  </div>
        <div class="banner">
            ${ Banner.render()}
        </div>
      <div class="product">
            ${await ListBooks.render()}
     </div>
     <div class="header">
            ${ Footer.render()}
     </div>

      `
  }
}

export default Home;