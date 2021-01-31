import React from 'react';
import contentToReact from '../../../utils/contentToReact';

import './InformativeTemplate.module.scss';

const InformativeTemplate = ({ article: { fields: { title, content, aboutSection } } }) => {
  return (
    <>
      <h1 id="title">{title}</h1>
      <div className="about-section">
        {aboutSection &&
          contentToReact(aboutSection)
        }
      </div>
      <div className="content-body">
        {contentToReact(content)}
      </div>
    </>
  )
}

export default InformativeTemplate
