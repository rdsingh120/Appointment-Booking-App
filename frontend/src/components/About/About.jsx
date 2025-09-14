import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="about-image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="about-card-image" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Canada's Best Appointment Booking Service
            </h2>
            <p className="text_para mt-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              beatae natus quisquam minus eius sequi nam omnis voluptatum
              tempora doloribus aliquam fugit, distinctio quae expedita,
              nesciunt nihil, modi consectetur delectus.
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
