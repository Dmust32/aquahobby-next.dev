import React from 'react';
import contentToReact from '../../../utils/contentToReact';

import './InformativeTemplate.module.scss';

const InformativeTemplate = ({ article: { fields: { title, content, aboutSection } } }) => {
  return (
    <div className="informative-template">
      <h1 id="title">{title}</h1>
      <div className="about-section">
        {aboutSection &&
          contentToReact(aboutSection)
        }
      </div>
      <div className="content-body">
        {contentToReact(content)}
      </div>
    </div>
  )
}

export default InformativeTemplate
