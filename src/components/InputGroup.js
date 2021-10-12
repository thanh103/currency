export default function InputGroup() {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
        </div>
      </div>
    </div>
  );
}
