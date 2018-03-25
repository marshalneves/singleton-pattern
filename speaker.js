class Speaker {

    constructor(myName) {
        this.myName = myName;
        this.numberOfInstances = 0;

    }

    incrementNumberOfInstances() {
        this.numberOfInstances += 1;
    }

    say(any) {

        console.log(any);
    }

    sayName() {
        console.log('Hello, my name is ' + this.myName + '. I had ' + this.numberOfInstances + ' instance(s).');
    }

}

const S = new Speaker('Jhon');
S.incrementNumberOfInstances();

exports.speaker = S;