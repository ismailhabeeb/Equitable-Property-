import "/src/assets/styles/footer.css"
import logo from '../assets/images/TreeCity-removedbg.png'

function Footer() {
  return (
    <>

      <div className="footer">
        <div className="footer text-start">

          <div class="row primary">
            <div class="column blog">

              <h3 className="text-info">
                <img className='log w-100' src={logo} alt="" />
              </h3>


              <div class="social">
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-instagram-square"></i>
                <i class="fa-brands fa-twitter-square"></i>
                <i class="fa-brands fa-youtube-square"></i>
                <i class="fa-brands fa-whatsapp-square"></i>
              </div>
            </div>

            <div class="column links">
              {/* <h3>Some Links</h3> */}
              <ul>
                <li>
                  <a href="#faq">NEWS</a>
                </li>
                <li>
                  <a href="#cookies-policy">POLITICS</a>
                </li>
                <li>
                  <a href="#terms-of-services">ENTERTAINMENT</a>
                </li>
                <li>
                  <a href="#support">SPORT</a>
                </li>
              </ul>
            </div>

            <div class="column links">

              <ul>

                <li>
                  <a href="#faq">ABOUT US</a>
                </li>
                <li>
                  <a href="#cookies-policy">ADVERTISE</a>
                </li>
                <li>
                  <a href="#terms-of-services">CONTACT US</a>
                </li>
                <li>
                  <a href="#support">RSS</a>
                </li>
                <li>
                  <a href="#support"> FAQ <li>

                  </li></a>
                </li>
              </ul>

            </div>


            <div class="column links">
              <ul>
                <li>
                  <a href="#faq">F.A.Q</a>
                </li>
                <li>
                  <a href="#cookies-policy">COOKIES POLICY</a>
                </li>
                <li>
                  <a href="#terms-of-services">TERMS OF SERVICE</a>
                </li>
                <li>
                  <a href="#support">SUPPORT</a>
                </li>
              </ul>
            </div>
            <div class="column links">
              <ul>
                <li>
                  <a href="#faq">CAREERS</a>
                </li>
                <li>
                  <a href="#cookies-policy">ARCHIVE</a>
                </li>
                <li>
                  <a href="#terms-of-services">USER AGREEMENT</a>
                </li>
                <li>
                  <a href="#support">COMMENT POLICY</a>
                </li>

                <li>
                  <a href="#support">DMCA POLICY</a>
                </li>
              </ul>
            </div>

            

          </div>

          <div class="row copyright">
            <div class="footer-menu w-100">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
              <a href="">Social</a>

            </div>
            <hr />
            <p className="">Copyright &copy;<a href="mailto:ismailhabeeboluwatobi995@gmail.com">Dev. MAHISH</a> </p>
          </div>


        </div>
      </div>

    </>
  )
}



export default Footer;