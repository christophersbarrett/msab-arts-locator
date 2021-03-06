import { connect } from '@cerebral/react';
import { sequences, state } from 'cerebral';
import React from 'react';
import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Section,
  Container,
  Title,
} from 'bloomer';
export const SearchByCity = connect(
  {
    cityValue: state.cityValue,
    searchByCitySequence: sequences.searchByCitySequence,
    updateCitySearchSequence: sequences.updateCitySearchSequence,
    haveGeo: state.haveGeo,
  },
  ({ cityValue, searchByCitySequence, updateCitySearchSequence, haveGeo }) => {
    return (
      <Section>
        <Container>
          <Title isSize={3} className="msab-has-text-purple">
            {haveGeo
              ? 'Find Arts in Minnesota'
              : 'Oops! Can’t Find Your Location'}
          </Title>

          <form
            className="search"
            id="city-search-form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              searchByCitySequence();
            }}
          >
            <span className="msab-has-text-grey">
              Enter a town/city in Minnesota to get started
            </span>
            <Field hasAddons>
              <Control style={{ maxWidth: '100%', width: '100%' }}>
                <Input
                  className="input is-medium"
                  type="search"
                  //type="text"
                  id="city-search"
                  name="citySearch"
                  value={cityValue}
                  onChange={(e) => {
                    updateCitySearchSequence({
                      cityValue: e.target.value,
                    });
                  }}
                />
              </Control>
              <Control>
                <Button isColor="primary" type="submit" className="is-medium">
                  <span className="icon is-right has-text-white">
                    <i className="fas fa-search" />
                  </span>
                </Button>
              </Control>
            </Field>
          </form>
        </Container>
      </Section>
    );
  },
);
