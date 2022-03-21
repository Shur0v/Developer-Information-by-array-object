const devs_info = [
    // ID - name - skill - salary - Address
    {
        ID       : 0,
        Name     : 'Sajib',
        Skill    : 'Wordpres',
        Salary   : 800,
        Addesss  : 'Comilla'
    },
    { ID       : 01,
      Name     : 'Sheyam', 
      Skill    : 'Wordpres', 
      Salary   : 600, 
      Addesss  : 'Comilla' 
    },
    { ID       : 02,
      Name     : 'Sajjad', 
      Skill    : 'MERN', 
      Salary   : 500, 
      Addesss  : 'Dhaka' 
    },
    { ID       : 03,
      Name     : 'Rashfiq', 
      Skill    : 'GoLang', 
      Salary   : 900, 
      Addesss  : 'Shylet' 
    },
    { ID       : 04,
      Name     : 'Towhid', 
      Skill    : 'Laravel', 
      Salary   : 1200, 
      Addesss  : 'Comilla' 
    },
    { ID       : 05,
      Name     : 'Kabir', 
      Skill    : 'Django', 
      Salary   : 524, 
      Addesss  : 'Comilla' 
    },
    { ID       : 06,
      Name     : 'Bayzid', 
      Skill    : 'MERN', 
      Salary   : 335, 
      Addesss  : 'Dhaka' 
    },
    { ID       : 07,
      Name     : 'Shihab', 
      Skill    : 'Laravel', 
      Salary   : 800, 
      Addesss  : 'Comilla' 
    },
    { ID       : 08,
      Name     : 'Rohan', 
      Skill    : 'Wordpres', 
      Salary   : 521, 
      Addesss  : 'Comilla' 
    },
    { ID       : 09,
      Name     : 'Prabon', 
      Skill    : 'GoLang', 
      Salary   : 665, 
      Addesss  : 'Comilla' 
    },
    { ID       : 10,
      Name     : 'Kasem', 
      Skill    : 'Laravel', 
      Salary   : 1600, 
      Addesss  : 'Comilla' 
    },
    { ID       : 11,
      Name     : 'Sattar', 
      Skill    : 'Django', 
      Salary   : 1123, 
      Addesss  : 'Shylet' 
    },
    { ID       : 12,
      Name     : 'Yasin', 
      Skill    : 'MERN', 
      Salary   : 115, 
      Addesss  : 'Comilla' 
    },
    { ID       : 13,
      Name     : 'Kibria', 
      Skill    : 'GoLang', 
      Salary   : 633, 
      Addesss  : 'Comilla' 
    },
    { ID       : 14,
      Name     : 'Sohel', 
      Skill    : 'Laravel', 
      Salary   : 662, 
      Addesss  : 'Comilla' 
    },
    { ID       : 15,
      Name     : 'Naim', 
      Skill    : 'Django', 
      Salary   : 955, 
      Addesss  : 'Comilla' 
    },
    { ID       : 16,
      Name     : 'Ismail', 
      Skill    : 'MERN', 
      Salary   : 1214, 
      Addesss  : 'Dhaka' 
    },
    { ID       : 17,
      Name     : 'Iqbal', 
      Skill    : 'GoLang', 
      Salary   : 2355, 
      Addesss  : 'Comilla' 
    },
    { ID       : 18,
      Name     : 'Tanim', 
      Skill    : 'Django', 
      Salary   : 598, 
      Addesss  : 'Comilla' 
    },
    { ID       : 19,
      Name     : 'Sahriya', 
      Skill    : 'Wordpres', 
      Salary   : 875, 
      Addesss  : 'Comilla' 
    },
];




/**
 * Array
 * object
 * successful 
 * output 
 * 03
 */
let total = 0;
devs_info.map( data => {
  console.log(`
     Name   : ${data.Name}
     Salary : ${data.Salary}
     `);
     total = total + data.Salary;
})
console.log(`     total sallary:${total}`);


















/**
 * Array
 * object
 * successful 
 * output 
 * 02
 */
// let total = 0;
// devs_info.forEach( data => {
//   if (data.ID < 5 ) {
//     console.log(`
//     Name   : ${data.Name}
//     ID     : ${data.ID}
//     Skill  : ${data.Skill}
//     Salary : ${data.Salary}
//     `);
//     total = total + data.Salary;
//     };
//   }
//  );
// console.log(`total sallary:${total}`);











/**
 * Array
 * object
 * successful 
 * output 
 * 01
 */
// let totals = 0;
// for (let i = 0; i < devs_info.length; i++) {

//     if ( devs_info[i].ID > 0 && devs_info[i].Skill == 'MERN' ) {
//         console.log(`
//         Name   : ${devs_info[i].Name}
//         ID     : ${devs_info[i].ID}
//         Skill  : ${devs_info[i].Skill}
//         Salary : ${devs_info[i].Salary}
//         `);
//         totals = totals + devs_info[i].Salary;
//     }
    
// }
// console.log(`total : ${totals}`);








/**
 * Successful
 * System
 * One
 */


// let total_salary = 0;

// for ( let i = 0; i < devs_info.length; i++ ) {

//     // console.log(devs_info[i]);

//     if ( devs_info[i].ID > 0 && devs_info[i].Skill == 'MERN') {
//         console.log(`
//         ---------------
//         ID       ${devs_info[i].ID}
//         Name     ${devs_info[i].Name}
//         Skill    ${devs_info[i].Skill}
//         Earning  ${devs_info[i].Salary}$/month
//         Address  ${devs_info[i].Addesss}
//         ---------------`);
//         total_salary = total_salary + devs_info[i].Salary;
//     }

// }

// console.log(`        Total salary is ${total_salary}$`);