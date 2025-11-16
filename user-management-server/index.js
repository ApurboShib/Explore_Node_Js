const express = require('express')
const app = express()
var cors = require('cors')
const { use } = require('react')
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is created here !')
})

const user = [
  {
    "id": 1,
    "name": "Arif Hasan",
    "age": 28,
    "city": "Dhaka",
    "occupation": "Software Engineer",
    "email": "arif.hasan@example.com",
    "phone": "+8801710000001",
    "registered_at": "2024-01-12"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "age": 24,
    "city": "Chattogram",
    "occupation": "Graphic Designer",
    "email": "nusrat.j@example.com",
    "phone": "+8801710000002",
    "registered_at": "2024-02-05"
  },
  {
    "id": 3,
    "name": "Sabbir Ahmed",
    "age": 32,
    "city": "Rajshahi",
    "occupation": "Bank Officer",
    "email": "sabbir.a@example.com",
    "phone": "+8801710000003",
    "registered_at": "2024-03-21"
  },
  {
    "id": 4,
    "name": "Mitu Akter",
    "age": 27,
    "city": "Khulna",
    "occupation": "Teacher",
    "email": "mitu.akter@example.com",
    "phone": "+8801710000004",
    "registered_at": "2024-01-19"
  },
  {
    "id": 5,
    "name": "Tanvir Alam",
    "age": 30,
    "city": "Sylhet",
    "occupation": "Digital Marketer",
    "email": "tanvir.alam@example.com",
    "phone": "+8801710000005",
    "registered_at": "2024-02-11"
  },
  {
    "id": 6,
    "name": "Rafia Islam",
    "age": 23,
    "city": "Barishal",
    "occupation": "Content Writer",
    "email": "rafia.islam@example.com",
    "phone": "+8801710000006",
    "registered_at": "2024-03-02"
  },
  {
    "id": 7,
    "name": "Hasib Mahmud",
    "age": 35,
    "city": "Rangpur",
    "occupation": "Civil Engineer",
    "email": "hasib.m@example.com",
    "phone": "+8801710000007",
    "registered_at": "2024-02-28"
  },
  {
    "id": 8,
    "name": "Sumaiya Rahman",
    "age": 26,
    "city": "Dhaka",
    "occupation": "Nurse",
    "email": "sumaiya.r@example.com",
    "phone": "+8801710000008",
    "registered_at": "2024-01-17"
  },
  {
    "id": 9,
    "name": "Imran Hossain",
    "age": 29,
    "city": "Chattogram",
    "occupation": "Business Analyst",
    "email": "imran.h@example.com",
    "phone": "+8801710000009",
    "registered_at": "2024-03-07"
  },
  {
    "id": 10,
    "name": "Fatema Begum",
    "age": 31,
    "city": "Comilla",
    "occupation": "HR Manager",
    "email": "fatema.b@example.com",
    "phone": "+8801710000010",
    "registered_at": "2024-02-15"
  },
  {
    "id": 11,
    "name": "Mamun Sorkar",
    "age": 34,
    "city": "Gazipur",
    "occupation": "Entrepreneur",
    "email": "mamun.s@example.com",
    "phone": "+8801710000011",
    "registered_at": "2024-01-25"
  },
  {
    "id": 12,
    "name": "Rupali Mondal",
    "age": 22,
    "city": "Jessore",
    "occupation": "Student",
    "email": "rupali.m@example.com",
    "phone": "+8801710000012",
    "registered_at": "2024-03-14"
  },
  {
    "id": 13,
    "name": "Abdullah Noman",
    "age": 28,
    "city": "Bogura",
    "occupation": "Photographer",
    "email": "abdullah.n@example.com",
    "phone": "+8801710000013",
    "registered_at": "2024-01-10"
  },
  {
    "id": 14,
    "name": "Shila Khatun",
    "age": 29,
    "city": "Mymensingh",
    "occupation": "Fashion Designer",
    "email": "shila.k@example.com",
    "phone": "+8801710000014",
    "registered_at": "2024-02-20"
  },
  {
    "id": 15,
    "name": "Jahidul Islam",
    "age": 33,
    "city": "Noakhali",
    "occupation": "Chef",
    "email": "jahidul.i@example.com",
    "phone": "+8801710000015",
    "registered_at": "2024-03-26"
  },
  {
    "id": 16,
    "name": "Saima Chowdhury",
    "age": 25,
    "city": "Dhaka",
    "occupation": "UI/UX Designer",
    "email": "saima.c@example.com",
    "phone": "+8801710000016",
    "registered_at": "2024-01-14"
  },
  {
    "id": 17,
    "name": "Rakib Hasan",
    "age": 27,
    "city": "Sylhet",
    "occupation": "Data Analyst",
    "email": "rakib.h@example.com",
    "phone": "+8801710000017",
    "registered_at": "2024-02-09"
  },
  {
    "id": 18,
    "name": "Lamia Tahsin",
    "age": 24,
    "city": "Khulna",
    "occupation": "Nurse",
    "email": "lamia.t@example.com",
    "phone": "+8801710000018",
    "registered_at": "2024-03-12"
  },
  {
    "id": 19,
    "name": "Sajid Mahir",
    "age": 36,
    "city": "Cox’s Bazar",
    "occupation": "Tour Guide",
    "email": "sajid.m@example.com",
    "phone": "+8801710000019",
    "registered_at": "2024-01-30"
  },
  {
    "id": 20,
    "name": "Mariya Akter",
    "age": 21,
    "city": "Feni",
    "occupation": "Student",
    "email": "mariya.a@example.com",
    "phone": "+8801710000020",
    "registered_at": "2024-03-01"
  }
]

app.get('/users', (req, res) => {
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log('user post is hited')
    console.log(req.body)
    const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser)
    res.send(newUser)

})

app.listen(port, () => {
    console.log(`server is running port : ${port} `)
})


