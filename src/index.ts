import axios from 'axios';
const API_KEY = 'AIzaSyAiAV81OaOc-5RSemoEIb7p3l_X2S0a204';

const youtubeBaseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'
const fetchPlaylist = async (playlistId : string) => {
  // request youtube playlist and output
  try {
    const { data } = await axios({
      method: 'get',
      url: `${youtubeBaseUrl}?part=contentDetails&playlistId=${playlistId}&key=${API_KEY}`,
    });
    console.log(data);
    return data;
  } catch ({ response }) {
    console.log(`\nUnable to get playlist: ${playlistId}`, response);
    return null;
  }
};

const exampleId = 'PLt7bG0K25iXisx5CvWqAKif4L3SQsdsja';
fetchPlaylist(exampleId);
