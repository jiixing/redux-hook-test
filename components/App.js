import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {ExampleState} from './ExampleState'

const App = () => (
    <div>
        <ExampleState/>
        <hr/>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)

export default App
