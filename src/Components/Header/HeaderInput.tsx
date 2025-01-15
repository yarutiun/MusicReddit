import search from '/search.png';

export const HeaderInput = () => {
  return (
    <div className='flex p-3 gap-3 ml-4'>
        <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white px-4 py-2 rounded-md w-96 outline-none"
        />
        <button className="text-white rounded-md hover:scale-110">
            <img src={search} alt="search" className="w-10 h-10"/>
        </button>
    </div>
  )
}