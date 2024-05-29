import { SpinnerIcon } from '../Icons'
import './Spinner.css'

const Spinner = ({ size }: { size: number }) => (
  <div className='spinner'>
    <SpinnerIcon size={size} />
  </div>
)

export default Spinner
