import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({description, title}) => (
    <div>
        <Helmet>
            <title>Asher Toufeeq | Frontend Developer</title>
            <meta name="title" content="Asher Toufeeq | Frontend Developer"/>
            <meta name="description"
                  content="A FrontEnd Developer.An Undergraduate student pursuing B.tech(Electrical) from Jamia Millia Islamia, New Delhi(110025)."/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://asher-toufeeq.me/"/>
            <meta property="og:title" content="Asher Toufeeq | Frontend Developer"/>
            <meta property="og:description"
                  content="A FrontEnd Developer.An Undergraduate student pursuing B.tech(Electrical) from Jamia Millia Islamia, New Delhi(110025)."/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://asher-toufeeq.me/"/>
            <meta property="twitter:title" content="Asher Toufeeq | Frontend Developer"/>
            <meta property="twitter:description"
                  content="A FrontEnd Developer.An Undergraduate student pursuing B.tech(Electrical) from Jamia Millia Islamia, New Delhi(110025)."/>
        </Helmet>
    </div>
);

export default SEO;
