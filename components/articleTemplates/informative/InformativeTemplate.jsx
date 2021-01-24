import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import './InformativeTemplate.module.scss'

const InformativeTemplate = ({ article: { fields: { title, content, aboutSection } } }) => {
  return (
    <>
      <h1 id="title">{title}</h1>
      <div className="about-section">
        {aboutSection &&
          documentToReactComponents(aboutSection,
            {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: node => {
                  return (
                    <img
                      alt={node.data.target.fields.file.description}
                      src={`https:${node.data.target.fields.file.url}`}
                    />
                  )
                },
              }
            }
          )
        }
      </div>
      <div className="content-body">
        {documentToReactComponents(content,
          {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                  <img
                    alt={node.data.target.fields.file.description}
                    src={`https:${node.data.target.fields.file.url}`}
                  />
                );
              },
              [INLINES.HYPERLINK]: node => {
                return (
                  <a href={node.data.uri} target="_blank" >{node.content[0].value}</a>
                );
              }
            }
          }
        )}
      </div>
    </>
  )
}

export default InformativeTemplate
