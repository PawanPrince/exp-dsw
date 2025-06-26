// src/pages/Youtube.jsx
import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyBajPVw4sXbqJmz1pb21N2ShOnIa-y2Nm8';
const CHANNEL_ID = 'UCNufDLt1Jh9jQ1t6DYVCRfg';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Step 1: Get the video IDs from the uploads playlist
        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const playlistData = await playlistRes.json();
        const uploadPlaylistId = playlistData.items[0].contentDetails.relatedPlaylists.uploads;

        const uploadsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${uploadPlaylistId}&key=${API_KEY}`
        );
        const uploadsData = await uploadsRes.json();

        const videoIds = uploadsData.items.map((item) => item.snippet.resourceId.videoId).join(',');

        // Step 2: Get video durations and filter long videos
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${API_KEY}`
        );
        const videosData = await videosRes.json();

        const longVideos = videosData.items.filter((video) => {
          const duration = video.contentDetails.duration;
          const match = duration.match(/PT(\d+)M/);
          const minutes = match ? parseInt(match[1], 10) : 0;
          return minutes >= 1; // Only include videos longer than 1 minute
        });

        setVideos(longVideos);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl animate-pulse">
        Loading YouTube videos...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#c1b4a0]">Our Cinematic Films</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-md bg-white/5 border border-white/10">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white/90 mb-2">{video.snippet.title}</h3>
              <p className="text-sm text-gray-400">
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
