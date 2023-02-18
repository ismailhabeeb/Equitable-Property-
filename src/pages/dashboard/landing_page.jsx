import house from '/src/assets/images/K1-Camera-1-scaled.jpg'
import house2 from '/src/assets/images/background.jpg'
import { Link, Outlet } from 'react-router-dom';

export default function LandinPage() {
  fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=DZLjE1dB6BmKHlb6RkWxi1F9QDKIKp6g')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  })
  return (
    <main className='  p-5'>





      <div className="row row-cols-1 row-cols-md-3 d-flex flex-wrap g-4">
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card hov h-100">
            <img src={house} className="card-img-top" alt={house} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}