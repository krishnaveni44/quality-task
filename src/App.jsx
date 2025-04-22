import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function App() {
 

  return (
    <div>
   {/* Black strip */}
<div className="bg-black flex flex-row">
  <div className="max-w-[1600px] w-full mx-auto flex flex-row justify-end flex-wrap">
     <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">About Us</a> 
     <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">Select Currency: GBP</a> 
     <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">Contact Us</a>
     <a href="tel:6468510542" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">USA: 646 851 0542</a>
     <a href="tel:4388003601" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">CAN: 438 800 3601</a> 
     <a href="tel:441135375643" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">INT: +44 113 537 5643</a> 
     </div>
</div>
 {/* End   */}
  {/* Banner  */}
<div class="pt-5 pb-5">
 <div className="max-w-[1600px] w-full mx-auto flex flex-row flex-wrap gap-y-6 items-center"> 
    
     {/* Logo Section  */}
    <div className="basis-1/4 flex-shrink-0"> <a href="#"> <img src="https://cdn11.bigcommerce.com/s-03842/images/stencil/800w/qbol_web_logo_1577699469__78699.original.png" className="max-w-[350px] w-full" /> </a> </div>
    
     {/* Search Section  */}
    <div className="flex-[2] flex">
      <input type="text" placeholder="Search by reference" className="p-2 border rounded-l text-base w-full" style={{ borderColor: '#1a2348'}} />
      <button type="submit" className="p-2 border border-l-0 rounded-r bg-[#1a2348] text-white pl-8 pr-8" style={{ borderColor: '#1a2348'}}> 
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl text-gray-700" />
      </button>
    </div>
    
     {/* User/Cart Section  */}
    <div className="flex-1 flex flex-col items-end gap-2">
      <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faUser} className="text-4xl" />
        <div className="flex flex-col mr-8 ml-2"> <a href="#">Sign In</a> <a href="#">Register</a> </div>
        <FontAwesomeIcon icon={faCartShopping} className="text-4xl" />
        <div className="flex flex-col mr-8 items-center"> <span className="w-11 h-6 text-white rounded-full flex items-center justify-center bg-[#1a2348]">0</span>
          <p>Cart</p>
        </div>
      </div>
    </div>
  </div>
  </div>
   {/* End  */}
{/* Navigation  */}
<div className="bg-[#1a2348] border-b-[5px] border-[#ca9618]">
  <div className="w-full mx-auto flex flex-row justify-center flex-wrap pt-3 pb-3">
    <ul className="flex flex-wrap flex-col sm:flex-row text-xs sm:text-sm md:text-base">
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Adhesives & Lubricants</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Bearing Inserts</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cartridge Bearing Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Conveyor Belt Tensioner Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Flanged Bearing Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Hanger Bearing Unit</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Brands</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SKF</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">NSK</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Timken</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Kluber</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">FAG</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Ball Bearings</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Deep Groove | Radial Ball Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Double Row Angular Contact Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Double Row Self Aligning Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Four Point Contact Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Lazy Susan Bearings</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Roller Bearings</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Barrel Roller Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">CARB Toroidal Roller Bearing</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cylindrical Roller Bearing</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cylindrical Roller Thrust Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Needle Roller Bearings</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Linear</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cam and Roller Followers</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Crossed Roller Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Crossed Roller Way</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Linear Bushings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Linear Slide Unit</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Housings and Inserts</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Bearing Inserts</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Cartridge Bearing Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Conveyor Belt Tensioner Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Flanged Bearing Unit</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Hanger Bearing Unit</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Super Precision</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ball Screw Support Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Super Precision Cylindrical Roller Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Super Precision Angular Contact Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Super Precision Angular Contact Thrust Bearings</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Super Precision Deep Groove Bearings</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Spherical Plains</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Rod Ends</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Spherical Plain Bearings</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Maintenance Tools</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Alignment Tools</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Basic Condition Monitoring Tools</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Bearing Heaters</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dispensing Tools</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Power Transmission</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">ContiTech SilentSync Belts</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">V Belts</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Renold Chain</a></li>
        </ul>
      </li>
      <li className="relative group mr-3"> <a href="#" className="text-white font-bold flex items-center space-x-2 hover:text-[#ca9618]"> <span>Oil Seals</span> <i className="fa-solid fa-chevron-down"></i> </a>
        <ul className="absolute left-0 hidden mt-2 bg-white text-black group-hover:block border border-gray-200 shadow-lg rounded-md min-w-[200px] z-50">
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">HMS5 Radial Shaft Seals - R21</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">HMSA10 Radial Shaft Seals - R23</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">CRW1 Radial Shaft Seals - R4</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">CRWA1 Radial Shaft Seals - R6</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">CRWH1 Radial Shaft Seals - R1</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
 {/* End  */}
 {/* highlights menu  */}
 <div className="pt-3 pb-3 bg-[#f5f5f5]" style={{ boxShadow: '0 8px 8px 0 rgba(0, 0, 0, .09)' }}>
	<div className="max-w-[1600px] w-full mx-auto flex flex-row flex-wrap gap-y-6 items-center">
  <div className="flex items-center gap-2"> 
	 <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/Customer-Service.png" className="w-[40px]" /></i>
    <div className="flex flex-col mr-8 ml-2"> <a href="#">Excellent Customer Service</a> </div>
    <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/UK-Delivery.png" className="w-[40px]" /></i>
    <div className="flex flex-col mr-8 ml-2"> <a href="#">1-3 Day Express Shipping With DHL</a> </div>
	  <i className="text-4xl"><img src="https://store-03842.mybigcommerce.com/content/Queens_Award_Logo_black.png" className="w-[30px]" /></i>
    <div className="flex flex-col mr-8 ml-2"> <a href="#">Queen's Award For Enterprise Winners</a> </div>
	  <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/qms.png" className="w-[40px]" /></i>
    <div className="flex flex-col mr-8 ml-2"> <a href="#">ISO 9001 : 2015 Cert. No.291342018</a> </div>
	  <i className="text-4xl"><img src="https://api.feefo.com/api/logo?merchantidentifier=quality-bearings-online&template=Service-Stars-Yellow-150x38.png" className="w-[100px]" /></i>
	  <i className="text-4xl"><img src="https://cdn11.bigcommerce.com/s-03842/images/stencil/original/image-manager/digicert-logo-.png?t=1739359712" className="w-[100px]" /></i>
    </div>
  </div>
	</div>
 {/* End  */}
 {/* Industry leading section */}
 <div>
  <h1 className="text-center text-3xl font-bold mt-11">Industry Leading Bearings Supplier</h1>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 max-w-[1600px] mx-auto">
    
    <div className="text-center bg-white p-4 rounded">
      <img src="https://store-03842.mybigcommerce.com/content/Icons/Delivery.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Super-Fast, Hassle Free Delivery</h4>
      <p className="text-sm mt-2">Delivered within 1-3 days, with all tax & duties paid within USA & Canada. The price you see online is the price you pay.</p>
    </div>

    <div className="text-center bg-white p-4 rounded">
      <img src="https://store-03842.mybigcommerce.com/content/Customer_Service_Icon_5.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Unrivalled Customer Service</h4>
      <p className="text-sm mt-2">With over 75 years' industry experience, you can trust Quality Bearings Online.</p>
    </div>

    <div className="text-center bg-white p-4 rounded">
      <img src="https://store-03842.mybigcommerce.com/content/Icons/Awards.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Multi-Award-Winning</h4>
      <p className="text-sm mt-2">Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year.</p>
    </div>

    <div className="text-center bg-white p-4 rounded">
      <img src="https://store-03842.mybigcommerce.com/content/Icons/Trusted_Brands.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">World Renowned Brands</h4>
      <p className="text-sm mt-2">Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more.</p>
    </div>

  </div>
</div>
{/* End */}

    </div>
  )
}

export default App
