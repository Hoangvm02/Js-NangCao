import Footer from "../components/Footer";
import Header from "../components/Header";

const Signin = {
  render() {
    return `
      <div>
        ${Header.render()}
      </div>  
        <div class="h-full from-green-400 to-indigo-900 w-full py-16 px-4">
            <div class="flex flex-col items-center justify-center">
                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div class="mt-6  w-full">
                            <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div class="relative flex items-center justify-center">
                            <input id="pass" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport">                                    
                            </div>
                           </div>
                        </div>
                        <div class="mt-8">
                            <button role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">ĐĂNG NHẬP</button>
                        </div>
                </div>
            </div>
        </div>
    
    <div>
        ${Footer.render()}
    </div>
        `;
  },
};
export default Signin;
