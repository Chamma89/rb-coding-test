export const GRAPHQL_API = "https://take-home-test-gql.herokuapp.com/query";

export const GET_IMAGES_QUERY = `query {
        works {
          filename
          imageWidth
          imageHeight
          urls {
            type
            link
          }
          exif {
            model
            software
            isoSpeedRatings
            dateTime
            make
          }
        }
      }`;
