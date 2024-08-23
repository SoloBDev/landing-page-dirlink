const LastFooter = () => {
  return (
    <>
      <div className='border-t-[1px] border-gray-1'>
        <div className='flex  justify-between items-center py-5 base:flex-col-reverse base:gap-y-4 base:px-8 sm:px-16 md:px-24  sm:gap-4 md:flex-row'>
          <p className='text-[14px] xs:text-sm'>© 2024 DirLink . All Rights Reserved.</p>

          <ul className='flex gap-4'>
            <li>
              <a
                className='text-[14px] xs:text-sm'
                href='#'
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <a
                className='text-[14px] xs:text-sm'
                href='#'
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LastFooter;
