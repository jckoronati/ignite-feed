import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header className={style.header}>
                <div className={style.author}>
                    <img className={style.avatar} src="https://avatars.githubusercontent.com/u/37700027?v=4" alt="Foto de perfil" />
                    <div className={style.authorInfo}>
                        <strong>Júlio Cezar Koronati</strong>
                        <span>Web Developement</span>
                    </div>
                </div>

                <time title='01 de Julho às 06:30h' dateTime='2022-07-01 06:30:11'>
                    Publicado há cerca de 1h
                </time>
            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">#novoprojeto</a>{' '}<a href="">#nlw</a>{' '}<a href="">#rocketseat</a></p>
            </div>
        </article>
    );
}