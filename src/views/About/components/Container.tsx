import SideBar from "@components/SideBar/SideBar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LinkType {
  id: number;
  title: string;
  link: string;
  linkType: string;
}
// 定义props类型
interface ContainerProps {
  links: LinkType[];
}

const Container: React.FC<ContainerProps> = ({ links }) => {
  // 组件内部使用hook
  const [t, i18n] = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const onLanChange = (e: any) => {
    const locale = e.target.value === 0 ? "zh-CN" : "en-US";
    i18n.changeLanguage(locale);
    setCurrentIndex(e.target.value);
  };
  return (
    <div className="container" style={{ height: "auto !important" }}>
      <div className="row" style={{ height: "auto !important" }}>
        {/* USE SIDEBAR  */}
        {/* PostList Container */}
        <div
          className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12
        col-xs-12 postlist-container"
        >
          {/* Language Selector */}
          <select
            className="sel-lang"
            value={currentIndex}
            onChange={(event) => onLanChange(event)}
          >
            <option value="0"> 中文 | Chinese </option>
            <option value="1"> 英文 | English </option>
          </select>

          {/* Chinese Version */}
          <div
            className="zh post-container active"
            style={{ display: currentIndex == 0 ? "block" : "none" }}
          >
            <p>
              Hey，我是吳啟，一个略懂计算机科学与慵懶青年，一名擁有六年經驗的前端開發工程師，我專註於前端技術的深耕與創新，致力於構建高質量、易維護的前端架構和流暢的用戶體驗。
            </p>

            <p>
              這個博客不僅是我的技術筆記本，也是我與廣大技術愛好者交流的平台。在這裡，我將分享我的技術心得、開發實戰和對行業趨勢的思考。無論是前端開發的新手，還是技術精進的探索者，期待與您一起碰撞思維、啟發創新，共同推動前端技術的發展！
            </p>

            <p>
              目前的物理活動範圍主要在深圳，也想當個數字遊
              <del>民</del>俠。虛擬分身日常出沒於
              <a href="">微博</a>、<a href="">知乎</a>
              <a href="">B站</a>、<a href="">Instagram</a>、<a href="">推特</a>
              、<a href="https://github.com/yolkmen-wq">Github</a> 等。
            </p>

            <h5 id="学习站点">学习站点</h5>

            <ul>
              {links
                .filter((link: LinkType) => link.linkType === "学习站点")
                .map((link, idx: number) => {
                  return (
                    <li key={idx}>
                      <a href={link.link} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  );
                })}
            </ul>

            <h5 id="常用工具">常用工具</h5>

            <ul>
              {links
                .filter((link: LinkType) => link.linkType === "常用工具")
                .map((link: LinkType, idx: number) => {
                  return (
                    <li key={idx}>
                      <a href={link.link} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* English Version  */}
          <div
            className="en post-container"
            style={{ display: currentIndex == 1 ? "block" : "none" }}
          >
            <p>
              Hey, I am Huang, Xuan (a.k.a. <em>@huxpro</em>). I worked on the{" "}
              <a href="https://beta.reactjs.org/community/meet-the-team#react-core">
                React Team
              </a>{" "}
              at <del>Facebook</del>Meta.
            </p>

            <p>
              I considered myself as a hybrid between a software engineer
              specifically into the programming languages theories and
              implementations domain (i.e. compiler, type system, type-based
              formal verification, virtual machine, runtime systems, garbage
              collection), and a creative technologiest deeply caring about many
              humanistic aspects (e.g. visual, sound, interaction) in UI and HCI
              in general.
            </p>

            <p>
              I also worked on the{" "}
              <a href="https://hermesengine.dev/">Hermes JavaScript Engine</a>,
              some other projects under the{" "}
              <a href="https://tech.fb.com/ar-vr/">Reality Labs (Research)</a>,
              and <a href="https://reasonml.github.io/">ReasonML</a> (now{" "}
              <a href="https://rescript-lang.org/">ReScript</a>) efforts at Meta
              (Facebook).
            </p>

            <p>
              In the past, I worked on{" "}
              <a href="https://www.alitrip.com/">Alitrip (Fliggy)</a> mobile and
              web apps under the{" "}
              <a href="https://en.wikipedia.org/wiki/Alibaba_Group">
                Alibaba Group
              </a>
              , found and lead front-end infrastructure team at an unicorn
              startup company{" "}
              <a href="https://www.crunchbase.com/organization/beijing-weiying-technology">
                Beijing Weiying (a.k.a. WePiao, now acquired by Maoyan)
              </a>
              , and helped{" "}
              <a href="https://en.wikipedia.org/wiki/Ele.me">
                Ele.me (now acquired by Alibaba)
              </a>{" "}
              to upgrade their mobile web site into{" "}
              <a href="https://medium.com/elemefe/upgrading-ele-me-to-progressive-web-app-2a446832e509">
                the first influential PWA (progressive web app) in China
              </a>
              .
            </p>

            <p>
              I studied BA, Digital Media Art at{" "}
              <a href="https://en.wikipedia.org/wiki/Communication_University_of_China">
                Communication University of China
              </a>{" "}
              and MS, Computer Science (with a focus on programming languages,
              mainly supervised by{" "}
              <a href="https://www.cs.rit.edu/~mtf/">Prof. Matthew Fluet</a>) at{" "}
              <a href="https://en.wikipedia.org/wiki/Rochester_Institute_of_Technology">
                Rochester Institute of Technology
              </a>
              .
            </p>

            <h5 id="Learning Site">Learning Site</h5>

            <ul>
              {links
                .filter((link: LinkType) => link.linkType === "学习站点")
                .map((link: LinkType, idx: number) => {
                  return (
                    <li key={idx}>
                      <a href={link.link} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  );
                })}
            </ul>

            <h5 id="Common Tools">Common Tools</h5>

            <ul>
              {links
                .filter((link: LinkType) => link.linkType === "常用工具")
                .map((link: LinkType, idx: number) => {
                  return (
                    <li key={idx}>
                      <a href={link.link} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* disqus 评论框 start */}
          <div className="comment">
            <div id="disqus_thread" className="disqus-thread"></div>
          </div>
          {/* disqus 评论框 end */}
        </div>
        {/* Sidebar Container  */}
        <SideBar />
      </div>
    </div>
  );
};
export default Container;
