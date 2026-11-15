import Giscus from '@giscus/react'
import { community } from '../../config/community'

export function PortfolioComments() {
  const { giscus } = community

  return <section className="portfolio-feedback reveal" aria-labelledby="rate-the-show">
    <header className="feedback-callout">
      <span>Audience response / 001</span>
      <h2 id="rate-the-show">Rate the show</h2>
      <p>Drop a reaction or leave a note.</p>
    </header>
    <div className="comments-frame">
      <div className="comments-heading"><span>After the show</span><i>GitHub Discussions</i></div>
      <div className="comments-body">
        <Giscus
          id="portfolio-comments"
          repo={giscus.repo}
          repoId={giscus.repoId}
          category={giscus.category}
          categoryId={giscus.categoryId}
          mapping="specific"
          term={giscus.term}
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="noborder_dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  </section>
}
