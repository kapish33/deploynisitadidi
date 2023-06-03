import Image from 'next/image';
import Link from 'next/link';

const Index = ({ courseName,para,linkText,redirectTo,downHeading}) => {
  return (
    <>
      <div className="card-hover capitalize">
        <div className="card-hover__content">
          <h3 className="card-hover__title">
            Explore <span>{courseName? courseName : "Add Course Name"}</span> right now!
          </h3>
          <p className="card-hover__text">{para ? para : "##### Please Add Paragraph"}</p>
          <Link className="card-hover__link" href={redirectTo? redirectTo : '/404'}>
         
            <span>{linkText? linkText :'Learn How'}</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </Link>
        </div>
        <div className="card-hover__extra">
          {/* <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4> */}
          <h4>{downHeading ? downHeading : "Down Heading "}</h4>
        </div>
        <Image src="https://cdn.pixabay.com/photo/2020/07/10/18/53/elephant-5391723_1280.jpg" alt="" width={1200} height={800} />
      </div>
    </>
  );
};

export default Index;
