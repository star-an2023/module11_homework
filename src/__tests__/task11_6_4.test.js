//import { getMonth } from "./task11_6_4.js";
const getMonth=require("../utils/task11_6_4")

describe("test",()=>{
    //unit
    it ("1 - janruary",()=>{ expect(getMonth(1)).toBe("january")});
    it ("2 - janruary",()=>{ expect(getMonth(2)).toBe("february")});
    it ("3 - janruary",()=>{ expect(getMonth(3)).toBe("march")});
    //corner
    it ("nole ",()=>{ expect(getMonth(0)).toBe("number not valid")});
    it ("13 month",()=>{ expect(getMonth(13)).toBe("number not valid")});
});