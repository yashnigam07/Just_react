import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-200 via-pink-200 to-yellow-200 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Lo-Fi Tailwind Test</h1>
      </header>
      
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="flex font-sans bg-white shadow-lg rounded-lg overflow-hidden max-w-md">
          <div className="flex-none w-48 relative">
            <img 
              src="https://images.stockcake.com/public/9/1/7/9176ce5e-0df8-4a3b-8aa1-ebef2e40cd89_large/designer-sketching-late-stockcake.jpg" 
              alt="Designer Sketching" 
              className="absolute inset-0 w-full h-full object-cover filter-grayscale" 
              loading="lazy" 
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-gray-900">
                Utility Jacket
              </h1>
              <div className="text-lg font-semibold text-gray-500">
                $110.00
              </div>
              <div className="w-full flex-none text-sm font-medium text-gray-700 mt-2">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
              <div className="space-x-2 flex text-sm">
                {sizes.map((size) => (
                  <label key={size}>
                    <input className="sr-only peer" name="size" type="radio" value={size.toLowerCase()} defaultChecked={size === 'XS'} />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-700 peer-checked:font-semibold peer-checked:bg-gray-900 peer-checked:text-white transition ease-in-out duration-300">
                      {size}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-gray-900 text-white hover:bg-gray-700 transition duration-300" type="submit">
                  Buy now
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 hover:bg-gray-100 transition duration-300" type="button">
                  Add to bag
                </button>
              </div>
              <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-200 hover:text-gray-400 hover:border-gray-300 transition duration-300" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
