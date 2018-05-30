let member = "John SPARTAN"
let id = 0;
let game = false;
/**
 * 
 * @param {String} str 
 */
const getIndexOf = (str) => {
    return str.indexOf(' ');
}
/**
 * 
 * @param {String} str 
 */
const getLastWord = (str) => {
    console.log(str.slice(getIndexOf(str)));
}
/**
 * 
 * @param {*} variable 
 * @param {String} oldValue
 * @param {String} newValue 
 */
const replaceWord = (variable, oldValue, newValue) => {
    console.log(variable.replace(oldValue, newValue));
}

getLastWord(member);
replaceWord(member, 'SPARTAN', 'Martinez');

class MembreGroupe {
    constructor(id, name, birthday, loisir, life, attack, def) {
        this.id = id;
        this.name = name;
        this.loisir = loisir;
        this.birthday = birthday;
        this.age = this.setAge;
        this.life = life;
        this.maxLife = life
        this.attack = attack;
        this.def = def;
        this.higthScore = 0;
    }
    get information() {
        console.log('[' + this.id + "] - Prénom : " + this.name + " Date de naissance : " + this.birthday + ", loisir : " + this.loisir + ".");
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getLife() {
        return this.life;
    }
    get getMaxLife() {
        return this.maxLife;
    }
    get getAttack() {
        return this.attack;
    }
    get getDef() {
        return this.def;
    }
    set updateLife(value) {
        this.life -= value;
    }
    get setAge() {
        let date = this.birthday.split("/");
        let nowDate = new Date();
        let birthdayDate = new Date();
        let calculYear = 365 * 24 * 60 * 60 * 1000;
        birthdayDate.setFullYear(date[2]);
        birthdayDate.setMonth(date[1]);
        birthdayDate.setDate(date[0]);

        return Math.floor((nowDate - birthdayDate) / calculYear);
    }
    get getLoisir() {
        let strLoisir = "";
        let i;
        for (i = 0; i < this.loisir.length; i++) {
            strLoisir += " " + this.loisir[i];
        }
        return strLoisir;
    }
    static attack(p1, p2) {
        if (Math.random() >= 0.5) {
            let damage = p1.getAttack - p2.getDef
            console.log(p1.getName + " attack " + p2.getName + " et a perdu " + damage + " sur " + p2.getMaxLife);
            p2.updateLife = damage;
            if (p2.getLife <= 0) {
                console.warn(p1.getName + " a gagné");
            } else {
                MembreGroupe.attack(p2, p1);
            }
        } else {
            console.log(p1.getName + " a raté son attaque.");
            MembreGroupe.attack(p2, p1);
        }
    }
    affiche() {
        let parent = createBoxCompenent(this.getName);
        let i = 0;
        for (i; i < Object.keys(this).length; i++) {
            createCompenent(Object.keys(this)[i], Object.values(this)[i], parent);
        }

    }
    menu(parentElement) {
        let childListCompenent = document.createElement('li');
        childListCompenent.setAttribute('id', this.getName);

        let childListText = document.createTextNode(this.getName);

        childListCompenent.appendChild(childListText);
        parentElement.appendChild(childListCompenent);

        childListCompenent.addEventListener('click', (e) => {
            clearElement('#user-info');
            this.affiche();
            resetGame(10);
        })
    }

}

const Viktor = new MembreGroupe(id += 1, 'Vicktor', "16/03/1998", ['informatique', 'sortir'], 10, 5, 2);
const Alan = new MembreGroupe(id += 1, 'Alan', "10/02/1998", ['Jeux', 'Programation'], 4, 7, 1);
const Ryad = new MembreGroupe(id += 1, 'Ryad', "20/07/1994", ['Les filles', 'Sa copine'], 10, 3, 5);
Viktor.information;
Alan.information;
Ryad.information;

let allmembres = [Viktor, Alan, Ryad];
console.log(Alan.getAge);

const createBoxCompenent = (idCompenent) => {
    let parent = document.querySelector('#user-info');
    let compenent = document.createElement('div');
    compenent.setAttribute('id', idCompenent);
    parent.appendChild(compenent);
    return compenent;
}

const createCompenent = (nameCompenent, valueCompenent, parentCompenent) => {
    let compenent = document.createElement('div');
    compenent.setAttribute('class', nameCompenent);
    let childLabelCompenent = document.createElement('span');
    childLabelCompenent.setAttribute('class', 'label ' + nameCompenent);
    let childLabelNameValue = document.createTextNode(nameCompenent + " : ");

    let childValueCompenent = document.createElement('span');
    childValueCompenent.setAttribute('class', 'value ' + nameCompenent);
    let childValue = document.createTextNode(valueCompenent);

    childLabelCompenent.appendChild(childLabelNameValue);
    compenent.appendChild(childLabelCompenent);
    childValueCompenent.appendChild(childValue);
    compenent.appendChild(childValueCompenent);
    parentCompenent.appendChild(compenent);
}

const createMenuCompenant = (arrayMembers) => {
    let parentMenuCompenent = document.querySelector('#exo-menu');
    let parentListMenuCompenent = document.createElement('ul');
    arrayMembers.forEach(element => {
        element.menu(parentListMenuCompenent);
    });
    parentMenuCompenent.appendChild(parentListMenuCompenent);
}

const clearElement = (element) => {
    document.querySelector(element).innerHTML = '';
}

createMenuCompenant(allmembres);
(()=>{
    let parent = document.querySelector("main");
    let canvasCompenent = document.createElement('canvas');
    console.log(parent.clientHeight);
    canvasCompenent.setAttribute("id","game");
    canvasCompenent.setAttribute('width',parent.clientWidth);
    canvasCompenent.setAttribute('height',parent.clientHeight);
    canvasCompenent.setAttribute('style','background-color:black;');

    parent.appendChild(canvasCompenent);
})();