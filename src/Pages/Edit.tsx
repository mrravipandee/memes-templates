import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit: React.FC = () => {
  const [params] = useSearchParams();
  const url = params.get("url");

  const [texts, setTexts] = useState<string[]>([]);
  const memeRef = useRef<HTMLDivElement>(null);

  const handleAddText = () => {
    setTexts([...texts, `Double click to edit...`]);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 min-h-screen flex flex-col items-center">
      <a className="text-white mb-4 self-start md:self-auto" href='/'>
        Meme's Templates / <span className='text-purple-800'>Edit Meme</span>
      </a>
      {url ? (
        <div className="flex flex-col items-center md:items-start" ref={memeRef}>
          <div className="relative w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] mb-4">
            <img src={url} alt="Meme" className="w-full h-full object-cover rounded-lg shadow-lg" />
            {texts.map((text, index) => (
              <Text key={index} text={text} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white md:text-left">No URL provided</p>
      )}
      <div className="mt-4 flex flex-row justify-center gap-10 w-full">
        <button
          onClick={handleAddText}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add text
        </button>
        <button
          onClick={() => exportComponentAsJPEG(memeRef)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Save image
        </button>
      </div>
    </div>
  );
};

export default Edit;
