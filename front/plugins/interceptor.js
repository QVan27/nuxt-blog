export default (ctx) => {
    ctx.$axios.onError(((error) => {
        const errorMsg = error.response ? error.response.data.message : 'Unknown error'
        const errorCode = error.response ? parseInt(error.response.status) : -1

        if (errorCode === 401) console.log('Unauthorized'), ctx.redirect('/')
        throw new Error(errorMsg)
    }))
}