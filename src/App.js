import React from 'react';
import './App.css';
import Touche from './components/Touche'
import audioDo from './audio/do.mp3'
import audioRe from './audio/re.mp3'
import audioMi from './audio/mi.mp3'
import audioFa from './audio/fa.mp3'
import audioSol from './audio/sol.mp3'
import audioLa from './audio/la.mp3'
import audioSi from './audio/si.mp3'

import audioDoN from  './audio/doN.mp3'
import audioReN from  './audio/reN.mp3'
import audioFaN from  './audio/faN.mp3'
import audioSolN from  './audio/solN.mp3'
import audioLaN from  './audio/laN.mp3'

import {Howl, Howler} from 'howler';

function App() {
  const state={
    num: 0,
    chemin: null,
    play:false
  }

  const listOfSounds = [
    {note: audioDo, color: "b", id: "id0"},
  {note: audioDoN, color: "n", id: "id1"},
  {note: audioRe, color: "b", id: "id2"},
  {note: audioReN, color: "n", id: "id3"},
  {note: audioMi, color: "b", id: "id4"},
  {note: audioFa, color: "b", id: "id5"},
  {note: audioFaN, color: "n", id: "id6"},
  {note: audioSol, color: "b", id: "id7"},
  {note: audioSolN, color: "n", id: "id8"},
  {note: audioLa, color: "b", id: "id9"},
  {note: audioLaN, color: "n", id: "id10"},
  {note: audioSi, color: "b", id: "id11"},];

  const playSound = (param) => {
    var sound = new Howl({
      src: [param]
    });
    sound.play();
  }

  const clearAll = () => {
    state.num=0
    state.chemin=null
    listOfSounds.map((value) => {
      let touche = document.getElementById(value.id)
      if(touche.firstChild.classList.contains('tuto')){
        touche.firstChild.classList.remove('tuto')
      }
    })
    }

  const oneByOne = () => {
    if(!(state.chemin==null)){
      allumeTouche(document.getElementById(state.chemin[state.num]))
      if(state.chemin[state.num+1]==null){
        state.num=0
        state.chemin=null
      }else{
        state.num=state.num+1
      }
    }else{
    }
  }


  
  const allumeTouche = (element) => {
    element.firstChild.classList.add("tuto");
  }

  const eteintTouche = (e) => {
    let touche = e.target
    if(state.chemin!=null && touche.parentElement.id==state.chemin[state.num-1]){
      touche.classList.remove("tuto");
      oneByOne()
    }else if(state.chemin==null){
      clearAll()
    }
  }
  
  const lancerMusique = () => {
    state.num=0
    state.chemin=null
    clearAll()
    const frereJacques = [audioDo, audioRe, audioMi, audioDo, audioRe, audioMi, audioDo, audioMi, audioFa, audioSol, audioMi, audioFa, audioSol, audioSol, audioLa, audioSol, audioFa, audioMi, audioDo, audioSol, audioLa, audioSol, audioFa, audioMi, audioDo
    ] 
    var suiteDeNote = [];
    frereJacques.map((value1) => {
      listOfSounds.map((value) => {
        if (value1 === value.note)
        suiteDeNote.push(value.id)
      })
    })
    state.chemin = suiteDeNote
    oneByOne()

  }

  return (
    <div className="App">

      <div className="ButtonContainer">   
        <button onClick={lancerMusique} className="btn btn-light">Frère Jacques</button>
        <button onClick={clearAll} className="btn btn-danger">Réinstallation</button>   

      </div>
      <div className="PianoContainer">
      {
              listOfSounds.map((value, index) => {
                if (value.color === "n"){
                  return <li id={"id"+index} className="toucheN" onClick={eteintTouche}><Touche className={'toucheNoir'} name={value.note} fonctionPlaySound={playSound} key={index}></Touche></li>

                }
              return <li id={"id"+index} onClick={eteintTouche} className="toucheB"><Touche  className={'toucheBlanche'} name={value.note} fonctionPlaySound={playSound} key={index}></Touche></li>
      })
      }
    </div>
    </div>
  );
}

export default App;
