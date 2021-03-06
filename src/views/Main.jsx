import { Home } from './Home';
import { LocationInput } from './LocationInput';
import { Curate } from './Curate';
import { Loading } from './Loading';
import { TOS } from './TOS';
import { connect } from '@cerebral/react';
import { state } from 'cerebral';
import React from 'react';

const pages = {
  Home,
  LocationInput,
  Curate,
  TOS,
};

export const Main = connect(
  {
    currentPage: state.currentPage,
    findingLocations: state.findingLocations,
    askingLocation: state.askingLocation,
    gettingLocation: state.gettingLocation,
  },
  ({ currentPage, findingLocations, askingLocation, gettingLocation }) => {
    let CurrentPage = pages[currentPage];
    let isActive = findingLocations || askingLocation || gettingLocation;
    return (
      <React.Fragment>
        <main id="main-content" role="main">
          {/* {currentPage === 'Home' && ( */}
          <Loading
            isActive={isActive}
            askingLocation={askingLocation}
            findingLocations={findingLocations}
            gettingLocation={gettingLocation}
          />
          {/* )} */}
          <CurrentPage />
        </main>
      </React.Fragment>
    );
  },
);
