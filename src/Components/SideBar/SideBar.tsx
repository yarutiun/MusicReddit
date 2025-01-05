import React, { useState } from "react";

const names = [
  { name: 'Home'},
  { name: 'AskReddit'},
  { name: 'NoStupidQuestions'},
  { name: 'BaldursGate3'},
  { name: 'facepalm'},
  { name: 'interestingasf'},
  { name: 'pics'},
];

const SideBar = () => {
    const [selected, setSelected] = useState('Home');

    const handleChangeThread = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelected(e.currentTarget.textContent || 'Home');
    };

  return (
    <nav className="w-96 bg-white mt-5 rounded-lg absolute shadow-lg p-4 right-2 mr-5">
      <h2 className="text-2xl font-bold mb-6">Subreddits</h2>
      <ul className="flex flex-col gap-3">
        {names.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-4 text-lg px-4 py-2 rounded-lg ${
              item.name === selected ? 'bg-blue-100 text-blue-600 border border-blue-400' : 'text-gray-600'
            } hover:bg-gray-100`}
          >
            <button onClick={handleChangeThread} className="flex gap-4">
                <img className="rounded-full w-6 h-6 border-gray-700 border-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0X4SRNSlp6KtpfTW3EGRxTkcavdZaaGDOQ&s" alt={item.name}/>
                <span>{item.name}</span>
            </button> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
