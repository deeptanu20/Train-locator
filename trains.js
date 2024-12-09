const trainList = [
  // Delhi
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.216721, 28.6448] // New Delhi Station
    },
    "properties": {
      "trainNo": "12002",
      "trainName": "New Delhi Shatabdi",
      "stationFrom": "New Delhi",
      "stationTo": "Bhopal",
      "arrivalTime": "06:00 AM",
      "departureTime": "06:15 AM"
    }
  },
  // Maharashtra
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.835163, 18.931314] // Mumbai CST Station
    },
    "properties": {
      "trainNo": "12952",
      "trainName": "Mumbai Rajdhani Express",
      "stationFrom": "Mumbai CST",
      "stationTo": "Delhi",
      "arrivalTime": "05:30 PM",
      "departureTime": "05:45 PM"
    }
  },
  // West Bengal
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [88.363895, 22.572646] // Howrah Station
    },
    "properties": {
      "trainNo": "12301",
      "trainName": "Howrah Rajdhani Express",
      "stationFrom": "Howrah",
      "stationTo": "Delhi",
      "arrivalTime": "08:00 AM",
      "departureTime": "08:15 AM"
    }
  },
  // Telangana
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.462692, 17.385044] // Secunderabad Station
    },
    "properties": {
      "trainNo": "12723",
      "trainName": "Telangana Express",
      "stationFrom": "Secunderabad",
      "stationTo": "Delhi",
      "arrivalTime": "06:30 AM",
      "departureTime": "06:45 AM"
    }
  },
  // Karnataka
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.602295, 12.979119] // Bengaluru City Station
    },
    "properties": {
      "trainNo": "12627",
      "trainName": "Karnataka Express",
      "stationFrom": "Bengaluru City",
      "stationTo": "Delhi",
      "arrivalTime": "07:00 AM",
      "departureTime": "07:15 AM"
    }
  },
  // Tamil Nadu
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [80.276725, 13.08268] // Chennai Central Station
    },
    "properties": {
      "trainNo": "12611",
      "trainName": "Chennai Mail",
      "stationFrom": "Chennai Central",
      "stationTo": "Bangalore",
      "arrivalTime": "08:00 PM",
      "departureTime": "08:15 PM"
    }
  },
  // Rajasthan
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [75.806901, 26.920731] // Jaipur Station
    },
    "properties": {
      "trainNo": "12987",
      "trainName": "Jaipur Superfast Express",
      "stationFrom": "Jaipur",
      "stationTo": "Delhi",
      "arrivalTime": "09:00 AM",
      "departureTime": "09:15 AM"
    }
  },
  // Gujarat
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.580687, 23.033863] // Ahmedabad Station
    },
    "properties": {
      "trainNo": "12934",
      "trainName": "Ahmedabad Express",
      "stationFrom": "Ahmedabad",
      "stationTo": "Mumbai",
      "arrivalTime": "07:00 PM",
      "departureTime": "07:15 PM"
    }
  },
  // Kerala
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.267303, 9.931233] // Ernakulam Junction
    },
    "properties": {
      "trainNo": "12223",
      "trainName": "Ernakulam Duronto Express",
      "stationFrom": "Ernakulam",
      "stationTo": "Delhi",
      "arrivalTime": "06:00 PM",
      "departureTime": "06:15 PM"
    }
  },
  // Uttar Pradesh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [82.973914, 25.317645] // Varanasi Junction
    },
    "properties": {
      "trainNo": "12317",
      "trainName": "Akaltakht Express",
      "stationFrom": "Varanasi",
      "stationTo": "Amritsar",
      "arrivalTime": "05:30 PM",
      "departureTime": "05:45 PM"
    }
  },
  // Bihar
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.137564, 25.594095] // Patna Junction
    },
    "properties": {
      "trainNo": "12367",
      "trainName": "Patna Rajdhani Express",
      "stationFrom": "Patna",
      "stationTo": "Delhi",
      "arrivalTime": "07:00 AM",
      "departureTime": "07:15 AM"
    }
  },
  // Punjab
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [74.875415, 31.633979] // Amritsar Junction
    },
    "properties": {
      "trainNo": "12031",
      "trainName": "Amritsar Shatabdi",
      "stationFrom": "Amritsar",
      "stationTo": "Delhi",
      "arrivalTime": "06:30 AM",
      "departureTime": "06:45 AM"
    }
  },
  // Madhya Pradesh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [77.40289, 23.259933] // Bhopal Junction
    },
    "properties": {
      "trainNo": "12156",
      "trainName": "Bhopal Shatabdi Express",
      "stationFrom": "Bhopal",
      "stationTo": "Delhi",
      "arrivalTime": "08:00 PM",
      "departureTime": "08:15 PM"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.981743, 28.447597] // Gurugram Station
    },
    "properties": {
      "trainNo": "12015",
      "trainName": "Ajmer Shatabdi",
      "stationFrom": "Gurugram",
      "stationTo": "Ajmer",
      "arrivalTime": "08:30 AM",
      "departureTime": "08:45 AM"
    }
  },
  // Odisha
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [85.831465, 20.296059] // Bhubaneswar Station
    },
    "properties": {
      "trainNo": "12801",
      "trainName": "Puri Express",
      "stationFrom": "Bhubaneswar",
      "stationTo": "Delhi",
      "arrivalTime": "04:00 PM",
      "departureTime": "04:15 PM"
    }
  },
  // Assam
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.736236, 26.185463] // Guwahati Station
    },
    "properties": {
      "trainNo": "12423",
      "trainName": "Rajdhani Express",
      "stationFrom": "Guwahati",
      "stationTo": "Delhi",
      "arrivalTime": "06:00 AM",
      "departureTime": "06:15 AM"
    }
  },
  // Jammu and Kashmir
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [74.873757, 32.726602] // Jammu Tawi Station
    },
    "properties": {
      "trainNo": "12425",
      "trainName": "Jammu Rajdhani",
      "stationFrom": "Jammu Tawi",
      "stationTo": "Delhi",
      "arrivalTime": "09:00 PM",
      "departureTime": "09:15 PM"
    }
  },
  // Uttarakhand
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [78.055, 30.3165] // Dehradun Station
    },
    "properties": {
      "trainNo": "12055",
      "trainName": "Dehradun Shatabdi",
      "stationFrom": "Dehradun",
      "stationTo": "Delhi",
      "arrivalTime": "07:00 AM",
      "departureTime": "07:15 AM"
    }
  },
  // Chhattisgarh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [81.633721, 21.249737] // Raipur Junction
    },
    "properties": {
      "trainNo": "12824",
      "trainName": "Chhattisgarh Express",
      "stationFrom": "Raipur",
      "stationTo": "Delhi",
      "arrivalTime": "06:30 AM",
      "departureTime": "06:45 AM"
    }
  },
  // Himachal Pradesh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.639381, 31.7052] // Kalka Station
    },
    "properties": {
      "trainNo": "12005",
      "trainName": "Kalka Shatabdi",
      "stationFrom": "Kalka",
      "stationTo": "Delhi",
      "arrivalTime": "05:30 PM",
      "departureTime": "05:45 PM"
    }
  },
  // Andhra Pradesh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [80.6271, 16.5062] // Vijayawada Station
    },
    "properties": {
      "trainNo": "12760",
      "trainName": "Charminar Express",
      "stationFrom": "Vijayawada",
      "stationTo": "Hyderabad",
      "arrivalTime": "10:00 AM",
      "departureTime": "10:15 AM"
    }
  },
  // Goa
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [73.827827, 15.502212] // Madgaon Station
    },
    "properties": {
      "trainNo": "12133",
      "trainName": "Goa Express",
      "stationFrom": "Madgaon",
      "stationTo": "Delhi",
      "arrivalTime": "08:00 PM",
      "departureTime": "08:15 PM"
    }
  },
  // Jharkhand
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [86.430385, 23.812555] // Dhanbad Junction
    },
    "properties": {
      "trainNo": "12313",
      "trainName": "Sealdah Rajdhani",
      "stationFrom": "Dhanbad",
      "stationTo": "Delhi",
      "arrivalTime": "05:00 AM",
      "departureTime": "05:15 AM"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [92.745919, 11.667025] // Port Blair (Placeholder for connectivity)
    },
    "properties": {
      "trainNo": "NA",
      "trainName": "Island Ferry Service",
      "stationFrom": "Port Blair",
      "stationTo": "Chennai (via ferry)",
      "arrivalTime": "NA",
      "departureTime": "NA"
    }
  },
  // Arunachal Pradesh
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [93.605316, 27.087935] // Naharlagun Station
    },
    "properties": {
      "trainNo": "22412",
      "trainName": "Arunachal Express",
      "stationFrom": "Naharlagun",
      "stationTo": "Delhi",
      "arrivalTime": "07:00 PM",
      "departureTime": "07:15 PM"
    }
  },
  // Sikkim
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [88.606503, 27.333035] // New Jalpaiguri (Closest major rail station)
    },
    "properties": {
      "trainNo": "15720",
      "trainName": "Sikkim Mahananda Express",
      "stationFrom": "New Jalpaiguri",
      "stationTo": "Delhi",
      "arrivalTime": "06:00 AM",
      "departureTime": "06:15 AM"
    }
  },
  // Meghalaya
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.893253, 25.578772] // Shillong (proposed rail connectivity placeholder)
    },
    "properties": {
      "trainNo": "15617",
      "trainName": "Shillong Express",
      "stationFrom": "Shillong",
      "stationTo": "Guwahati",
      "arrivalTime": "08:00 AM",
      "departureTime": "08:15 AM"
    }
  },
  // Mizoram
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [92.717638, 23.727107] // Bairabi (nearest railhead)
    },
    "properties": {
      "trainNo": "15910",
      "trainName": "Mizoram Express",
      "stationFrom": "Bairabi",
      "stationTo": "Silchar",
      "arrivalTime": "05:30 PM",
      "departureTime": "05:45 PM"
    }
  },
  // Nagaland
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [94.10532, 26.111839] // Dimapur Station
    },
    "properties": {
      "trainNo": "15666",
      "trainName": "Nagaland Express",
      "stationFrom": "Dimapur",
      "stationTo": "Guwahati",
      "arrivalTime": "06:00 PM",
      "departureTime": "06:15 PM"
    }
  },
  // Tripura
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [91.275845, 23.836049] // Agartala Station
    },
    "properties": {
      "trainNo": "15626",
      "trainName": "Tripura Sundari Express",
      "stationFrom": "Agartala",
      "stationTo": "Delhi",
      "arrivalTime": "07:00 PM",
      "departureTime": "07:15 PM"
    }
  },
  // Lakshadweep (No rail connectivity, can add ferry or placeholder entry)
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.631989, 10.566667] // Kavaratti (Placeholder for connectivity)
    },
    "properties": {
      "trainNo": "NA",
      "trainName": "Lakshadweep Ferry Service",
      "stationFrom": "Kavaratti",
      "stationTo": "Kochi (via ferry)",
      "arrivalTime": "NA",
      "departureTime": "NA"
    }
  },
  // Manipur
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [93.944203, 24.807412] // Jiribam Station
    },
    "properties": {
      "trainNo": "20501",
      "trainName": "Manipur Express",
      "stationFrom": "Jiribam",
      "stationTo": "Silchar",
      "arrivalTime": "04:00 PM",
      "departureTime": "04:15 PM"
    }
  },
  // Puducherry
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [79.830763, 11.934056] // Puducherry Station
    },
    "properties": {
      "trainNo": "12867",
      "trainName": "Puducherry Express",
      "stationFrom": "Puducherry",
      "stationTo": "Bangalore",
      "arrivalTime": "05:00 PM",
      "departureTime": "05:15 PM"
    }
  },
  // Chandigarh (Union Territory)
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [76.779419, 30.733315] // Chandigarh Station
    },
    "properties": {
      "trainNo": "12045",
      "trainName": "Chandigarh Shatabdi",
      "stationFrom": "Chandigarh",
      "stationTo": "Delhi",
      "arrivalTime": "06:00 AM",
      "departureTime": "06:15 AM"
    }
  },
  // Daman and Diu
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [72.857257, 20.417008] // Veraval Station (nearest railhead)
    },
    "properties": {
      "trainNo": "19262",
      "trainName": "Somnath Express",
      "stationFrom": "Veraval",
      "stationTo": "Ahmedabad",
      "arrivalTime": "07:00 PM",
      "departureTime": "07:15 PM"
    }
  },
  // Dadra and Nagar Haveli
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [73.0169, 20.2717] // Vapi Station (nearest railhead)
    },
    "properties": {
      "trainNo": "12935",
      "trainName": "Surat Express",
      "stationFrom": "Vapi",
      "stationTo": "Mumbai",
      "arrivalTime": "06:00 PM",
      "departureTime": "06:15 PM"
    }
  }
];