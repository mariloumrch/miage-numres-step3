import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="social-icon" data-network="facebook" aria-label="Facebook">FB</a>
          <a href="#" class="social-icon" data-network="twitter" aria-label="Twitter">TW</a>
          <a href="#" class="social-icon" data-network="google" aria-label="Google">G+</a>
          <a href="#" class="social-icon" data-network="linkedin" aria-label="LinkedIn">IN</a>
          <a href="#" class="social-icon" data-network="youtube" aria-label="YouTube">YT</a>
          <a href="#" class="social-icon" data-network="instagram" aria-label="Instagram">IG</a>
          <a href="#" class="social-icon" data-network="pinterest" aria-label="Pinterest">PIN</a>
          <a href="#" class="social-icon" data-network="snapchat" aria-label="Snapchat">SC</a>
          <a href="#" class="social-icon" data-network="skype" aria-label="Skype">SK</a>
          <a href="#" class="social-icon" data-network="android" aria-label="Android">AND</a>
          <a href="#" class="social-icon" data-network="dribbble" aria-label="Dribbble">DR</a>
          <a href="#" class="social-icon" data-network="vimeo" aria-label="Vimeo">VM</a>
          <a href="#" class="social-icon" data-network="tumblr" aria-label="Tumblr">TU</a>
          <a href="#" class="social-icon" data-network="vine" aria-label="Vine">VN</a>
          <a href="#" class="social-icon" data-network="foursquare" aria-label="Foursquare">4SQ</a>
          <a href="#" class="social-icon" data-network="stumbleupon" aria-label="StumbleUpon">SU</a>
          <a href="#" class="social-icon" data-network="flickr" aria-label="Flickr">FL</a>
          <a href="#" class="social-icon" data-network="yahoo" aria-label="Yahoo">Y!</a>
          <a href="#" class="social-icon" data-network="reddit" aria-label="Reddit">RD</a>
          <a href="#" class="social-icon" data-network="rss" aria-label="RSS">RSS</a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h1>A TOI DE JOUER</h1>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.svg" width="500" height="600" alt="Question mark">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();