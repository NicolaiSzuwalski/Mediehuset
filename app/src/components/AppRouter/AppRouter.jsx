import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from '../../Pages/HomePage/HomePage'
import { LineupPage } from '../../Pages/LineupPage/LineupPage'
import { ProgramPage } from '../../Pages/ProgramPage/ProgramPage'
import { CampsPage } from '../../Pages/CampsPage/CampsPage'
import { TicketsPage } from '../../Pages/TicketsPage/TicketsPage'
import { LoginPage } from '../../Pages/LoginPage/LoginPage'
import { InfoPage } from '../../Pages/InfoPage/InfoPage'


export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='/Lineup' element={<LineupPage/>}>
          <Route path=':id' element={<LineupPage/>}/>
        </Route>
        <Route path='/Program' element={<ProgramPage/>}></Route>
        <Route path='/Camps' element={<CampsPage/>}></Route>
        <Route path='Info' element={<InfoPage/>}></Route>
        <Route path='/Tickets' element={<TicketsPage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
    </Routes>
  )
}
