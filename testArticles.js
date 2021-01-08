import moment from 'moment';

const date = moment().format("YYYY-MM-DD");

const testArticleData = [
  {
    fields: {
      cardImage: {
        fields: {
          file: {
            url: 'http://bulma.io/images/placeholders/1280x960.png'
          }
        }
      },
      title: 'Test 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      date,
      slug: 'test-slug',
    },
  },
  {
    fields: {
      cardImage: {
        fields: {
          file: {
            url: 'http://bulma.io/images/placeholders/1280x960.png'
          }
        }
      },
      title: 'Test 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      date,
      slug: 'test-slug',
    },
  },
  {
    fields: {
      cardImage: {
        fields: {
          file: {
            url: 'http://bulma.io/images/placeholders/1280x960.png'
          }
        }
      },
      title: 'Test 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      date,
      slug: 'test-slug',
    },
  },
  {
    fields: {
      cardImage: {
        fields: {
          file: {
            url: 'http://bulma.io/images/placeholders/1280x960.png'
          }
        }
      },
      title: 'Test 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      date,
      slug: 'test-slug',
    },
  }
];

export default testArticleData;
