import gokv from "https://deno.land/x/gokv@0.0.12/mod.ts";
gokv.config({ token: "0h0l3e392d722v1v0e6u3g615g1m61405m6y51304l1a5r5e" })

var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var X = se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))]
 
var ee = ["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
var E = ee[Math.floor(Math.random() * (ee.length - 1))] + ee[Math.floor(Math.random() * (ee.length - 1))] + ee[Math.floor(Math.random() * (ee.length - 1))]

  



export default async function go(re){

const kv = gokv.DurableKV({ namespace: "xxx" })

    //var rr = re.clone()
       // rr = await rr.json()
       // console.log(rr)

//console.log(re)

//console.log([X,E])
//await kv.put(X, E)

//console.log(re)
return await kv.list()

  //const url = new URL(req.url);

//   try {
//     const session = await gokv.Session<{ username: string }>(req, {
//       namespace: "xxx",
//     });
//     switch (url.pathname) {
//       case "/login":
//         const form = await req.formData();
//         const username = form.get("username");
//         const password = form.get("password");
//         if (checkPassword(username, password)) {
//           await session.update({ username });
//           return new Response(null, {
//             status: 302,
//             headers: { "location": "/", "set-cookie": session.cookie },
//           });
//         }
//         return new Response("Invalid username or password", { status: 400 });
//       case "/logout":
//         await session.end();
//         return new Response(null, {
//           status: 302,
//           headers: { "location": "/", "set-cookie": session.cookie },
//         });
//       default:
//         if (session.store) {
//           return new Response(`Logined as ${session.store.username}`);
//         }
//         return new Response("Please login");
//     }
//   } catch (e) {
//     return new Response(e.message, { status: 500 });
//   }
}

