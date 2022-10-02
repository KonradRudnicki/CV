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
                      <li><img className="address-icon" src="images/tel.png"/><b>Numer telefonu</b>: 662 582 338</li>
                      <li><img className="address-icon" src="images/mail.png"/><b>Email</b>: konradrudnicki0@gmail.com</li>
                      <li><img className="address-icon" src="images/uro.png"/><b>Data urodzenia</b>: 24.05.2002</li>
                      <li><img className="address-icon" src="images/miejsce.png"/><b>Miejsce urodzenia</b>: Wrocław</li>
                  </ul>
              </address>
              </header>

          <main>
              <section>
                  <h2>O mnie</h2>
                  <p>
                      Mam na imię <b>Konrad</b>! Jestem studentem drugiego roku informatyki
                      stosowanej po angielsku na <a href="https://pwr.edu.pl/">Politechince Wrocławskiej</a>.
                      Cechuję się kreatywnością, otwartością oraz logicznym myśleniem.
                      Jestem ambitną osobą, która wytrwale walczy o sukcesy.
                  </p>
              </section>

              <section>
                  <h2>Moje linki</h2>
                  <ul>
                      <li><a href="https://github.com/KonradRudnicki">GitHub</a></li>
                      <li><a href="https://www.linkedin.com/in/konrad-rudnicki-dev/">LinkedIn</a></li>
                      <li><a href="https://tic-tac-toe-konrad-rudnicki.herokuapp.com/index.html">Gra przeglądarkowa "kółko i krzyżyk"</a></li>
                  </ul>
              </section>

              <section>
                  <h2>Języki</h2>
                  <ul>
                      <li>Polski - ojczysty</li>
                      <li>Angielski - C1</li>
                      <li>Niemiecki - A1</li>
                  </ul>
              </section>

              <section>
                  <h2>Wykształcenie</h2>
                  <ul>
                      <li>2021-obecnie: Politechnika Wrocławska - Informatyka Stosowana w języku angielskim</li>
                      <li>2018-2021: Liceum Ogólnokształcące nr 5 we Wrocławiu - profil mat-fiz-inf</li>
                  </ul>
              </section>

              <section>
              <h2>Zainteresowania</h2>
                  <ul>
                      <li>Motoryzacja</li>
                      <li>Kulturystyka</li>
                      <li>Piłka nożna</li>
                      <li>Sztuki walki</li>
                  </ul>
              </section>
          </main>
    </div>
  )
}
