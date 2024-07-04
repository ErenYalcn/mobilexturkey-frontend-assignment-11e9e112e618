// src/TabSection.tsx
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import Tab1Icon from './icons/Tab1Icon';
import Tab2Icon from './icons/Tab2Icon';
import Tab3Icon from './icons/Tab3Icon';
import Tab4Icon from './icons/Tab4Icon';
import Tab5Icon from './icons/Tab5Icon';

const tabs = [
  { label: 'Document Scanner', icon: Tab1Icon },
  { label: 'Sign & Stamp', icon: Tab2Icon },
  { label: 'Batch Scanning', icon: Tab3Icon },
  { label: 'Advanced Filters', icon: Tab4Icon },
  { label: 'Export & Share', icon: Tab5Icon },
];
import phone1 from '/src/assets/Phone-1.png';
import phone2 from '/src/assets/tab2-main.png';
import phone21 from '/src/assets/tab2-1.png';
import phone22 from '/src/assets/tab2-2.png';
import phone3 from '/src/assets/tab3-main.png';
import phone31 from '/src/assets/tab3-paper-1.png';
import phone32 from '/src/assets/tab3-paper-2.png';
import phone33 from '/src/assets/tab3-paper-3.png';
import phone4 from '/src/assets/tab-4-main.png';
import phone41 from '/src/assets/tab-4-img-1.png';
import phone42 from '/src/assets/tab-4-img-2.png';
import phone5 from '/src/assets/tab5-main.png';
import phone5arrow from '/src/assets/tab5-arrow.png';
import phone5pdf from '/src/assets/tab5-pdf.png';
import phone5jpg from '/src/assets/tab5-jpg.png';
import phone5txt from '/src/assets/tab5-txt.png';

const tabContents = [
  {
    title: 'Scan with Ease',
    subtitle: 'Document Scanner',
    text: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    images: [{ src: phone1, absolute: false }],
    buttonLink: 'https://erenyalcn.dev',
  },
  {
    title: 'One-Tap Focus',
    subtitle: 'SIGN & STAMP',
    text: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    images: [
      { src: phone2, absolute: false },
      { src: phone21, absolute: 'absolute2' },
      { src: phone22, absolute: 'absolute3' },
    ],
    buttonLink: 'https://erenyalcn.dev',
  },
  {
    title: 'Multiple Page Scan',
    subtitle: 'Batch Scanning',
    text: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    images: [
      { src: phone3, absolute: false },
      { src: phone31, absolute: 'absolute10' },
      { src: phone32, absolute: 'absolute11' },
      { src: phone33, absolute: 'absolute12' },
    ],
    buttonLink: 'https://erenyalcn.dev',
  },
  {
    title: 'Uniqe Filters',
    subtitle: 'Advanced fılters',
    text: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    images: [
      { src: phone4, absolute: false },
      { src: phone41, absolute: 'absolute4' },
      { src: phone42, absolute: 'absolute5' },
    ],
    buttonLink: 'https://erenyalcn.dev',
  },
  {
    title: 'All-Round Conversion',
    subtitle: 'Export & Share',
    text: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    images: [
      { src: phone5, absolute: false },
      { src: phone5arrow, absolute: 'absolute6' },
      { src: phone5pdf, absolute: 'absolute7' },
      { src: phone5jpg, absolute: 'absolute8' },
      { src: phone5txt, absolute: 'absolute9' },
    ],
    buttonLink: 'https://erenyalcn.dev',
  },
];

function TabSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const handleTabChange = () => {
      if (activeTab === 1) {
        setTimeout(() => {
          document
            .querySelectorAll(`.${styles.absolute2}, .${styles.absolute3}`)
            .forEach((el) => {
              el.classList.add(styles.active);
            });
        }, 650);
      } else {
        document
          .querySelectorAll(`.${styles.absolute2}, .${styles.absolute3}`)
          .forEach((el) => {
            el.classList.remove(styles.active);
          });
      }

      if (activeTab === 3) {
        setTimeout(() => {
          document
            .querySelectorAll(`.${styles.absolute4}, .${styles.absolute5}`)
            .forEach((el) => {
              el.classList.add(styles.active, styles.customopacity);
            });
        }, 800);
      } else {
        document
          .querySelectorAll(`.${styles.absolute4}, .${styles.absolute5}`)
          .forEach((el) => {
            el.classList.remove(styles.active, styles.customopacity);
          });
      }

      if (activeTab === 4) {
        setTimeout(() => {
          document
            .querySelectorAll(
              `.${styles.absolute6}, .${styles.absolute7}, .${styles.absolute8}, .${styles.absolute9}`,
            )
            .forEach((el) => {
              el.classList.add(styles.active);
            });
        }, 100);
      } else {
        document
          .querySelectorAll(
            `.${styles.absolute6}, .${styles.absolute7}, .${styles.absolute8}, .${styles.absolute9}`,
          )
          .forEach((el) => {
            el.classList.remove(styles.active);
          });
      }

      if (activeTab === 2) {
        setTimeout(() => {
          document
            .querySelectorAll(
              `.${styles.absolute10}, .${styles.absolute11}, .${styles.absolute12}`,
            )
            .forEach((el) => {
              el.classList.add(styles.active);
            });
        }, 100);
      } else {
        document
          .querySelectorAll(
            `.${styles.absolute10}, .${styles.absolute11}, .${styles.absolute12}`,
          )
          .forEach((el) => {
            el.classList.remove(styles.active);
          });
      }
    };

    handleTabChange();
  }, [activeTab]);

  return (
    <div className={styles.tabs}>
      <div
        className={`${styles.tabContent} ${activeTab === 2 ? styles.tab3 : ''}`}
      >
        <div className={styles.tabContentWrapper}>
          <div className={styles.tabContentWrapperLeft}>
            <div className={styles.images}>
              {tabContents[activeTab].images.map((image, idx) => (
                <img
                  key={`${activeTab}-${idx}`}
                  src={image.src}
                  alt={`Tab ${activeTab + 1} Image ${idx + 1}`}
                  className={`${idx === 0 ? `${styles.firstImage} ${styles.fadeinup}` : ''} 
                            ${image.absolute === 'absolute2' && activeTab === 1 ? styles.absolute2 : ''} 
                            ${image.absolute === 'absolute3' && activeTab === 1 ? styles.absolute3 : ''} 
                            ${image.absolute === 'absolute4' && activeTab === 3 ? styles.absolute4 : ''} 
                            ${image.absolute === 'absolute5' && activeTab === 3 ? styles.absolute5 : ''} 
                            ${image.absolute === 'absolute6' && activeTab === 4 ? styles.absolute6 : ''} 
                            ${image.absolute === 'absolute7' && activeTab === 4 ? styles.absolute7 : ''} 
                            ${image.absolute === 'absolute8' && activeTab === 4 ? styles.absolute8 : ''} 
                            ${image.absolute === 'absolute9' && activeTab === 4 ? styles.absolute9 : ''} 
                            ${image.absolute === 'absolute10' && activeTab === 2 ? styles.absolute10 : ''} 
                            ${image.absolute === 'absolute11' && activeTab === 2 ? styles.absolute11 : ''} 
                            ${image.absolute === 'absolute12' && activeTab === 2 ? styles.absolute12 : ''}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.tabContentWrapperRight}>
            <span>{tabContents[activeTab].subtitle}</span>
            <h2>{tabContents[activeTab].title}</h2>
            <p>{tabContents[activeTab].text}</p>
            <a
              href={tabContents[activeTab].buttonLink}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <ul className={styles.tabList}>
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;
          return (
            <li
              key={index}
              className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <IconComponent isActive={activeTab === index} />

              {tab.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TabSection;
