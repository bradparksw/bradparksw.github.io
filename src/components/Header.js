import React, {useEffect} from 'react';
import $ from 'jquery';
import '../header.css'

function openResume() {
  window.open('/resume.pdf');
}

function Header() {
  useEffect(() => {
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    if ($('.smart-scroll').length > 0) {
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            var scroll_top = $(this).scrollTop();
            if (scroll_top === 0) {
              $('.smart-scroll').removeClass('shadow mb-5 rounded');
            } else if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up shadow mb-5 rounded');
            } else {
                $('.smart-scroll').removeClass('scrolled-up shadow mb-5 rounded').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
  });

  return (
    <nav className="navbar smart-scroll transparent navbar-inverse navbar-expand-lg fixed-top" style={{padding: '1rem 2rem 1rem 2rem'}}>
      <a  className="navbar-brand" href="/#home">
        <img src="/images/logo.png" alt="logo" id="logo"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        <i class="fa fa-navicon" style={{fontSize: "24px"}}></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ol className="navbar-nav ml-auto">
        <li className="nav-item">
                <a className="nav-link" href="/#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#experience">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#contact">Contact Me</a>
            </li>
        </ol>
      </div>
    </nav>
  )
}

export default Header;
