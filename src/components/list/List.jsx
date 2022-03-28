import React,{useState} from 'react'
import "./List.css"

function List({contacsList}) {
    const [search,setSearch] = useState("")
    console.log(search);

    const filtered = contacsList.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toLowerCase().includes(search.toLowerCase());
            
        })
    })

  return (
    <div className='list' onChange={(e) => setSearch(e.target.value)} value={search}>
      <input type="text" />
      <ul>
          {
              filtered.map((e,i) => {
                  return(
                      <li key={i}>{e.name}</li>
                  )
              })
          }
      </ul>
    </div>
  )
}

export default List
