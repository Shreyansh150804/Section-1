const user={
    name:'shreyansh',
    email:'shryansh@gmail.com',
    password: 'hey@123'
    }
    console.log(user);
    console.log(user.name);
    console.log(user['email']);

    user.address='Lucknow';
    user.password='abc@123'
    console.log(user);

    console.log(Object.keys(user));
    console.log(Object.values(user));
    
    const smartphone ={
        brand:'Aapple',
        model:'Iphone 17',
        price:12000,
        colors:['cosmic orange','white','blue']
    };
    console.log(smartphone.model);
    console.log(smartphone.colors[0]);
    smartphone.colors.push('green');

    console.log(smartphone.colors);

    const phonelist=[
        {
        brand:'Aapple',
        model:'Iphone 17',
        price:12000,
        colors:['cosmic orange','white','blue']
    },
    {
        brand:'vivo',
        model:'t4 5g',
        price:20000,
        colors:['lightblue','white','blue']
    },
    {
        brand:'samsung',
        model:'S 24 ultra',
        price:120000,
        colors:['grey','white','blue']
    },
    {
        brand:'Google',
        model:'pixel 7',
        price:70000,
        colors:['white','blue']
    },
    {
        brand:'Nothing',
        model:'2A',
        price:25000,
        colors:['grey','white','blue']
    }

    ]
    console.log(phonelist.length);
    console.log(phonelist[1].price);
    console.log(phonelist.at(-1).colors.at(-1));

    

    