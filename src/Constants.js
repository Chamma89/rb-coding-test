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

export const EXPECTED_RETURNED_JSON = `works: [
        {
          filename: "162042.jpg",
          imageWidth: "2206",
          imageHeight: "2205",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.31820.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.31820.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.31820.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "NIKON D80",
            software: "Adobe Photoshop CS3 Macintosh",
            isoSpeedRatings: "100",
            dateTime: "Sun Aug 26 12:55:02 +1000 2007",
            make: "NIKON CORPORATION",
          },
        },
        {
          filename: "2010.jpg",
          imageWidth: "3504",
          imageHeight: "2336",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.2041.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.2041.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.2041.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "Canon EOS 20D",
            software: "Adobe Photoshop CS Windows",
            isoSpeedRatings: "100",
            dateTime: "Thu Sep 08 08:39:53 +1000 2005",
            make: "Canon",
          },
        },
        {
          filename: "261748.jpg",
          imageWidth: "4000",
          imageHeight: "3000",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.240509.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.240509.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.240509.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "FinePix S6500fd",
            software: "Adobe Photoshop 7.0",
            isoSpeedRatings: "400",
            dateTime: "Mon Oct 08 08:53:09 +1000 2007",
            make: "FUJIFILM",
          },
        },
        {
          filename: "27112.jpg",
          imageWidth: "1109",
          imageHeight: "1104",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.26583.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.26583.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.26583.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "Unknown model",
            software: "Adobe Photoshop CS2 Windows",
            isoSpeedRatings: "",
            dateTime: "Fri Mar 30 19:11:10 +1000 2007",
            make: "Unknown make",
          },
        },
        {
          filename: "2849897.jpg",
          imageWidth: "4208",
          imageHeight: "2360",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.2729606.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.2729606.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.2729606.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "D-LUX 3",
            software: "",
            isoSpeedRatings: "100",
            dateTime: "Sat Feb 28 17:01:43 +1100 2009",
            make: "LEICA",
          },
        },
        {
          filename: "2953043.jpg",
          imageWidth: "1840",
          imageHeight: "1232",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.2828069.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.2828069.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.2828069.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "SLP1000SE",
            software: "FDi V4.5 / FRONTIER340-3.0-0E-518",
            isoSpeedRatings: "",
            dateTime: "Fri Mar 27 10:35:27 +1100 2009",
            make: "FUJI PHOTO FILM CO., LTD.",
          },
        },
        {
          filename: "3348825.jpg",
          imageWidth: "4224",
          imageHeight: "2376",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.3201430.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.3201430.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.3201430.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "D-LUX 3",
            software: "QuickTime 7.6",
            isoSpeedRatings: "100",
            dateTime: "Fri Apr 03 17:12:23 +1100 2009",
            make: "LEICA",
          },
        },
        {
          filename: "3664692.jpg",
          imageWidth: "4208",
          imageHeight: "2360",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.3502552.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.3502552.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.3502552.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "D-LUX 3",
            software: "",
            isoSpeedRatings: "200",
            dateTime: "Sun Jul 19 16:59:33 +1000 2009",
            make: "LEICA",
          },
        },
        {
          filename: "3919261.jpg",
          imageWidth: "3264",
          imageHeight: "2448",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.3745978.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.3745978.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.3745978.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "DMC-FZ30",
            software: "Ver.1.0",
            isoSpeedRatings: "80",
            dateTime: "Thu May 04 17:53:25 +1000 2006",
            make: "Panasonic",
          },
        },
        {
          filename: "3949523.jpg",
          imageWidth: "3264",
          imageHeight: "1809",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.3775226.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.3775226.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.3775226.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "DMC-FZ30",
            software: "QuickTime 7.0.4",
            isoSpeedRatings: "80",
            dateTime: "Tue Apr 25 09:41:33 +1000 2006",
            make: "Panasonic",
          },
        },
        {
          filename: "550863.jpg",
          imageWidth: "4208",
          imageHeight: "2360",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.512919.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.512919.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.512919.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "D-LUX 3",
            software: "",
            isoSpeedRatings: "800",
            dateTime: "",
            make: "LEICA",
          },
        },
        {
          filename: "6783468.jpg",
          imageWidth: "4003",
          imageHeight: "2250",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.4250369.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.4250369.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.4250369.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "D-LUX 3",
            software: "",
            isoSpeedRatings: "100",
            dateTime: "Fri Nov 27 14:09:31 +1100 2009",
            make: "LEICA",
          },
        },
        {
          filename: "827375.jpg",
          imageWidth: "3880",
          imageHeight: "3008",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.777577.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.777577.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.777577.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "Canon EOS 400D DIGITAL",
            software: "Adobe Photoshop CS Macintosh",
            isoSpeedRatings: "200",
            dateTime: "Mon Feb 25 19:15:22 +1100 2008",
            make: "Canon",
          },
        },
        {
          filename: "920668.jpg",
          imageWidth: "2160",
          imageHeight: "2196",
          urls: [
            {
              type: "small",
              link:
                "http://ih1.redbubble.net/work.867035.1.flat,135x135,075,f.jpg",
            },
            {
              type: "medium",
              link:
                "http://ih1.redbubble.net/work.867035.1.flat,300x300,075,f.jpg",
            },
            {
              type: "large",
              link:
                "http://ih1.redbubble.net/work.867035.1.flat,550x550,075,f.jpg",
            },
          ],
          exif: {
            model: "Unknown model",
            software: "Adobe Photoshop CS3 Macintosh",
            isoSpeedRatings: "",
            dateTime: "Fri Mar 14 11:50:22 +1100 2008",
            make: "Unknown make",
          },
        },
      ]`;
