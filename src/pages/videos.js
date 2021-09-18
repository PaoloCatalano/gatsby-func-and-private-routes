import React from "react"

export default function Videos() {
  const [videos, setVideos] = React.useState([])
  const [videosIdList, setVideosIdList] = React.useState("")
  // const [show, setShow] = React.useState(false)
  const [autoplay, setautoplay] = React.useState(0)
  const [cambioCanale, setCambioCanale] = React.useState(false)
  const [numeroCanale, setNumeroCanale] = React.useState(1)

  const handleNumeroCanale = () => {
    setNumeroCanale(() => {
      if (numeroCanale > 99) {
        return 1
      } else {
        return numeroCanale + 1
      }
    })
  }

  React.useEffect(() => {
    setCambioCanale(false)
    if (autoplay) {
      try {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=status&playlistId=PLzc14R1Ecr9CummAOR3Dm9z3CT2iJ07WC&maxResults=50&key=
          `
        )
          .then(x => x.json())
          .then(x => {
            setVideos(
              x.items
                .filter(({ status }) => status.privacyStatus === "public")
                .sort(() => (Math.random() > 0.5 ? 1 : -1))
                .map(({ snippet }) => {
                  return {
                    // title: snippet.title,
                    videoId: snippet.resourceId.videoId,
                  }
                })
            )
          })
      } catch ({ error }) {
        console.err(error.message)
      }
    }

    // eslint-disable-next-line
  }, [autoplay, cambioCanale])

  React.useEffect(() => {
    let tempList = videos
      .map(({ videoId }) => {
        return videoId
      })
      .join(",")

    setVideosIdList(tempList)
  }, [videos])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true)
  //   }, 1000)
  // }, [])

  return (
    <div
      style={{
        display: "grid",
        grid: "1fr 0.2fr / 1fr",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
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
            style={{ pointerEvents: "none" }}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/videoseries?autoplay=${autoplay}&controls=0&showinfo=0&modestbranding=0&loop=1&rel=0&iv_load_policy=3&enablejsapi=1&listType=playlist&playlist=${videosIdList}`}
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
          setCambioCanale(true)
          setNumeroCanale(handleNumeroCanale)
        }}
      >
        CAMBIO CANALE
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
