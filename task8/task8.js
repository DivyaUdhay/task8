//1.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
        }  
        }
    const beast =new Movie("beast","Sun pictures",3);
    const KGF = new Movie("KGF","Hombale",4);
    console.log(beast);
    console.log(KGF);


    class Movie1{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
            this.rating="PG";
        }  
        }
    const beast1 =new Movie1("beast","Sun pictures",);
    const KGF1 = new Movie1("KGF","Hombale",);
    console.log(beast1);
    console.log(KGF1);
   
    class Movie2{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
                   }  
    
        getpg(){
            if(this.rating="PG"){
                return `pg rating movies:${this.title}`;
            }
        }
        }
    const beast2 =new Movie1("beast","Sun pictures","PG");
    const KGF2 = new Movie1("KGF","Hombale",);
    const mov = new Movie("Casino Royale","EonProductions","PG-13");
   
    console.log(mov);

//2.Write a “person” class to hold all the details.

    class Person{
        constructor(name,age,phone,address){
            this.name=name;
            this.age=age;
            this.phone=phone;
            this.address=address;
      
        }  
        }
    const bharathi =new Person("Bharathi",30,8945632578,"chennai");
    console.log(bharathi);
    
//4.write a class to calculate uber price.

    class Uberprice{
        constructor(customername,phone,startlocation,endlocation,basefees){
            this.customername=customername;
            this.phone=phone;
            this.startlocation=startlocation;
            this.endlocation=endlocation;
            this.basefees=basefees;
        }  
        getPrice(){
            return `your travelling cost is:${this.basefees}`;
        
        }
        killometer(km){
            this.basefees =this.basefees * km;
            return this.getPrice();
        }
    
        }
    const bharath =new Uberprice("Bharath",8945632578,"chennai","coimbatore",10);
    console.log(bharath.killometer(507));
