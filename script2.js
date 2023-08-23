

let homepage = ["Account Services Management","Customer Management System","Financial Authorisation System","Interchange Tracking System","International Processing Platform","Key Management System","Letter System","Loyalty Management System","Merchant Bankcard System","Offer Management System","Remote Interface System","Security System","Transaction Management System"]
let links = ['account()','','','','','','','','','','','','']

class Box{
    constructor(title){
        this.title = title
    }
}


class Input extends Box{
    constructor(title){
        super(title)
        this.type = 'input'
        this.create()
    } 
    create(){
        const boxd = document.createElement('div')
        boxd.setAttribute('id',this.title)
        boxd.setAttribute('class','boxd')
        document.getElementById("box1").appendChild(boxd);

        const inpboxl = document.createElement('label')
        inpboxl.innerHTML = (this.title)
        inpboxl.setAttribute('for',this.title)
        inpboxl.setAttribute('class','inplab')
        document.getElementById(this.title).appendChild(inpboxl);
        
        const inpbox = document.createElement('input')
        inpbox.setAttribute('type',this.type)
        inpbox.setAttribute('name',this.title)
        inpbox.setAttribute('class','inpbox')
        document.getElementById(this.title).appendChild(inpbox);

    }
}

class Dropdown extends Box{
    constructor(title,option){
        super(title)
        this.option = option
        this.create()
    } 
    create(){
        const boxd = document.createElement('div')
        boxd.setAttribute('id',this.title)
        boxd.setAttribute('class','boxd')
        document.getElementById("box1").appendChild(boxd);

        const inpboxl = document.createElement('label')
        inpboxl.innerHTML = (this.title)
        inpboxl.setAttribute('for',this.title)
        inpboxl.setAttribute('class','inplab')
        document.getElementById(this.title).appendChild(inpboxl);

        const inpbox = document.createElement('select')
        inpbox.setAttribute('name',this.title)
        inpbox.setAttribute('class','inpbox2')
        inpbox.setAttribute('id',this.title + 'b')
        document.getElementById(this.title).appendChild(inpbox);

        for(let i = 0;i<this.option.length;i++){
            const op1 = document.createElement('option')
            op1.innerHTML = this.option[i]
            document.getElementById(this.title + 'b').appendChild(op1);
        }
        


    }
}





function login(){
    const myNode = document.getElementById("body");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    const body = document.getElementById("body");
    body.style.display = 'flex';
    body.style.alignItems = 'center';
    body.style.justifyContent = 'center';
    body.style.backgroundColor = 'var(--grey)'

    const div1 = document.createElement("div");
    div1.setAttribute("id","login");
    document.body.appendChild(div1);
    
    const h31 = document.createElement("h3");
    h31.setAttribute("id","lgh3");
    h31.innerHTML = ("Welcome to FirstVision <br>LiteUI")
    document.getElementById("login").appendChild(h31);

    const p = document.createElement("p");
    p.setAttribute("id","p1");
    p.innerHTML = ("Please login with your FirstVision credentials.")
    document.getElementById("login").appendChild(p);

    const form  = document.createElement("form");
    form.setAttribute("id","lgform");
    document.getElementById("login").appendChild(form);

    const input1 = document.createElement("input");
    input1.setAttribute("id","cid");
    input1.setAttribute("class","linp");
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","Client-Id");
    input1.setAttribute("size","8");
    document.getElementById("lgform").appendChild(input1);

    const input2 = document.createElement("input");
    input2.setAttribute("id","uname");
    input2.setAttribute("class","linp");
    input2.setAttribute("type","text");
    input2.setAttribute("placeholder","Username");
    document.getElementById("lgform").appendChild(input2);

    document.getElementById("lgform").appendChild(document.createElement("br"));

    const input3 = document.createElement("input");
    input3.setAttribute("id","pass");
    input3.setAttribute("class","linp");
    input3.setAttribute("type","text");
    input3.setAttribute("placeholder","Password");
    input3.setAttribute("size","34");
    document.getElementById("lgform").appendChild(input3);

    document.getElementById("lgform").appendChild(document.createElement("br"));

    const but1 = document.createElement("button");
    but1.setAttribute("class","but");
    but1.setAttribute("id","but1");
    but1.innerHTML = "Submit";
    document.getElementById("lgform").appendChild(but1);

    document.getElementById("lgform").appendChild(document.createElement("br"));


    const but2 = document.createElement("button");
    but2.setAttribute("class","but");
    but2.setAttribute("id","but2");
    but2.setAttribute("onclick","close()")
    but2.innerHTML = "Cancel";
    document.getElementById("lgform").appendChild(but2);

    const p2 = document.createElement("p");
    p2.innerHTML = ("Powered by FirstVision")
    document.getElementById("login").appendChild(p2);

    const foot = document.createElement("footer");
    foot.setAttribute("id","footer1");
    document.body.appendChild(foot);

    document.getElementById("footer1").appendChild(document.createElement("hr"));

    const p3 = document.createElement("p");
    p3.innerHTML = ("© 2022 Fiserv, Inc All Rights Reserved. |<a href='#'>Privacy Notice</a><br>Build version: 1.0")
    document.getElementById("footer1").appendChild(p3);
}




