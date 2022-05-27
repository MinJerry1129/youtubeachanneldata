import React, {  useEffect, useState } from "react";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { gapi } from 'gapi-script';
import './Profile.css'

const Profile =() =>{
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])
    const [channels, setChannels] = useState([])
    const [isSigin, setIsSignin] = useState(false)
    const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/youtube.channel-memberships.creator';

    useEffect(()=>{
        function start() {
            gapi.client.init({
                apiKey: process.env.REACT_APP_API_KEY,
                clientId: process.env.REACT_APP_CLIENT_ID,
                discoveryDocs: discoveryDocs,
                scope: SCOPES,
            });
          }
          gapi.load('client:auth2', start);
    }, [])

    const onSuccess = (res) =>{
        console.log("login sucess", res.profileObj)
        setIsSignin(true)
        getChannel()
    }

    const onFailure = (res) =>{
        console.log("login Fail", res)
        setChannels([])
    }

    const onLogoutSuccess = () =>{
        console.log("logout sucess")
        setChannels([])
        setIsSignin(false)
    }

    const getChannel = () =>{
        gapi.client.request({
            'method': 'GET',
            'path': '/youtube/v3/channels',
            'params': {'part': 'snippet,contentDetails,statistics', 'mine': 'true'}
            // 'params': {'part': 'snippet,contentDetails,statistics','forUsername': 'Google'}
        }).then(response =>{
            console.log(response)
            const channel = response.result.items;
            if(channel){
                setChannels(channel)
            }else{
                setChannels([])
            }
            
        })
    }

    return(
        <>
        <div>
            <div>Profile Page</div>
            <div>Login with google</div>
            <div>
                {isSigin?
                <GoogleLogout
                    clientId="191654869277-2fbl88orca94q1dvd3983uvlj3kpv6dq.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />:
                <GoogleLogin
                    clientId="191654869277-2fbl88orca94q1dvd3983uvlj3kpv6dq.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy="single_host_origin"
                />
                }
            </div>
            <div>
                {channels.map(item =>{
                    return(
                        <div key={item.id}>
                            <div>ID: {item.id}</div>
                            <div>Title: {item.snippet.title}</div>
                            <div>Subscribers: {item.statistics.subscriberCount}</div>
                            <div>Views: {item.statistics.viewCount}</div>
                            <div>Videos: {item.statistics.videoCount}</div>
                            <p>{item.snippet.description}</p>
                            <hr />
                            {item.snippet.customUrl &&<><a target="_blank" href={`https://youtube.com/${item.snippet.customUrl}`}>Visit Channel</a> <hr/></>}
                            <p/>
                        </div>
                    )                    
                })}
            </div>          
        </div>
        </>
    )
}

export default Profile;