var config = {
    style: 'mapbox://styles/maptastik/ck5yq0b0h0j6d1iqhmaeot8l0',
    accessToken: 'pk.eyJ1IjoibWFwdGFzdGlrIiwiYSI6IjNPMkREV1kifQ.2KGPFZD0QaGfvYzXYotTXQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'What is Raleigh Building?',
    subtitle: 'Southeast CAC is the Least Expensive ITB',
    byline: 'James Demby (Adapted by Ryan Cooper)',
    footer: 'Source: Wake County, City of Raleigh, Zillow, Google',
    chapters: [
        {
            id: 'introduction',
            // title: 'Display Title',
            // image: './path/to/image/source.png',
            description: 'I have been jumping around the ITB CAC’s for deep dives on the new housing, and this week I wanted to take a closer look at the area where the least expensive housing ITB is located and being built. Since my last blog post we have entered 2020, so I will also start looking at what happened in 2019 as well.',
            location: {
                center: [-78.67703, 35.85262],
                zoom: 11,
                pitch: 33.5,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'raleigh-cac-fill',
                    opacity: 0.4
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'raleigh-cac-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'se-cac-full',
            description: 'I am, of course talking about the Southeast CAC.',
            location: {
                center: [-78.57539, 35.76111],
                zoom: 12,
                pitch: 53.5,
                bearing: 36
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-all-fill',
                    opacity: 0.4
                }
            ],
            onChapterExit: [
                {
                    layer: 'se-cac-all-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'se-cac-split',
            description: 'The Southeast CAC covers the most Southeastern part of Inside the Beltline (ITB) in Raleigh, as well as covering a large area outside of the beltline.',
            location: {
                center: [-78.57539, 35.76111],
                zoom: 12,
                pitch: 53.5,
                bearing: 36
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-focus-labels',
                    opacity: 1
                },
                {
                    layer: 'se-cac-itb-focus-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'se-cac-itb-focus-labels',
                    opacity: 0
                },
                {
                    layer: 'se-cac-itb-focus-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: 'se-cac-itb',
            description: 'ITB there are a little over 975 acres in the Southeast CAC. This CAC is mostly zoned for low density residential.',
            location: {
                center: [-78.59786, 35.76951],
                zoom: 13.85,
                pitch: 57,
                bearing: 35.95
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            }
            ]
        },
        {
            id: 'se-cac-itb-build',
            description: 'This is a CAC that has seen very little actual new building in the last few years. In 2018 there was just 1 new home built, which was this Single Family Home on Rose Lane.',
            location: {
                center: [-78.59786, 35.76951],
                zoom: 13.85,
                pitch: 57,
                bearing: 35.95
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                },
                {
                    layer: 'rose-ln-house-point',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            },
            {
                layer: 'rose-ln-house-point',
                opacity: 0
            }
            ]
        },
        {
            id: 'se-cac-new-home',
            image: 'https://images.squarespace-cdn.com/content/v1/5dc2d171aa8f514f1bebc7bf/1580076792325-GQHRVESMN5OA23IV69PP/ke17ZwdGBToddI8pDm48kNwch5jWR8STn_o8n2V946AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dvTGJwl-PlEZqPQCVYgJgCTmrrrsFfieFW03f08JdaC5CjLISwBs8eEdxAxTptZAUg/RoseLane2018.PNG',
            description: 'This home is 1,853 sqft and sold for $375,000. This made it the least expensive home (that was not part of an affordable housing program) built ITB in 2018. It is a safe bet that many many potential buyers really wanted to find this house and price point in a location like 5-points, where it would have been a steal for a new home. However, for Southeast CAC this was a very expensive house. It is also a good bit above the average for homes sold in Raleigh in general.',
            location: {
                center: [-78.59868, 35.76890],
                zoom: 17,
                pitch: 15,
                bearing: 98.40
            },
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                },
                {
                    layer: 'parcel-dash',
                    opacity: 1
                },
                {
                    layer: 'parcel-case',
                    opacity: 1
                },
                {
                    layer: 'parcel-case-depth',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcel-dash',
                    opacity: 0
                },
                {
                    layer: 'parcel-case',
                    opacity: 0
                },
                {
                    layer: 'parcel-case-depth',
                    opacity: 0
                }
            ]
        },
        {
            id: 'se-cac-rose-ln-parcels',
            image: 'https://images.squarespace-cdn.com/content/v1/5dc2d171aa8f514f1bebc7bf/1580076892710-JKF89YOVQK7OMLR821WL/ke17ZwdGBToddI8pDm48kEq2VA1frCdCj2WrBuZFhZ4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dh42IB_QD4pTYSBN8tD8ZwsZRMV3usHTOTdotCzxwvI0CjLISwBs8eEdxAxTptZAUg/image-asset.png',
            description: 'The two homes on the right of the home built in 2018 were two of the three homes built ITB in Southeast CAC in 2017. In 2016 there were no new homes built. These three homes (2017 & 2018) actually replaced a duplex that was there befores, so not even much of a net increase in housing. 1 new home per 975 (1,400) acres is pretty small, so I looked at historical numbers and total numbers of units to compare.',
            location: {
                center: [-78.59868, 35.76890],
                zoom: 17,
                pitch: 15,
                bearing: 98.40
            },
            onChapterEnter: [
                {
                    layer: 'rose-ln-2015',
                    opacity: 1
                },
                {
                    layer: 'satellite',
                    opacity: 1
                },
                {
                    layer: 'rose-ln-parcels-dash',
                    opacity: 1
                },
                {
                    layer: 'rose-ln-parcels-case',
                    opacity: 1
                },
                {
                    layer: 'rose-ln-parcels-depth',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rose-ln-2015',
                    opacity: 0
                },
                {
                    layer: 'rose-ln-parcels-dash',
                    opacity: 0
                },
                {
                    layer: 'rose-ln-parcels-case',
                    opacity: 0
                },
                {
                    layer: 'rose-ln-parcels-depth',
                    opacity: 0
                }
            ]
        },
        {
            id: 'se-cac-itb-2',
            image: 'https://images.squarespace-cdn.com/content/v1/5dc2d171aa8f514f1bebc7bf/1580077021835-XOHZGJ214XJ69AGWE94U/ke17ZwdGBToddI8pDm48kNiMlInXhyPNOrXP9QXoEbFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGkluZS4isz387Aj_3Q7WOowfc3tSO8bmFGByDTp_YRoz-3CTWZQ124CTRPXn-dnvM/totals+by+type.PNG',
            description: 'Overall most of the housing is Single Family Homes with Garden Apartments being the second highest number of units with about ⅓ the number as SFHs.',
            location: {
                center: [-78.59786, 35.76951],
                zoom: 13.85,
                pitch: 57,
                bearing: 35.95
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            }
            ]
        },
        {
            id: 'se-cac-itb-3',
            image: 'https://images.squarespace-cdn.com/content/v1/5dc2d171aa8f514f1bebc7bf/1580077216367-SRGW25VGU367KYV8NEWI/ke17ZwdGBToddI8pDm48kBlt1Xut4G2H7rH_G_KAfwRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIOyiTSB98_JDbClrlz7pXtf7t3ClCe6aXkHb6JQBA-K4/homes+built+per+year.PNG',
            description: 'With 2,362 units total it is no surprise that a 3 year stretch of only building 4 new homes is a historic low point of new construction. The 2010s have seen the lowest new places to live built in Southeast CAC since the 1940’s when the first real numbers of homes were built there. The chart of home production in Southeast CAC is probably a good picture of home production in a lot of North America cities first ring suburb neighborhoods. In the 50s and 60’s most of the homes were built. Then the number of new homes had been slowly declining unit the housing bubble in the 2000s, and we are hitting some kind of bottoming out of production in the 2010s. Strongtowns.org calls this the suburban experiment where neighborhoods are built out all at once to their “end state”.',
            location: {
                center: [-78.59786, 35.76951],
                zoom: 13.85,
                pitch: 57,
                bearing: 35.95
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            }
            ]
        },
        {
            id: 'se-cac-itb-3',
            image: 'https://images.squarespace-cdn.com/content/v1/5dc2d171aa8f514f1bebc7bf/1580077650024-2EQ6JLHU1F8EZ309744O/ke17ZwdGBToddI8pDm48kFClbwWZ-aMjqUqHPqozTeRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI4qcnJcHXEO5Ds2P9NkNN2PaiGP6-Dp-qNdU24RN3yZY/Averagepricewithinflation.PNG',
            description: 'So one new home was built in 2018, but may more homes were sold. I would describe this as an area that is starting to gentrify, and in Raleigh that means homes are being flipped. There were 62 residential buildings sold in 2018, and 53 of those were older Single Family homes. The average for those homes was $160,000 and average square footage was 1,263. I am betting a lot of those were pre-flip, but either way this is a much more affordable part of ITB. ',
            location: {
                center: [-78.59786, 35.76951],
                zoom: 13.85,
                pitch: 57,
                bearing: 35.95
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            }
            ]
        },
        {
            id: 'se-cac-itb-4',
            description: 'Although the sample size is to small to mean much, currently Zillow shows there are about 6 homes for rent in this CAC and they range from $1,100 a month to $1,500 a month. It is always interesting to see homes in the same area where one is clearly twice as nice as another but they are within $100 a month in rent.',
            location: {
                center: [-78.60476, 35.77023],
                zoom: 13,
                pitch: 0.00,
                bearing: 0.46
            },
            onChapterEnter: [
                {
                    layer: 'se-cac-itb-fill',
                    opacity: 1
                },
                {
                    layer: 'satellite-gray',
                    opacity: 1
                },
                {
                    layer: 'se-cac-itb-rental-houses-label',
                    opacity: 1
                },
                {
                    layer: 'se-cac-itb-rental-houses-marker',
                    opacity: 1
                }
            ],
            onChapterExit: [
            {
                layer: 'se-cac-itb-fill',
                opacity: 0
            },
            {
                layer: 'satellite-gray',
                opacity: 0
            },
            {
                layer: 'se-cac-itb-rental-houses-label',
                opacity: 0
            },
            {
                layer: 'se-cac-itb-rental-houses-marker',
                opacity: 0
            }
            ]
        }
    ]
};
