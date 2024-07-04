import styles from './App.module.css';
import React from 'react';
import TabSection from './TabSection';
export function App() {
  return (
    <>
      <main className={styles.main}>
        <TabSection />
      </main>
    </>
  );
}
