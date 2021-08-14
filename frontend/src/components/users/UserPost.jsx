import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
// api
import { getUserPosts } from '../../lib/api/user';
// context
import { AuthContext } from '../../App';

const UserPost = () => {
  const { loading, isSignedIn, currentUser } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState({})

  useEffect(() => {
    handleGetUserPosts()
  },[currentUser])

  const handleGetUserPosts = async() => {
    if (!loading) {
      if (isSignedIn) {
        const res = await getUserPosts(currentUser.id)
        setUserPosts(res.data)
      } else {
        <Redirect to='/signin'/>
      }
    }
  }
  console.log(userPosts)

  return <h1>hoge</h1>
}
export default UserPost;