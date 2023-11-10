type ID = string

export const useReadArticles = () => {
    const KEY = "read_articles"
    const getIds = (): ID[] => {
        const data = localStorage.getItem(KEY)
        return data ? JSON.parse(data) : []
    }

    const isExist = (id: ID) => {
        const list = getIds()
        return !!list.find(item => item === id)
    }

    const addId = (id: ID) => {
        if (isExist(id)) return
        const list = getIds()
        if (list?.length) {
            if (list.length > 30) {
                list.shift()
            }
            list?.push(id)
            localStorage.setItem(KEY, JSON.stringify(list))
        } else {
            localStorage.setItem(KEY, JSON.stringify([id]))
        }
    }

    return {
        isExist,
        addId
    }
}