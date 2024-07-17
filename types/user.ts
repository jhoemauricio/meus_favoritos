//Tipagem da store Usuario
export interface User {

    id: number,
    nome: string,
    email: string,
    frase: string,
    img_foto: string

}

export interface UserState {
    users: User[];
}