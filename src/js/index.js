import Search from './model/Search';
import * as searchView from './view/searchView';
import {elements, renderLoader, clearLoader} from './view/base';
// global state of the app
//serach object
//current recipe object
//shopping list object
//liked recipes
const state = {};

const controlSearch =async () => {
// 1 get query from the view
const query= searchView.getInput();


if(query){
    // new search object and add to state
    state.search = new Search(query);
//3 prepare UI for result
searchView.clearInput();
searchView.clearResults();
renderLoader(elements.searchRes);

//4 search for recipes
  await state.search.getResults();

  //5 render result on ui
  clearLoader();
  searchView.renderResults(state.search.result);
 }
}

elements.searchForm.addEventListener('submit', e => {
e.preventDefault();
controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if(btn){
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result,goToPage);
    
  }
});
