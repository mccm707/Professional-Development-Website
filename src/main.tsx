import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4 w-full text-center">
                <h1 className="text-3xl font-bold">Professional Development Website</h1>
                <nav className="mt-2">
                    <a href="#" className="mx-2 text-white hover:underline">Home</a>
                    <a href="pages/about.html" className="mx-2 text-white hover:underline">About</a>
                    <a href="#" className="mx-2 text-white hover:underline">Contact</a>
                </nav>
            </header>
            <main className="p-4 text-center">
                <h2 className="text-xl">About This App</h2>
                <p>This is a simple React application set up using Vite, TypeScript, and Tailwind CSS.</p>
                <p>Feel free to explore and modify the code!</p>
            </main>
            <footer className="mt-4 text-gray-600">
                <p>&copy; 2024 My React App</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);