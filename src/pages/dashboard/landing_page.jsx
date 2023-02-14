// import logo from '../assets/images/TreeCity.webp'
import house from '/src/assets/images/K1-Camera-1-scaled.jpg'
import house2 from '/src/assets/images/background.jpg'
// import '../assets/styles/login.css'
import { Link, Outlet } from 'react-router-dom';
// import Navbar from '../../components/navbar';

export default function LandinPage() {
  return (
    <main className='  p-5'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolor modi quibusdam eum soluta distinctio perspiciatis, neque cupiditate tempora officiis nostrum adipisci optio molestiae ratione earum totam culpa beatae quia?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error recusandae autem laudantium provident sunt ratione explicabo! Id, deserunt veritatis.
      #navbarSupportedContent

      #navbarSupportedContent
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem minima assumenda commodi accusantium rerum a facilis atque explicabo consequuntur quod, mollitia, consequatur quidem sed. Iste unde at molestiae ducimus reprehenderit?
      lore70
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime nam ea neque magnam, asperiores praesentium aperiam quam et minima quia ipsum delectus vitae, exercitationem voluptatem voluptates. Eos optio, labore qui ducimus cumque facilis ab est a explicabo consectetur incidunt maiores, cum blanditiis rem quod alias debitis! Praesentium veritatis fugiat iste officia numquam ut repellendus saepe deserunt. Dolorum ipsum maiores, nemo tempora doloremque provident facere cumque eaque dolores asperiores. Quasi.


      <div className='gap-5 d-flex'>
        <div class="card">
          <img src={house2} class="card-img-top" alt={house2} />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card w-75" aria-hidden="true">
          {/* <img src='...' class="card-img-top" alt={house2} /> */}
          <span class="placeholder placeholder-glow card-img-top h-75 w-100"></span>

          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
      </div>



      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={house} class="card-img-top" alt={house} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={house} class="card-img-top" alt={house} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={house} class="card-img-top" alt={house} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={house} class="card-img-top" alt={house} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}