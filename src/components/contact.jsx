import React from 'react'

export default function Contact() {
  return (
    <div>
     <h3 className='text-2xl font-bold text-center mb-12 mt-5'>Feel  free to Contact !!</h3> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.8885415455916!2d77.69093849999999!3d24.105414800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397bc39b203f4105%3A0xefc347c93eb9514c!2sKala%20Mahal%2C%20Kathali%20Bazar%2C%20Sironj%2C%20Madhya%20Pradesh%20464228!5e0!3m2!1sen!2sin!4v1719470439017!5m2!1sen!2sin" className='flex mx-auto' width="1200" height="350" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  
<form action='https://formspree.io/f/xanwwkkw' className=" mx-auto min-w-[1200px] justify-between items-center  flex flex-col " method="POST">
<div class="mb-5 mt-7">
    <label for="username" className="block mb-2 text-sm font-medium  ">Username</label>
    <input type="text" name="Username" id="uesrname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium ">Your email</label>
    <input type="email" name="Email" id="email" className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="message" className="block mb-2 text-sm font-medium ">Your messsage</label>
    <textarea  id="message" rows="10" column="20"  name="Message" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Message" required />
  </div>
 
 
   
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>



    </div>
  )
}
