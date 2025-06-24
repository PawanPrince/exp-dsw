import React from 'react';

const FixedLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center overflow-x-auto">
      <div className="w-[1024px] bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Fixed Layout Website</h1>
          <p className="text-gray-500 mt-2 text-lg">Same look on all screens (mobile, tablet, desktop)</p>
        </header>

        {/* Main Content */}
        <section className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow">
            <h2 className="text-xl font-semibold mb-2">Box 1</h2>
            <p className="text-gray-600">Content block stays side-by-side</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center shadow">
            <h2 className="text-xl font-semibold mb-2">Box 2</h2>
            <p className="text-gray-600">Even on 320px screen</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; 2025 Your Company
        </footer>
      </div>
    </div>
  );
};

export default FixedLayout;
