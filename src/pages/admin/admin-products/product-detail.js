import { listD } from "../../../api/products";
import dashboard from "../dashboard";


const ProductDetail = {
    render: async (id) => {
        const response = await listD(id)
        const {data} = response;
        return (
            `
            <div>
            ${dashboard.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Chi Tiết 
                </h1>
            </div>
        </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <form id="formAddPost">
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input  type="text" value="${data.name}" id="name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                          </div>
                         <div class="col-span-6 sm:col-span-4">
                            <label  class="block text-sm font-medium text-gray-700">DESC</label>
                            <input value="${data.desc}" type="text" id="desc" autocomplete="desc" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                         </div>
                         <div class="col-span-6 sm:col-span-4">
                            <label  class="block text-sm font-medium text-gray-700">PRICE</label>
                            <input type="text" value="${data.price}" id="status" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                         </div>
                         <div class="col-span-6 sm:col-span-4">
                         <label  class="block text-sm font-medium text-gray-700">STATUS</label>
                         <input type="text" value="${data.status}" id="status" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                      </div>
                      </div>
                    </div>
                  </form>
                    </div>
                </div>
            </div>
        </main>
        
        </div>`)

    }
}
export default ProductDetail