function home() {
    refresh()

    const div2 = document.createElement("div");
    div2.setAttribute("id","list");
    div2.setAttribute("class","list");
    document.body.appendChild(div2);

    const title = document.createElement("h2");
    title.innerHTML= "Applications";
    document.getElementById("list").appendChild(title);

    let last_letter = "z"

    for(let i = 0; i<homepage.length;i++){
        if (homepage[i][0] == last_letter){
            const a = document.createElement("a");
            a.innerHTML= homepage[i];
            a.setAttribute('href','#')
            a.setAttribute('class','linksp')
            a.setAttribute('onclick',links[i])
            document.getElementById("list").appendChild(a);

        }else{
            last_letter = homepage[i][0]
            const title = document.createElement("h2");
            title.innerHTML= homepage[i][0];
            document.getElementById("list").appendChild(title);

            document.getElementById("list").appendChild(document.createElement("hr"));

            const a = document.createElement("a");
            a.innerHTML= homepage[i];
            a.setAttribute('href','#')
            a.setAttribute('onclick',links[i])

            document.getElementById("list").appendChild(a);

        }
        
    }
    const foot = document.createElement("footer");
    foot.setAttribute("id","footer");
    document.body.appendChild(foot);

    document.getElementById("footer").appendChild(document.createElement("hr"));

    const p3 = document.createElement("p");
    p3.innerHTML = ("© 2022 Fiserv, Inc All Rights Reserved. |<a href='#'>Privacy Notice</a><br>Build version: 1.0")
    document.getElementById("footer").appendChild(p3);
}

function refresh(){
    const myNode = document.getElementById("body");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    const body = document.getElementById("body");
    body.style.display = 'block';
    body.style.alignItems = 'none';
    body.style.justifyContent = 'none';
    body.style.backgroundColor = 'var(--white)'
    const div1 = document.createElement("div");
    div1.setAttribute("id","topnav");
    div1.setAttribute("class","topnav");
    document.body.appendChild(div1);

    const a1 = document.createElement("a");
    a1.setAttribute("id","logo");
    document.getElementById("topnav").appendChild(a1);
    const img1 = document.createElement("img");
    img1.setAttribute("src","fiserv.png");
    img1.setAttribute("height","20");
    img1.setAttribute("width","40");
    document.getElementById("logo").appendChild(img1);

    const form = document.createElement("form");
    form.setAttribute('id','form');
    document.getElementById("topnav").appendChild(form);
    const input1 = document.createElement("input");
    input1.setAttribute("id","search");
    input1.setAttribute("class","linp");
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","Search");
    input1.setAttribute("size","8");
    document.getElementById("form").appendChild(input1);

    const a2 = document.createElement("a");
    a2.innerHTML = 'Applications'
    document.getElementById("topnav").appendChild(a2);

    const a3 = document.createElement("a");
    a3.innerHTML = 'Favorites'
    document.getElementById("topnav").appendChild(a3);

    const drop = document.createElement('div');
    drop.setAttribute('id','dropdown');
    drop.setAttribute('class','dropdown');
    document.getElementById("topnav").appendChild(drop);

    const dbut = document.createElement('button');
    dbut.setAttribute('class','dropbtn');
    dbut.innerHTML = '42069DANIEL',
    document.getElementById("dropdown").appendChild(dbut);

    const cont = document.createElement('div');
    cont.setAttribute('id','dropdown-c');
    cont.setAttribute('class','dropdown-content');
    document.getElementById("dropdown").appendChild(cont);

    const d1 = document.createElement('a');
    d1.setAttribute('href','#');
    d1.innerHTML = 'Account'
    document.getElementById("dropdown-c").appendChild(d1);

    const d7 = document.createElement('a');
    d7.setAttribute('onclick','switcht()');
    d7.innerHTML = 'Change Theme'
    document.getElementById("dropdown-c").appendChild(d7);

    const d2 = document.createElement('a');
    d2.setAttribute('onclick','login()');
    d2.innerHTML = 'Log out'
    document.getElementById("dropdown-c").appendChild(d2);

    const p4 = document.createElement('p');
    p4.innerHTML = 'DIVD';
    p4.style.float = 'right';
    document.getElementById("topnav").appendChild(p4);



    const drop2 = document.createElement('div');
    drop2.setAttribute('id','dropdown2');
    drop2.setAttribute('class','dropdown');
    document.getElementById("topnav").appendChild(drop2);

    const dbut2 = document.createElement('button');
    dbut2.setAttribute('class','dropbtn');
    dbut2.innerHTML = 'FS1';
    document.getElementById("dropdown2").appendChild(dbut2);

    const cont2 = document.createElement('div');
    cont2.setAttribute('id','dropdown2-c');
    cont2.setAttribute('class','dropdown-content');
    document.getElementById("dropdown2").appendChild(cont2);

    const d3 = document.createElement('a');
    d3.setAttribute('href','#');
    d3.innerHTML = 'FS2'
    document.getElementById("dropdown2-c").appendChild(d3);

    const d4 = document.createElement('a');
    d4.innerHTML = 'FS3'
    document.getElementById("dropdown2-c").appendChild(d4);

}

