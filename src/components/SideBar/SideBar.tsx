import { useEffect, useState } from "react";
import { getTags } from "@/api/article";

// 定义props类型
interface Tags {
  tags: any[];
}
const SideBar = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then((res: any) => {
      setTags(res.data.data);
    });
  }, [getTags]);
  
  // 处理标签点击事件
  const handleTagClick = (tagId: number,tagName: string) => {
    // 跳转到Home页面并传递标签参数
    window.location.href = `/home?tagId=${tagId}&tagName=${tagName}`;
  };
  
  return (
    <div
      className="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12
          col-xs-12 sidebar-container"
      style={{ height: "auto !important", minHeight: "0px !important" }}
    >
      {/* Featured Tags */}
      <section>
        <h5>
          <a href="/archive/">FEATURED TAGS</a>
        </h5>
        <div className="tags">
          {tags.map((tag: any, idx: number) => {
            return (
              <a 
                title={tag.tagName} 
                key={idx}
                href={`/home?tagId=${tag.tagId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTagClick(tag.tagId,tag.tagName);
                }}
                style={{ cursor: 'pointer' }}
              >
                {tag.tagName}
              </a>
            );
          })}
        </div>
      </section>
      {/* Short About */}
      <section className="visible-md visible-lg">
        <hr />
        <h5>
          <a href="/">ABOUT ME</a>
        </h5>
        <div className="short-about">
          <img src={require("@assets/images/avatar.png")} />

          <p>
            要做一个有 swag 的程序员 <br />
          </p>

          {/* SNS Link */}

          <ul className="list-inline">
            <li>
              <a href="">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa  fa-stack-1x fa-inverse">知</i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-weibo fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li>
              <a target="_blank" href="">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Friends Blog
      <hr /> */}
      {/* <h5>FRIENDS</h5> */}
      <ul className="list-inline">
      </ul>
      {/* Ads
          <script async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      {/* first shot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "600px" }}
        data-ad-client="ca-pub-6487568398225121"
        data-ad-slot="4814308751"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adsbygoogle-status="done"
        data-ad-status="unfilled"
      >
        <div
          id="aswift_1_host"
          style={{
            border: "none",
            height: "600px",
            width: "219px",
            margin: "0px",
            padding: "0px",
            position: "relative",
            visibility: "visible",
            backgroundColor: "transparent",
            display: "inline-block",
            overflow: "visible",
          }}
        >
        </div>
      </ins>
    </div>
  );
};
export default SideBar;
