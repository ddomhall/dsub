export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const params = Object.fromEntries(searchParams)
    const {text, sourceCountries, language, minSentiment, maxSentiment, earliestPublishDate, latestPublishDate, newsSources, authors, sortType, sortDirection, offset, number} = params
    const res = await fetch(`https://api.worldnewsapi.com/search-news?api-key=${process.env.NEWS_API_KEY}${ text ? "&text=" + text : ""}${ sourceCountries ? "&source-countries=" + sourceCountries : ""}${ language ? "&language=" + language : ""}${ minSentiment ? "&min-sentiment=" + minSentiment : ""}${ maxSentiment ? "&max-sentiment=" + maxSentiment : ""}${ earliestPublishDate ? "&earliest-publish-date=" + earliestPublishDate : ""}${ latestPublishDate ? "&latest-publish-date=" + latestPublishDate : ""}${ newsSources ? "&news-sources=" + newsSources : ""}${ authors ? "&authors=" + authors : ""}${ sortType ? "&sort=" + sortType : ""}${ sortDirection ? "&sort-direction=" + sortDirection : ""}${ offset ? "&offset=" + offset : ""}${ number ? "&number=" + number : ""}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return Response.json({ data })
}
