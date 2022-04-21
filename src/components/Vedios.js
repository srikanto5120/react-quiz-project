import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVediosList from '../hooks/useVediosList';
import classes from '../styles/Vedios.module.css';
import Vedio from './Vedio';

export default function Vedios() {
    // eslint-disable-next-line no-shadow
    const [page, setPage] = useState(1);
    const { videos, loading, error, hasMore } = useVediosList(page);
    return (
        <div>
            <InfiniteScroll
                className={classes.videos}
                dataLength={videos.length}
                hasMore={hasMore}
                next={() => setPage(page + 6)}
                loader={<h4>Loading...</h4>}
            >
                {videos.map((video) =>
                    video.noq ? (
                        <Link to={`quiz/${video.youtubeID}`} key={video.youtubeID}>
                            <Vedio title={video.title} id={video.youtubeID} noq={video.noq} />
                        </Link>
                    ) : (
                        <Vedio title={video.title} id={video.youtubeID} noq={video.noq} />
                    )
                )}
            </InfiniteScroll>
            {!loading && videos.length === 0 && <div>Not data Found</div>}
            {error && <p>There was a error </p>}
        </div>
    );
}
