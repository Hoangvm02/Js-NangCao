import { getAll, remove } from "../api/student";
import dashboard from "./admin/dashboard";
import reRender from "../helpers/reRender"
import router from "../helpers/router";

const Students = {
    render: async () => {
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3. fetch nhận vào đường dẫn API endpoint của BE
        // const response = await fetch('https://629345787aa3e6af1a08bc3c.mockapi.io/students')
        // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
        // console.log('response',response);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        const response = await getAll();
        const {data} = response
        // const students = await response.json();
        // console.log("students", students);
        return `  
          <div>
            ${dashboard.render()}
          </div>
        <div>
        <div class="w-11/12 mx-auto">
                      <header class="bg-white shadow">
                          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                              <div class="lg:flex lg:items-center lg:justify-between">
                                  <div class="flex-1 min-w-0">
                                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                      Quản lý sản phẩm
                                  </h2>
                                  </div>
                                  <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                  <a href="/students/add" class="sm:ml-3">
                                      <button type="button"
                                      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      Thêm mới
                                      </button>
                                  </a>
                                  </div>
                              </div>
                          </div>
                      </header>
        <main>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                    </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DESC
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        PRICE
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chi tiết
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SỬA
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Xóa
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                  ${data.map((students) => `
                  <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${students.id}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="">
                    </div>
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="${students.avatar}" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          ${students.name}
                        </div>
                      
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 mx-auto">
                  <p class="max-w-full px-2 text-xs font-semibold">
                    ${students.msv}
                  </p>
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    ${students.createdAt}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <a href="/admin/products/${students.id}/edit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Chi tiết</a>
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                  <a href="/students/edit/${students.id}" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Edit</a>
                  </td>
                  <td>
                  <button type="button" data-id="${students.id}" data-name="${students.name}" class="btn btn-danger focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                  `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </main>
        </div>`;
    },
    afterRender: () => {
      const deletebtn =  document.querySelectorAll('.btn-danger');

      deletebtn.forEach((btn) => {
        // const data = btn.dataset;
        btn.addEventListener('click', async () =>{
          const  btnId = btn.dataset.id
        
          await  remove(btnId)
          router.navigate('/students')
          // document.location.href = "/students"
          await reRender('#content', Students);
         
        });
      });
    }

};
export default Students