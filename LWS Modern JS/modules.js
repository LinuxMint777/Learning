// import & export named.
import {pi, txt} from './moduleExport.js' // named import 
import * as all from './moduleExport.js' // named import use alias.
console.log(pi, txt)
console.log(all.txt)


// import & export default.
import jahid, {fullName} from './moduleExport.js' // default import && named import

jahid.myFunc()
jahid.orderProcess('Nahid Hasan')
console.log(fullName)