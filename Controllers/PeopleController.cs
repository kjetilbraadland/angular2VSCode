using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace demo
{
    [Route("api/[controller]/[action]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class PersonsController : Controller
    {
        
        private List<Person> _persons;
        Random r = new Random(); 
        public PersonsController()
        {
            _persons = new List<Person>
            {
                new Person{Name = "Max Musterman", City="Naustadt", Dob=new DateTime(1978, 07, 29)},
                new Person{Name = "Maria Musterfrau", City="London", Dob=new DateTime(1979, 08, 30)},
                new Person{Name = "John Doe", City="Los Angeles", Dob=new DateTime(1980, 09, 01)},
                new Person{Name = "djengis khan", City="ulan bator", Dob=new DateTime(1080, 09, 01)},
                new Person{Name = "Batman", City="Gotham city", Dob=new DateTime(1920, 09, 01)}
            };
        }

        [HttpGet( Name = "GetPersons")]        
        public IEnumerable<Person> GetPersons()
        {
            return _persons;            
        }

        [HttpGet( Name = "GetRandomPerson")] 
        public IEnumerable<Person> GetRandomPerson()
        {            
            var rand = r.Next(0, _persons.Count - 1 );
            return new List<Person> {_persons[rand]};
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public string City { get; set; }
        public DateTime Dob { get; set; }
    }

}