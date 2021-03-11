module.exports = {
     postSearch: (req, res) => {
        let lookbook = []
        const {search} = req.params
        console.log(search)
        if(search){
        lookbook = collection.filter((piece) => piece.name.toLowerCase().includes(search.toLowerCase()) )
        } res.status(200).send(lookbook)
    }

}