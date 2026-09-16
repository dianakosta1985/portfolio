import Image from "next/image";
const CV = () => {
  return (
    <div className="relative group hidden md:block">
      <div className="filter: blur-1">
        <Image
          className="transition-opacity duration-1000 ease-in-out group-hover:opacity-80 md:h-full"
          src="/assets/images/cv_img.jpg"
          alt="CV"
          height={400}
          width={350}
        />
      </div>
      <button
        style={{ left: "40%" }}
        className="absolute invisible group-hover:visible top-40 btn bg-blue-400 text-primary-content font-normal hover:bg-blue-400"
      >
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1PJ1G_5ifUqXVN0gzmNiq_S3_czqP0CFy&export=download"
          download="CV-PDF-document"
        >
          Download
        </a>
      </button>
    </div>
  );
};

export default CV;
