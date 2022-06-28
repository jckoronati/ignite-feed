import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className={style.profile}>
                <strong>Júlio Cezar Koronati</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}