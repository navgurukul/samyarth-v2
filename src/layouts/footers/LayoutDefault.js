import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
const DefaultFooter = ({ extraClass }) => {
  const { asPath } = useRouter();

  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setShow(window.innerWidth <=800);
      };

      window.addEventListener("resize", handleResize);
    }
  }, []);


  useEffect(()=>{
    setTimeout(() => {
      
    }, 1000);
    
  },[show])
  return (
    <>
      {/* footer */}
      <footer className="mil-dark-bg"  >
        <div className="mi-invert-fix" >
          <div className="container mil-p-120-300" >
            <div className="row justify-content-between" style={{justifyContent:"space-evenly"}}>
              {/* <div className="col-md-4 col-lg-4 mil-mb-60"> */}
                <div className="mil-muted mil-logo mil-up mil-mb-30">
                  {AppData.footer.logo.text}
                </div>

                <p className="mil-light-soft mil-up mil-mb-30">
                  A cooperative by marginalized women to champion social causes
                </p>
              {/* </div> */}

            </div>

            <div className="row justify-content-between flex-sm-row-reverse">
              <div className="col-md-7 col-lg-6">
              </div>
              <div className="col-md-4 col-lg-6 mil-mb-60">
                <div className="mil-vert-between" style={{display:"flex",justifyContent:"space-evenly", width:"300px"}}>
                  <div className="mil-mb-30">
                    <ul className="mil-social-icons mil-up">
                      {AppData.social.map((item, key) => (
                        <li key={`footer-social-item-${key}`}>
                          <a
                            href={item.link}
                            target="_blank"
                            className="social-icon"
                          >
                            <i className={item.icon} />
                          </a>
                        </li>
                      ))}                                                                           
                    </ul>
                  </div>
                  <p className="mil-light-soft mil-up">{AppData.footer.copy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
