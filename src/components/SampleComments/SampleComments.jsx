import './SampleComments.scss'
import {GiSelfLove} from 'react-icons/gi'
const SampleComments = () => {
  return (
    <>
        <div className="comments">
            <div className="comments-left">
                <p><span className='comment-user-name'>jakiya </span>Awesome Mama</p>
            </div>
            <div className="comments-right">
                <a href="##"> <GiSelfLove/> </a>
            </div>
        </div>
    </>
  )
}

export default SampleComments