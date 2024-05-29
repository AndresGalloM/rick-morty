import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
  canAccess,
  redirect
}: {
  canAccess: boolean
  redirect: string
}) => {
  return canAccess ? <Outlet /> : <Navigate to={redirect} replace />
}

export default ProtectedRoute
