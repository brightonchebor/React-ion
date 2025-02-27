import React from "react";


/* Don't forget to download the CSS file too */
import "../style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
    
        {/* <div className="w-[1024px] max-w-full bg-white rounded-xl shadow-lg p-4 md:p-8"> */}
        <div className="w-full bg-white rounded-xl shadow-lg p-4 md:p-8">
            {/* <div className="max-w-[1024px] w-full mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8"> */}
    	    <header className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
    	    <h1 className="text-2xl md:text-3xl font-bold">Attendance System</h1>
    	    <div className="flex items-center gap-4">
    	      <span className="material-symbols-outlined text-xl md:text-2xl hover:scale-110 transition-transform cursor-pointer">notifications</span>
    	      <div className="flex items-center gap-2">
    	        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
    	          <span className="material-symbols-outlined text-sm md:text-base">person</span>
    	        </div>
    	        <span className="text-sm md:text-base font-medium">John Doe</span>
    	      </div>
    	    </div>
    	    </header>
          
    	
    	  <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
    	    <div className="md:col-span-2 lg:col-span-3">
    	      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border-2 border-gray-200">
    	        <div className="absolute inset-0 bg-gray-100">
    	          <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
    	            <span className="material-symbols-outlined cursor-pointer hover:text-blue-600 transition-colors">fullscreen</span>
    	          </div>
    	          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
    	            <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
    	              <span className="material-symbols-outlined">add</span>
    	            </button>
    	            <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
    	              <span className="material-symbols-outlined">remove</span>
    	            </button>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	
    	    <div className="space-y-4 md:space-y-6">
    	      <div className="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6">
    	        <div className="text-center mb-4">
    	          <div className="text-xl md:text-2xl font-bold mb-2">09:41:23</div>
    	          <div className="text-sm md:text-base text-gray-500">Current Time</div>
    	        </div>
    	        <div className="space-y-3 md:space-y-4">
    	          <button className="w-full bg-green-500 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-green-600 transform hover:scale-[1.02] transition-all text-sm md:text-base">
    	            Clock In
    	          </button>
    	          <button className="w-full bg-red-500 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-red-600 transform hover:scale-[1.02] transition-all text-sm md:text-base">
    	            Clock Out
    	          </button>
    	        </div>
    	      </div>
    	
    	      <div className="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6">
    	        <h3 className="text-sm md:text-base font-bold mb-4">Today's Activity</h3>
    	        <div className="space-y-3">
    	          <div className="flex items-center justify-between py-2 border-b">
    	            <div>
    	              <div className="text-sm md:text-base font-medium">Clock In</div>
    	              <div className="text-xs md:text-sm text-gray-500">09:00 AM</div>
    	            </div>
    	            <span className="material-symbols-outlined text-green-500">login</span>
    	          </div>
    	          <div className="flex items-center justify-between py-2">
    	            <div>
    	              <div className="text-sm md:text-base font-medium">Location</div>
    	              <div className="text-xs md:text-sm text-gray-500">Main Office</div>
    	            </div>
    	            <span className="material-symbols-outlined text-blue-500">location_on</span>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
        </div>
  )
}



