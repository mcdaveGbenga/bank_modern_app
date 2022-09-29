import styles,{layout} from '../style'
import {card} from '../assets'
import Button from './Button'

const CardDeal = () => (
 <section className={layout.section}> 
 <div className={layout.sectionInfo}> 
   <h2 className={`${styles.heading2} `}>
   Find a better card deal in few easy steps. 
   </h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-10 mb-10 text-dimwhite text-normal text-[18px]`}>
   Arcu tortor, purus in mattis at sed integer faucibus. 
   Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
   </p>
   <Button />
 </div>
 <div className={layout.sectionImg}>
  <img src={card} alt="Card Deal" className='w-[100%] h-[100%] z-[5] ml-10'/>
 </div>
 {/* <img src={card} alt="Card Deal" />  */}
 </section>
  )


export default CardDeal