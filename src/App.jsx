import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
 

  return (
    <div className="text-[#484545]">
   {/* Black strip */}
   <div className="bg-black flex flex-row">
  <div className="max-w-[1500px] w-full mx-auto flex flex-row justify-end flex-wrap hidden md:flex">
    <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">About Us</a>
    <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">Select Currency: GBP</a>
    <a href="" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">Contact Us</a>
    <a href="tel:6468510542" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">USA: 646 851 0542</a>
    <a href="tel:4388003601" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">CAN: 438 800 3601</a>
    <a href="tel:441135375643" className="text-white font-bold mr-2 pr-3 pl-3 pt-2 pb-2">INT: +44 113 537 5643</a>
  </div>
  <div className="text-white font-bold md:hidden pr-3 pl-3 pt-2 pb-2 text-center w-[100%]"><i className="fa-solid fa-phone mr-2"></i> Call Us</div>
</div>
 {/* End   */}
  {/* Banner  */}
  {/* Menu Section (Hamburger Menu for Mobile View) */}
  <div className="pt-5 relative pb-5 shadow-none max-[1000px]:shadow-lg">
	 <div className="absolute top-9 left-4 flex flex-row flex-grow justify-between max-[1000px]:w-[80%]">
      <div className="hidden max-[1000px]:block">
        <button id="hamburger-menu" className="text-4xl">
        <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

    </div>

  <div className="max-w-[1500px] w-full mx-auto flex flex-row flex-wrap gap-y-6 items-center max-[1000px]:flex-col max-[1000px]:items-start"> 
    

     {/* Logo Section  */}
     <div className="basis-1/4 flex-shrink-0 max-[1000px]:w-full flex justify-center max-[1000px]:justify-center"> 
      <a href="#"> 
        <img src="https://cdn11.bigcommerce.com/s-03842/images/stencil/800w/qbol_web_logo_1577699469__78699.original.png" className="max-w-[350px] w-full max-[1000px]:max-w-[250px]" /> 
      </a> 
    </div>
     {/* Search Section  */}
    <div className="flex-[2] flex">
      <input type="text" placeholder="Search by reference" className="p-2 border rounded-l text-base w-full" style={{ borderColor: '#1a2348'}} />
      <button type="submit" className="p-2 border border-l-0 rounded-r bg-[#1a2348] text-white pl-8 pr-8" style={{ borderColor: '#1a2348'}}> 
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl text-gray-700" />
      </button>
    </div>
    
     {/* User/Cart Section  */}
     <div className="flex-1 flex flex-col items-end gap-2 max-[1000px]:items-start max-[1000px]:w-full hidden sm:block">
      <div className="flex items-center gap-2 max-[1000px]:justify-between max-[1000px]:w-full"> 
        <FontAwesomeIcon icon={faUser} className="text-4xl" />
        <div className="flex flex-col mr-8 ml-2"> 
          <a href="#">Sign In</a>
           <a href="#">Register</a>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="text-4xl" />
        <div className="flex flex-col mr-8 items-center">
           <span className="w-11 h-6 text-white rounded-full flex items-center justify-center bg-[#1a2348]">0</span>
          <p>Cart</p>
        </div>
      </div>
    </div>
  </div>
  </div>
   {/* End  */}
{/* Navigation  */}
<div className="bg-[#1a2348] border-b-[5px] border-[#ca9618] hidden sm:block">
  <div className="w-full mx-auto flex flex-row justify-center flex-wrap pt-3 pb-3">
    <ul className="flex flex-wrap flex-col sm:flex-row text-xs sm:text-sm md:text-base justify-center">
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
 <div className="pt-3 pb-3 bg-[#f5f5f5] hidden sm:block" style={{ boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.09)' }}>
  <div className="max-w-[1500px] w-full mx-auto flex flex-row flex-wrap gap-y-6 items-center">
    <div className="flex items-center gap-2"> <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/Customer-Service.png" className="w-[40px]" /></i>
      <div className="flex flex-col mr-8 ml-2"> <a href="#">Excellent Customer Service</a> </div>
      <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/UK-Delivery.png" className="w-[40px]" /></i>
      <div className="flex flex-col mr-8 ml-2"> <a href="#">1-3 Day Express Shipping With DHL</a> </div>
      <i className="text-4xl"><img src="https://store-03842.mybigcommerce.com/content/Queens_Award_Logo_black.png" className="w-[30px]" /></i>
      <div className="flex flex-col mr-8 ml-2"> <a href="#">Queen's Award For Enterprise Winners</a> </div>
      <i className="text-4xl"><img src="https://www.qualitybearingsonline.com/content/NewSite/qms.png" className="w-[40px]" /></i>
      <div className="flex flex-col mr-8 ml-2"> <a href="#">ISO 9001 : 2015 Cert. No.291342018</a> </div>
      <i className="text-4xl"><img src="https://api.feefo.com/api/logo?merchantidentifier=quality-bearings-online&template=Service-Stars-Yellow-150x38.png" className="w-[100px]" /></i> 
      <i className="text-4xl"><img src="https://cdn11.bigcommerce.com/s-03842/images/stencil/original/image-manager/digicert-logo-.png?t=1739359712" className="w-[100px]" /></i> </div>
  </div>
</div>
 {/* End  */}
 {/* Industry leading section */}
 <div>
  <h1 className="text-center text-3xl font-bold mt-11">Industry Leading Bearings Supplier</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 max-w-[1500px] mx-auto">
    <div className="text-center bg-white p-4 rounded"> <img src="https://store-03842.mybigcommerce.com/content/Icons/Delivery.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Super-Fast, Hassle Free Delivery</h4>
      <p className="text-sm mt-2">Delivered within 1-3 days, with all tax & duties paid within USA & Canada. The price you see online is the price you pay.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://store-03842.mybigcommerce.com/content/Customer_Service_Icon_5.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Unrivalled Customer Service</h4>
      <p className="text-sm mt-2">With over 75 years' industry experience, you can trust Quality Bearings Online.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://store-03842.mybigcommerce.com/content/Icons/Awards.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Multi-Award-Winning</h4>
      <p className="text-sm mt-2">Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://store-03842.mybigcommerce.com/content/Icons/Trusted_Brands.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">World Renowned Brands</h4>
      <p className="text-sm mt-2">Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more.</p>
    </div>
  </div>
</div>
{/* End */}
{/* Top Categories */}
<div className="px-4 py-10 bg-white">
  <h3 className="text-center text-2xl font-bold mb-4">Top Categories</h3>
  <p className="text-center max-w-6xl mx-auto mb-10 text-gray-700"> Whatever bearing, adhesive, lubricant or grease you are after at Quality Bearings Online we are bound to stock it. As a leading bearings supplier we offer products from trusted industry manufacturers. Discover some of our top product categories below. </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-[1500px] mx-auto">
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Angular%20Contact.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">Precision Bearings</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Deep%20Groove.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[180px] mx-auto break-words leading-snug">Deep Groove Bearings</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Taper.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[180px] mx-auto break-words leading-snug">Taper Roller Bearings</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Spherical%20Roller.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[180px] mx-auto break-words leading-snug">Spherical Roller Bearings</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Maintenance_Tools.png" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">Maintenance Tools</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/dow.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[180px] mx-auto break-words leading-snug">Dow Corning Products</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Kluber.png" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">Kluber Lubricants</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/shell.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">Shell Lubricants</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/Paste.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">Molykote Greases</h3>
    </div>
    <div className="text-center"> <img src="https://www.qualitybearingsonline.com/product_images/skf%20grease.jpg" className="w-full" />
      <h3 className="mt-2 font-semibold text-2xl max-w-[120px] mx-auto break-words leading-snug">SKF Lubricants</h3>
    </div>
  </div>
</div>
{/* End */}
 {/* Why Choose  */}
<div className="bg-[#edeff3] text-center px-6 py-10">
  <h3 className="text-2xl font-bold mb-4">Top Categories</h3>
  <p className="max-w-6xl mx-auto text-gray-700 mb-4"> At Quality Bearings Online, we are a leading bearings supplier with over 75 years of industry experience. We are a multi award winning company, supplying bearings and engineering spares to customers in over 110 countries worldwide. We pride ourselves on offering trusted brands, expert knowledge, excellent customer service and rapid delivery anywhere in the world. What’s more, we ensure that our products are distributed globally within 1-3 working days. </p>
  <p className="max-w-6xl mx-auto text-gray-700 mb-6"> Our products are used in sectors as diverse as Food Manufacturing, Aerospace, Oil and Gas and Precision Engineering, and whether you are a large multi-national or single site company, we delight in exceeding your expectations. Trust us as your industry bearings supplier. </p>
  <a href="#" className="inline-block bg-[#ca9618] text-white font-semibold px-6 py-2 rounded border border-[#ca9618] transition hover:bg-white hover:text-[#ca9618] hover:border-[#ca9618]"> Read More </a> </div>
{/* End  */}
{/* Customers section  */}
<div className="bg-white pt-6 pb-6 max-w-[1500px] mx-auto text-center">
  <h3 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h3>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-[900px] mx-auto">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
      <div className="text-gray-700 font-medium">Average Customer Rating:</div>
      <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-500 text-xl"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>☆</span> </div>
      <div className="text-gray-600 border-r border-gray pr-6 mr-6">4.8/5</div>
      <img src="https://register.feefo.com//feefo-widget-v2/js/8e073a5e15c91cfbd7ee.svg" alt="Feefo 1" className="h-6 w-auto" /> </div>
    <div className="flex justify-center sm:justify-end gap-2"> <img src="https://register.feefo.com//feefo-widget-v2/js/7e713d7028bfa5765f20.svg" alt="Feefo 2" className="w-[60px]" /> </div>
  </div>
  <p className="text-[#9b9898] text-xs">Independent Service Rating based on 1154 verified reviews.<a href="" className="text-[#0088c1]">Read all reviews</a></p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 max-w-[1300px] mx-auto mt-3 pt-6 border-t">
    <div>
      <div className="flex items-left justify-left sm:justify-start gap-1 text-yellow-500 text-xl"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>☆</span> </div>
		<p className="text-left font-bold text-[14px]">First className</p>
		<p className="text-left font-bold text-[14px] mt-1">Excellent</p>
		<p className="text-[#9b9898] text-xs text-left mt-2">Christopher Shaw - 21 April 2025</p>
    </div>
	  <div>
      <div className="flex items-left justify-left sm:justify-start gap-1 text-yellow-500 text-xl"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>☆</span> </div>
		<p className="text-left font-bold text-[14px]">Poor communication and no proactive follow-up</p>
		<p className="text-left font-bold text-[14px] mt-1">Although they investigated and mitigated our shipping delays, it wasn't until I contacted the company to follow-up on...</p>
		<p className="text-[#9b9898] text-xs text-left mt-2">Trusted Customer - 17 April 2025</p>
    </div>
	  <div>
      <div className="flex items-left justify-left sm:justify-start gap-1 text-yellow-500 text-xl"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>☆</span> </div>
		<p className="text-left text-[14px] mt-1">Easy to make a purchase and fast delivery.</p>
		<p className="text-[#9b9898] text-xs text-left mt-2">Trusted Customer - 16 April 2025</p>
    </div>
	  <div>
      <div className="flex items-left justify-left sm:justify-start gap-1 text-yellow-500 text-xl"> <span>★</span> <span>★</span> <span>★</span> <span>★</span> <span>☆</span> </div>
		<p className="text-left font-bold text-[14px]">Great Service EVERY Time!</p>
		<p className="text-left font-bold text-[14px] mt-1">Great service. Fast delivery. I continue to use Quality Bearings Online because everything is great, every time!</p>
		<p className="text-[#9b9898] text-xs text-left mt-2">William McHargue - 17 April 2025</p>
    </div>
  </div>
</div>
 {/* End  */}
 {/* Distributing World  */}
 <div className="bg-[#edeff3] py-10 mt-4">
  <h2 className="text-2xl font-bold text-center mb-6">Distributing World Renowned Brands</h2>
  <div className="flex flex-wrap justify-center items-center gap-6 px-4">
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/NSK-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/Koyo-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/FAG-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/Timken-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/SKF-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/RHP-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/Molykote-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/Shell-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/Loctite-logo.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://www.qualitybearingsonline.com/content/NewSite/IKO.png" className="h-10 object-contain" /></a>
    <a href="#"><img src="https://store-03842.mybigcommerce.com/content/Kluber.png" className="h-10 object-contain" /></a>
  </div>
</div>
 {/* End  */}
 {/* Other Services section  */}
 <div>
  <h1 className="text-center text-3xl font-bold mt-11">Other Services We Offer</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 max-w-[1500px] mx-auto">
    <div className="text-center bg-white p-4 rounded"> <img src="https://www.qualitybearingsonline.com/content/NewSite/Icons/Int-Presence.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">International Presence</h4>
      <p className="text-sm mt-2">We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://www.qualitybearingsonline.com/content/NewSite/Icons/Prof-Team.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Professional Team</h4>
      <p className="text-sm mt-2">Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://www.qualitybearingsonline.com/content/NewSite/Icons/Warehouse-Logistics.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Warehouse & Logistics</h4>
      <p className="text-sm mt-2">We're an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.</p>
    </div>
    <div className="text-center bg-white p-4 rounded"> <img src="https://www.qualitybearingsonline.com/content/NewSite/Icons/Cust-Serv.png" className="mx-auto mb-4 w-[120px]" />
      <h4 className="font-semibold text-lg">Customer Service</h4>
      <p className="text-sm mt-2">With more than 75 years' industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.</p>
    </div>
  </div>
</div>
 {/* End   */}
 {/* Subscribe  */}
 <div className="bg-[#1a2348] text-white py-3 px-4">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 max-w-[1300px] mx-auto">
    <h2 className="text-[30px] font-bold whitespace-nowrap">Subscribe<br />Today</h2>
    <p className="text-sm text-center lg:text-left max-w-md">Be the first to know about exclusive deals, new product lines, company announcements, and industry news.</p>
    <div className="flex w-full max-w-md flex-col sm:flex-row">
  <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-t-md sm:rounded-l-md bg-white text-black focus:outline-none" />
  <button className="bg-[#ca9618] text-white px-10 py-4 rounded-b-md sm:rounded-r-md font-semibold hover:bg-white hover:text-[#ca9618] hover:border hover:border-[#ca9618] transition duration-300">
    SUBSCRIBE
  </button>
</div>
  </div>
</div>
 {/* End  */}
 {/* Footer  */}
 <div className="bg-[#212121] text-white px-6 py-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-center md:text-left">

    {/* Column 1 */}
    <div className="flex flex-col items-center md:items-start">
      <p className="text-sm leading-relaxed">
        Quality Bearings Online Ltd<br />
        Unit 2 and 3 Gelderd Park<br />
        98 Gelderd Road<br />
        Leeds<br />
        West Yorkshire<br />
        LS12 6HJ<br />
        UK - 0808 168 1234<br />
        USA - 646 844 8635 / 619 354 1821<br />
        Canada - 438 800 0618<br />
        International - +44 113 537 5643
      </p>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-lg font-semibold mb-4">Navigation</h3>
      <ul className="list-none space-y-2 text-sm">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#" className="hover:text-gray-400">10 Year Anniversary</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
        <li><a href="#" className="hover:text-gray-400">Customer Service</a></li>
        <li><a href="#" className="hover:text-gray-400">Delivery Information</a></li>
        <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-gray-400">Customer Reviews</a></li>
        <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
        <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col items-center md:items-start gap-3">
      <img src="https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/bbea-lloys-bank-winner-2023.png" alt="Award 1" className="w-60" />
      <img src="https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/sc21.png" alt="Award 2" className="w-60" />
      <img src="https://cdn11.bigcommerce.com/s-03842/content/Investers_In_People_23_24-01.jpg" alt="Award 3" className="w-60" />

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-4">
        <img src="https://cdn11.bigcommerce.com/s-03842/content/NewSite/BQ.png" alt="BQ" className="w-10" />
        <img src="https://cdn11.bigcommerce.com/s-03842/content/NewSite/Chase%20Award.png" alt="Chase Award" className="w-10" />
        <img src="https://cdn11.bigcommerce.com/s-03842/content/NewSite/FSB.png" alt="FSB" className="w-10" />
        <img src="https://cdn11.bigcommerce.com/s-03842/content/NewSite/TAG.png" alt="TAG" className="w-10" />
      </div>

      <p className="mt-4 text-[16px] uppercase">Follow Us on Social Media</p>
      <div className="flex justify-center md:justify-start gap-4 text-2xl mt-2">
        <i className="fa-brands fa-square-facebook hover:text-gray-400"></i>
        <i className="fa-brands fa-instagram hover:text-gray-400"></i>
        <i className="fa-brands fa-linkedin hover:text-gray-400"></i>
      </div>
    </div>

  </div>
</div>
 {/* End  */}
 {/* Copyrights */}
<div className="bg-[#212121] text-white py-3 px-4 border-t border-[#ccc] py-6">
	<div className="max-w-[1500px] mx-auto">© 2025 Quality Bearings Online. All rights reserved.</div>
</div>
    </div>
  )
}

export default App
