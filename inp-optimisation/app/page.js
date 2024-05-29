'use client';
import { useState, use, cache, Suspense } from 'react';
import Search from './components/Search';
import WizardList from './components/WizardList';
import Fuse from 'fuse.js';
// import useDebounce from './hooks/useDebounce';

const options = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  includeMatches: false,
  minMatchCharLength: 0,
  threshold: 0.3,
};
export function score(wizards, searchTerm) {
  const target = performance.now() + 3;
  const fuse = new Fuse([wizards], {
    ...options,
    keys: ['name', 'house'],
  });

  while (performance.now() < target);

  return fuse.search(searchTerm)[0];
}

async function filter(wizards, searchTerm) {
  if (searchTerm === '') return wizards;

  const results = [];

  for (let wizard of wizards) {
    let result;
    result = score(wizard, searchTerm);
    if (result) {
      results.push(result.item);
    }
  }

  results.sort((a, b) => a.score - b.score);
  return results;
}

async function getWizards() {
  const response = await fetch('http://localhost:3000/api/wizards');
  const wizards = await response.json();
  return wizards;
}

export default function Home() {
  const wizards = use(cache(getWizards)());

  const [searchTerm, setSearchTerm] = useState('');

  // const [results, setResults] = useState(wizards);

  // const debouncedFilter = useDebounce(async (term) => {
  //   const filteredResults = await filter(wizards, term);
  //   setResults(filteredResults);
  // }, 300);

  const onInput = async (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // debouncedFilter(searchTerm);
  };

  const results = use(cache(filter)(wizards, searchTerm));

  return (
    <>
      <h1>Welcome to the Wizarding World</h1>
      <Search searchTerm={searchTerm} onInput={onInput} />
      <section className="card-container" id="wizard-list">
        {results.map((wizard) => (
          <WizardList key={wizard.id} wizard={wizard} />
        ))}
      </section>
    </>
  );
}
