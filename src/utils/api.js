import axios from "axios";

let server = "/api";
if (process.env.NODE_ENV === 'production') {
   server = process.env.REACT_APP_PRODUCTION_API_URL;
}

const SERVER_URL = server;

export const getAvgStatTeams = (season, competition, stat) => {  
  const params = new URLSearchParams({ season, competition, stat });
  return axios.get(`${SERVER_URL}/team/stats?${params.toString()}`);
};

export const getAvailableStats = () => axios.get(`${SERVER_URL}/stat`);

export const getRefereesBySeasonCompetition = (season, competition) => {
  const params = new URLSearchParams({ season, competition });
  return axios.get(`${SERVER_URL}/referee/stats?${params}`);
};
  

export const getAvailableCompetitions = () => axios.get(`${SERVER_URL}/competition`);