import React, {  useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import './Profile.css'

const googleUrl = 'https://accounts.google.com/gsi/client';

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
                <div>login</div>
                <GoogleLogin
                    clientId="191654869277-2fbl88orca94q1dvd3983uvlj3kpv6dq.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy="single_host_origin"
                />
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