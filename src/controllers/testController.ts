import { TestService } from "../services/testService";

class HelloController{

    public static sayHello(req:any,res:any){
        return res.send(new TestService().helloFunction());
    }
}

export {HelloController};