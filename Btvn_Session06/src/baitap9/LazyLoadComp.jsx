import React, { useEffect, useState } from "react";

export default function LazyLoadComp() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreContent = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newContent = Array.from({ length: 10 }, () =>
        lorem.generateParagraphs(1)
      );

      setContent((prev) => [...prev, ...newContent]);
      setLoading(false);

      // Giả sử không còn nội dung để tải
      if (content.length >= 100) {
        setHasMore(false);
      }
    }, 1000); // Giả lập thời gian tải
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreContent();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Tải nội dung lần đầu
    loadMoreContent();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content, loading]);

  return (
    <div style={{ padding: "20px" }}>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more content to load.</div>}
    </div>
  );
}
