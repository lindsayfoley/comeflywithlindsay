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
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default PostDetails;
