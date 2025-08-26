import Nav from "@components/Nav/Nav";
import Header from "./components/Header";
import Search from "@views/Search/Search";
import Container from "./components/Container";
import { Fragment, useState, useEffect } from "react";
import { getArticleList } from "@/api/article";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [articleList, setArticleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowLoading, setLoading] = useState(false);
  const [currentTag, setCurrentTag] = useState("");
  const [currentTagId, setCurrentTagId] = useState("");

  const location = useLocation();

  const fetchArticles = async (page: number, tagId?: number) => {
    try {
      setLoading(true);
      const res = await getArticleList(page, pageSize, "", tagId);

      // 添加数据验证
      if (res && res.data && res.data.data) {
        setArticleList(res.data.data.list || []);
        setTotalPages(res.data.data.totalPage || 0);
      } else {
        console.error("API返回数据格式不正确:", res);
        setArticleList([]);
        setTotalPages(0);
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setArticleList([]);
      setTotalPages(0);
      setLoading(false);
    }
  };

  useEffect(() => {
    // 从URL参数中获取标签信息
    const urlParams = new URLSearchParams(location.search);
    const tagId = urlParams.get('tagId') || "";
    const tagName = urlParams.get('tagName') || "";
    setCurrentTag(tagName);
    setCurrentTagId(tagId);
    setCurrentPage(1); // 重置页码
    fetchArticles(1, Number(tagId));
  }, [location.search]);

  useEffect(() => {
    fetchArticles(currentPage, Number(currentTagId));
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Fragment>
      <Nav />
      <Header />
      <Search />
      {currentTag && (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="alert alert-info">
                正在显示标签 "<strong>{currentTag}</strong>" 下的文章
                <a
                  href="/home"
                  className="btn btn-link btn-sm pull-right"
                  style={{ textDecoration: 'none' }}
                >
                  显示所有文章
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Container
        articleList={articleList}
        isShowLoading={isShowLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
};
export default Home;
