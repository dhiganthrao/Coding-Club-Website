import React from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import cards from "../../data/blogcards";

const BlogCard = ({
  domain,
  publishDate,
  title,
  summary,
  authorName,
  authorPic,
  authorDomain,
  postImage,
  id,
}) => {
  const classNamePrefix = "blogcard_item_",
    className = classNamePrefix + id;

  if (summary.length > 360) summary = summary.substring(0, 356) + "...";
  if (title.length > 60) title = title.substring(0, 57) + "...";

  return (
    <div className={`${className} ${styles.blogcard_item}`}>
      <div className={styles.blogcard_item_image}>
        <img src={postImage} alt="BlogTitle" className={styles.blogcard_image} />
      </div>
      <div className={styles.blogcard_text_container}>
        <div className={styles.post_info}>
          <div className={styles.post_domain}>{domain}</div>
          <div className={styles.info_divider}></div>
          <div className={styles.post_date}>{publishDate}</div>
        </div>
        <Link href="/blog" className={styles.post_card_title_link}>
          <h2 className={styles.post_card_title}>{title}</h2>
        </Link>
        <div className={styles.post_card_summary}>{summary}</div>
        <div className={styles.post_card_creator}>
          <img src={authorPic} alt="Post Creator Name" className={styles.post_creator_image} />
          <div className={styles.post_creator_details}>
            <div className={styles.post_card_creator_name}>
              <Link href="/blog">{authorName}</Link>
            </div>
            <div className={styles.post_card_creator_specialization}>{authorDomain}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCards = () => {
  return (
    <div className={styles.blogcards_container}>
      {cards
        .filter((card, i) => {
          if (i == 0) return false;
          return true;
        })
        .map((card, i) => (
          <BlogCard
            key={i}
            id={i}
            domain={card.domain}
            publishDate={card.publishDate}
            title={card.title}
            summary={card.summary}
            authorName={card.authorName}
            authorPic={card.authorPic}
            authorDomain={card.authorDomain}
            postImage={card.postImage}
          />
        ))}
    </div>
  );
};

export default BlogCards;
