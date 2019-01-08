import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SocialAndSearch extends Component {

  constructor() {
    super();
    console.log("gere")
  }

  render() {
    return (
        <div className="top-wrapper">
			<div className="top-wrapper-content">
				<div className="top-left">
					<div className="widget socials">
                        <div className="widgett">		
			                <div className="social_icons">
				                <a target="_blank" href="http://twitter.com/PremiumCoding" title="Twitter">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a target="_blank" href="https://www.facebook.com/PremiumCoding" title="Facebook">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a target="_blank" href="https://dribbble.com/gljivec" title="Dribbble">
                                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                                </a>
                                <a target="_blank" href="https://www.flickr.com/" title="Flickr">
                                    <i className="fa fa-flickr" aria-hidden="true"></i>
                                </a>
                                <a target="_blank" href="http://www.pinterest.com/gljivec/" title="Pinterest">
                                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                                </a>
                            </div>
		                </div>	
		            </div>
                </div>
				<div className="top-right">
				<div className="widget widget_search">
                    <form method="get" id="searchform" className="searchform" action="http://lavander.premiumcoding.com/lavander-lite/">
                        <input type="text" defaultValue="Search and hit enter..." name="s" id="s" />
                        <i className="fa fa-search search-desktop" aria-hidden="true"></i>
	                </form>
                </div>
            </div>
		</div>
	</div>
    );
  }
}

export default SocialAndSearch;