/* globals $, jQuery */

const searchField = document.getElementById('search_field')
// const fieldSearch = searchField.innerHTML
const searchButton = document.getElementById('search_button')

searchButton.addEventListener('click', function () {
    $.ajax({
        url: `https://itunes-api-proxy.glitch.me/search`,
        data: {
            term: searchField.value,
            media: 'music',
            entity: 'song',
        },
        dataType: 'json',

        success: function (results) {
            console.log(results)
            let searchResultsDiv = document.getElementById('search-results')
            // clear previous results, if any
            searchResultsDiv.innerHTML = ''
            // create and define variable countP as the 'p' announcing number of results
            let countP = document.createElement('p')
            // returns number of results
            countP.innerText = `Your search returned ${results.resultCount} results`
            searchResultsDiv.appendChild(countP)
            
            // for each of the results
            for (let entity of results.results) {
                let songP = document.createElement('p')
                // let songAudio = document.createElement('audio')
                let songImage = document.createElement('img')

                // songLink.href = entity.artistViewURL
                console.log(entity.collectionViewURL)
                // songAudio.controls = "controls"
                // songLink.innerText = entity.artistName
                songImage.src = entity.artworkUrl100

                // songP.appendChild(songLink)
                searchResultsDiv.appendChild(songP)
                searchResultsDiv.appendChild(songImage)
                

                
            }
        }    
    })
})