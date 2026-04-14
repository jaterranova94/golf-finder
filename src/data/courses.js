// Expanded Massachusetts Public Golf Courses  50 courses

export const BOSTON_COURSES = [

  //  EXISTING 20 

  {

    id: 1,

    name: "Granite Links Golf Club",

    lat: 42.2009, lng: -71.0095,

    city: "Quincy", state: "MA",

    type: "public",

    greenFee: { min: 75, max: 150 },

    slope: 133, courseRating: 71.8, par: 72, holes: 18,

    walkable: false,

    tags: ["Skyline views", "Links-style", "Challenging"],

    description: "Stunning panoramic views of the Boston skyline from every hole. Built on former granite quarries  one of the finest public courses in New England.",

    website: "https://www.granitelinks.com",

    phone: "(617) 689-1900",

    address: "100 Quarry Hills Dr, Quincy, MA 02169",

    photo: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/granite-links",

    teeTimes: [

      { id: "gl-1", time: "07:00", price: 75, spots: 4, day: "today" },

      { id: "gl-2", time: "08:30", price: 95, spots: 2, day: "today" },

      { id: "gl-3", time: "10:00", price: 120, spots: 4, day: "today" },

      { id: "gl-4", time: "13:00", price: 100, spots: 3, day: "today" },

      { id: "gl-5", time: "07:30", price: 85, spots: 4, day: "tomorrow" },

      { id: "gl-6", time: "09:00", price: 115, spots: 2, day: "tomorrow" },

    ],

  },

  {

    id: 2,

    name: "Fresh Pond Golf Course",

    lat: 42.3819, lng: -71.1467,

    city: "Cambridge", state: "MA",

    type: "municipal",

    greenFee: { min: 28, max: 42 },

    slope: 108, courseRating: 63.2, par: 70, holes: 18,

    walkable: true,

    tags: ["Budget friendly", "Walkable", "Urban"],

    description: "City-owned course steps from Fresh Pond Reservoir. The best value in Greater Boston.",

    website: "https://www.freshpondgolf.com",

    phone: "(617) 349-6282",

    address: "691 Huron Ave, Cambridge, MA 02138",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/fresh-pond",

    teeTimes: [

      { id: "fp-1", time: "06:30", price: 28, spots: 4, day: "today" },

      { id: "fp-2", time: "08:00", price: 35, spots: 2, day: "today" },

      { id: "fp-3", time: "11:00", price: 42, spots: 4, day: "today" },

      { id: "fp-4", time: "14:30", price: 38, spots: 2, day: "today" },

      { id: "fp-5", time: "07:00", price: 32, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 3,

    name: "Robert T. Lynch Municipal Golf Course",

    lat: 42.3281, lng: -71.1589,

    city: "Brookline", state: "MA",

    type: "municipal",

    greenFee: { min: 40, max: 52 },

    slope: 119, courseRating: 68.9, par: 71, holes: 18,

    walkable: true,

    tags: ["Historic", "Walkable", "Next to The Country Club"],

    description: "Known as Putterham Meadows  neighbor to The Country Club. Great greens and excellent twilight rates.",

    website: "https://www.brooklinegolf.com",

    phone: "(617) 730-2078",

    address: "1281 West Roxbury Pkwy, Brookline, MA 02132",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/brookline-municipal",

    teeTimes: [

      { id: "bg-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "bg-2", time: "09:30", price: 48, spots: 2, day: "today" },

      { id: "bg-3", time: "12:00", price: 52, spots: 3, day: "today" },

      { id: "bg-4", time: "08:00", price: 44, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 4,

    name: "George Wright Golf Course",

    lat: 42.2451, lng: -71.1235,

    city: "Hyde Park", state: "MA",

    type: "municipal",

    greenFee: { min: 40, max: 57 },

    slope: 122, courseRating: 69.9, par: 70, holes: 18,

    walkable: true,

    tags: ["Donald Ross", "Historic", "Hilly"],

    description: "One of the best municipal courses in America. Classic Donald Ross design with blind shots, false fronts, and dramatic ridged valleys.",

    website: "https://www.cityofbostongolf.com/course/george-wright-golf-course",

    phone: "(617) 361-8313",

    address: "420 West St, Hyde Park, MA 02136",

    photo: "https://images.unsplash.com/photo-1600101169408-b271d7d9f1c2?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/george-wright",

    teeTimes: [

      { id: "gw-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "gw-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "gw-3", time: "12:00", price: 57, spots: 4, day: "today" },

      { id: "gw-4", time: "08:00", price: 45, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 5,

    name: "William J. Devine Golf Course",

    lat: 42.3122, lng: -71.0858,

    city: "Dorchester", state: "MA",

    type: "municipal",

    greenFee: { min: 35, max: 57 },

    slope: 113, courseRating: 67.0, par: 70, holes: 18,

    walkable: true,

    tags: ["Oldest in New England", "Historic", "Franklin Park"],

    description: "One of America's oldest public courses, opened in 1896. Bobby Jones played here. Located inside Franklin Park.",

    website: "https://www.cityofbostongolf.com",

    phone: "(617) 265-4084",

    address: "1 Circuit Dr, Dorchester, MA 02121",

    photo: "https://images.unsplash.com/photo-1611618575293-f3e5b5a6f40d?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/franklin-park",

    teeTimes: [

      { id: "wd-1", time: "07:00", price: 35, spots: 4, day: "today" },

      { id: "wd-2", time: "09:30", price: 45, spots: 3, day: "today" },

      { id: "wd-3", time: "12:00", price: 57, spots: 2, day: "today" },

      { id: "wd-4", time: "07:30", price: 38, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 6,

    name: "Ponkapoag Golf Course",

    lat: 42.2047, lng: -71.1014,

    city: "Canton", state: "MA",

    type: "public",

    greenFee: { min: 22, max: 38 },

    slope: 115, courseRating: 67.4, par: 72, holes: 36,

    walkable: true,

    tags: ["Best value", "36 holes", "Blue Hills"],

    description: "MDC-operated 36-hole facility in the Blue Hills Reservation. Unbeatable value  the cheapest quality golf near Boston.",

    website: "https://www.ponkapoaggolf.com",

    phone: "(781) 828-4242",

    address: "2167 Washington St, Canton, MA 02021",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/ponkapoag",

    teeTimes: [

      { id: "pk-1", time: "06:00", price: 22, spots: 4, day: "today" },

      { id: "pk-2", time: "08:00", price: 30, spots: 4, day: "today" },

      { id: "pk-3", time: "10:30", price: 38, spots: 2, day: "today" },

      { id: "pk-4", time: "13:30", price: 35, spots: 3, day: "today" },

      { id: "pk-5", time: "07:00", price: 25, spots: 4, day: "tomorrow" },

      { id: "pk-6", time: "09:00", price: 38, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 7,

    name: "President's Golf Course",

    lat: 42.2673, lng: -71.0219,

    city: "Quincy", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 55 },

    slope: 121, courseRating: 69.1, par: 71, holes: 18,

    walkable: true,

    tags: ["Walkable", "Twilight deals", "Local favorite"],

    description: "Well-maintained South Shore public with a loyal local following. Great twilight rates after 3pm.",

    website: "https://www.presidentsgolfcourse.com",

    phone: "(617) 328-3444",

    address: "357 West Squantum St, Quincy, MA 02171",

    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/presidents",

    teeTimes: [

      { id: "pr-1", time: "07:30", price: 45, spots: 4, day: "today" },

      { id: "pr-2", time: "10:00", price: 55, spots: 2, day: "today" },

      { id: "pr-3", time: "15:00", price: 35, spots: 4, day: "today" },

      { id: "pr-4", time: "08:00", price: 50, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 8,

    name: "Stow Acres Country Club",

    lat: 42.4336, lng: -71.5378,

    city: "Stow", state: "MA",

    type: "public",

    greenFee: { min: 49, max: 79 },

    slope: 130, courseRating: 71.2, par: 72, holes: 36,

    walkable: false,

    tags: ["Tournament quality", "36 holes", "Championship"],

    description: "Two championship 18-hole courses. Hosts major Massachusetts amateur events. North Course is considered superior.",

    website: "https://www.stowacres.com",

    phone: "(978) 568-1100",

    address: "58 Randall Rd, Stow, MA 01775",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/stow-acres",

    teeTimes: [

      { id: "sa-1", time: "07:00", price: 49, spots: 4, day: "today" },

      { id: "sa-2", time: "08:30", price: 69, spots: 4, day: "today" },

      { id: "sa-3", time: "11:00", price: 79, spots: 2, day: "today" },

      { id: "sa-4", time: "14:00", price: 59, spots: 3, day: "today" },

      { id: "sa-5", time: "08:00", price: 65, spots: 4, day: "tomorrow" },

      { id: "sa-6", time: "10:30", price: 79, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 9,

    name: "Red Tail Golf Club",

    lat: 42.5359, lng: -71.5986,

    city: "Devens", state: "MA",

    type: "public",

    greenFee: { min: 89, max: 159 },

    slope: 138, courseRating: 73.9, par: 72, holes: 18,

    walkable: false,

    tags: ["Best public in MA", "Championship", "Fall foliage"],

    description: "Consistently ranked the top public course in Massachusetts. First New England course certified as Audubon International Cooperative Signature.",

    website: "https://www.redtailgolf.com",

    phone: "(978) 772-3273",

    address: "15 Bulge Rd, Devens, MA 01434",

    photo: "https://images.unsplash.com/photo-1598502759786-a43fd0e7e932?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/red-tail",

    teeTimes: [

      { id: "rt-1", time: "07:00", price: 99, spots: 4, day: "today" },

      { id: "rt-2", time: "09:00", price: 129, spots: 2, day: "today" },

      { id: "rt-3", time: "13:00", price: 89, spots: 4, day: "today" },

      { id: "rt-4", time: "08:00", price: 119, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 10,

    name: "Pinehills Golf Club  Nicklaus Course",

    lat: 41.9387, lng: -70.6761,

    city: "Plymouth", state: "MA",

    type: "semi-private",

    greenFee: { min: 90, max: 160 },

    slope: 135, courseRating: 74.3, par: 72, holes: 18,

    walkable: false,

    tags: ["Top ranked", "Championship", "Best in New England"],

    description: "Consistently ranked #1 public course in Massachusetts. Jack Nicklaus Jr. design with dramatic elevation changes.",

    website: "https://www.pinehillsgolf.com",

    phone: "(508) 209-3000",

    address: "54 Clubhouse Dr, Plymouth, MA 02360",

    photo: "https://images.unsplash.com/photo-1611618575293-f3e5b5a6f40d?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/pinehills-nicklaus",

    teeTimes: [

      { id: "pn-1", time: "07:00", price: 99, spots: 4, day: "today" },

      { id: "pn-2", time: "09:00", price: 140, spots: 2, day: "today" },

      { id: "pn-3", time: "12:00", price: 160, spots: 4, day: "today" },

      { id: "pn-4", time: "08:00", price: 120, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 11,

    name: "Pinehills Golf Club  Jones Course",

    lat: 41.9390, lng: -70.6765,

    city: "Plymouth", state: "MA",

    type: "semi-private",

    greenFee: { min: 90, max: 160 },

    slope: 137, courseRating: 75.4, par: 72, holes: 18,

    walkable: false,

    tags: ["Rees Jones design", "Glacial terrain", "Championship"],

    description: "Slightly more challenging than the Nicklaus course. Holes carved through dramatic Ice Age glacial kettles.",

    website: "https://www.pinehillsgolf.com",

    phone: "(508) 209-3000",

    address: "54 Clubhouse Dr, Plymouth, MA 02360",

    photo: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/pinehills-jones",

    teeTimes: [

      { id: "pj-1", time: "07:30", price: 99, spots: 4, day: "today" },

      { id: "pj-2", time: "09:30", price: 140, spots: 2, day: "today" },

      { id: "pj-3", time: "12:30", price: 160, spots: 4, day: "today" },

      { id: "pj-4", time: "08:30", price: 120, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 12,

    name: "Waverly Oaks Golf Club",

    lat: 41.9523, lng: -70.7018,

    city: "Plymouth", state: "MA",

    type: "public",

    greenFee: { min: 75, max: 140 },

    slope: 130, courseRating: 73.5, par: 72, holes: 18,

    walkable: false,

    tags: ["Golf Digest 4.5 stars", "Elevation changes", "Championship"],

    description: "Golf Digest Best New Course 1998. Over 100 feet of elevation change through 240 acres. Brian Silva's finest work.",

    website: "https://www.waverlyoaksgc.com",

    phone: "(508) 224-6700",

    address: "444 Long Pond Rd, Plymouth, MA 02360",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/waverly-oaks",

    teeTimes: [

      { id: "wo-1", time: "07:00", price: 85, spots: 4, day: "today" },

      { id: "wo-2", time: "09:00", price: 110, spots: 2, day: "today" },

      { id: "wo-3", time: "12:00", price: 130, spots: 4, day: "today" },

      { id: "wo-4", time: "08:00", price: 95, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 13,

    name: "Butter Brook Golf Club",

    lat: 42.5714, lng: -71.4372,

    city: "Westford", state: "MA",

    type: "semi-private",

    greenFee: { min: 55, max: 90 },

    slope: 126, courseRating: 71.5, par: 72, holes: 18,

    walkable: true,

    tags: ["Underrated", "Two distinct nines", "Golf Digest pick"],

    description: "Golf Digest calls it one of the best underrated public courses in Massachusetts. Tight tree-lined front nine contrasts with open sandy back nine.",

    website: "https://www.butterbrookgc.com",

    phone: "(978) 692-6860",

    address: "157 Carlisle Rd, Westford, MA 01886",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/butter-brook",

    teeTimes: [

      { id: "bb-1", time: "07:00", price: 60, spots: 4, day: "today" },

      { id: "bb-2", time: "09:00", price: 75, spots: 2, day: "today" },

      { id: "bb-3", time: "12:00", price: 90, spots: 4, day: "today" },

      { id: "bb-4", time: "08:00", price: 70, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 14,

    name: "Sandy Burr Country Club",

    lat: 42.3584, lng: -71.3609,

    city: "Wayland", state: "MA",

    type: "public",

    greenFee: { min: 50, max: 75 },

    slope: 128, courseRating: 72.3, par: 72, holes: 18,

    walkable: true,

    tags: ["Donald Ross", "Hilly", "Family owned"],

    description: "A sleeper Donald Ross design from 1922. Fourth-generation family-owned. Challenging rolling terrain only 16 miles west of Boston.",

    website: "https://www.sandyburr.com",

    phone: "(508) 358-7211",

    address: "103 Cochituate Rd, Wayland, MA 01778",

    photo: "https://images.unsplash.com/photo-1600101169408-b271d7d9f1c2?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/sandy-burr",

    teeTimes: [

      { id: "sb-1", time: "07:00", price: 55, spots: 4, day: "today" },

      { id: "sb-2", time: "09:00", price: 65, spots: 2, day: "today" },

      { id: "sb-3", time: "12:00", price: 75, spots: 4, day: "today" },

      { id: "sb-4", time: "08:00", price: 60, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 15,

    name: "Brookmeadow Country Club",

    lat: 42.1606, lng: -71.1164,

    city: "Canton", state: "MA",

    type: "public",

    greenFee: { min: 42, max: 68 },

    slope: 120, courseRating: 70.1, par: 72, holes: 18,

    walkable: true,

    tags: ["Family owned", "Private club feel", "South Shore"],

    description: "Family-owned since 1967. Aims to deliver a private club experience at public prices.",

    website: "https://www.brookmeadowgolf.com",

    phone: "(781) 828-4444",

    address: "100 Everendon Rd, Canton, MA 02021",

    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/brookmeadow",

    teeTimes: [

      { id: "bm-1", time: "07:00", price: 45, spots: 4, day: "today" },

      { id: "bm-2", time: "09:00", price: 58, spots: 2, day: "today" },

      { id: "bm-3", time: "12:00", price: 68, spots: 4, day: "today" },

      { id: "bm-4", time: "08:00", price: 52, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 16,

    name: "Newton Commonwealth Golf Course",

    lat: 42.3477, lng: -71.2194,

    city: "Newton", state: "MA",

    type: "municipal",

    greenFee: { min: 37, max: 50 },

    slope: 109, courseRating: 64.5, par: 70, holes: 18,

    walkable: true,

    tags: ["Donald Ross", "Budget friendly", "Walkable"],

    description: "Donald Ross design just 20 minutes from downtown Boston. Shorter course ideal for walkers and casual rounds.",

    website: "https://sterlinggolf.com/newton-commonwealth/",

    phone: "(617) 630-1971",

    address: "212 Kenrick St, Newton, MA 02458",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/newton-commonwealth",

    teeTimes: [

      { id: "nc-1", time: "07:00", price: 37, spots: 4, day: "today" },

      { id: "nc-2", time: "09:00", price: 44, spots: 2, day: "today" },

      { id: "nc-3", time: "12:00", price: 50, spots: 4, day: "today" },

      { id: "nc-4", time: "08:00", price: 40, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 17,

    name: "Maplegate Country Club",

    lat: 42.0895, lng: -71.4690,

    city: "Bellingham", state: "MA",

    type: "public",

    greenFee: { min: 42, max: 72 },

    slope: 127, courseRating: 71.8, par: 72, holes: 18,

    walkable: false,

    tags: ["Championship layout", "Tree-lined", "Southwest of Boston"],

    description: "Rolling hills with maple, beech, oak, and pine lining the fairways. Popular with Greater Boston golfers seeking a reliable weekend option.",

    website: "https://www.maplegategolf.com",

    phone: "(508) 966-4040",

    address: "160 Maple St, Bellingham, MA 02019",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/maplegate",

    teeTimes: [

      { id: "mg-1", time: "07:00", price: 45, spots: 4, day: "today" },

      { id: "mg-2", time: "09:00", price: 60, spots: 2, day: "today" },

      { id: "mg-3", time: "12:00", price: 72, spots: 4, day: "today" },

      { id: "mg-4", time: "08:00", price: 55, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 18,

    name: "South Shore Country Club",

    lat: 42.2390, lng: -70.9008,

    city: "Hingham", state: "MA",

    type: "public",

    greenFee: { min: 45, max: 78 },

    slope: 121, courseRating: 69.8, par: 72, holes: 18,

    walkable: true,

    tags: ["100 years old", "Bowling alley", "Entertainment"],

    description: "Celebrating its 100th anniversary. Unique entertainment complex with bowling, simulators, and a sports bar attached to a quality 18-hole layout.",

    website: "https://www.southshorecc.com",

    phone: "(781) 749-8479",

    address: "274 South St, Hingham, MA 02043",

    photo: "https://images.unsplash.com/photo-1598502759786-a43fd0e7e932?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/south-shore-cc",

    teeTimes: [

      { id: "ss-1", time: "07:00", price: 48, spots: 4, day: "today" },

      { id: "ss-2", time: "09:00", price: 65, spots: 2, day: "today" },

      { id: "ss-3", time: "12:00", price: 78, spots: 4, day: "today" },

      { id: "ss-4", time: "08:00", price: 55, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 19,

    name: "Gannon Municipal Golf Course",

    lat: 42.4870, lng: -71.0003,

    city: "Lynn", state: "MA",

    type: "municipal",

    greenFee: { min: 32, max: 55 },

    slope: 116, courseRating: 68.5, par: 71, holes: 18,

    walkable: true,

    tags: ["Hidden gem", "Budget friendly", "North Shore"],

    description: "Called a hidden gem by PGA.com. Reasonable prices for a well-run facility just north of Boston.",

    website: "https://www.gannongolf.com",

    phone: "(781) 592-8238",

    address: "60 Great Pond Rd, Lynn, MA 01904",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/gannon-municipal",

    teeTimes: [

      { id: "gm-1", time: "07:00", price: 32, spots: 4, day: "today" },

      { id: "gm-2", time: "09:00", price: 44, spots: 2, day: "today" },

      { id: "gm-3", time: "12:00", price: 55, spots: 4, day: "today" },

      { id: "gm-4", time: "08:00", price: 38, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 20,

    name: "Furnace Brook Golf Club",

    lat: 42.1703, lng: -70.9908,

    city: "Wollaston", state: "MA",

    type: "public",

    greenFee: { min: 50, max: 80 },

    slope: 127, courseRating: 70.5, par: 72, holes: 18,

    walkable: true,

    tags: ["Challenging", "Fast greens", "Serious golfers"],

    description: "Demanding layout with tight fairways and fast greens. A favorite among low-handicap South Shore golfers.",

    website: "https://www.furnacebrookgolfclub.com",

    phone: "(617) 472-2261",

    address: "410 Sea St, Wollaston, MA 02170",

    photo: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/furnace-brook",

    teeTimes: [

      { id: "fb-1", time: "07:00", price: 55, spots: 4, day: "today" },

      { id: "fb-2", time: "09:00", price: 70, spots: 2, day: "today" },

      { id: "fb-3", time: "12:00", price: 80, spots: 4, day: "today" },

      { id: "fb-4", time: "08:00", price: 65, spots: 4, day: "tomorrow" },

    ],

  },

  //  NEW COURSES 

  {

    id: 21,

    name: "Tewksbury Country Club",

    lat: 42.6112, lng: -71.2345,

    city: "Tewksbury", state: "MA",

    type: "public",

    greenFee: { min: 45, max: 75 },

    slope: 128, courseRating: 70.8, par: 72, holes: 18,

    walkable: true,

    tags: ["North of Boston", "Well maintained", "Popular"],

    description: "Consistently rated one of the top public courses north of Boston. Recently associated with Treehouse Brewery making it a must-visit destination.",

    website: "https://www.tewksburycc.com",

    phone: "(978) 640-0033",

    address: "1 Tewksbury Country Club Dr, Tewksbury, MA 01876",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/tewksbury-cc",

    teeTimes: [

      { id: "tc-1", time: "07:00", price: 50, spots: 4, day: "today" },

      { id: "tc-2", time: "09:00", price: 65, spots: 2, day: "today" },

      { id: "tc-3", time: "12:00", price: 75, spots: 4, day: "today" },

      { id: "tc-4", time: "08:00", price: 60, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 22,

    name: "Merrimack Valley Golf Course",

    lat: 42.6473, lng: -71.3198,

    city: "Methuen", state: "MA",

    type: "public",

    greenFee: { min: 28, max: 45 },

    slope: 112, courseRating: 66.8, par: 70, holes: 18,

    walkable: true,

    tags: ["Budget friendly", "North Shore", "Walkable"],

    description: "Affordable public course in the Merrimack Valley. Great value for recreational golfers in the greater Lawrence area.",

    website: "https://www.merrimackvalleygolf.com",

    phone: "(978) 686-1822",

    address: "210 Pleasant Valley St, Methuen, MA 01844",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/merrimack-valley",

    teeTimes: [

      { id: "mv-1", time: "06:30", price: 28, spots: 4, day: "today" },

      { id: "mv-2", time: "08:30", price: 38, spots: 2, day: "today" },

      { id: "mv-3", time: "11:00", price: 45, spots: 4, day: "today" },

      { id: "mv-4", time: "07:00", price: 32, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 23,

    name: "Middleton Golf Course",

    lat: 42.5937, lng: -71.0019,

    city: "Middleton", state: "MA",

    type: "public",

    greenFee: { min: 32, max: 55 },

    slope: 117, courseRating: 68.2, par: 72, holes: 18,

    walkable: true,

    tags: ["North Shore", "Walkable", "Local favorite"],

    description: "Popular North Shore public course with a loyal following. Well-maintained fairways and friendly staff.",

    website: "https://www.middletongolf.com",

    phone: "(978) 774-4075",

    address: "105 South Main St, Middleton, MA 01949",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/middleton",

    teeTimes: [

      { id: "mid-1", time: "07:00", price: 35, spots: 4, day: "today" },

      { id: "mid-2", time: "09:00", price: 48, spots: 2, day: "today" },

      { id: "mid-3", time: "12:00", price: 55, spots: 4, day: "today" },

      { id: "mid-4", time: "08:00", price: 40, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 24,

    name: "Olde Scotland Links",

    lat: 41.9912, lng: -71.0541,

    city: "Bridgewater", state: "MA",

    type: "public",

    greenFee: { min: 38, max: 65 },

    slope: 124, courseRating: 70.2, par: 72, holes: 18,

    walkable: true,

    tags: ["Links-style", "South Shore", "Walkable"],

    description: "Scottish links-style design with open fairways, pot bunkers, and firm fast conditions. One of the best walking courses in southeastern MA.",

    website: "https://www.oldescotlandlinks.com",

    phone: "(508) 279-3344",

    address: "695 Pine St, Bridgewater, MA 02324",

    photo: "https://images.unsplash.com/photo-1600101169408-b271d7d9f1c2?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/olde-scotland-links",

    teeTimes: [

      { id: "osl-1", time: "07:00", price: 42, spots: 4, day: "today" },

      { id: "osl-2", time: "09:00", price: 55, spots: 2, day: "today" },

      { id: "osl-3", time: "12:00", price: 65, spots: 4, day: "today" },

      { id: "osl-4", time: "08:00", price: 50, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 25,

    name: "Braintree Municipal Golf Course",

    lat: 42.2014, lng: -70.9945,

    city: "Braintree", state: "MA",

    type: "municipal",

    greenFee: { min: 40, max: 66 },

    slope: 118, courseRating: 68.8, par: 71, holes: 18,

    walkable: true,

    tags: ["Municipal", "South Shore", "Easy highway access"],

    description: "Fun municipal course right off I-93. Easy to get to, reasonable prices, and great twilight rates after 4pm.",

    website: "https://www.braintreegolf.com",

    phone: "(781) 843-6513",

    address: "101 Jefferson St, Braintree, MA 02184",

    photo: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/braintree-municipal",

    teeTimes: [

      { id: "br-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "br-2", time: "09:00", price: 55, spots: 2, day: "today" },

      { id: "br-3", time: "12:00", price: 66, spots: 4, day: "today" },

      { id: "br-4", time: "16:00", price: 38, spots: 4, day: "today" },

      { id: "br-5", time: "08:00", price: 50, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 26,

    name: "Duxbury Yacht Club Golf Course",

    lat: 42.0397, lng: -70.6639,

    city: "Duxbury", state: "MA",

    type: "public",

    greenFee: { min: 40, max: 70 },

    slope: 122, courseRating: 69.5, par: 72, holes: 18,

    walkable: true,

    tags: ["Coastal", "South Shore", "Scenic"],

    description: "Scenic South Shore layout with coastal views. Well-maintained and popular with South Shore regulars.",

    website: "https://www.duxburyyc.com",

    phone: "(781) 934-9486",

    address: "141 St George St, Duxbury, MA 02332",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/duxbury",

    teeTimes: [

      { id: "dux-1", time: "07:30", price: 45, spots: 4, day: "today" },

      { id: "dux-2", time: "09:30", price: 60, spots: 2, day: "today" },

      { id: "dux-3", time: "12:00", price: 70, spots: 4, day: "today" },

      { id: "dux-4", time: "08:00", price: 55, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 27,

    name: "The Ranch Golf Club",

    lat: 42.1198, lng: -72.5412,

    city: "Southwick", state: "MA",

    type: "public",

    greenFee: { min: 65, max: 95 },

    slope: 134, courseRating: 72.1, par: 72, holes: 18,

    walkable: false,

    tags: ["Top rated", "Western MA", "Resort feel"],

    description: "Consistently voted top public course in western Massachusetts. Damian Pascuzzo design with rolling terrain and stunning views. Pristine conditions.",

    website: "https://www.theranchgolfclub.com",

    phone: "(413) 569-9333",

    address: "65 Sunnyside Rd, Southwick, MA 01077",

    photo: "https://images.unsplash.com/photo-1598502759786-a43fd0e7e932?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/the-ranch",

    teeTimes: [

      { id: "rn-1", time: "07:00", price: 70, spots: 4, day: "today" },

      { id: "rn-2", time: "09:00", price: 85, spots: 2, day: "today" },

      { id: "rn-3", time: "12:00", price: 95, spots: 4, day: "today" },

      { id: "rn-4", time: "08:00", price: 80, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 28,

    name: "Haverhill Country Club",

    lat: 42.7654, lng: -71.1234,

    city: "Haverhill", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 60 },

    slope: 120, courseRating: 69.2, par: 72, holes: 18,

    walkable: true,

    tags: ["North Shore", "Walkable", "Affordable"],

    description: "Solid North Shore public course offering good value and walkable terrain. Popular with Merrimack Valley and NH border golfers.",

    website: "https://www.haverhillcc.com",

    phone: "(978) 374-7606",

    address: "238 Keach Ave, Haverhill, MA 01835",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/haverhill-cc",

    teeTimes: [

      { id: "hav-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "hav-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "hav-3", time: "12:00", price: 60, spots: 4, day: "today" },

      { id: "hav-4", time: "08:00", price: 45, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 29,

    name: "Pembroke Country Club",

    lat: 42.0654, lng: -70.8012,

    city: "Pembroke", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 60 },

    slope: 119, courseRating: 68.9, par: 71, holes: 18,

    walkable: true,

    tags: ["South Shore", "Walkable", "Local favorite"],

    description: "Charming South Shore public with tree-lined fairways and well-kept greens. A local favorite between Boston and the Cape.",

    website: "https://www.pembrokecountryclub.com",

    phone: "(781) 826-5191",

    address: "94 Ferry St, Pembroke, MA 02359",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/pembroke-cc",

    teeTimes: [

      { id: "pem-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "pem-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "pem-3", time: "12:00", price: 60, spots: 4, day: "today" },

      { id: "pem-4", time: "08:00", price: 45, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 30,

    name: "Green Harbor Golf Club",

    lat: 42.0891, lng: -70.6548,

    city: "Marshfield", state: "MA",

    type: "public",

    greenFee: { min: 32, max: 52 },

    slope: 113, courseRating: 67.1, par: 70, holes: 18,

    walkable: true,

    tags: ["Budget friendly", "South Shore", "Walkable"],

    description: "Beloved South Shore muni with excellent conditions for the price. The staff is always friendly and the greens are well-maintained year-round.",

    website: "https://www.greenharborg.com",

    phone: "(781) 834-7303",

    address: "624 Beach St, Marshfield, MA 02050",

    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/green-harbor",

    teeTimes: [

      { id: "gh-1", time: "06:30", price: 32, spots: 4, day: "today" },

      { id: "gh-2", time: "08:30", price: 42, spots: 2, day: "today" },

      { id: "gh-3", time: "11:00", price: 52, spots: 4, day: "today" },

      { id: "gh-4", time: "07:00", price: 36, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 31,

    name: "Cranberry Valley Golf Course",

    lat: 41.7789, lng: -70.0612,

    city: "Harwich", state: "MA",

    type: "municipal",

    greenFee: { min: 35, max: 65 },

    slope: 121, courseRating: 69.8, par: 71, holes: 18,

    walkable: true,

    tags: ["Cape Cod", "Municipal", "Walkable"],

    description: "One of the top municipal courses on Cape Cod. Well-maintained and a great value for golfers visiting the Cape.",

    website: "https://www.cranberryvalleygolf.com",

    phone: "(508) 430-5234",

    address: "183 Oak St, Harwich, MA 02645",

    photo: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/cranberry-valley",

    teeTimes: [

      { id: "cv-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "cv-2", time: "09:00", price: 55, spots: 2, day: "today" },

      { id: "cv-3", time: "12:00", price: 65, spots: 4, day: "today" },

      { id: "cv-4", time: "08:00", price: 48, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 32,

    name: "Captains Golf Course  Port",

    lat: 41.7512, lng: -70.0198,

    city: "Brewster", state: "MA",

    type: "municipal",

    greenFee: { min: 45, max: 89 },

    slope: 126, courseRating: 70.9, par: 72, holes: 18,

    walkable: true,

    tags: ["Cape Cod", "36 holes", "Top-rated muni"],

    description: "One of the most acclaimed municipal courses in New England. The Port and Starboard courses both offer championship-quality golf on Cape Cod.",

    website: "https://www.captainsgolfcourse.com",

    phone: "(508) 896-5100",

    address: "1000 Freeman's Way, Brewster, MA 02631",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/captains-port",

    teeTimes: [

      { id: "cap-1", time: "07:00", price: 55, spots: 4, day: "today" },

      { id: "cap-2", time: "09:00", price: 75, spots: 2, day: "today" },

      { id: "cap-3", time: "12:00", price: 89, spots: 4, day: "today" },

      { id: "cap-4", time: "08:00", price: 65, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 33,

    name: "Cape Cod National Golf Club",

    lat: 41.7398, lng: -70.0876,

    city: "Brewster", state: "MA",

    type: "semi-private",

    greenFee: { min: 95, max: 175 },

    slope: 140, courseRating: 74.1, par: 72, holes: 18,

    walkable: false,

    tags: ["Top 100 You Can Play", "Cape Cod", "Championship"],

    description: "Ranked among Golf Digest's Top 100 You Can Play. Brian Silva design routed through dramatic Cape Cod terrain with bold greens and creative bunkering.",

    website: "https://www.capecodgolf.com",

    phone: "(508) 896-3016",

    address: "Rte 6A, Brewster, MA 02631",

    photo: "https://images.unsplash.com/photo-1611618575293-f3e5b5a6f40d?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/cape-cod-national",

    teeTimes: [

      { id: "ccn-1", time: "07:00", price: 110, spots: 4, day: "today" },

      { id: "ccn-2", time: "09:00", price: 150, spots: 2, day: "today" },

      { id: "ccn-3", time: "12:00", price: 175, spots: 4, day: "today" },

      { id: "ccn-4", time: "08:00", price: 130, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 34,

    name: "Brookside Club",

    lat: 41.7345, lng: -70.5789,

    city: "Bourne", state: "MA",

    type: "public",

    greenFee: { min: 55, max: 95 },

    slope: 128, courseRating: 71.2, par: 72, holes: 18,

    walkable: false,

    tags: ["Cape gateway", "Private club feel", "Upper Cape"],

    description: "Luxurious private-club feel at public prices. Located at the Cape Cod gateway  ideal starting point for a golf trip to the Cape. The Bog Tavern is a post-round must.",

    website: "https://www.thebrooksideclub.com",

    phone: "(508) 743-4653",

    address: "11 Pursuit Dr, Bourne, MA 02532",

    photo: "https://images.unsplash.com/photo-1598502759786-a43fd0e7e932?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/brookside-bourne",

    teeTimes: [

      { id: "bsc-1", time: "07:00", price: 60, spots: 4, day: "today" },

      { id: "bsc-2", time: "09:00", price: 80, spots: 2, day: "today" },

      { id: "bsc-3", time: "12:00", price: 95, spots: 4, day: "today" },

      { id: "bsc-4", time: "08:00", price: 70, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 35,

    name: "Falmouth Country Club",

    lat: 41.5734, lng: -70.5897,

    city: "Falmouth", state: "MA",

    type: "public",

    greenFee: { min: 40, max: 75 },

    slope: 122, courseRating: 69.5, par: 72, holes: 18,

    walkable: true,

    tags: ["Cape Cod", "Walkable", "Ocean breezes"],

    description: "Classic Cape Cod layout with ocean breezes and scenic views. A welcoming course for golfers of all abilities visiting the Upper Cape.",

    website: "https://www.falmouthcc.com",

    phone: "(508) 548-3211",

    address: "630 Carriage Shop Rd, Falmouth, MA 02536",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/falmouth-cc",

    teeTimes: [

      { id: "fal-1", time: "07:00", price: 45, spots: 4, day: "today" },

      { id: "fal-2", time: "09:00", price: 62, spots: 2, day: "today" },

      { id: "fal-3", time: "12:00", price: 75, spots: 4, day: "today" },

      { id: "fal-4", time: "08:00", price: 55, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 36,

    name: "Crosswinds Golf Club",

    lat: 41.9123, lng: -70.7234,

    city: "Plymouth", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 60 },

    slope: 118, courseRating: 68.4, par: 71, holes: 18,

    walkable: true,

    tags: ["Plymouth", "Budget friendly", "Walkable"],

    description: "Affordable public course in Plymouth, a great warm-up or alternative to the nearby Pinehills courses. Friendly staff and good conditions.",

    website: "https://www.crosswindsgolf.com",

    phone: "(508) 830-1199",

    address: "424 Long Pond Rd, Plymouth, MA 02360",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/crosswinds",

    teeTimes: [

      { id: "cw-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "cw-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "cw-3", time: "12:00", price: 60, spots: 4, day: "today" },

      { id: "cw-4", time: "08:00", price: 45, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 37,

    name: "Easton Country Club",

    lat: 42.0312, lng: -71.1023,

    city: "Easton", state: "MA",

    type: "public",

    greenFee: { min: 38, max: 65 },

    slope: 121, courseRating: 69.3, par: 72, holes: 18,

    walkable: true,

    tags: ["South of Boston", "Walkable", "Well maintained"],

    description: "Solid public layout south of Boston with consistent conditions. A favorite among Easton and Stoughton area golfers.",

    website: "https://www.eastoncountryclub.com",

    phone: "(508) 238-2500",

    address: "265 Purchase St, Easton, MA 02375",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/easton-cc",

    teeTimes: [

      { id: "eas-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "eas-2", time: "09:00", price: 55, spots: 2, day: "today" },

      { id: "eas-3", time: "12:00", price: 65, spots: 4, day: "today" },

      { id: "eas-4", time: "08:00", price: 48, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 38,

    name: "Foxborough Country Club",

    lat: 42.0651, lng: -71.2456,

    city: "Foxborough", state: "MA",

    type: "public",

    greenFee: { min: 40, max: 70 },

    slope: 123, courseRating: 69.8, par: 72, holes: 18,

    walkable: false,

    tags: ["Near Gillette Stadium", "Championship", "South of Boston"],

    description: "Located near Gillette Stadium, this course is popular for corporate and pre-game outings. Well-conditioned layout with good variety.",

    website: "https://www.foxboroughcc.com",

    phone: "(508) 543-4661",

    address: "33 Walnut St, Foxborough, MA 02035",

    photo: "https://images.unsplash.com/photo-1600101169408-b271d7d9f1c2?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/foxborough-cc",

    teeTimes: [

      { id: "fox-1", time: "07:00", price: 45, spots: 4, day: "today" },

      { id: "fox-2", time: "09:00", price: 60, spots: 2, day: "today" },

      { id: "fox-3", time: "12:00", price: 70, spots: 4, day: "today" },

      { id: "fox-4", time: "08:00", price: 55, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 39,

    name: "Marlborough Country Club",

    lat: 42.3548, lng: -71.5523,

    city: "Marlborough", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 60 },

    slope: 118, courseRating: 68.1, par: 71, holes: 18,

    walkable: true,

    tags: ["MetroWest", "Walkable", "Affordable"],

    description: "Reliable MetroWest public course with consistent conditions. Walkable and affordable, perfect for after-work rounds.",

    website: "https://www.marlboroughcc.com",

    phone: "(508) 481-6669",

    address: "85 Rawlinson Rd, Marlborough, MA 01752",

    photo: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/marlborough-cc",

    teeTimes: [

      { id: "mar-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "mar-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "mar-3", time: "12:00", price: 60, spots: 4, day: "today" },

      { id: "mar-4", time: "08:00", price: 44, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 40,

    name: "Widow's Walk Golf Course",

    lat: 42.1198, lng: -70.8765,

    city: "Scituate", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 65 },

    slope: 123, courseRating: 69.9, par: 72, holes: 18,

    walkable: true,

    tags: ["South Shore", "Walkable", "Coastal"],

    description: "Highly regarded South Shore public course with links-like characteristics and coastal breezes. Named after the widow's walks found on coastal New England homes.",

    website: "https://www.widowswalkgolf.com",

    phone: "(781) 544-7777",

    address: "250 The Driftway, Scituate, MA 02066",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/widows-walk",

    teeTimes: [

      { id: "ww-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "ww-2", time: "09:00", price: 55, spots: 2, day: "today" },

      { id: "ww-3", time: "12:00", price: 65, spots: 4, day: "today" },

      { id: "ww-4", time: "08:00", price: 48, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 41,

    name: "Leo J. Martin Memorial Golf Course",

    lat: 42.3156, lng: -71.2987,

    city: "Weston", state: "MA",

    type: "municipal",

    greenFee: { min: 35, max: 55 },

    slope: 116, courseRating: 67.8, par: 72, holes: 18,

    walkable: true,

    tags: ["MetroWest", "Municipal", "Walkable"],

    description: "Town-operated course in Weston offering solid golf at municipal prices. Popular with MetroWest residents for its accessibility and value.",

    website: "https://www.leojmartingolf.com",

    phone: "(781) 894-4903",

    address: "190 Park Rd, Weston, MA 02493",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/leo-martin",

    teeTimes: [

      { id: "lm-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "lm-2", time: "09:00", price: 48, spots: 2, day: "today" },

      { id: "lm-3", time: "12:00", price: 55, spots: 4, day: "today" },

      { id: "lm-4", time: "08:00", price: 42, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 42,

    name: "Norwood Country Club",

    lat: 42.1842, lng: -71.2134,

    city: "Norwood", state: "MA",

    type: "public",

    greenFee: { min: 38, max: 62 },

    slope: 119, courseRating: 68.5, par: 71, holes: 18,

    walkable: true,

    tags: ["South of Boston", "Walkable", "Friendly"],

    description: "Friendly public course south of Boston. Good conditions and a welcoming atmosphere make this a great option for groups.",

    website: "https://www.norwoodcc.com",

    phone: "(781) 769-5880",

    address: "400 Providence Hwy, Norwood, MA 02062",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/norwood-cc",

    teeTimes: [

      { id: "nor-1", time: "07:00", price: 40, spots: 4, day: "today" },

      { id: "nor-2", time: "09:00", price: 52, spots: 2, day: "today" },

      { id: "nor-3", time: "12:00", price: 62, spots: 4, day: "today" },

      { id: "nor-4", time: "08:00", price: 46, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 43,

    name: "Wentworth Hills Country Club",

    lat: 42.1023, lng: -71.3456,

    city: "Plainville", state: "MA",

    type: "public",

    greenFee: { min: 40, max: 68 },

    slope: 124, courseRating: 70.1, par: 72, holes: 18,

    walkable: false,

    tags: ["Southwest of Boston", "Championship", "Hilly"],

    description: "Challenging hilly layout southwest of Boston. Well-maintained greens and a demanding test that rewards accurate iron play.",

    website: "https://www.wentworthhills.com",

    phone: "(508) 695-9731",

    address: "196 South St, Plainville, MA 02762",

    photo: "https://images.unsplash.com/photo-1598502759786-a43fd0e7e932?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/wentworth-hills",

    teeTimes: [

      { id: "wh-1", time: "07:00", price: 45, spots: 4, day: "today" },

      { id: "wh-2", time: "09:00", price: 58, spots: 2, day: "today" },

      { id: "wh-3", time: "12:00", price: 68, spots: 4, day: "today" },

      { id: "wh-4", time: "08:00", price: 52, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 44,

    name: "Swansea Country Club",

    lat: 41.7523, lng: -71.1987,

    city: "Swansea", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 58 },

    slope: 118, courseRating: 68.2, par: 71, holes: 18,

    walkable: true,

    tags: ["Southeastern MA", "Walkable", "Affordable"],

    description: "Well-priced public course in southeastern Massachusetts near the Rhode Island border. Consistent conditions and a friendly atmosphere.",

    website: "https://www.swanseascc.com",

    phone: "(508) 379-9886",

    address: "299 Market St, Swansea, MA 02777",

    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/swansea-cc",

    teeTimes: [

      { id: "sw-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "sw-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "sw-3", time: "12:00", price: 58, spots: 4, day: "today" },

      { id: "sw-4", time: "08:00", price: 44, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 45,

    name: "Acushnet River Valley Golf Course",

    lat: 41.7012, lng: -70.9234,

    city: "Acushnet", state: "MA",

    type: "municipal",

    greenFee: { min: 22, max: 42 },

    slope: 114, courseRating: 67.3, par: 70, holes: 18,

    walkable: true,

    tags: ["Best value SouthCoast", "Municipal", "Walkable"],

    description: "Outstanding value near New Bedford  one of the best municipal courses on the SouthCoast. Mark Mungeam design with interesting routing.",

    website: "https://www.acushnetrivergolf.com",

    phone: "(508) 998-7777",

    address: "685 Main St, Acushnet, MA 02743",

    photo: "https://images.unsplash.com/photo-1576496638645-b4e8a4571e40?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/acushnet-river-valley",

    teeTimes: [

      { id: "arv-1", time: "06:30", price: 22, spots: 4, day: "today" },

      { id: "arv-2", time: "08:30", price: 32, spots: 2, day: "today" },

      { id: "arv-3", time: "11:00", price: 42, spots: 4, day: "today" },

      { id: "arv-4", time: "07:00", price: 28, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 46,

    name: "Segregansett Country Club",

    lat: 41.8234, lng: -71.0123,

    city: "Taunton", state: "MA",

    type: "public",

    greenFee: { min: 35, max: 60 },

    slope: 120, courseRating: 68.9, par: 71, holes: 18,

    walkable: true,

    tags: ["SouthCoast", "Walkable", "Historic"],

    description: "Classic public course in Taunton with a long history and loyal local following. Excellent value for the SouthCoast area.",

    website: "https://www.segregansett.com",

    phone: "(508) 822-9772",

    address: "132 Country Club Dr, Taunton, MA 02780",

    photo: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/segregansett",

    teeTimes: [

      { id: "seg-1", time: "07:00", price: 38, spots: 4, day: "today" },

      { id: "seg-2", time: "09:00", price: 50, spots: 2, day: "today" },

      { id: "seg-3", time: "12:00", price: 60, spots: 4, day: "today" },

      { id: "seg-4", time: "08:00", price: 44, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 47,

    name: "Maynard Golf Course",

    lat: 42.4312, lng: -71.4523,

    city: "Maynard", state: "MA",

    type: "municipal",

    greenFee: { min: 22, max: 38 },

    slope: 106, courseRating: 63.8, par: 68, holes: 18,

    walkable: true,

    tags: ["Budget", "Short course", "Walkable", "MetroWest"],

    description: "Compact, walkable municipal course in MetroWest. Perfect for a quick round or beginners. Extremely affordable.",

    website: "https://www.maynardgolf.com",

    phone: "(978) 897-6266",

    address: "50 Brown St, Maynard, MA 01754",

    photo: "https://images.unsplash.com/photo-1543227010-4e5c8376d5c0?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/maynard",

    teeTimes: [

      { id: "may-1", time: "07:00", price: 22, spots: 4, day: "today" },

      { id: "may-2", time: "09:00", price: 30, spots: 2, day: "today" },

      { id: "may-3", time: "12:00", price: 38, spots: 4, day: "today" },

      { id: "may-4", time: "08:00", price: 26, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 48,

    name: "Rehoboth Country Club",

    lat: 41.8512, lng: -71.2345,

    city: "Rehoboth", state: "MA",

    type: "public",

    greenFee: { min: 32, max: 55 },

    slope: 117, courseRating: 68.1, par: 71, holes: 18,

    walkable: true,

    tags: ["Southeastern MA", "Budget friendly", "Walkable"],

    description: "Affordable public course near the Rhode Island border. Friendly atmosphere and well-kept greens make this a great local option.",

    website: "https://www.rehobothcc.com",

    phone: "(508) 252-6259",

    address: "95 Perryville Rd, Rehoboth, MA 02769",

    photo: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/rehoboth-cc",

    teeTimes: [

      { id: "reh-1", time: "07:00", price: 35, spots: 4, day: "today" },

      { id: "reh-2", time: "09:00", price: 46, spots: 2, day: "today" },

      { id: "reh-3", time: "12:00", price: 55, spots: 4, day: "today" },

      { id: "reh-4", time: "08:00", price: 40, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 49,

    name: "Unicorn Golf Course",

    lat: 42.4782, lng: -71.0934,

    city: "Stoneham", state: "MA",

    type: "public",

    greenFee: { min: 25, max: 40 },

    slope: 110, courseRating: 64.2, par: 68, holes: 18,

    walkable: true,

    tags: ["Budget", "North of Boston", "Walkable", "Short"],

    description: "Affordable 18-hole executive course north of Boston. Great for a quick round, practice, or beginners. Under the same management as Gannon.",

    website: "https://www.unicorngolfcourse.com",

    phone: "(781) 438-7665",

    address: "147 N Border Rd, Stoneham, MA 02180",

    photo: "https://images.unsplash.com/photo-1600101169408-b271d7d9f1c2?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/unicorn",

    teeTimes: [

      { id: "uni-1", time: "06:30", price: 25, spots: 4, day: "today" },

      { id: "uni-2", time: "08:30", price: 33, spots: 2, day: "today" },

      { id: "uni-3", time: "11:00", price: 40, spots: 4, day: "today" },

      { id: "uni-4", time: "07:00", price: 28, spots: 4, day: "tomorrow" },

    ],

  },

  {

    id: 50,

    name: "Amesbury Golf & Country Club",

    lat: 42.8512, lng: -70.9234,

    city: "Amesbury", state: "MA",

    type: "public",

    greenFee: { min: 30, max: 52 },

    slope: 115, courseRating: 67.5, par: 70, holes: 18,

    walkable: true,

    tags: ["North Shore", "NH border", "Walkable", "Affordable"],

    description: "Northernmost major public course in Massachusetts, just minutes from the NH border. Good conditions and very affordable prices.",

    website: "https://www.amesburygolf.com",

    phone: "(978) 388-5153",

    address: "12 Haverhill Rd, Amesbury, MA 01913",

    photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",

    teeTimesUrl: "https://www.golfnow.com/courses/amesbury",

    teeTimes: [

      { id: "am-1", time: "07:00", price: 32, spots: 4, day: "today" },

      { id: "am-2", time: "09:00", price: 44, spots: 2, day: "today" },

      { id: "am-3", time: "12:00", price: 52, spots: 4, day: "today" },

      { id: "am-4", time: "08:00", price: 38, spots: 4, day: "tomorrow" },

    ],

  },

];

export const getFilteredTeeTimes = (teeTimes) => {

  const now = new Date();

  const currentHour = now.getHours();

  const currentMinute = now.getMinutes();

  return teeTimes.filter((t) => {

    if (t.day !== "today") return true;

    const [h, m] = t.time.split(":").map(Number);

    if (h > currentHour) return true;

    if (h === currentHour && m > currentMinute) return true;

    return false;

  });

};

export const getDistanceMiles = (lat1, lng1, lat2, lng2) => {

  const R = 3958.8;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;

  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  const a =

    Math.sin(dLat / 2) ** 2 +

    Math.cos((lat1 * Math.PI) / 180) *

      Math.cos((lat2 * Math.PI) / 180) *

      Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

};
 export const BOSTON_CENTER = { lat: 42.3601, lng: -71.0589 };