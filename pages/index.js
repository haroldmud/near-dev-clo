import React, { useState } from 'react';
import Header from "../components/header";
import Button from "../components/button";
import Lang from "../components/language";

export default function Home() {
  const [ lang, setLang ] = useState("hidden");

  const isOpened = () => {
    setLang("language")
  };
  const isClosed = () => {
    setLang("hidden")
  }
  
  return (
    <>
      <Header function={isOpened} linkOne={"./pageOne"} linkTwo={"https://wallet.near.org"}/>
      <section className="main text-center mx-auto pt-80 w-5/6 text-lightblack">
        <h1 className="md:text-72s md:w-full w-20x mx-auto font-medium text-36s text-color">Get <span class="main__title">NEAR</span> Certified!</h1>
        <p className=" pt-5 pb-24 lg:text-[22px] text-lg hero-paragraph-color leading-[28px]">We, in NEAR Balkans, know how important it is to have regional and local support. 
            Now you can become NEAR certified in a regional language of preference and connect 
            with our team to support your further growth within the NEAR ecosystem.</p>
        <div class="mx-auto text-center "><a href="#"><svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.25 14c0-6.765-5.485-12.25-12.25-12.25S1.75 7.235 1.75 14 7.235 26.25 14 26.25 26.25 20.765 26.25 14ZM0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Zm13.125-6.125a.875.875 0 0 1 1.75 0v10.138l3.756-3.757a.875.875 0 1 1 1.238 1.238l-5.25 5.25a.875.875 0 0 1-1.238 0l-5.25-5.25a.875.875 0 1 1 1.238-1.238l3.756 3.757V7.875Z" fill="#676767" opacity="0.3"></path></svg></a></div>
      </section> 
      <section className="text-lightblack">
        <div id="learning" className="grid mt-16 justify-items-center text-center font-medium text-3xl text-lightblack">
          <p className="md:text-3r md:w-32r md:leading-4r">Making your NEAR learning easy.</p>
        </div>  
        <div className="flex justify-center text-lightblack mt-56">
          <div className="flex md:justify-between md:flex-row flex-col-reverse md:w-5/6">
            <div className="md:w-26r md:mt-32 mt-12 md:ml-20 md:text-left text-center">
              <h1 className="md:text-3xl text-2xl font-bold">Open NEAR wallet</h1>
              <p className="text-lightblack md:text-xl pb-4 px-2 md:px-auto">
                Opening a NEAR wallet is the first step and
                essential part of joining the NEAR community
                as well as starting this course.
              </p>
              <Button style={"border border-lightblack text-lightblack pb-2 pt-1 md:px-4 px-4 rounded-1r mt-4"} value={"Create wallet"}/>
            </div>
            <img className="md:w-30r md:ml-32 hidden md:block" src="/images/image1.png" />
            <div className="flex justify-center">
              <img className="w-12r block md:hidden -mt-44" src="/images/imagemob1.png"/>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center hidden">
          <svg width="164" height="132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984" stroke="#676767" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="mt-12 flex flex-col md:flex-row text-xl md:w-5/6">
              <div className="hidden md:flex w-25r">
                <img src="/images/image2.png"/>
              </div>
              <div className="flex md:hidden justify-center mt-8 md:w-30r">
                <svg className="md:w-auto " viewBox="0 0 296 296" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#Target_svg__a)" d="M0 0h296v296H0z"></path><path opacity="0.05" d="M238 147c0 49.639-40.137 90-89.5 90S59 196.639 59 147c0-49.64 40.137-90 89.5-90S238 97.36 238 147Z" fill="#676767"></path><path d="M148.5 215c37.279 0 67.5-30.221 67.5-67.5 0-37.279-30.221-67.5-67.5-67.5-37.279 0-67.5 30.221-67.5 67.5 0 37.279 30.221 67.5 67.5 67.5Z" fill="#fff"></path><path d="M181.866 180.707c18.408-18.435 18.408-48.325 0-66.76-18.408-18.435-48.253-18.435-66.661 0-18.407 18.435-18.407 48.325 0 66.76 18.408 18.436 48.253 18.436 66.661 0Z" fill="url(#Target_svg__b)"></path><path d="M148.877 173.484c14.419-.181 25.962-12.033 25.781-26.474-.18-14.44-12.015-26-26.433-25.819-14.419.18-25.962 12.033-25.782 26.473.181 14.44 12.015 26 26.434 25.82Z" fill="#fff"></path><circle opacity="0.2" cx="148.5" cy="147.5" r="12.5" fill="#676767"></circle><path d="m147.5 148 77.303-90.446" stroke="#676767" stroke-miterlimit="10"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M146.679 139.207a.5.5 0 0 1 .527.471l.443 7.973 7.973-.442a.5.5 0 0 1 .055.998l-8.472.47a.499.499 0 0 1-.527-.471l-.47-8.472a.5.5 0 0 1 .471-.527Z" fill="#676767"></path><path d="M203.139 81 224 56.603 211.02 52 189 77.548 203.139 81ZM205 82.561 226.176 58 233 70.049 210.882 96 205 82.561Z" fill="#9092FB"></path><defs><linearGradient id="Target_svg__a" x1="252.652" y1="43.348" x2="43.348" y2="252.652" gradientUnits="userSpaceOnUse"><stop stop-color="#FDFEFF"></stop><stop offset="1" stop-color="#F1F7FF"></stop></linearGradient><linearGradient id="Target_svg__b" x1="115.205" y1="113.947" x2="139.073" y2="189.318" gradientUnits="userSpaceOnUse"><stop stop-color="#7BDDE2"></stop><stop offset="0.479" stop-color="#86B5EF"></stop><stop offset="1" stop-color="#9092FB"></stop></linearGradient></defs></svg>
              </div>
              <div className="md:mt-20 md:ml-44 mt-6">
                <h2 className="flex flex-col md:items-start items-center font-semibold md:text-4xl text-xl">Complete the course</h2>
                <p className="flex flex-col md:items-start items-center mt-4">In three simple modules, learn:</p>
                <ul className="flex flex-col md:gap-8 gap-4 md:mt-8 mt-4 text-15s">
                  <li className="flex flex-col md:flex-row  md:gap-4 md:items-start items-center">
                    <img className="md:w-[2rem] w-[1rem]" src="/icons/icon2.png"/>
                    <p>Essential NEAR concepts</p>
                  </li>
                  <li className="flex flex-col md:flex-row  md:gap-4 md:items-start items-center">
                    <img className="md:w-[2rem] w-[1rem]" src="/icons/icon3.png"/>
                    <p>How to write smart contracts on NEAR</p>
                  </li>
                  <li className="flex flex-col md:flex-row  md:gap-4 md:items-start items-center">
                    <img className="md:w-[2rem] w-[1rem]" src="/icons/icon4.png"/>
                    <p>How to build dapps on the NEAR blockchain</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <svg width="164" height="132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026" stroke="#676767" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div className="text-xl text-center">
          <h2 className="text-3xl font-semibold">Claim NEAR certificate</h2>
          <div className="flex justify-center">
            <p className="md:w-1/2">Upon course completion, receive the NEAR dev 101 certificate as an NFT on your NEAR wallet</p>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="md:w-40r mt-12 md:px-auto px-2" src="/images/image3.png"/>
        </div>
      </section>
      <section>
        <div className="relative md:flex hidden mt-44 justify-center text-lightblack">
          <img className="w-5/6" src="/images/image4bg.png"/>
          <div className="absolute left-44 top-32 w-fit font-semibold">
            <h2 className="text-2r">NEAR Development 101</h2>
            <Button style={"border border-lightblack text-lightblack pb-2 pt-1 md:px-4 px-4 rounded-1r mt-4"} value={"Create wallet"}/>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-44">
            <img className="block md:hidden w-12r" src="/images/image4.png"/>
          </div>
          <div className="md:hidden">
            <h2 className="text-2xl font-semibold text-center mt-2">NEAR Development 101</h2>
            <div className="flex justify-center mt-4">
              <Button style={"border border-lightblack text-lightblack pb-2 pt-1 md:px-4 px-4 rounded-1r mt-4"} value={"Start the course"}/>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-0 mt-12">
        <p className="text-center px-2 md:text-xl text-18s">Visit <span className="font-bold"><a href="https://nearbalkans.org/">nearbalkans.org</a></span> and make sure to follow us on our social and community channels!</p>
        <div className="flex justify-center">
          <div className="relative  md:flex hidden w-40r mt-12">
            <img className="md:block hidden w-5r pr-2" src="icons/icon1.png"/>
            <div class="flex items-center lg:ml-auto justify-between"><div class="lg:px-3 px-2 mt-40s lg:mt-0"><a href="https://twitter.com/NEARbalkan" target="__blank"><svg width="29" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.727 3.219a11.395 11.395 0 0 1-3.276.899A5.73 5.73 0 0 0 27.959.963a11.505 11.505 0 0 1-3.626 1.385A5.69 5.69 0 0 0 20.168.545a5.707 5.707 0 0 0-5.56 7.006 16.201 16.201 0 0 1-11.76-5.963 5.663 5.663 0 0 0-.772 2.869 5.704 5.704 0 0 0 2.538 4.749 5.707 5.707 0 0 1-2.585-.716v.07a5.712 5.712 0 0 0 4.577 5.596c-.478.13-.983.2-1.504.2a5.48 5.48 0 0 1-1.074-.106 5.71 5.71 0 0 0 5.33 3.964 11.45 11.45 0 0 1-7.088 2.439c-.46 0-.914-.028-1.36-.079a16.13 16.13 0 0 0 8.746 2.568c10.498 0 16.236-8.695 16.236-16.236l-.019-.739a11.395 11.395 0 0 0 2.854-2.948Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://discord.com/invite/NgSYSmJXg9" target="__blank"><svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.357 2.207A22.317 22.317 0 0 0 17.861.501a.084.084 0 0 0-.088.042c-.238.422-.5.974-.685 1.406a20.57 20.57 0 0 0-6.173 0c-.205-.481-.437-.95-.695-1.406a.086.086 0 0 0-.088-.042 22.197 22.197 0 0 0-5.496 1.706.07.07 0 0 0-.035.03C1.1 7.468.14 12.569.61 17.606a.095.095 0 0 0 .036.063 22.406 22.406 0 0 0 6.742 3.409.084.084 0 0 0 .094-.033c.52-.708.982-1.456 1.38-2.242a.085.085 0 0 0-.016-.1.085.085 0 0 0-.03-.018A14.98 14.98 0 0 1 6.71 17.68a.086.086 0 0 1-.008-.144c.142-.106.283-.217.418-.329a.083.083 0 0 1 .086-.012c4.42 2.019 9.204 2.019 13.57 0a.086.086 0 0 1 .089.012c.135.112.277.223.418.33a.086.086 0 0 1-.006.143c-.674.392-1.379.727-2.108 1.002a.087.087 0 0 0-.046.12c.405.784.87 1.534 1.379 2.242a.084.084 0 0 0 .095.033 22.335 22.335 0 0 0 6.751-3.41.084.084 0 0 0 .036-.062c.563-5.823-.944-10.882-3.993-15.366a.058.058 0 0 0-.034-.032ZM9.523 14.537c-1.331 0-2.426-1.221-2.426-2.72 0-1.5 1.075-2.722 2.426-2.722 1.362 0 2.447 1.232 2.427 2.722 0 1.499-1.075 2.72-2.427 2.72Zm8.97 0c-1.329 0-2.426-1.221-2.426-2.72 0-1.5 1.075-2.722 2.427-2.722 1.362 0 2.448 1.232 2.427 2.722 0 1.499-1.065 2.72-2.427 2.72Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://t.me/nearbalkanshub" target="__blank"><svg width="27" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.408 9.303c2.762-1.36 5.845-2.497 8.726-3.638 4.957-1.87 9.933-3.707 14.959-5.418.977-.291 2.735-.576 2.907.72-.094 1.835-.482 3.659-.749 5.483-.675 4.01-1.456 8.008-2.218 12.006-.262 1.332-2.127 2.021-3.32 1.169-2.869-1.733-5.759-3.449-8.59-5.222-.928-.843-.068-2.053.76-2.655 2.363-2.082 4.868-3.851 7.107-6.041.604-1.304-1.18-.205-1.77.132-3.233 1.993-6.388 4.108-9.798 5.86-1.741.857-3.771.124-5.512-.354-1.561-.578-3.848-1.16-2.502-2.042Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://www.facebook.com/nearbalkans" target="__blank"><svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.452 27.09V15.15h4.085l.613-4.656H9.452V7.522c0-1.347.38-2.266 2.352-2.266h2.511V1.09c-.434-.055-1.925-.182-3.66-.182-3.623 0-6.103 2.17-6.103 6.152v3.433H.454v4.655h4.098v11.942h4.9Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://www.linkedin.com/company/nearbalkans" target="__blank"><svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.247 2.625A2.623 2.623 0 1 1 0 2.622a2.623 2.623 0 0 1 5.247.003Zm.078 4.564H.08v16.422h5.246V7.189Zm8.29 0h-5.22v16.422h5.167v-8.618c0-4.8 6.257-5.246 6.257 0v8.618H25V13.21c0-8.093-9.26-7.792-11.438-3.817l.053-2.204Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://www.instagram.com/nearbalkans/" target="__blank"><svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.001.5c-3.666 0-4.126.016-5.566.082-1.437.065-2.419.293-3.277.627a6.61 6.61 0 0 0-2.391 1.556 6.627 6.627 0 0 0-1.559 2.392c-.334.858-.562 1.84-.627 3.276C.517 9.873.5 10.333.5 14c0 3.667.016 4.125.082 5.565.066 1.438.293 2.418.627 3.277a6.615 6.615 0 0 0 1.557 2.391 6.61 6.61 0 0 0 2.39 1.558c.86.334 1.84.562 3.278.628 1.44.065 1.9.081 5.566.081s4.125-.016 5.565-.081c1.437-.066 2.42-.294 3.278-.628a6.606 6.606 0 0 0 2.39-1.558 6.628 6.628 0 0 0 1.558-2.39c.332-.86.56-1.84.627-3.277.065-1.44.082-1.9.082-5.566s-.017-4.126-.082-5.566c-.067-1.438-.295-2.419-.627-3.277a6.626 6.626 0 0 0-1.558-2.392 6.598 6.598 0 0 0-2.39-1.556C21.982.875 21 .647 19.563.582 18.123.516 17.665.5 13.997.5h.004Zm-1.21 2.433H14c3.605 0 4.032.013 5.455.077 1.317.06 2.031.28 2.507.465.63.245 1.08.538 1.551 1.01.473.473.765.923 1.01 1.553.185.475.406 1.19.465 2.506.065 1.423.08 1.85.08 5.453s-.015 4.03-.08 5.454c-.06 1.316-.28 2.03-.464 2.505a4.174 4.174 0 0 1-1.01 1.551 4.175 4.175 0 0 1-1.552 1.01c-.475.186-1.19.405-2.507.465-1.423.065-1.85.079-5.455.079s-4.032-.014-5.455-.079c-1.316-.06-2.03-.28-2.507-.465a4.18 4.18 0 0 1-1.552-1.01 4.184 4.184 0 0 1-1.01-1.552c-.185-.475-.405-1.19-.465-2.506-.065-1.423-.078-1.85-.078-5.455s.013-4.03.078-5.454c.06-1.316.28-2.03.465-2.506.244-.63.537-1.08 1.01-1.553a4.19 4.19 0 0 1 1.552-1.01c.476-.186 1.19-.405 2.507-.466 1.245-.056 1.728-.073 4.244-.076v.004Zm8.416 2.241a1.62 1.62 0 1 0 0 3.241 1.62 1.62 0 0 0 0-3.241Zm-7.206 1.893a6.933 6.933 0 1 0 .001 13.867 6.933 6.933 0 0 0-.001-13.867Zm0 2.433a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px- ms40px] lg:mt-0"><a href="https://medium.com/@nearbalkans" target="__blank"><svg width="32" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.05 9c0 4.97-4.04 9-9.025 9S0 13.972 0 9s4.04-9 9.025-9c4.984 0 9.025 4.03 9.025 9Zm9.9 0c0 4.679-2.02 8.472-4.512 8.472-2.492 0-4.513-3.794-4.513-8.472 0-4.678 2.02-8.472 4.513-8.472 2.492 0 4.513 3.794 4.513 8.472ZM32 9c0 4.192-.71 7.59-1.587 7.59s-1.587-3.4-1.587-7.59c0-4.191.71-7.59 1.587-7.59S32 4.807 32 9Z" fill="#3F4246"></path></svg></a></div></div>
            <div className="absolute md:block hidden left-56 border-r-2 h-[3rem]"></div>
          </div>
          <div class="flex md:hidden items-center lg:ml-auto justify-between"><div class="lg:px-3 px-2 mt-40s lg:mt-0"><a href="https://twitter.com/NEARbalkan" target="__blank"><svg width="29" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.727 3.219a11.395 11.395 0 0 1-3.276.899A5.73 5.73 0 0 0 27.959.963a11.505 11.505 0 0 1-3.626 1.385A5.69 5.69 0 0 0 20.168.545a5.707 5.707 0 0 0-5.56 7.006 16.201 16.201 0 0 1-11.76-5.963 5.663 5.663 0 0 0-.772 2.869 5.704 5.704 0 0 0 2.538 4.749 5.707 5.707 0 0 1-2.585-.716v.07a5.712 5.712 0 0 0 4.577 5.596c-.478.13-.983.2-1.504.2a5.48 5.48 0 0 1-1.074-.106 5.71 5.71 0 0 0 5.33 3.964 11.45 11.45 0 0 1-7.088 2.439c-.46 0-.914-.028-1.36-.079a16.13 16.13 0 0 0 8.746 2.568c10.498 0 16.236-8.695 16.236-16.236l-.019-.739a11.395 11.395 0 0 0 2.854-2.948Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://discord.com/invite/NgSYSmJXg9" target="__blank"><svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.357 2.207A22.317 22.317 0 0 0 17.861.501a.084.084 0 0 0-.088.042c-.238.422-.5.974-.685 1.406a20.57 20.57 0 0 0-6.173 0c-.205-.481-.437-.95-.695-1.406a.086.086 0 0 0-.088-.042 22.197 22.197 0 0 0-5.496 1.706.07.07 0 0 0-.035.03C1.1 7.468.14 12.569.61 17.606a.095.095 0 0 0 .036.063 22.406 22.406 0 0 0 6.742 3.409.084.084 0 0 0 .094-.033c.52-.708.982-1.456 1.38-2.242a.085.085 0 0 0-.016-.1.085.085 0 0 0-.03-.018A14.98 14.98 0 0 1 6.71 17.68a.086.086 0 0 1-.008-.144c.142-.106.283-.217.418-.329a.083.083 0 0 1 .086-.012c4.42 2.019 9.204 2.019 13.57 0a.086.086 0 0 1 .089.012c.135.112.277.223.418.33a.086.086 0 0 1-.006.143c-.674.392-1.379.727-2.108 1.002a.087.087 0 0 0-.046.12c.405.784.87 1.534 1.379 2.242a.084.084 0 0 0 .095.033 22.335 22.335 0 0 0 6.751-3.41.084.084 0 0 0 .036-.062c.563-5.823-.944-10.882-3.993-15.366a.058.058 0 0 0-.034-.032ZM9.523 14.537c-1.331 0-2.426-1.221-2.426-2.72 0-1.5 1.075-2.722 2.426-2.722 1.362 0 2.447 1.232 2.427 2.722 0 1.499-1.075 2.72-2.427 2.72Zm8.97 0c-1.329 0-2.426-1.221-2.426-2.72 0-1.5 1.075-2.722 2.427-2.722 1.362 0 2.448 1.232 2.427 2.722 0 1.499-1.065 2.72-2.427 2.72Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://t.me/nearbalkanshub" target="__blank"><svg width="27" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.408 9.303c2.762-1.36 5.845-2.497 8.726-3.638 4.957-1.87 9.933-3.707 14.959-5.418.977-.291 2.735-.576 2.907.72-.094 1.835-.482 3.659-.749 5.483-.675 4.01-1.456 8.008-2.218 12.006-.262 1.332-2.127 2.021-3.32 1.169-2.869-1.733-5.759-3.449-8.59-5.222-.928-.843-.068-2.053.76-2.655 2.363-2.082 4.868-3.851 7.107-6.041.604-1.304-1.18-.205-1.77.132-3.233 1.993-6.388 4.108-9.798 5.86-1.741.857-3.771.124-5.512-.354-1.561-.578-3.848-1.16-2.502-2.042Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://www.facebook.com/nearbalkans" target="__blank"><svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.452 27.09V15.15h4.085l.613-4.656H9.452V7.522c0-1.347.38-2.266 2.352-2.266h2.511V1.09c-.434-.055-1.925-.182-3.66-.182-3.623 0-6.103 2.17-6.103 6.152v3.433H.454v4.655h4.098v11.942h4.9Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://www.linkedin.com/company/nearbalkans" target="__blank"><svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.247 2.625A2.623 2.623 0 1 1 0 2.622a2.623 2.623 0 0 1 5.247.003Zm.078 4.564H.08v16.422h5.246V7.189Zm8.29 0h-5.22v16.422h5.167v-8.618c0-4.8 6.257-5.246 6.257 0v8.618H25V13.21c0-8.093-9.26-7.792-11.438-3.817l.053-2.204Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://www.instagram.com/nearbalkans/" target="__blank"><svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.001.5c-3.666 0-4.126.016-5.566.082-1.437.065-2.419.293-3.277.627a6.61 6.61 0 0 0-2.391 1.556 6.627 6.627 0 0 0-1.559 2.392c-.334.858-.562 1.84-.627 3.276C.517 9.873.5 10.333.5 14c0 3.667.016 4.125.082 5.565.066 1.438.293 2.418.627 3.277a6.615 6.615 0 0 0 1.557 2.391 6.61 6.61 0 0 0 2.39 1.558c.86.334 1.84.562 3.278.628 1.44.065 1.9.081 5.566.081s4.125-.016 5.565-.081c1.437-.066 2.42-.294 3.278-.628a6.606 6.606 0 0 0 2.39-1.558 6.628 6.628 0 0 0 1.558-2.39c.332-.86.56-1.84.627-3.277.065-1.44.082-1.9.082-5.566s-.017-4.126-.082-5.566c-.067-1.438-.295-2.419-.627-3.277a6.626 6.626 0 0 0-1.558-2.392 6.598 6.598 0 0 0-2.39-1.556C21.982.875 21 .647 19.563.582 18.123.516 17.665.5 13.997.5h.004Zm-1.21 2.433H14c3.605 0 4.032.013 5.455.077 1.317.06 2.031.28 2.507.465.63.245 1.08.538 1.551 1.01.473.473.765.923 1.01 1.553.185.475.406 1.19.465 2.506.065 1.423.08 1.85.08 5.453s-.015 4.03-.08 5.454c-.06 1.316-.28 2.03-.464 2.505a4.174 4.174 0 0 1-1.01 1.551 4.175 4.175 0 0 1-1.552 1.01c-.475.186-1.19.405-2.507.465-1.423.065-1.85.079-5.455.079s-4.032-.014-5.455-.079c-1.316-.06-2.03-.28-2.507-.465a4.18 4.18 0 0 1-1.552-1.01 4.184 4.184 0 0 1-1.01-1.552c-.185-.475-.405-1.19-.465-2.506-.065-1.423-.078-1.85-.078-5.455s.013-4.03.078-5.454c.06-1.316.28-2.03.465-2.506.244-.63.537-1.08 1.01-1.553a4.19 4.19 0 0 1 1.552-1.01c.476-.186 1.19-.405 2.507-.466 1.245-.056 1.728-.073 4.244-.076v.004Zm8.416 2.241a1.62 1.62 0 1 0 0 3.241 1.62 1.62 0 0 0 0-3.241Zm-7.206 1.893a6.933 6.933 0 1 0 .001 13.867 6.933 6.933 0 0 0-.001-13.867Zm0 2.433a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" fill="#3F4246"></path></svg></a></div><div class="lg:px-3 px-2 mt-[40px] lg:mt-0"><a href="https://medium.com/@nearbalkans" target="__blank"><svg width="32" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.05 9c0 4.97-4.04 9-9.025 9S0 13.972 0 9s4.04-9 9.025-9c4.984 0 9.025 4.03 9.025 9Zm9.9 0c0 4.679-2.02 8.472-4.512 8.472-2.492 0-4.513-3.794-4.513-8.472 0-4.678 2.02-8.472 4.513-8.472 2.492 0 4.513 3.794 4.513 8.472ZM32 9c0 4.192-.71 7.59-1.587 7.59s-1.587-3.4-1.587-7.59c0-4.191.71-7.59 1.587-7.59S32 4.807 32 9Z" fill="#3F4246"></path></svg></a></div></div>
        </div>
        <div className="flex justify-center mt-8 text-xl">
          <div className="flex md:flex-row flex-col md:gap-12">
            <a className="md:w-32 text-center" href="#">NEAR Balkans 2022</a>
            <a className="md:w-44 text-center" href="#">info@nearbalkans.org</a>
            <a className="md:w-20 text-center" href="#">Privacy Policy</a>
            <a className="md:w-20 text-center" href="#">Cookie Policy</a>
            <a className="md:w-32 text-center" href="#">Terms & Conditions</a>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <p className="w-4/6 text-xl text-center pb-12">NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</p>
        </div>
      </section>

      <Lang function={isClosed} style={lang}/>
    </>
  )
}
