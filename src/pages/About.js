import Footer from "../components/Footer"
import Header from "../components/Header"
import tintuc  from "../new-data"
const About = {
    render : () => `
    ${Header.render()}
    <div id="blog" class="bg-gray-100 dark:bg-gray-900 px-4 xl:px-4 py-14">
    ${tintuc.map((tin) => (
    `<div>
    <div class="mx-auto container">
        <div tabindex="0"  aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
            <div  class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabindex="0" class="focus:outline-none" aria-label="card 1">
                    <img role="img" aria-label="code editor" tabindex="0" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="code editor" />
                    <div class="py-4 px-8 w-full flex justify-between bg-indigo-700">
                        <p  tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                        <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                   
                        <h1 tabindex="0" class="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">${tin.title}</h1>
                        <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">${tin.content}</p>
                        <div class="w-full flex justify-end" >
                            <button class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                <span class=" text-base tracking-wide text-indigo-700">Read more</span>
                               <img class="ml-3 lg:ml-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg" alt="arrow"/>
                            </button>
                        </div>
                        <div class="h-5 w-2"></div>
                    </div>
                </div>
                <div>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div tabindex="0" class="focus:outline-none " aria-label="card 2" >
                            <img tabindex="0" role="img" aria-label="gaming" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                            <div class="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                <p tabindex="0" class="focus:outline-none  text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                            </div>
                            <div class="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 tabindex="0" class="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">${tin.title}</h1>
                                <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">${tin.content}...</p>
                            </div>
                        </div>
                        <div  tabindex="0" class="focus:outline-none" aria-label="card 3">
                            <img tabindex="0" role="img" aria-label="gaming" class="focus:outline-none focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                            <div class="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                            </div>
                            <div class="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 tabindex="0" class="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">${tin.title}</h1>
                                <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">${tin.content}...</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div tabindex="0" class="focus:outline-none " aria-label="card 4">
                            <img tabindex="0" role="img" aria-label="laptop" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                            <div class="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                            </div>
                            <div class="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 tabindex="0" class="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">${tin.title}</h1>
                                <p tabindex="0" class="focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">${tin.content}...</p>
                            </div>
                        </div>
                        <div tabindex="0" class="focus:outline-none" aria-label="card 5">
                            <img tabindex="0" role="img" aria-label="worker" class="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                            <div class="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                <p tabindex="0" class="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                            </div>
                            <div class="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 tabindex="0" class="focus:outline-none  text-lg text-gray-900 dark:text-white font-semibold tracking-wider">${tin.title}</h1>
                                <p tabindex="0" class="focus:outline-none  text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2 break-words">${tin.content}...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
    )).join('')
}
</div>  
${Footer.render()}
    `
}
export default About