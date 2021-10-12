export default function Button({ children }) {
  return (
    <div className="text-right">
      <button class="text-white text bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
        {children}
      </button>
    </div>
  );
}
