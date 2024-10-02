import Image from 'next/image';


const Features = () => {


    return (
     <>
     <div className="feature-wrap">
      <div className="treat-body">
        <h1>No more waste</h1>
        <h3>Treats Tailored for Joyful Moments.</h3>
        <p className="discover">Discover the perfect balance of nutrition with Petrite's exceptional pet food selection. We prioritize your pet's health, ensuring every meal is crafted with happiness and vitality.</p>
        <Image
                src="/Images/food.png" // Path relative to the 'public' folder
                alt="Example Image"
                width={1000} // Specify width
                height={652} // Specify height
            />
      </div>
     </div>
     </>
    );
  };
  
  export default Features;
  