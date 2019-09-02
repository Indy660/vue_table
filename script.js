
new Vue({
    el: '#example-2',
    data: {
        userList: [
            { id: 1, name: 'Admin', login: 'Admin', password:"qwe"},
            { id: 2, name: 'TestUser', login: 'test', password:"123"},
            { id: 3, name: 'Dima', login: 'DimaK', password:"12345"},
            { id: 4, name: 'Sacha', login: 'gundi5', password:"BF236BF"},
            { id: 5, name: 'Дима', login: 'Indy660', password: '123' }
        ],
        sortColumn: 'id',
        lengthArray:null,
        nameUser: null,
        loginUser: null,
        passwordUser: null,
    },
    created: function(){
        this.lengthArray = this.userList.length
    },
    computed:{
        userSortList: function(){
            const sortColumn = this.sortColumn;
            let k = 1;
            return this.userList.slice().sort((a, b)=> {
                if (a[sortColumn] < b[sortColumn]) {
                    return -1*k
                } else {return k}
            });
        }
    },
    methods:{
        pushing: function () {
             let newUser={id:++this.lengthArray, name:this.nameUser, login:this.loginUser, password:this.passwordUser};
            this.userList.push(newUser);
            this.nameUser="";
            this.loginUser="";
            this.passwordUser=""
        },
        deleting: function (login) {
            let user=this.findThisUser(this.userList, login);
            let trueIndex= this.userList.indexOf(user);
            this.userList.splice(trueIndex, 1)
        },
        findThisUser: function(list, trueLogin) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].login === trueLogin) {
                    return list[i]
                }
            }
            return false
        },
        sortSomething: function (thing, array, k) {
            array.sort(function (a, b) {
                if (a[thing] < b[thing]) {
                    return -1*k
                } else {return k}
            })
        },
        sort: function () {
            const thing = $(this).data('index');
            let directionSort= Number(-1 || 1);
            this.sortSomething(thing, this.userList, directionSort)
        }
    }
})
