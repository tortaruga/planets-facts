Website displaying facts about the planets of the solar system.
Inspired in [this frontend mentor challenge](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f).

##### notes
It was originally made using the [planets api](https://github.com/k99sharma/planets-api).
I only needed a few data from the API, and they are unlikely to need updating anytime soon (although I guess the planets are drifting apart as we speak), so I ended up combining the data of the api in an object and use that instead. This was done because I wanted to avoid having to wait everytime the page was first opened to retrieve the data.

So this current version no longer fetches the data from the API, but all the data displayed is still from [planets api](https://github.com/k99sharma/planets-api), with the exception of the diameter and rotation time of every planet, which were taken from [royal museums greenwich](https://www.rmg.co.uk/stories/space-astronomy/solar-system-data)
