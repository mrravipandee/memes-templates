import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAllMemes } from '../apis/memes';

interface Meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<Meme[]>([]);

    useEffect(() => {
        getAllMemes().then((response) => setData(response.data.memes));
    }, []);

    return (
        <div className="p-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((meme) => (
                    <Card key={meme.id} title={meme.name} img={meme.url} />
                ))}
            </div>
        </div>
    );
};

export default Home;
