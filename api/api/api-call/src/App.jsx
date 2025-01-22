import React, { useState, useEffect } from "react";

const App = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this URL with your actual API endpoint
  const API_URL = "    GET https://api.pexels.com/v1/nature      ";

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }
        const data = await response.json();
        setVideoData(data); // Assuming data contains a video URL
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Video Player</h1>
      {videoData ? (
        <video width="600" controls>
          <source src={videoData.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div>No video available</div>
      )}
    </div>
  );
};

export default App;
