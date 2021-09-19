import React from "react"
import axios from "axios"

import "../css/global.css"

export default function Videos() {
  const [videos, setVideos] = React.useState([])
  const [videosIdList, setVideosIdList] = React.useState("")
  const [autoplay, setautoplay] = React.useState(0)
  const [cambioCanale, setCambioCanale] = React.useState(false)
  const [numeroCanale, setNumeroCanale] = React.useState(1)
  const [touchable, setTouchable] = React.useState(false)

  function handleNumeroCanale() {
    setNumeroCanale(() => {
      if (numeroCanale >= 99) {
        return 1
      } else {
        return numeroCanale + 1
      }
    })
  }

  function cambiandoCanale() {
    setCambioCanale(true)
    setTimeout(() => {
      setCambioCanale(false)
    }, 3000)
  }

  async function searchChannels() {
    try {
      const { data } = await axios.get("../api/playlist").then()
      const playlist = data.items
        .filter(({ status }) => status.privacyStatus === "public")
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .map(({ snippet }) => {
          return {
            // title: snippet.title,
            videoId: snippet.resourceId.videoId,
          }
        })
      setVideos(playlist)
    } catch (error) {
      console.log("error is: " + error)
    }
  }
  React.useEffect(() => {
    searchChannels()
  }, [autoplay])

  React.useEffect(() => {
    let tempList = videos
      .map(({ videoId }) => {
        return videoId
      })
      .join(",")
    setVideosIdList(tempList)
  }, [videos])

  return (
    <div
      style={{
        display: "grid",
        grid: "1fr 0.2fr / 1fr",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {autoplay ? (
        <>
          <p
            style={{
              position: "absolute",
              right: "1rem",
              top: "0.5rem",
              color: "green",
              fontSize: "3rem",
            }}
          >
            {numeroCanale}
          </p>
          <iframe
            style={{ pointerEvents: touchable ? "auto" : "none" }}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/videoseries?autoplay=${autoplay}&controls=0&rel=0&showinfo=0&loop=1&listType=playlist&playlist=${videosIdList}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <div
          style={{
            backgroundColor: "gray",
            width: "90%",
            height: "80%",
          }}
        ></div>
      )}
      <button onClick={() => setautoplay(!autoplay)}>
        {autoplay ? `SPENGO LA TV` : `ACCENDO LA TV`}
      </button>
      <button
        disabled={!autoplay || cambioCanale}
        onClick={() => {
          cambiandoCanale()
          searchChannels()
          setNumeroCanale(handleNumeroCanale)
        }}
      >
        CAMBIO CANALE
      </button>
      <button
        disabled={!autoplay}
        onClick={() => {
          setTouchable(!touchable)
        }}
      >
        SCHERMO TOUCH <span>{touchable ? "ON" : "OFF"}</span>
      </button>
    </div>
  )
}

//https://www.youtube.com/embed/?listType=playlist&autoplay=1&loop=1&playlist=M7lc1UVf-VE&color=white

//good
/*
https://www.youtube.com/embed/videoseries?autoplay=1&controls=0&showinfo=0&modestbranding=0&loop=1&rel=0&iv_load_policy=3&enablejsapi=1&listType=playlist&list=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC
*/

/* 
https://developers.google.com/youtube/player_parameters?hl=it
https://developers.google.com/youtube/youtube_player_demo
*/
//"No filter selected. Expected one of: id, playlistId"

//BAD req
//kycd-EPfZ2E,JJTRnUZdR-Q,

/* 
apiKey: "AIzaSyDvuN5ZzVJxRoXaH-CA9PwrfDQQaRsY9lQ",
        channelId: "UCaRW_DIcp4n3iDDlvx002dQ",
*/
