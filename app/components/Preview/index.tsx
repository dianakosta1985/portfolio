import style from "./style.module.scss";

const Preview = () => {
  return (
    <div className="flex flex-col md:justify-center min-h-[75vh] lg:min-h-[85vh] justify-center p-10  md:bg-inherit text-primary-contant text-center md:text-left ">
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.title}>
            <span className={style.block}></span>
            <h1>
              Diana Kosta<span></span>
            </h1>
          </div>

          <div className={style.role}>
            <div className={style.block}></div>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
