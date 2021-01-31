import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const contentToReact = (content) => {
  return documentToReactComponents(content,
    {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const { url, description, details: { image } } = node.data.target.fields.file;

          return (
            <Image
              alt={description}
              src={`https:${url}`}
              width={image.width}
              height={image.height}
            />
          )
        },
        [INLINES.HYPERLINK]: node => {
          return (
            <a href={node.data.uri} target="_blank" >{node.content[0].value}</a>
          );
        }
      }
    }
  )
};

export default contentToReact;
