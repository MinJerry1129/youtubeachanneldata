import React, { useEffect, useState } from "react";
import './Profile.css'

const Profile =() =>{
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])
    const [isSigin, setIsSignin] = useState(false)
    const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async() =>{
        // gapi = await loadGapiInsideDOM()
        
        // window.gapi.load('client', initClient())
        // console.log(process.env.REACT_APP_API_KEY)
        // setIsLoading(true)
        // fetch("https://www.googleapis.com/youtube/v3/channels?forUsername=test&key="+process.env.REACT_APP_API_KEY)
        // .then(res => res.json())
        // .then(
        //     (result) =>{                
        //         console.log("items:::::", result.items[0].id);
        //         setItems(result.items)
        //         setIsLoading(false)

        //     },
        //     (error) =>{
        //         console.log(error);
        //     }
        // )
    }

    const onSuccess = (res) =>{
        console.log("login sucess", res.profileObj)
    }

    const onFailure = (res) =>{
        console.log("login Fail", res)
    }

    const onLogoutSuccess = () =>{
        console.log("logout sucess")
    }

    return(
        <>
        <div>
            Login with google
            <div>
                {/* {isSigin?
                <GoogleLogout
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />:
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy = {'single_host_origin'}
                    isSignedIn={true}
                />} */}
                <div>login</div>
            </div>            
        </div>
        {/* {isLoading? 
            <div> Loading</div> :
            <>{items.map(item =>{
                return(
                    <div key={item.id}>
                        {item.id}
                    </div>
                )
                
            })}</>
        } */}
        </>
    )
}

export default Profile;