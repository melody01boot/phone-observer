//observer pattern implementation

class observer{
    update(phonenumber){
        throw new Error("update method must be implemented by subclass");
    }
}

//first observer- prints the phone number

class printobserver extends observer{
    update(phonenumber) {
        logmessage(phonenumber);

    }
}


//second observer - prints"Now Dialing"

class messageobserver extends observer{
    update(phonenumber) {
        logmessage(`Now Dialing ${
            phonenumber
        }`)
    }
}

//Telephone Class (subject)
class Telephone{
    constructor() {
        this.phonenumbers=[];
        this.observers=[];
    }
}

addobserver(observer) 
    this.observer.push(observer);


removeobserver(observer) 
    this.observers = 
    this.observers.filter(obs => obs !==observer);


notifyobservers(phonenumber) 

    this.observbers.forEach(observer=> observer.update(phonenumber));


addphonenumber(phonenumber) 
    if(! this.phonenumbers.includes(phonenumber)) {
        this.phonenumbers.push(phoneNumber);
        updatephonelist();

    
    }
    dialphonenumber(phoneNumber) 
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyobservers(phoneNumber);
        } else {
            logmessage("phone number not found.");
        }
    


    //UI Handling
    const telephone = new telephone();

    //Adding observers
    const printobserver = new
    printobserver();
    const messageobserver = new
    messageobserver();

    telephone.addobserver(printobserver);
    telephone.addobserver(messageobserver);

    function addphonenumber() {
        const phoneNumber = 
        document.getElementById("phoneNumberinput").value = "";

    }

    function dialphonenumber() {
        const phoneNumber = 
        document.getElementById("phoneNumberInput").value;
        if(phoneNumber)
   {
    telephone.dialphonenumber(phoneNumber);

    document.getElementById("phoneNumberInput").value = "";

   } }

   function updatephonelist() {
    const phonelist = 
    document.getElementById("phonelist"); 
    phonelist.innerHTML = "";

    telephone.phoneNumbers.forEach(number => {
        const li = 
        document.createElement("li");
        li.textContent = number;
        phonelist.appendChild(li);

    })
   }

   function logmessage(message) {
    const logDiv = 
    document.getElementById("log");
    const p = 
    document.createElement("p");
    p.textcontent = message;
    logDiv.appendChild(p);
   }
   