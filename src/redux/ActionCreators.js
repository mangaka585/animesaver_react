import * as ActionTypes from './ActionTypes';
import { actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';

// export const addComment = (comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// export const postComment = (dishId, rating, author, comment) => (dispatch) => {

//     const newComment = {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     };
//     newComment.date = new Date().toISOString();
    
//     return fetch(baseUrl + 'comments', {
//         method: "POST",
//         body: JSON.stringify(newComment),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .then(response => dispatch(actions.reset('feedback')))
//     .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
// };

// export const fetchComments = () => (dispatch) => {    

//     dispatch(commentsLoading(true));

//     return fetch(baseUrl + 'comments')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//     })
//     .then(response => response.json())
//     .then(comments => dispatch(addComments(comments)))
//     .catch(error => dispatch(commentsFailed(error.message)));
// };

// export const commentsLoading = () => ({
//     type: ActionTypes.COMMENTS_LOADING
// });

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// });

// export const addComments = (comments) => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// });

// export const postFeedback = (firstname, lastname, tel, email) => (dispatch) => {

//   const newFeedback = {
//       firstname: firstname,
//       lastname: lastname,
//       tel: tel,
//       email: email
//   };
  
//   return fetch(baseUrl + 'feedback', {
//       method: "POST",
//       body: JSON.stringify(newFeedback),
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "same-origin"
//   })
//   .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//     error => {
//           throw error;
//     })
//   .then(response => response.json())
//   .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
// };




export const fetchAnimelist = () => (dispatch) => {

  dispatch(animelistLoading(true));

  const uniqArr = function arrayWithoutDublicates(array){
    array = array.filter(anime => anime.image !== "https://st.kp.yandex.net/images/no-poster.gif" && anime.link !== "");
    const result = [];
    const map = new Map();
    for (const item of array) {
        if(!map.has(item.link)){
            map.set(item.link, true);
            result.push({
                id: item.id,
                link: item.link,
                title: item.title,
                title_orig: item.title_orig,
                year: item.year,
                last_season: item.last_season,
                last_episode: item.last_episode,
                total_episodes: item.total_episodes,
                status: item.status,
                image: item.image,
                genre_1: item.genre_1,
                genre_2: item.genre_2,
                genre_3: item.genre_3,
                imdb: item.imdb,
                description: item.description,
                updated: item.updated,
                seasons: item.seasons
            });
        }
    }
    array = result;
    return array
  }

  return fetch(baseUrl + 'animelist')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
  })
  .then(response => response.json())
  //.then(animelist => console.log(animelist))
  .then(animelist => uniqArr(animelist))
  .then(animelist => Object.values(animelist))
  .then(animelist => dispatch(addAnimelist(animelist)))
  .catch(error => dispatch(animelistFailed(error.message)));
}

export const animelistLoading = () => ({
  type: ActionTypes.ANIMELIST_LOADING
});

export const animelistFailed = (errmess) => ({
  type: ActionTypes.ANIMELIST_FAILED,
  payload: errmess
});

export const addAnimelist = (animelist) => ({
  type: ActionTypes.ADD_ANIMELIST,
  payload: animelist
});