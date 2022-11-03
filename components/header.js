import Link from "next/link";
import Button from "./button";

function Header(props) {
  return (
    <header className="flex justify-center ">
      <div className="flex justify-between pt-12 fixed md:w-5/6 w-full px-4 pb-4 bg-white z-50">
        <div>
          <Link className="flex md:mt-0 mt-2" href="https://decade.org/">
            <div className="flex  mt-1 md:pr-3 pr-1 w-fit">
              <span><svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-[39px] w-[30px]"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 1.41C9.509 1.41 1.41 9.509 1.41 19.5S9.509 37.59 19.5 37.59s18.09-8.099 18.09-18.09S29.491 1.41 19.5 1.41ZM0 19.5C0 8.73 8.73 0 19.5 0S39 8.73 39 19.5 30.27 39 19.5 39 0 30.27 0 19.5Z" fill="#3F4246"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.515 6.525C23.852 3.199 21.685 1.41 19.5 1.41V0c3.006 0 5.537 2.418 7.276 5.895 1.759 3.518 2.826 8.33 2.826 13.605 0 5.276-1.067 10.087-2.826 13.605C25.037 36.582 22.506 39 19.5 39v-1.41c2.184 0 4.352-1.789 6.015-5.115 1.642-3.284 2.678-7.87 2.678-12.975 0-5.104-1.036-9.69-2.678-12.975Z" fill="#3F4246"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.904 6.633C26.453 3.365 23.12 1.41 19.5 1.41V0c4.164 0 7.88 2.252 10.532 5.787 2.65 3.534 4.27 8.385 4.27 13.713 0 5.328-1.62 10.178-4.27 13.713C27.38 36.748 23.663 39 19.5 39v-1.41c3.621 0 6.953-1.955 9.404-5.223 2.45-3.268 3.988-7.815 3.988-12.867 0-5.052-1.537-9.6-3.988-12.867Z" fill="#3F4246"></path></svg></span>
              <span class="ml-2 mt-1 hidden md:block text-zinc-700 font-bold text-lg">Dacade</span>
            </div>
            <div>
              <img className="md:block hidden w-5r border-l-2" src="icons/icon1.png"/>
              <div class="md:hidden w-5r border-l-2 mt-1 pl-1"><svg width="29" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m22.697 2.318-5.683 8.437a.605.605 0 0 0 .897.793L23.505 6.7a.227.227 0 0 1 .377.172v15.19a.226.226 0 0 1-.4.146L6.573 1.963A2.898 2.898 0 0 0 4.363.937H3.77A2.896 2.896 0 0 0 .875 3.834v21.395a2.896 2.896 0 0 0 5.366 1.516l5.683-8.438a.605.605 0 0 0-.897-.793l-5.594 4.849a.227.227 0 0 1-.378-.172V7a.227.227 0 0 1 .4-.145L22.363 27.1a2.898 2.898 0 0 0 2.212 1.025h.591a2.896 2.896 0 0 0 2.896-2.896V3.834a2.896 2.896 0 0 0-5.365-1.516Z" fill="#000"></path></svg></div>
            </div>
          </Link>
        </div>
        <div className="flex mt-1">
          <Button function={props.function} style={"text-xl mt-2 mr-20 md:block hidden"} value={"Start The Course"}/>
          <Link href={props.linkOne}>
            <Button style={"md:text-xl bg-lightblack text-white pb-3 pt-2 md:px-6 px-4 rounded-1r"} value={"Create wallet"}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;  
