import { Link } from 'react-router-dom'
import errorPage from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={errorPage.container}>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to='/'>
        <span className={errorPage.homeLink}>
          You can go back to the home page by clicking here, though!
        </span>
      </Link>
    </div>
  )
}

export default ErrorPage
