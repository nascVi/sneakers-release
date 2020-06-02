import React, { useEffect } from 'react'
import Boutique from '../Boutique/Boutique'
import { boutique } from '../../data/boutique'
import { Fade } from 'react-reveal'

import ReactPlayer from 'react-player'

const accessToken =""
const spaceId = ""
// const query = `
//  {
//     albumCollection {
//       items {
//         title
//         releaseYear
//         cover {
//           url
//           description
//         }
//         artist {
//           name
//         }
//       }
//     }
//  }
// `

const Landing = () => {

    // useEffect(() => {
    //     fetch(
    //         `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
    //         {
    //           method: "POST",
    //           headers: {
    //             "content-type": "application/json",
    //             authorization: `Bearer ${accessToken}`
    //           },
    //           body: JSON.stringify({
    //             query
    //           })
    //         }
    //       )
    //         .then(res => res.json())
    //         .then(response => {
    //           console.log(response);
      
    //           const { data } = response;
    //           this.setState({
    //             loading: false,
    //             albums: data ? data.albumCollection.items : []
    //           });
    //         })
    //         .catch(error => {
    //           this.setState({
    //             loading: false,
    //             error: error.message
    //           });
    //         });
    // }, [])

    const inShopNow = boutique.filter(boutique => boutique.id === 1)[0];
    
    return (
        <div className="landing">
            <div className="wrapper">
                <Boutique {...inShopNow} />
                <Fade bottom duration={800}>
                    <div className="landing__video-container">
                        <h1 className="landing__video-title">Au Programme sur place ou en livraison</h1>
                        <ReactPlayer
                            className="landing__video"
                            url="https://youtu.be/adzza_Tmrdg" 
                            playing="false"
                        />

                        {/* <img className="landing__video" src="https://www.youtube.com/watch?v=okwXffbEFJI" alt="vidéo produit de gamme" /> */}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Landing
