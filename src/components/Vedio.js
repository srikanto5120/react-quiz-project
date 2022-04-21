import classes from '../styles/Vedio.module.css';

export default function Vedio({ title, noq, id }) {
    return (
        <div className={classes.video}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p> {noq} Questions</p>
                <p>Total points:{noq * 5}</p>
            </div>
        </div>
    );
}
