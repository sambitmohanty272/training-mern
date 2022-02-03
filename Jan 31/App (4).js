import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://retoolapi.dev/BUCPSc/posts/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <tr><td>{user.title}</td></tr>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch