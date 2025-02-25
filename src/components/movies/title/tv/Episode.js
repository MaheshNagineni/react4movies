import React from "react";
import { Link } from "react-router-dom";
import { LevelOne } from "../../../../constants/AuthRoles";
import convertIsoData from "../../../../utils/convertIsoDate";
import useAuth from "../../../../utils/hooks/useAuth";
import useTitle from "../../../../utils/hooks/useTitle";
import pad from "../../../../utils/pad";
import ShowLessText from "../../../utils/ShowLessText";
import EpisodePoster from "./EpisodePoster";

const Episode = ({ episode }) => {
  const { auth } = useAuth();
  const { title } = useTitle();
  return (
    <>
      <div className="title">
        <h6>{episode.name}</h6>
      </div>
      <div className="poster">
        <EpisodePoster
          data={{
            url: episode.still_path,
          }}
        />
      </div>
      <div className="details">
        <ul>
          <li>
            <b>Season : </b> {episode.season_number}
          </li>
          <li>
            <b>Episode Name : </b>
            {episode.name}
          </li>
          <li>
            <b>Episode Number : </b> {episode.episode_number}
          </li>
          <li>
            <b>Run Time : </b> {episode.runtime} Mins
          </li>
          <li>
            <b>Release Date : </b> {convertIsoData(episode?.air_date)}
          </li>
          <li>
            <b>Directors : </b>{" "}
            {episode.directors
              ? episode.directors.map((person) => person).join(",")
              : "No Data"}
          </li>
          <li>
            <b>Overview : </b>{" "}
            <ShowLessText text={episode?.overview} limit={150} />
          </li>
        </ul>
      </div>
      {LevelOne.includes(auth?.role) && (
        <Link
          className="download"
          to={`/downloads/torrent-search?query=${encodeURI(
            `${title?.title} S${pad(episode?.season_number ?? 1)}E${pad(
              episode?.episode_number ?? 1
            )}`
          )}&provider=${"1337x"}&pageNo=1`}
        >
          Download
        </Link>
      )}
    </>
  );
};

Episode.defaultProps = {
  episode: {
    air_date: "2020-12-18",
    episode_number: 8,
    tmdb_id: 2464381,
    name: "Chapter 16: The Rescue",
    overview: "The Mandalorian and his allies attempt a daring rescue.",
    runtime: 48,
    season_number: 2,
    show_id: 82856,
    still_path:
      "https://image.tmdb.org/t/p/w500/o2b0S3rSMhAlfsCRQyD6EsDzqca.jpg",
    directors: ["No Data"],
  },
};

export default Episode;
