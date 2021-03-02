const genererateAmazonImage = (html) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default genererateAmazonImage;
