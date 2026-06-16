import { Suspense } from 'react'
import LoadingSpinner from './LoadingSpinner'

const PageLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-background dark:bg-slate-900">
          <LoadingSpinner size="lg" />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default PageLoader
