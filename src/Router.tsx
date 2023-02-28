import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <h2 style={{ marginTop: '5rem', textAlign: 'center' }}>
              Page not found 404
            </h2>
          }
        />
      </Route>
    </Routes>
  )
}
