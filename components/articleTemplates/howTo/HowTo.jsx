import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const HowTo = ({ article: { fields: { content } } }) => {
  return (
    <>
      {documentToReactComponents(content,
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
              <img src={`https:${node.data.target.fields.file.url}`} />
          }
        }
      )}
    </>
  )
}

export default HowTo;
