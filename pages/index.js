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
                      Mam na imię <b>Konrad</b>! Jestem studentem pierwszego roku informatyki
                      stosowanej na <a href="https://pwr.edu.pl/">Politechince Wrocławskiej</a>. Wcześniej ukończyłem
                      Liceum Ogólnokształcące nr 5 we Wrocławiu.
                      Cechuję się kreatywnością, otwartością oraz logicznym myśleniem.
                      Jestem ambitną osobą, która wytrwale walczy o sukcesy.

                  </p>
              </section>

              <section>
                  <h2>Doświadczenie zawodowe</h2>
                  <ul>
                      <li>Projekt strony internetowej</li>
                      <li>Projekt zaprogramowania silnika trójfazowego</li>
                  </ul>
              </section>

              <section>
                  <h2>Języki</h2>
                  <ul>
                      <li>Polski - ojczysty</li>
                      <li>Angielski - B2</li>
                      <li>Niemiecki - A1</li>
                  </ul>
              </section>

              <section>
                  <h2>Wykształcenie</h2>
                  <ul>
                      <li>2015-2018: Gimnazjum nr 23 we Wrocławiu - profil mat</li>
                      <li>2018-2021: <a href="https://lo5.wroc.pl/">
                          Liceum Ogólnokształcące nr 5 we Wrocławiu</a>
                          - profil mat-fiz-inf</li>
      		<li>2021- : Politechnika Wrocławska - Informatyka Stosowana w języku angielskim</li>
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