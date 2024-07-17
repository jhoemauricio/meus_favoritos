//Tipagem da storeFavoritos
export interface usuarioObjeto {

    id: number,
    nome: string,
    email: string,
    frase: string,
    img_foto: string
}


export interface objeto {
    favoritos: usuarioObjeto[]
}