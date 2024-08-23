const UsefulLink = () => {
  return (
    <>
      <div>
        <h4 className='text:lg md:text-xl font-semibold'>Useful Links</h4>
        <ul className='mt-3 flex flex-col gap-3'>
          <li>
            <a
              className='text-gray-3 transition-colors '
              href='#'
            >
              Platform
            </a>
          </li>
          <li>
            <a
              className='text-gray-3 transition-colors '
              href='#'
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              className='text-gray-3 transition-colors '
              href='#'
            >
              Services
            </a>
          </li>
          <li>
            <a
              className='text-gray-3 transition-colors '
              href='#'
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsefulLink;
