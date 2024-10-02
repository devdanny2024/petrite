import Image from 'next/image';

const Heroheader = () => {


    return (
     <>
     <div className="hero-wrap">
        <div className='hero'>
            <div className="title">
                <h1>For pet lovers, by pet lovers.</h1>
                <p>Everything your pet needs to stay healthy and happy.</p>
                <div className='create-btn'>
                    Create an Account
                </div>
                <div className='since'>
                Petrite was born from my frustration with local pet product shortage. It's a work in progress, but I'm committed to making it a go-to spot for pet parents seeking the best for their pets.
                </div>
                <div className=''>
                    
                </div>
            </div>
            <Image
                className='header-img'
                src="/Images/Dog.png" // Path relative to the 'public' folder
                alt="Example Image"
                width={595} // Specify width
                height={616} // Specify height
            />
        </div>
     </div>
     </>
    );
  };
  
  export default Heroheader;
  