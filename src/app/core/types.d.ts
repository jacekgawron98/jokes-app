interface Joke {
    id: string,
    category?: Category,
    content: string
}

interface Category {
    id: string,
    code: string,
    name: string
}

interface DialogData {
    categoryId: string,
    content: string
}