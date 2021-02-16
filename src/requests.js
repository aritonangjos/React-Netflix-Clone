const key = `d1e5be625b9ea1c3c85f285bbdeaed46`;

const Requests = {
theater: `/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
popular: `/discover/movie?api_key=${key}&sort_by=popularity.desc`,
Rrated: `/discover/movie/?api_key=${key}&certification_country=US&certification=R&sort_by=vote_average.desc`,
kids: `/discover/movie?api_key=${key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
}

export default Requests