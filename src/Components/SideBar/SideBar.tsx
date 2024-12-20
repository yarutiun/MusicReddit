import { FaHome, FaMusic, FaDrum, FaGuitar, FaHeadphones, FaMicrophone, FaRecordVinyl } from "react-icons/fa";
import React, { useState } from "react";

const names = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'AskReddit', icon: <FaHeadphones /> },
  { name: 'NoStupidQuestions', icon: <FaMicrophone /> },
  { name: 'BaldursGate3', icon: <FaRecordVinyl /> },
  { name: 'facepalm', icon: <FaGuitar /> },
  { name: 'interestingasf', icon: <FaDrum /> },
  { name: 'pics', icon: <FaMusic /> },
];

const SideBar = () => {
    const [selected, setSelected] = useState('Home');

    const handleChangeThread = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelected(e.currentTarget.textContent || 'Home');
    };

  return (
    <nav className="w-96 bg-white mt-5 rounded-lg fixed shadow-lg p-4 right-0 mr-10">
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
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
            </button> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
