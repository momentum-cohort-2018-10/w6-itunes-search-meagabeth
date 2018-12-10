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
                let musicDiv = document.createElement('div')
                let songArtist = document.createElement('p')
                let songTitle = document.createElement('p')
                let songSample = document.createElement('audio')
                let songSource = document.createElement('source')
                let songImage = document.createElement('img')
                let songDetails = document.createElement('div')

                
                // console.log(entity.collectionViewURL)
                songSource.src = entity.previewUrl
                songSource.type = "audio/mpeg"
                songSample.controls = true
                songSample.appendChild(songSource)
                
                songArtist.innerText = entity.artistName
                songTitle.innerText = entity.trackName
                songImage.src = entity.artworkUrl100

                // arrange parts of each search result
                searchResultsDiv.appendChild(musicDiv)
                searchResultsDiv.appendChild(songDetails)
                searchResultsDiv.appendChild(songSample)
                searchResultsDiv.appendChild(songImage)                
                songDetails.appendChild(songArtist)
                songDetails.appendChild(songTitle)
                

                
            }
        }    
    })
})

// function play_audio () {
//     let audioDiv = document.getElementById('audio-player')
//     audioDiv.innerHTML = ''
//     let 
//     songSource.src = entity.previewURL
//     songSource.type = "audio/mpeg"
//     songSample.controls = true
//     songSample.appendChild(songSource)
// }
