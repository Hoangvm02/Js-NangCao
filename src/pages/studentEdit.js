import { getD, update } from "../api/student";
import router from "../helpers/router";
import dashboard from "./admin/dashboard";

const StudentEdit = {
    render: async (id) =>{
        const response = await getD(id);
        student = response.data
        return `
            <div>${dashboard.render()}</div>
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Edit
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
                        <input  type="text" value="${student.name}" id="name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                      <label  class="block text-sm font-medium text-gray-700">MSV</label>
                      <input type="text" value="${student.msv}" id="msv" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                    </div>
                      <div class="col-span-6">
                      <label class="block text-sm font-medium text-gray-700">
                        Img
                      </label>
                      <input type="text" value="${student.avatar}" id="avatar" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black rounded-md">
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="button" class=" btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
                  </div>
                </div>
              </form>
                </div>
            </div>
        </div>
    </main>
</div>
        
        `
    },
    afterRender: () => {
      const submitBtn = document.querySelector('.btn');
      submitBtn.addEventListener('click', () => {
          const name = document.querySelector('#name').value;
          const msv = document.querySelector('#msv').value;
          const avatar = document.querySelector('#avatar').value;

          // const submitData = {
          //     name: name,
          //     msv: msv,
          //     avatar: avatar,
          // };
          const submitData = {
              name: name,
              msv: msv, 
              avatar:avatar
            }

          // console.log(submitData);
          update(submitData)
          // createStudent(submitData);
          // window.location.replace('/students')
          // document.location.href = "/students";
          router.navigate('/students')
      });
    }


}
export default StudentEdit