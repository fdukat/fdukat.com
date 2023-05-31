import { Rss } from 'react-feather';
import styles from './Posts.module.css';
import PostsSinglePost from './PostsSinglePost';

export default function Posts() {
  return (
    <section className={styles.postsWrapper}>
      <header className={styles.postsHeading}>
        <h2 className={styles.postsHeadingContent}>My posts</h2>
        <Rss size={21} />
      </header>
      <PostsSinglePost title="Example post" date="31st May 2023" href="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ea harum? Deserunt vel
        officia architecto minima veniam omnis, in nihil accusamus voluptatibus esse dignissimos
        impedit, maxime voluptates natus voluptate dolorem.
      </PostsSinglePost>
      <PostsSinglePost title="Example post" date="31st May 2023" href="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ea harum? Deserunt vel
        officia architecto minima veniam omnis, in nihil accusamus voluptatibus esse dignissimos
        impedit, maxime voluptates natus voluptate dolorem.
      </PostsSinglePost>
      <PostsSinglePost title="Example post" date="31st May 2023" href="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ea harum? Deserunt vel
        officia architecto minima veniam omnis, in nihil accusamus voluptatibus esse dignissimos
        impedit, maxime voluptates natus voluptate dolorem.
      </PostsSinglePost>
      <PostsSinglePost title="Example post" date="31st May 2023" href="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ea harum? Deserunt vel
        officia architecto minima veniam omnis, in nihil accusamus voluptatibus esse dignissimos
        impedit, maxime voluptates natus voluptate dolorem.
      </PostsSinglePost>
    </section>
  );
}
