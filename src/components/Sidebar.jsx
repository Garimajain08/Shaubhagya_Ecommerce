import { NavLink } from 'react-router-dom'; // Make sure to import NavLink from the appropriate library

const Sidebar = () => (
  <aside className='flex flex-col gap-5  px-9 py-2 justify-start'>
   <input  className="shadow-md p-2" type="text"  placeholder='Search'/>
    <div className='flex flex-col gap-2'>
      <h3 className='font-bold text-lg'>Category</h3>
      <NavLink to="#" className='hover:text-blue-500'>Laptop</NavLink>
      <NavLink to="#" className='hover:text-blue-500'>Mobile</NavLink>
      <NavLink to="#" className='hover:text-blue-500'>Accessories</NavLink>
      <NavLink to="#" className='hover:text-blue-500'>Computer</NavLink>
      <NavLink to="#" className='hover:text-blue-500'>Watch</NavLink>
    </div>
    <div className='flex flex-col gap-2'>
      <h3 className='font-bold text-lg'>Company</h3>
      <label htmlFor="options" className='sr-only'>Company Options</label>
      <select
        name="company"
        id="options"
        className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      >
        <option hidden value="">All</option>
        <option value="lenovo">Lenovo</option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
        <option value="dell">Dell</option>
      </select>
    </div>
    <div className='flex flex-col gap-2'>
      <h3 className='font-bold text-lg'>Colors</h3>
      {/* Add your color selection component here */}
    </div>
    <div className='flex flex-col gap-2'>
      <h3 className='font-bold'>Price</h3>
      <input type="range"  min="0" max="10000000" />
    </div>
    <button className='bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 font-bold'>
      Clear Filter
    </button>
  </aside>
);

export default Sidebar;

