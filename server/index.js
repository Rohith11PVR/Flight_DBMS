const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const shortid = require('shortid')
const Razorpay = require('razorpay')


const bcrypt = require('bcrypt');
const saltRound = 10;
const razorpay = new Razorpay({
	key_id: 'rzp_test_A6dwLEiag09Y7E',
	key_secret: 'CBdyhlqrjYO6oKQt4EX6viQ6'
})
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST","DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use (
    session ({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "loginsystem", 
});

app.post('/register', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password; 

    bcrypt.hash(password,saltRound, (err, hash) => {

        if (err) {
            console.log(err)
        }
        db.execute( 
            "INSERT INTO users (username, password) VALUES (?,?)",
            [username, hash], 
            (err, result)=> {
                console.log(err);
            }
        );
    })
});
app.post('/booking', (req, res) => {
    const from = req.body.fromloc;
    const to = req.body.toloc;
    const date = req.body.date;
    db.execute("SELECT * FROM new_table WHERE fromlocation = ? AND tolocation = ? AND idflight IN ( select fid from flight_dates WHERE date = ?  ) ",[from , to , date],
    
        (err ,result) =>{
            res.send(result);
        }
    );

});
app.post('/showseats', (req, res) => {
    const fid = req.body.flightid;
    const date = req.body.date;
    console.log("request recieved")
    console.log(fid)
    console.log(date)
    db.execute("SELECT * FROM flight_seats WHERE (date, flightid, seatno) NOT IN (SELECT jdate,fid,seatno FROM books WHERE date = ? AND flightid= ?) AND flightid = ? AND date = ?",[date,fid,fid,date],
    
        (err ,result) =>{
            res.send(result);
            
        }
    );

});

app.post('/showseatsrohith', (req, res) => {
    const fid = req.body.username;
    console.log("request recieved")
    console.log(fid)
    db.execute("SELECT bid,seatno,fid,name,jdate,fromlocation,tolocation FROM books,new_table where fid=idflight and username = ?",[fid],
    
        (err ,result) =>{
            res.send(result);
            console.log(result);
            
        }
    );
});



app.post('/addf', (req, res)=> {
    const ai = req.body.app;
    const bi = req.body.bpp;
    const ci = req.body.cpp;
    const di = req.body.dpp;
    const ei = req.body.epp;
    const fi = req.body.fpp;
    const gi = req.body.gpp;
    
    db.execute( 
        "INSERT INTO new_table (name,fromlocation,tolocation,duration,time,numberofseats,cost) VALUES (?,?,?,?,?,?,?)",
        [ai,bi,ci,di,ei,fi,gi], 
        // "INSERT INTO flight_date (flight_date_fk,date) VALUES (?,?)",
        // [ai,di],
    );
    
});

app.post('/addfk', (req, res)=> {
    const id = req.body.id;
    const date = req.body.date;
    console.log(id,date);
    db.execute( 
        "INSERT INTO flight_dates (fid,date) VALUES (?,?)",
        [id,date],
    );
    
},[]);

app.get("/admin/showflights",(req,res)=>{
    const sqlGet = "SELECT * FROM new_table";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

app.post("/admin/showflightsdate",(req,res)=>{
    const id = req.body.id;
    // console.log("Show flight date");
    console.log(id);
    const sqlGet = "SELECT * FROM flight_dates where fid=?";
    db.query(sqlGet,[id],(error,result)=>{
        res.send(result);
        // console.log(result)
    })
})

app.post("/admin/showuserdetailsf",(req,res)=>{
    const name = req.body.username;
    console.log(name);
    const sqlGet = "SELECT * FROM user_table where name=?";
    db.query(sqlGet,[name],(error,result)=>{
        res.send(result);
    })
})


app.get("/admin/info",(req,res)=>{
    const sqlGet = "SELECT iduser_table,name,age,gender,mobile_number,email,address FROM user_table";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})
app.delete("/admin/delete/:idflight", (req, res) => {
    console.log(idflight);
    const idflight = req.params.idflight;
    const sqlDelete = "DELETE FROM new_table WHERE idflight  = ?";
    
    db.query(sqlDelete, idflight, (err, result) => {
    if (err) console.log(err);
    });
});



app.post('/admin/updatebus', (req, res) => {
    const name = req.body.name
    const fstation = req.body.from
    const tstation = req.body.to
    const cap = req.body.cap
    const id = req.body.id
    const date = req.body.date
    const starttime=req.body.arrivaltime
    const cost = req.body.cost
    db.query("UPDATE new_table SET name=?,fromlocation=?,tolocation=?,duration=?,time=?,numberofseats=?,cost=? where idflight=?", [name, fstation, tstation,date,starttime,cap,cost,id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({ ff: 's' })
        }
    })
})

// app.post('/addfdt', (req, res) => {
//     const id = req.body.id;
//     const date = req.body.dpp;
//     console.log(date);
//     db.execute( 
//         "INSERT INTO flight_dates (fid,date) VALUES (?,?)",
//         [id,date], 
//     );
    
// })




const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate"});
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.get('/isUserAuth', verifyJWT , (req, res) => {
    res.send("You are authenticated Congrats:")
})

app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});

app.get("/loginu", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
});


//login of admin
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 

    db.execute(
        "SELECT * FROM users WHERE username = ?;",
        [username], 
        (err, result)=> {
            if (err) {
                res.send({err: err});
            } 

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;

                        console.log(req.session.user);
                        res.json({auth: true, token: token, result: result});
                    } else{
                        res.json({auth: false, message: "Wrong username password"}); 
                    }
                })
            } else {
                res.json({auth: false, message: "no user exists"});
            }
        }
    );
});


//login of user
app.post('/loginu', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 

    db.execute(
        "SELECT * FROM user_table WHERE name = ?;",
        [username], 
        (err, result)=> {
            if (err) {
                res.send({err: err});
            } 

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;

                        console.log(req.session.user);
                        res.json({auth: true, token: token, result: result});
                    } else{
                        res.json({auth: false, message: "Wrong username password"}); 
                    }
                })
            } else {
                res.json({auth: false, message: "no user exists"});
            }
        }
    );
});

//register of user
app.post('/registeru', (req, res)=> {
    const name = req.body.name;
    const age = req.body.age; 
    const gender = req.body.gender; 
    const email = req.body.email; 
    const address = req.body.address; 
    const phone = req.body.phone; 
    const password = req.body.password; 

    bcrypt.hash(password,saltRound, (err, hash) => {

        if (err) {
            console.log(err)
        }
        db.execute( 
            "INSERT INTO user_table (name,age,gender,email,address,mobile_number,password) VALUES (?,?,?,?,?,?,?)",
            [name,age,gender,email,address,phone, hash], 
            (err, result)=> {
                console.log(err);
            }
        );
    })
});
app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 300
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
app.post('/updateseat', (req, res) => {
    const fid = req.body.flightid;
    const date = req.body.date;
    const username = req.body.username;
    const seatno = req.body.number;

    console.log("request recieved")
    console.log(fid)
    console.log(date)
    console.log(username)
    console.log(seatno)

    db.execute("INSERT INTO books (username, seatno, fid, jdate) VALUES (?,?,?,?)",[username,seatno,fid,date],
    
        (err ,result) =>{
            
           
        }
    );

});



app.listen(3001, () => {
    console.log("running server");
});