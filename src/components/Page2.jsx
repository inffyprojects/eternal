import React, { useState } from 'react';
import jsonData from '../assets/data/desc.json';

const Page2 = () => {
  const [children, setChildren] = useState(jsonData);

  const handleExpandClick = (id) => {
    setChildren((prevChildren) =>
      prevChildren.map((child) =>
        child.id === id
          ? { ...child, expanded: !child.expanded }
          : { ...child, expanded: false } 
      )
    );
  };

  const handleContainerClick = (event) => {
    const expandContainer = document.querySelector('.expand');
    const child = event.target.closest('.ex-child');

    if (child) {
      const isAlreadyExpanded = child.classList.contains('expanded');

    
      expandContainer.querySelectorAll('.ex-child').forEach((el) => {
        el.classList.remove('expanded');
        el.style.height = '15vh';
        el.style.backgroundColor = ''; 

        const otherChildPage = el.querySelector('.child-page');
        if (otherChildPage) {
          otherChildPage.style.opacity = '0'; 
        }
      });

      if (!isAlreadyExpanded) {
        child.classList.add('expanded');
        const sectionIndex = Array.from(expandContainer.querySelectorAll('.ex-child')).indexOf(child);
        child.style.height ='95vh';
       
        const childPage = child.querySelector('.child-page');
        if (childPage) {
          childPage.style.opacity = '1'; 
        }

        const children = Array.from(expandContainer.querySelectorAll('.ex-child'));
        const index = children.indexOf(child);

        const colors = ['var(--red)', 'var(--blue)', 'var(--green)', 'var(--purple)'];
        const backgroundColor = colors[index];

        if (backgroundColor) {
          child.style.backgroundColor = backgroundColor; 
        }
      }
    }
  };

  return (
    <div className="page-2">
      <div className="expand" onClick={handleContainerClick}>
        {children.map((child, index) => (
          <div
            key={child.id}
            className={`ex-child border ${child.expanded ? 'expanded' : ''} ${
              index === children.length - 1 ? 'hidden' : ''
            }`}

            onClick={() => handleExpandClick(child.id)}
          >
            <div className="child-content">
              <h1 className="child-heading">{child.title}</h1>
              <span className="plus-btn">+</span>
            </div>
            {child.expanded && (
              <div className={`child-page child${child.id}`}>
                <h3>{child.content.description}</h3>
                <ul className="unorderlist">
                  {child.content.list.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <div className="btn">
                  <span data-text="Explore">Explore</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
