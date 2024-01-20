import Link from "next/link";
import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect } from "react";
import { Accordion } from "../../common/utilits";

const ServiceDetailWhy = () => {
  useEffect(() => {
    Accordion();
  }, []);

  const postData = {
    introTitle: '<span class="mil-thin"> Why </span> Samyarth',
    description: {
      title:
        ' Technology,  Creativity, <span class="mil-thin"> <br>and </span> Work   Impact',
      content:
        "At Samyarth, we are more than just a service provider. We are a social enterprise that combines technology, creativity, and impact. We offer a range of services that cater to the needs of non-profits, governments, and socially conscious for-profits.",
      button: {
        link: "/projects",
        label: "View works",
      },
    },
    list: {
      items: [
        {
          label: "Competitive and fair pricing structure",
          value:
            "<p>We offer affordable and transparent rates that reflect the value and quality of our work. We use low code/no code tools and agile methodologies to deliver solutions faster, cheaper, and easier, while still maintaining high quality and functionality.</p>",
        },
        {
          label: "Contribute to social good while prioritizing business needs",
          value:
            "<p>We align our services with your mission and vision, while also empowering our members and communities with skills, income, and dignity. We are a for-profit cooperative run by members, mainly marginalized women, who champion socially impactful initiatives and the potential of underserved communities.</p>",
        },
        {
          label: "Ready-made solutions to suit critical needs",
          value:
            "<p>We leverage our expertise in website and app development, financial services, UX and UI design, and curriculum design to cater to the needs of non-profits, governments, and socially conscious for-profits. We deliver projects with low to medium technology complexity, using solutions that are effective, sustainable, and customized.</p>",
        },
      ],
    },
  };

  return (
    // <Layouts>
    <div>
      {/* <PageBanner
        pageTitle={postData.introTitle}
        // breadTitle={postData.description.title}
        anchorLabel={"About service"}
        anchorLink={"#service"}
      /> */}

      {/* service */}
      <section id="service">
        <h2
          style={{ marginTop: "40px" }}
          className="mil-center mil-up mil-mb-50  mil-p-120-90"
          dangerouslySetInnerHTML={{ __html: postData.introTitle }}
        />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-relative mil-mb-90">
              <h4
                className="mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: postData.description.title }}
              />
              <p
                className="mil-up mil-mb-30"
                dangerouslySetInnerHTML={{
                  __html: postData.description.content,
                }}
              />
            </div>
            <div className="col-lg-6">
              {postData.list != undefined && (
                <>
                  {postData.list.items.map((item, key) => (
                    <div
                      className="mil-accordion-group mil-up"
                      key={`service-list-${key}`}
                    >
                      <div className="mil-accordion-menu">
                        <p className="mil-accordion-head">{item.label}</p>
                        <div className="mil-symbol mil-h3">
                          <div className="mil-plus">+</div>
                          <div className="mil-minus">-</div>
                        </div>
                      </div>
                      <div
                        className="mil-accordion-content mil-text"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailWhy;
