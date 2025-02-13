interface PostDetailsProps {
  dateUpdated: string;
  author?: string;
}

const PostDetails = ({
  dateUpdated,
  author = "Lindsay Foley",
}: PostDetailsProps) => {
  return (
    <>
      <span>
        {dateUpdated} • By {author}
      </span>
      <style jsx>{`
        span {
          display: block;
          text-transform: uppercase;
          color: #535252;
          font-size: 13px;
          margin-top: 5px;
          margin-bottom: 15px;
        }

         @media all and (max-width: 667px) {
          span {
            margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default PostDetails;
