/* eslint-disable no-unused-vars */
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVediosList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVedios() {
            // database works here
            const db = getDatabase();
            const vedioRef = ref(db, 'videos');
            const vedioQuery = query(
                vedioRef,
                orderByKey(),
                // eslint-disable-next-line no-useless-concat
                startAt(`${page}` + ''),
                limitToFirst(6)
            );
            try {
                setError(false);
                setLoading(true);
                // request firebase database

                const snapshot = await get(vedioQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVedios) => [...prevVedios, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchVedios();
    }, [page]);

    return {
        loading,
        videos,
        error,
        hasMore,
    };
}
