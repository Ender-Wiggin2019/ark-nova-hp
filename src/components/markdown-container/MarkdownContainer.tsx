export const MarkdownContainer = ({ md }: { md: string }) => {
  return (
    <div className='md-container'>
      <div dangerouslySetInnerHTML={{ __html: md }}></div>
    </div>
  );
};
