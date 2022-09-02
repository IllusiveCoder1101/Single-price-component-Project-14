import React from 'react'

function App() {
  return (
    <div className='box'>
      <div className="containers">
        <div className="text">
        <h1 className='community'>Join our community</h1>
        <h2 className='days'>30-day, hassle-free money back gurantee</h2>
        <p className='about'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="content">
        <div className="subscribe">
          <h1 className='monthly'>Monthly Subscription</h1>
          <p className='pmonth'><em>$29</em> per month</p>
          <p className='full'>Full access for less than $1 a day</p>
          <button className='btn'>Sign Up</button>
        </div>
        <div className="why">
          <h1 className='us'>Why us</h1>
          <p className='para1'>Tutorials by industry experts </p>
          <p className='para1'>Peer & expert code review</p>
          <p className='para1'>Coding exercises</p>
          <p className='para1'>Access to our Github repos</p>
          <p className='para1'>Community forums</p>
          <p className='para1'>Flashcard decks</p>
          <p className='para1'>New videos every week</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App