
const Pagination = ( props: any ) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("postsPerPage",pageNumbers);
  return (
    <nav>
    <ul className='pagination justify-content-md-center pt-4'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a onClick={() => props.paginate(number)}  className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default Pagination;