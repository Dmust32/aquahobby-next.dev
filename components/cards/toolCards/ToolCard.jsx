import React from 'react';
import Link from 'next/link';
import './ToolCard.module.scss';

const ToolCard = ({ img, title, content, toolSlug }) => {
  return (
    <Link href={`/tools/${toolSlug}`}>
      <div className="tool-card-container">
        <img src={img} alt={title} />
        <div>
          <h3>{title}</h3>
          {content()}
        </div>
      </div>
    </Link>
  )
}

export default ToolCard
