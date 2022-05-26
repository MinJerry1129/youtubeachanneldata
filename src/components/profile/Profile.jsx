import React, { useEffect, useState } from "react";

import './Profile.css'

const Profile =() =>{
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = () =>{
        console.log(process.env.REACT_APP_API_KEY)
        setIsLoading(true)
        fetch("https://www.googleapis.com/youtube/v3/channels?forUsername=test&key="+process.env.REACT_APP_API_KEY)
        .then(res => res.json())
        .then(
            (result) =>{                
                console.log("items:::::", result.items[0].id);
                setItems(result.items)
                setIsLoading(false)

            },
            (error) =>{
                console.log(error);
            }
        )
    }
    return(
        <>
        {isLoading? 
            <div> Loading</div> :
            <>{items.map(item =>{
                return(
                    <div key={item.id}>
                        {item.id}adfadf
                    </div>
                )
                
            })}</>
        }
        </>
    )
}

export default Profile;