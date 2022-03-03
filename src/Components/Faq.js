import { useState } from 'react';
import './Faq.css';

function App() {
  const[selected, setSelected] = useState(null)

  const toggle = i =>{
      if(selected === i){
          return setSelected(null)
      }

      setSelected(i)
  }

  return (
    <div className="wrapper">
    <h1> Frequently Asked Questions</h1>
    {/* <div className='buttons'>
      <input type={'button'}></input>
      <input type={'button'}></input>
      <input type={'button'}></input>
      <input type={'button'}></input>
    </div> */}
     <div className='accordianA'>
       {data.map((item, i) => (
         <div className='item'>
          <div className='title' onClick={() => toggle(i)}>
            <h3>{item.question}</h3>
            <span>{selected === i? '-':'+'}</span>
          </div>
          <div className={selected === i? 'content show ':'content'}>{item.Answer}</div>
         </div>
       ))}
       </div> 
       <h5>Couldn’t find your question? Hit us up at any below social handles and we will get back to as soon as possible.</h5>

       {/* <div className='accordianB'>
         <span>hello</span>
       {data.map((item, i) => (
         <div className='item'>
          <div className='title' onClick={() => toggle(i)}>
            <h3>{item.question}</h3>
            <span>{selected === i? '-':'+'}</span>
          </div>
          <div className={selected === i? 'content show ':'content'}>{item.Answer}</div>
         </div>
       ))}
       </div>  */}

    </div>
  );
}

const data = [
  {
    question: 'What is JSCOP?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'How to register?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'What is the eligibility criteria?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'What are the event dates?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'what is the event venue?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },


]

export default App;
