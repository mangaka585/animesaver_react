var fs = require('fs');
const RegExp1 = /\s/g;
const RegExp2 = /\'/g;
const RegExp3 = /\:/g;
const RegExp4 = /\(/g;
const RegExp5 = /\)/g;
const RegExp6 = /-/g;
const RegExp7 = /--/g;
const RegExp8 = /\!/g;
const RegExp9 = /\?/g;

const Parse = function(file){
	let animeArray = [];
	fs.readFile('./anime-serial.json', 'utf8', function (err, data) {
	    if (err) console.log("Error while reading anime-serial file!", err);
	    let animes = JSON.parse(data);
	    let results = animes;

	    function Season(
	    	number
	    	) {
	    	this.number = number;
	    }
		
		function Anime(
			id, 
			link,
			title, 
			title_orig,
			year, 
			last_season,
			last_episode,
			total_episodes,
			image,
			duration,
			genre_1,
			genre_2,
			genre_3,
			imdb,
			description,
			updated,
			seasons
			) {
		  this.id = id;
		  this.link = link;
		  this.title = title;
		  this.title_orig = title_orig;
		  this.year = year;
		  this.last_season = last_season;
		  this.last_episode = last_episode;
		  this.total_episodes = total_episodes;
		  this.image = image;
		  this.duration = duration;
		  this.genre_1 = genre_1;
		  this.genre_2 = genre_2;
		  this.genre_3 = genre_3;
		  this.imdb = imdb;
		  this.description = description;
		  this.updated = updated;
		  this.seasons = seasons;
		};

		//Аниме
	    for (key in results) {
		  if (results.hasOwnProperty(key)) {
		    let obj = results[key];
		    if(obj.material_data == true){
			    let anime = new Anime(
			    	obj.id.replace('serial-',''), 
			    	obj.title_en == undefined ? "" : obj.title_en.replace(RegExp6,'').replace(RegExp1, '-').replace(RegExp2,'').replace(RegExp3,'').replace(RegExp4,'').replace(RegExp5,'').replace(RegExp7,'-').replace(RegExp8,'').replace(RegExp9,''),
			    	obj.title === undefined ? "" : obj.title, 
			    	obj.title_orig === undefined ? "" : obj.title_orig,
			    	obj.year === undefined ? "" : obj.year, 
			    	obj.last_season === undefined ? "" : obj.last_season,
			    	obj.last_episode === undefined ? "" : obj.last_episode,
			    	obj.episodes_count === undefined ? "" : obj.episodes_count,
			    	obj.material_data === undefined || obj.material_data.poster_url === undefined ? "" : obj.material_data.poster_url,
			    	obj.material_data === undefined || obj.material_data.duration === undefined ? "" : obj.material_data.duration,
			    	obj.material_data === undefined || obj.material_data.anime_genres[0] === undefined ? "" : obj.material_data.anime_genres[0],
			    	obj.material_data === undefined || obj.material_data.anime_genres[1] === undefined ? "" : obj.material_data.anime_genres[1],
			    	obj.material_data === undefined || obj.material_data.anime_genres[2] === undefined ? "" : obj.material_data.anime_genres[2],
			    	obj.material_data === undefined || obj.material_data.imdb_rating === undefined ? "" : obj.material_data.imdb_rating,
			    	obj.material_data === undefined || obj.material_data.description === undefined ? "" : obj.material_data.description,
			    	obj.material_data === undefined || obj.updated_at === undefined ? "" : obj.updated_at
			    	);

				//Его сезоны + эпизоды
				for (season in obj.seasons) {
				  if (obj.seasons.hasOwnProperty(season)) {
				  	let seasonObj = new Season(season);

				  	for (link in obj.seasons[season].episodes){
				  		let attrName = "episode-" + link;
				  		seasonObj[attrName] = obj.seasons[season].episodes[link].link;
				  	}

				  	anime.seasons = seasonObj;
				  }
				}

			    animeArray.push(anime);
			}
		  } 
		}

		//Переводим в JSON
	    let exp = JSON.stringify(animeArray);

		//Пишем результат в файл
		fs.writeFile("./resultbaseDB.json", exp, function(err) {
		    if(err) {
		        return console.log("Error while resultDB.json file writing - " + err);
		    }
		    console.log("The file resultDB.json was saved!");
		});

	})
}

Parse('./anime-serialme.json');
