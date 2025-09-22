import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item, i) => <FaqItem key={i} item={item}/>)}
    </ul>
  )
}
export default FaqList