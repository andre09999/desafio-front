import React,  { useEffect } from 'react';
import '../App.css';

function categories({categoriasML,web}) {
  return (
    <div>
     <h1>{web}</h1>
     {categoriasML.map((a)=> 
    <button value={ a.id } key={a.id}>{a.name}</button> )}
    </div>
  );
}

export default categories;
