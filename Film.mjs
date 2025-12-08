export class Film{
    constructor(title, director, year, rating){
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
        this.watched = false;
    }

    checkRating(){
        return this.rating >= 7 ? "Good Film!" : "Not the best film.";
    }
}