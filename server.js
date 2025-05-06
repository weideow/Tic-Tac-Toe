function Voter(props) {
    const age = props.age;
    return(
        <div>
            <h1>Hello!</h1>
            {age > 18 &&
            <h2>
                You are eligible.
                </h2>
                }
        </div>
    );
}

const age = 19

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Voter age={age}/>);

app.get("/", function(req,res){
    throw new Error("THISERROR"); });

    <tbody>
        for (let i =0; i< items.length; i++) {
            <TableComponent key={item[i].id} name={items[i].name} />
        }
    </tbody>

app.get('/', function(req, res) {
    res.send("hello");
})

