import styles from './styles.module.css';

const Tabela = () => {
    return(
        <table className={styles.tabela}>
            <thead>
                <tr className={styles.blue}>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ultimo login</th>
                    <th>Tipo</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <tr className={styles.gray}>
                    <td></td>
                    <td>Paula Oliveira</td>
                    <td>paula.oliveira@gmail.com</td>
                    <td>10/03/2022 13:10</td>
                    <td>Editor</td>
                    <td>Ativo</td>
                </tr>

                <tr className={styles.white}>
                    <td></td>
                    <td>Mauro Silva</td>
                    <td>mauro.silva@gmail.com</td>
                    <td>11/03/2022 10:10</td>
                    <td>Admin</td>
                    <td>Ativo</td>
                </tr>

                <tr className={styles.gray}>
                    <td></td>
                    <td>Júlia Freitas</td>
                    <td>julia.freitas@gmail.com</td>
                    <td>02/03/2022 13:00</td>
                    <td>Editor</td>
                    <td>Ativo</td>
                </tr>

                <tr className={styles.white}>
                    <td></td>
                    <td>Maria Gonçalves</td>
                    <td>maria.goncalves@gmail.com</td>
                    <td>08/03/2022 08:10</td>
                    <td>Admin</td>
                    <td>Inativo</td>
                </tr>

                <tr className={styles.gray}>
                    <td></td>
                    <td>Paula Sakamoto</td>
                    <td>paula.sakamoto@gmail.com</td>
                    <td>10/03/2022 11:10</td>
                    <td>Editor</td>
                    <td>Ativo</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;