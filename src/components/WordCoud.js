// src/components/WordCloud.js
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import WordCloud from 'react-wordcloud';

const WordCloudComponent = () => {
  const canvasRef = useRef(null);
  const [words, setWords] = React.useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/aggregated');
        const data = Object.entries(response.data).map(([text, weight]) => ({ text, weight }));
        setWords(data);
      } catch (error) {
        console.error('Error fetching mental health issues:', error);
      }
    };

    fetchIssues();
  }, []);

  useEffect(() => {
    if (canvasRef.current && words.length) {
      WordCloud(canvasRef.current, {
        list: words.map(word => [word.text, word.weight]),
        gridSize: 8,
        weightFactor: 3,
        fontFamily: 'Times, serif',
        color: 'random-dark',
        rotateRatio: 0.5,
        rotationSteps: 2,
        backgroundColor: '#ffffff',
      });
    }
  }, [words]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};

export default WordCloudComponent;
