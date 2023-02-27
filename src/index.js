import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { store } from "./app/store"
import { fetchPosts } from "./features/posts/postsSlice"
import { fetchUsers } from "./features/users/usersSlice"

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
