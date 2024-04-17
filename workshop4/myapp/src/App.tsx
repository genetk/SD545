import React, { useState } from 'react'
import Search from './componenet/search'
import List from './componenet/list'
import { User } from './componenet/types/user'
import './index.css'
import SearchResponse from './componenet/types/search.type'

function App() {
  const[search , setSearch]=useState<SearchResponse>({isFirst:true,isLoading:false,isError:false,user:[]

  })

  return (
    <div className="container">
   <Search onSearchUrl={setSearch}/>
   <List {...search}/>

  </div>
  )
}

export default App