function account(){
    // Removes existing elements from the page, and create navbar
    refresh()
    // Adds Previous page links
    const links = document.createElement('p');
    links.setAttribute('id','links')
    links.innerHTML = '<a href="#" onclick="home()">Home</a> / <a href="#">Data Management</a>'
    document.body.appendChild(links);

    // Creates box to house rest of elements
    const box = document.createElement('div');
    box.setAttribute('class','box1')
    box.setAttribute('id','box1')
    document.body.appendChild(box);
    //Adds header
    const head = document.createElement('h3');
    head.innerHTML = 'Account Details - ARMB/ARQB/ARAB - 01-Account Base Segment - QUERY'
    document.getElementById("box1").appendChild(head);
    // Breaks in page
    document.getElementById("box1").appendChild(document.createElement("hr"));

    //labels for each of the boxes
    btitle = ['Business Unit(Req only for ADD)','Account Number','Product(Req only for ADD)',
        'BillingAccount(Req only for ADD)','Digital Card Indicator(Req only for ADD)','Short Name','Customer Number',
        'Alternate Customer Number Flag','Alternate Customer Number','User Account Number',
        'Internal Status','Charge Off Status','Block Code 1','Block Code 2','Billing Cycle','Statement Flag',
        'Statement Frequency','Return Mail Counter','Return Mail User','Return Mail Date','Permanent Collector',
        'Collateral Code','Owner Flag','Employee Code','Letter Request','Previous Bal Subjected to OVLM',
        'Colateral Card Request','Restructure Flag','Statement Reprint Flag','Flex Billing Flag','Application Date',
        'Date Account Opened']
    //Creates an index for whether each box should be an input or a dropdown (i:input, d:dropdown)
    btype = ['i','i','i','i','d','i','i','i','i','i','d','i','i','i','i','d','i','i','i','i','i','i','i','i','i','i','d','d','d','i','i','i']
    option = [['Physical Plastic Only (Default) (0)','Digital Card Only (1) ','Both Physical Plastic & Digital (2)']]
    
    //scope
    j=0
    for(let i =0; i<btitle.length;i++){
        //creates a break after 5th box
        if (i == 5){
            const br = document.createElement('br')
            br.setAttribute('style','clear:both;')
            document.getElementById("box1").appendChild(br);
            const hr = document.createElement('hr')
            hr.setAttribute('class','bhr')
            document.getElementById("box1").appendChild(hr);
        }
        //if the box is an Input, create input box
        if (btype[i] == 'i'){
            let test = new Input(btitle[i])
        //if the box is a dropdown, create dropdown box
        }else{
            let test = new Dropdown(btitle[i],option[j])
        }

    }
    
    



    
    const buttons = document.createElement('div');
    buttons.setAttribute('class','buttons1')
    buttons.setAttribute('id','buttons1')
    document.body.appendChild(buttons);

    bname = ['Maintain','Next Group','List Cards','Payroll Quote','Delinquency Adj','Statement History',
    'Name Addr Detail','TRAN History','Account Inquirey','Exit']


    for (let i = 0;i<bname.length;i++){
        const temp = document.createElement("input");
        temp.setAttribute('value',bname[i]);
        temp.setAttribute('type','button')
        document.getElementById("buttons1").appendChild(temp);

    }

    const foot = document.createElement("footer");
    foot.setAttribute("id","footer");
    document.body.appendChild(foot);

    document.getElementById("footer").appendChild(document.createElement("hr"));

    const p3 = document.createElement("p");
    p3.innerHTML = ("© 2022 Fiserv, Inc All Rights Reserved. |<a href='#'>Privacy Notice</a><br>Build version: 1.0")
    document.getElementById("footer").appendChild(p3);

    





}


function switcht(){
        $('#body').toggleClass('dark')
}


$(document).ready(function(){
    $("#but1").click(function(){
        var id = $('#cid').val()
        var name = $('#uname').val()
        var pass = $('#pass').val()
        $.ajax({
    type: 'GET',
    url: 'text.json',
    success: function(data){
        for(let i = 0; i<data.length;i++){
            console.log('cheese')
            if(data[i].name == name && data[i].id == id && data[i].password == pass){
                console.log('cheese')
                home()
            }else{
                let error = document.getElementById('p1')
                error.innerHTML = 'Error: Please enter vaild FirstVision credentials'
                error.style.color = 'red'
            }
        }
    }
        })


        event.preventDefault();
    })})

