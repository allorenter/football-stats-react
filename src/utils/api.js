import axios from "axios";

let server = "localhost:9000/api/";
if (process.env.NODE_ENV === 'production') {
   server = "https://allorenter-football-stats.herokuapp.com/api/";
}

const SERVER_URL = server;

export const getAvgStatTeams = (competition, stat) =>
  axios.get(
    `${SERVER_URL}team/get-avg-stats-teams/2021/${competition}/${stat}`
  );

export const getAvailableStats = () => axios.get(`${SERVER_URL}stat/get`);

export const getRefereesBySeasonCompetition = (seasons, competition) =>
  axios.post(`${SERVER_URL}referee/get-by-seasons-competition`, {
    competition: competition,
    seasons: seasons,
  });

export const getAvailableCompetitions = () => axios.get(`${SERVER_URL}competition/get`);