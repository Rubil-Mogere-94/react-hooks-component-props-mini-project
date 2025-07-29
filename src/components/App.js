// components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const App = () => {
  // Sample data structure (not used in tests)
  const posts = []; 
  
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About about="About this blog" />
      <ArticleList posts={posts} />
    </div>
  );
};

export default App;