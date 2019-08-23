import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {Example} from './todolist_pure'

const App = () => (
  <div>
  <Example/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App