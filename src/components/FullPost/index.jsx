import React from 'react';
import "../Post/post.scss";

const FullPost = () => {
    return (
        <article className="post">
            <img
                src="https://www.wallpaperflare.com/static/586/1015/596/ahri-league-of-legends-video-games-league-wallpaper.jpg"
                alt="" className="post__img"/>
            <div className="post__content">
                <h1 className="post__content-title">Тот момент, когда твое терпение на исходе ...</h1>
                <p className="post__content-text">
                    Женщина, с которой я работал, постоянно подвергалась домогательствам со стороны гораздо более
                    старшего коллеги, и компания ничего не могла с этим поделать. Он начал приходить к её дому, в конце
                    концов из—за этого она переехала. После того, как она переехала в новый дом, он купил дом по
                    соседству. Однажды она приехала на работу с бейсбольной битой и подошла к стойке регистрации‚ чтобы
                    спросить, на месте ли «Том». Когда они спросили, зачем он ей, она спокойна сказала, что она здесь,
                    чтобы убить его. Она поднялась по лестнице в его офис (в регистратуре предупредили его об этом,
                    поэтому он сбежал из офиса по пожарной лестнице), и вместо этого она начала крушить его офис, пока
                    не прибыла полиция. Она не была обвинена. Компания и полиция поняли, что она этим поступком кричала
                    о помощи. Если бы она нашла его тогда, то она точно убила бы его. Она взяла больничный и в конце
                    концов вернулась на работу. Но компания поставила её на проект с тем парнем в качестве её менеджера.
                    Потому что нахрен защищать пострадавшую женщину, верно?
                </p>
                <div className="fullPost__content-wrapper">
                    <div className="post__content-wrapper">
                        <a href="" className="post__content-wrapper-likes">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.8461 0.0963135C13.9752 0.0963135 15.6992 1.82002 15.6992 3.94487C15.6992 7.79342 11.8461 9.98471 7.99789 13.8333C4.14934 9.98471 0.300781 7.79342 0.300781 3.9449C0.300781 1.82006 2.02484 0.0963487 4.14934 0.0963487C6.07344 0.0963487 7.03566 1.05858 7.99789 2.98268C8.95977 1.05858 9.92199 0.0963135 11.8461 0.0963135Z"
                                    fill="#FF2E2E"/>
                            </svg>
                            567
                        </a>
                        <a href="" className="post__content-wrapper-views">
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.63598 13.3558C5.35332 13.3558 1.93598 10.8033 0.307983 6.95247C1.95065 3.10165 5.36798 0.549194 9.63598 0.549194C13.904 0.549194 17.336 3.10165 18.9786 6.95247C17.336 10.8033 13.904 13.3558 9.63598 13.3558ZM9.63598 11.8213C13.024 11.8213 15.9426 9.82952 17.3066 6.95247C15.9426 4.07542 13.024 2.08362 9.63598 2.08362C6.26265 2.08362 3.34398 4.07542 1.97998 6.95247C3.32932 9.82952 6.24798 11.8213 9.63598 11.8213ZM6.08665 6.95247C6.08665 4.97543 7.67065 3.38198 9.62132 3.38198C11.5866 3.38198 13.1706 4.99018 13.1706 6.95247C13.1706 8.92952 11.572 10.523 9.62132 10.523C7.67065 10.523 6.08665 8.91477 6.08665 6.95247ZM9.84132 6.05247C9.84132 6.67215 10.3253 7.17379 10.956 7.17379C11.5573 7.17379 12.056 6.67215 12.056 6.05247C12.056 5.44756 11.572 4.94592 10.956 4.94592C10.34 4.94592 9.84132 5.4328 9.84132 6.05247Z"
                                    fill="#3A3A3B"/>
                            </svg>
                            14
                        </a>
                        <a href="" className="post__content-wrapper-comments">
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.176 4.99388C13.176 2.24998 10.2259 0.0256348 6.588 0.0256348C2.94955 0.0256348 0 2.24998 0 4.99388C0 6.64288 1.06532 8.10382 2.70524 9.00748C2.70052 9.02182 1.39876 11.422 1.39876 11.422C1.39876 11.422 5.37379 9.88563 5.3848 9.87926C5.77485 9.93398 6.17697 9.9616 6.588 9.9616C10.2259 9.9616 13.176 7.73726 13.176 4.99388ZM18.0271 6.5462C18.0271 3.80282 15.25 1.59813 12.2438 1.57848C16.5534 5.92835 11.4779 10.563 7.34138 10.563C7.34138 10.563 7.80116 11.5139 11.4391 11.5139C11.8496 11.5139 12.2522 11.4852 12.6423 11.431C12.6533 11.4385 16.6289 12.9738 16.6289 12.9738C16.6289 12.9738 15.3266 10.5741 15.3224 10.5598C16.9618 9.65613 18.0271 8.19467 18.0271 6.5462Z"
                                    fill="#3A3A3B"/>
                            </svg>
                            23
                        </a>
                    </div>
                    <a href="" className="fullPost__content-wrapper-author">
                       <p className="fullPost__content-wrapper-author-name">Joy</p>
                        <img className="fullPost__content-wrapper-author-img" src="https://yt3.ggpht.com/ytc/AKedOLQXv0a4n42Beq6AIlCUWJdbjmLyxpEdcm2JvWic=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                    </a>
                </div>
                <div className="post__content-form">
                    <div className="post__content-form-wrapper">
                        <a className="post__content-form-wrapper-logo">
                            <img src="https://i1.sndcdn.com/artworks-000102345815-ibcfmz-t500x500.jpg" alt=""/>
                        </a>
                        <input placeholder="Напишите свой комментарий ..." type="text"
                               className="post__content-form-wrapper-input"/>
                    </div>
                    <button className="post__content-form-btn">Отправить</button>
                </div>
                <div className="post__content-comments">
                    <div className="post__content-comments-author">
                        <a href="" className="post__content-comments-author-link">
                            <img src="https://yt3.ggpht.com/a/AGF-l7_N_n7-yxG7hJ4FTTuLqPxcz3dY-eEZwyObVw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                        </a>
                        <address className="post__content-comments-author-name">Qwerty</address>
                        <div className="post__content-comments-author-time">месяц назад</div>
                    </div>
                    <p className="post__content-comments-text">
                        Когда я был ребёнком, я смотрел с папой какое-то шоу по телевизору, в котором показывали
                        лес. Я сказал что-то вроде: «О, я тоже как-то заблудился в лесу с друзьями, меня так и не
                        нашли».
                    </p>
                    <div className="post__content-comments-statistics">
                        <div className="post__content-comments-statistics-like">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.6971 13.1306C6.86216 12.316 6.03436 11.5756 5.25865 10.8819L5.20416 10.8331C4.2991 10.0236 3.47244 9.28188 2.7668 8.5436C1.35709 7.06869 0.5 5.67797 0.5 3.9449C0.5 2.09623 2.00018 0.596349 3.84855 0.596349C4.71736 0.596349 5.32314 0.809982 5.82119 1.20841C6.3371 1.62114 6.77896 2.26459 7.24991 3.20632L7.69719 4.10071L8.14434 3.20625C8.61511 2.26454 9.05688 1.6211 9.57274 1.20838C10.0707 0.809955 10.6765 0.596313 11.5453 0.596313C13.3986 0.596313 14.8984 2.09658 14.8984 3.94487C14.8984 5.67776 14.0404 7.06844 12.6295 8.54346C11.9233 9.28177 11.0961 10.0235 10.1906 10.8331L10.1404 10.878C9.36309 11.5729 8.53357 12.3145 7.6971 13.1306Z"
                                    fill="white" stroke="#9D9D9D"/>
                            </svg>
                            567
                        </div>
                        <a href="" className="post__content-comments-statistics-btn">Ответить</a>
                        <div className="post__content-comments-statistics-answers">
                            13 ответов
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0V2L5 7L0 2V0L5 5L10 0Z" fill="#444444"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="post__content-comments">
                    <div className="post__content-comments-author">
                        <a href="" className="post__content-comments-author-link">
                            <img src="https://yt3.ggpht.com/a/AGF-l7_N_n7-yxG7hJ4FTTuLqPxcz3dY-eEZwyObVw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                        </a>
                        <address className="post__content-comments-author-name">Qwerty</address>
                        <div className="post__content-comments-author-time">месяц назад</div>
                    </div>
                    <p className="post__content-comments-text">
                        Когда я был ребёнком, я смотрел с папой какое-то шоу по телевизору, в котором показывали
                        лес. Я сказал что-то вроде: «О, я тоже как-то заблудился в лесу с друзьями, меня так и не
                        нашли».
                    </p>
                    <div className="post__content-comments-statistics">
                        <div className="post__content-comments-statistics-like">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.6971 13.1306C6.86216 12.316 6.03436 11.5756 5.25865 10.8819L5.20416 10.8331C4.2991 10.0236 3.47244 9.28188 2.7668 8.5436C1.35709 7.06869 0.5 5.67797 0.5 3.9449C0.5 2.09623 2.00018 0.596349 3.84855 0.596349C4.71736 0.596349 5.32314 0.809982 5.82119 1.20841C6.3371 1.62114 6.77896 2.26459 7.24991 3.20632L7.69719 4.10071L8.14434 3.20625C8.61511 2.26454 9.05688 1.6211 9.57274 1.20838C10.0707 0.809955 10.6765 0.596313 11.5453 0.596313C13.3986 0.596313 14.8984 2.09658 14.8984 3.94487C14.8984 5.67776 14.0404 7.06844 12.6295 8.54346C11.9233 9.28177 11.0961 10.0235 10.1906 10.8331L10.1404 10.878C9.36309 11.5729 8.53357 12.3145 7.6971 13.1306Z"
                                    fill="white" stroke="#9D9D9D"/>
                            </svg>
                            567
                        </div>
                        <a href="" className="post__content-comments-statistics-btn">Ответить</a>
                        <div className="post__content-comments-statistics-answers">
                            13 ответов
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0V2L5 7L0 2V0L5 5L10 0Z" fill="#444444"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="post__content-comments">
                    <div className="post__content-comments-author">
                        <a href="" className="post__content-comments-author-link">
                            <img src="https://yt3.ggpht.com/a/AGF-l7_N_n7-yxG7hJ4FTTuLqPxcz3dY-eEZwyObVw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                        </a>
                        <address className="post__content-comments-author-name">Qwerty</address>
                        <div className="post__content-comments-author-time">месяц назад</div>
                    </div>
                    <p className="post__content-comments-text">
                        Когда я был ребёнком, я смотрел с папой какое-то шоу по телевизору, в котором показывали
                        лес. Я сказал что-то вроде: «О, я тоже как-то заблудился в лесу с друзьями, меня так и не
                        нашли».
                    </p>
                    <div className="post__content-comments-statistics">
                        <div className="post__content-comments-statistics-like">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.6971 13.1306C6.86216 12.316 6.03436 11.5756 5.25865 10.8819L5.20416 10.8331C4.2991 10.0236 3.47244 9.28188 2.7668 8.5436C1.35709 7.06869 0.5 5.67797 0.5 3.9449C0.5 2.09623 2.00018 0.596349 3.84855 0.596349C4.71736 0.596349 5.32314 0.809982 5.82119 1.20841C6.3371 1.62114 6.77896 2.26459 7.24991 3.20632L7.69719 4.10071L8.14434 3.20625C8.61511 2.26454 9.05688 1.6211 9.57274 1.20838C10.0707 0.809955 10.6765 0.596313 11.5453 0.596313C13.3986 0.596313 14.8984 2.09658 14.8984 3.94487C14.8984 5.67776 14.0404 7.06844 12.6295 8.54346C11.9233 9.28177 11.0961 10.0235 10.1906 10.8331L10.1404 10.878C9.36309 11.5729 8.53357 12.3145 7.6971 13.1306Z"
                                    fill="white" stroke="#9D9D9D"/>
                            </svg>
                            567
                        </div>
                        <a href="" className="post__content-comments-statistics-btn">Ответить</a>
                        <div className="post__content-comments-statistics-answers">
                            13 ответов
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0V2L5 7L0 2V0L5 5L10 0Z" fill="#444444"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="post__content-comments">
                    <div className="post__content-comments-author">
                        <a href="" className="post__content-comments-author-link">
                            <img src="https://yt3.ggpht.com/a/AGF-l7_N_n7-yxG7hJ4FTTuLqPxcz3dY-eEZwyObVw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                        </a>
                        <address className="post__content-comments-author-name">Qwerty</address>
                        <div className="post__content-comments-author-time">месяц назад</div>
                    </div>
                    <p className="post__content-comments-text">
                        Когда я был ребёнком, я смотрел с папой какое-то шоу по телевизору, в котором показывали
                        лес. Я сказал что-то вроде: «О, я тоже как-то заблудился в лесу с друзьями, меня так и не
                        нашли».
                    </p>
                    <div className="post__content-comments-statistics">
                        <div className="post__content-comments-statistics-like">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.6971 13.1306C6.86216 12.316 6.03436 11.5756 5.25865 10.8819L5.20416 10.8331C4.2991 10.0236 3.47244 9.28188 2.7668 8.5436C1.35709 7.06869 0.5 5.67797 0.5 3.9449C0.5 2.09623 2.00018 0.596349 3.84855 0.596349C4.71736 0.596349 5.32314 0.809982 5.82119 1.20841C6.3371 1.62114 6.77896 2.26459 7.24991 3.20632L7.69719 4.10071L8.14434 3.20625C8.61511 2.26454 9.05688 1.6211 9.57274 1.20838C10.0707 0.809955 10.6765 0.596313 11.5453 0.596313C13.3986 0.596313 14.8984 2.09658 14.8984 3.94487C14.8984 5.67776 14.0404 7.06844 12.6295 8.54346C11.9233 9.28177 11.0961 10.0235 10.1906 10.8331L10.1404 10.878C9.36309 11.5729 8.53357 12.3145 7.6971 13.1306Z"
                                    fill="white" stroke="#9D9D9D"/>
                            </svg>
                            567
                        </div>
                        <a href="" className="post__content-comments-statistics-btn">Ответить</a>
                        <div className="post__content-comments-statistics-answers">
                            13 ответов
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0V2L5 7L0 2V0L5 5L10 0Z" fill="#444444"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FullPost;
