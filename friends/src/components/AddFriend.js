import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function AddFriend() {
  const [addFriend, setAddFriend] = useState({
    name: '',
    age: '',
    email: ''
  })
  const handleChanges = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddFriend({name: '', age:'', email:''})
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        setAddFriend(res.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Friend's Name: </label>
        <input
          type="text"
          name="name"
          value={addFriend.name}
          onChange={handleChanges}
        />
        <label>Friend's Age: </label>
        <input
          type="text"
          name="age"
          value={addFriend.age}
          onChange={handleChanges}
        />
        <label>Friend's Email: </label>
        <input
          type="text"
          name="email"
          value={addFriend.email}
          onChange={handleChanges}
        />
        <button>Add Friend</button>
      </form>
    </div>
  )
}