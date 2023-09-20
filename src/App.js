import React from "react"
import { NavLink } from "react-router-dom"

const App = () => {
  return (

    <div>


      {/* section1 starts */}
      <div class="">
        <div className="absolute flex flex-nowrap space-x-16 py-10 text-black px-7 font-medium text-xs ">

          <h1 className="font-semibold text-lg"> - Kayo</h1>


          <NavLink>Home</NavLink>
          <NavLink> pages</NavLink>
          <NavLink>Tour</NavLink>
          <NavLink>Video</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Release</NavLink>
          <NavLink>Elements</NavLink>


          <div className="justify-self-end py-5  text-xl ">

            <button class=" h-32 w-32 px-56 sticky top-0 ">

              <i class="absolute top-0 right-0 h-16 w-16 fa-solid fa-bars"></i></button>

            <div className="fixed top-36 left-0 right-0 grid row-span-2 gap-3 py-11 text-white justify-end  ">

              <button class=" bg-black h-10 w-12 py-3  fa-solid fa-cart-shopping hover:scale-110 "></button>

              <button class="bg-black h-10 w-12 py-2 fa-solid fa-share hover:scale-110"></button>

            </div>
          </div>


        </div>



        <img className="hover:" src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/12/red.jpg" alt="" />



        <div className="absolute top-[50%] right-[35%] ">
          <p className="font-medium text-5xl gap-y-6 ">
            New Album Available
          </p>


          <p className="text-2xl font-normal text-gray-600  py-8 px-20">
            Available in Our
            <span className="text-gray-800 font-semibold"> Online Store</span></p>

          <i class="fa-regular fa-circle-play py-8 px-52 text-5xl"></i>
        </div>



      </div>
      {/* section1 ends */}




      {/* section2 starts */}
      <div className="px-40 py-36">

        <p className="py-9 font-medium text-2xl" >- Releases</p>

        <div class="flex flex-row h-[400px] ">


          <img className="hover:opacity-10" src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/bbe75232597827.568bfbfc43431.jpg" alt="" />






          <img className="hover:opacity-5 " src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/Sans-titre-1.jpg" alt="" />

          <img className="hover:opacity-5 " src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/pietra.jpg" alt="" />
        </div>

        <div class="flex flex-row h-[400px]">

          <img className="hover:opacity-5 " src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/osmosis.jpg" alt="" />

          <img className="hover:opacity-5 " src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/brown.jpg" alt="" />

          <img className="hover:opacity-5 " src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/10/pink.jpg" alt="" />

        </div>
      </div>

      {/* section2 ends */}




      {/* section3 starts */}
      <div className=" px-32 py-36 bg-gray-900">

        <p className="text-white font- text-2xl py-10 px-10">-Last Videos</p>

        <div className="flex flex-row">
          <iframe className="px-10" width="560" height="315" src="https://www.youtube.com/embed/Tu4liSKkTEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <iframe className="px-10" width="560" height="315" src="https://www.youtube.com/embed/ToLJE4YEQRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <iframe className="px-10" width="560" height="315" src="https://www.youtube.com/embed/SGqg_ZzThDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


        </div>


        <div className=" text-center justify-center py-6  ">
          <button className="bg-gray-400 h-14 py-1 px-9 hover:bg-white">


            <i class="fa-brands fa-youtube w-10 py-3 text-red-900"></i>

            check my yt channel </button>
        </div>


      </div>

      {/* section3 ends */}






      {/* section4 starts */}


      <p className="py-28 px-44 font-semibold text-2xl">- Dark Out Tour</p>


      <div className=" flex py-12 px-28 gap-10 bg-gray-400 h-[160%] ">


        <img className="h-96  w-96" src="https://preview.wolfthemes.live/app/uploads/sites/19/2018/11/Free_6_panel_digipack_mockup_5.jpg" alt="" />





        <div className="py-12 text-lg  ">
          <p className="px-20 py-5 font-normal text-gray-600">
            June 22, 2025</p>

          <p className="px-20 py-5 font-normal text-gray-600">
            June 23, 2025</p>

          <p className="px-20 py-5 font-normal text-gray-600">
            June 29, 2025</p>

          <p className="px-20 py-5 font-normal text-gray-600">
            June 30, 2025</p>

        </div>


        <div className="py-12 text-lg text-gray-600">
          <p className="font-medium  px-20 py-5 ">Phoenix, AZ</p>

          <p className="font-medium px-20 py-5">Las Vegas, NV</p>

          <p className="font-medium px-20 py-5">Atlanta, GA</p>

          <p className="font-medium px-20 py-5">Orlando, FL</p>

        </div>


        <div className="py-14 grid ">
          <button className="bg-black text-white h-10 w-32 px-4 py-2 hover:scale-110 hover:bg-blue-gray-800">Buy Ticket</button>

          <button className="bg-black text-white h-10 w-32 px-4 py-2 hover:scale-110 hover:bg-blue-gray-800">Buy Ticket</button>

          <button className="bg-black text-white h-10 w-32 px-4 py-2 hover:scale-110 hover:bg-blue-gray-800">Buy Ticket</button>

          <button className="bg-black text-white h-10 w-32 px-4 py-2 hover:scale-110 hover:bg-blue-gray-800">Buy Ticket</button>

        </div>

        <img src="" alt="" />


      </div>







      {/* section4 ends */}



      {/* section5 starts */}
      <div className=" py-96  ">


        <div className="flex h-[230px] w-80 gap-1">





          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://media.istockphoto.com/id/1306124105/photo/man-walking-on-country-road-with-guitar-on-his-back.webp?b=1&s=170667a&w=0&k=20&c=-7BAIWywpddpYXqZg1fPdfKTr6GGM2rXXuydc92PrK0=" alt="" />


          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTErVA5TcfXhWXtJLaH0hmO0y3mvlWRatx2A&usqp=CAU" alt="" />



          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://cdn.pixabay.com/photo/2020/01/31/07/53/man-4807395_640.jpg" alt="" />



          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvl12h0El5CC4gHtq54oC_zl1rLJ-zLoDDw&usqp=CAU" alt="" />


          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteeRzH4vjmDsmWbK919EZRCMzOsMlJvTVdw&usqp=CAU" alt="" />


          <img className="hover:scale-110 transition duration-500 cursor-pointer" src="https://guitarspace.org/wp-content/uploads/2021/05/Top-10-Most-Popular-Songs-to-Learn-Guitar-scaled.jpgAU" alt="" />


        </div>
      </div>
      {/* section5 ends */}





      {/* section6 starts */}
      <div className="bg-gray-50 py-20">

        <p className="px-36 font-bold text-2xl">-Last News</p>

        <div class="flex flex-nowrap py-12 px-28 gap-10 justify-center">

          <div className="">
            <img className="h-72 w-96 hover:opacity-75" src="https://cdn.pixabay.com/photo/2020/01/31/07/53/man-4807395_640.jpg" alt="" />

            <p className="py-4 font-light text-xs">5 years ago</p>

            <p className="font-bold text-lg">Self-Hosted Playlist</p>

            <p className="py-4 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nihil molestiae impedit pariatur ipsam officia iusto veritatis praesentium.!</p>

            <li>Read more</li>
          </div>

          <div>
            <img className="h-72 w-96 hover:opacity-75 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bhGH62jvwooVzozyqkugjMslE_-1hkIPeg&usqp=CAU" alt="" />

            <p className="py-4 font-light text-xs">5 years ago</p>

            <p className="font-bold text-lg">Standard Post</p>


            <p className="py-4 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus, aut labore cumque exercitationem magnam facere laudantium,</p>

            <li>Read more</li>

          </div>

          <div>
            <img className="h-72 w-96 hover:opacity-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlfT_YNUtiRUjPEBd1VXjgj-q33zpMWsFxA&usqp=CAU" alt="" />


            <p className="py-4 font-light text-xs">5 years ago</p>

            <p className="font-bold text-lg">Gallery Post</p>

            <p className="py-4 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus, aut labore cumque exercitationem magnam facere laudantium</p>

            <li>Read more</li>


          </div>


        </div>
      </div>

      {/* section6 ends */}




      {/* section7 starts */}

      <div className=" text-center bg-gray-200 h-60 py-5 ">

        <p className="py-16">© 2023 WolfThemes All rights reserved

        </p>

        <div className="fixed bottom-0 left-0 right-0 grid text-white justify-end py-2">

          <button className="border-double border-4 bg-blue-gray-600 border-blue-gray-900 text-2xl sticky top-0 hover:bg-black  hover:scale-125 text-white w-16">

            <i class="fa-solid fa-chevron-up"></i>
          </button>

        </div>
      </div>


      {/* section7 ends */}

    </div>


  )
}
export default App