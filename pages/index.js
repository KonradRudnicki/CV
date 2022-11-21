import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Image from 'next/image'
import profilePic from '../public/images/avatar.jpg'

export default function Home() {
  return (
    <div className="container">
      <header>
              <Image
                      src={profilePic}
                      alt="Picture of the author"
                      width="180px"
                      height="180px"
                      className = "circle"
                    />
              <div>
                  <h1>Konrad Rudnicki</h1>
                  <span>Student</span>
              </div>
              <address>
                  <ul>
                      <li><img className="address-icon" src="images/tel.png"/><b>Phone number</b>: 662 582 338</li>
                      <li><img className="address-icon" src="images/mail.png"/><b>E-mail</b>: konradrudnicki0@gmail.com</li>
                      <li><img className="address-icon" src="images/uro.png"/><b>Birth date</b>: 24.05.2002</li>
                      <li><img className="address-icon" src="images/miejsce.png"/><b>Residence</b>: Wrocław</li>
                  </ul>
              </address>
              </header>

          <main>
              <section>
                  <h2>About me</h2>
                  <p>
                      A second-year student of Applied Computer Science in English at the Wrocław University of Technology.
                      I am characterised by creativity, openness and logical thinking. Ambitious person who persistently strives for success.
                  </p>
              </section>

              <section>
                  <h2>My links</h2>
                  <ul>
                      <li><a href="https://github.com/KonradRudnicki">GitHub</a></li>
                      <li><a href="https://www.linkedin.com/in/konrad-rudnicki-dev/">LinkedIn</a></li>
                  </ul>
              </section>

              <section>
                  <h2>My projects</h2>
                  <ul>
                      <li><a href="https://tic-tac-toe-konrad-rudnicki.herokuapp.com/index.html">Tic Tac Toe game</a></li>
                      <li><a href="https://github.com/KonradRudnicki/sfg-pet-clinic">Sfg Pet Clinic</a></li>
                      <li><a href="https://github.com/KonradRudnicki/spring5-jokes-app-v2">Chuck Norris jokes application</a></li>
                      <li><a> More projects posted on my GitHub profile</a></li>
                  </ul>
              </section>

              <section>
                  <h2>Languages</h2>
                  <ul>
                      <li>Polish - native</li>
                      <li>English - C1</li>
                      <li>German - A2</li>
                  </ul>
              </section>

              <section>
                  <h2>Work experience</h2>
                  <ul>
                      <li>2021.10-current: Java Application Consultant in Capgemini</li>
                  </ul>
              </section>

              <section>
                  <h2>Education</h2>
                  <ul>
                      <li>2021-current: Wrocław University of Technology - Applied Computer Science</li>
                      <li>2018-2021: High school no. 5 in Wrocław</li>
                  </ul>
              </section>

              <section>
              <h2>Interests</h2>
                  <ul>
                      <li>Boxing</li>
                      <li>Automotive</li>
                      <li>Bodybuilding</li>
                      <li>Music</li>
                  </ul>
              </section>
          </main>
    </div>
  )
}
