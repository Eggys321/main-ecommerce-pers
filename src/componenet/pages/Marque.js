import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  const ADS = 'YOUR EVERYDAY, DELIVERED'
  return (
    <div>
      {/* <div>
        <Marquee
          speed={30}
          gradient={false}
          style={{ backgroundColor: '#ED017F', color: 'white' }}
        >
          <h3>DRINKS🍸</h3>
          <h3>BAGS👜</h3>
          <h3>GROCERIES🛒</h3>
          <h3>LOGISTICS🚚</h3>
          <h3>PAYMENT🏧</h3>
          <h3>FOOD🥗</h3>
          <h3>PHONE📲</h3>
        </Marquee>
      </div> */}
      <Marquee
        speed={60}
        gradient={false}
        style={{ backgroundColor: '#94004F', color: 'white', height: '4rem' }}
      >
        <h1>
          {ADS}
          <span
            style={{ backgroundColor: '#E07E1B', borderTopRightRadius: 30 }}
          >
            FOR FREE
          </span>
        </h1>
      </Marquee>
    </div>
  )
}

export default Marque
