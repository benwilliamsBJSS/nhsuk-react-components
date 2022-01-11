import { Story } from '@storybook/react';
import React from 'react';
import { Images } from '../../src';

export const ImageWithCaption: Story = (args) => <Images {...args} />;
ImageWithCaption.args = {
  src: 'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg',
  alt: 'Picture of allergic conjunctivitis',
  sizes: '(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw',
  srcSet:
    'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w',
  caption: 'Itchy, red, watering eyes',
};

export const ImageWithoutCaption: Story = (args) => <Images {...args} />;
ImageWithoutCaption.args = {
  src: 'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg',
  alt: 'Picture of allergic conjunctivitis',
  sizes: '(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw',
  srcSet:
    'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w',
};

export default {
  title: 'Components/Images',
  component: Images,
};
